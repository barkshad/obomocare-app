import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { doc, onSnapshot, updateDoc, setDoc } from 'firebase/firestore';
import { db } from '../config/firebase';
import { DEFAULT_CONTENT, FIREBASE_CONFIG } from '../config/constants';
import { SiteContent, ContentContextType, Program } from '../config/types';

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export const useContent = () => {
  const context = useContext(ContentContext);
  if (!context) throw new Error('useContent must be used within a ContentProvider');
  return context;
};

const DEFAULT_GALLERY = [
  {
    id: 'g1',
    url: 'https://images.unsplash.com/photo-1504384338696-612e3d0c9d55?w=800&h=800&fit=crop',
    publicId: 'demo/1',
    type: 'image',
    category: 'General',
    createdAt: new Date().toISOString()
  },
  {
    id: 'g2',
    url: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&h=800&fit=crop',
    publicId: 'demo/2',
    type: 'image',
    category: 'Education',
    createdAt: new Date().toISOString()
  },
  {
    id: 'g3',
    url: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800&h=800&fit=crop',
    publicId: 'demo/3',
    type: 'image',
    category: 'Community',
    createdAt: new Date().toISOString()
  }
];

const INITIAL_CONTENT: SiteContent = {
  ...DEFAULT_CONTENT,
  gallery: DEFAULT_GALLERY as any
};

const loadFromLocalStorage = (): SiteContent => {
  if (typeof window === 'undefined') return INITIAL_CONTENT;
  
  const localData = localStorage.getItem('obomo_content');
  if (localData) {
    try {
      const parsedData = JSON.parse(localData);
      const mergedLocal = {
        ...DEFAULT_CONTENT,
        ...parsedData,
        hero: { ...DEFAULT_CONTENT.hero, ...(parsedData.hero || {}) },
        homePage: { ...DEFAULT_CONTENT.homePage, ...(parsedData.homePage || {}) },
        about: { ...DEFAULT_CONTENT.about, ...(parsedData.about || {}) },
        contact: { ...DEFAULT_CONTENT.contact, ...(parsedData.contact || {}) },
        programs: parsedData.programs?.length ? parsedData.programs : DEFAULT_CONTENT.programs,
        stories: parsedData.stories?.length ? parsedData.stories : DEFAULT_CONTENT.stories,
        children: parsedData.children?.length ? parsedData.children : DEFAULT_CONTENT.children,
        gallery: parsedData.gallery?.length ? parsedData.gallery : DEFAULT_CONTENT.gallery,
      };
      
      if (Array.isArray(mergedLocal.gallery) && mergedLocal.gallery.length > 0 && typeof mergedLocal.gallery[0] === 'string') {
           mergedLocal.gallery = (mergedLocal.gallery as unknown as string[]).map((url: string, i: number) => ({
             id: `legacy-${i}`,
             url,
             publicId: 'legacy',
             type: 'image',
             category: 'General',
             createdAt: new Date().toISOString()
           }));
      }

      return mergedLocal as SiteContent;
    } catch (e) {
      console.error("Error parsing local content", e);
    }
  }
  return INITIAL_CONTENT;
};

export const ContentProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [content, setContent] = useState<SiteContent>(loadFromLocalStorage);
  const [loading, setLoading] = useState(true);

  const isDemoMode = !FIREBASE_CONFIG.apiKey || FIREBASE_CONFIG.apiKey === "YOUR_API_KEY_HERE";

useEffect(() => {
  if (isDemoMode) {
    console.log("No valid Firebase config detected. Running in offline mode using LocalStorage.");
    setLoading(false);
    return;
  }

  const docRef = doc(db, 'website_content', 'main_v1');

  const timeoutId = setTimeout(() => {
    console.warn("Firestore connection timeout — loading from local data.");
    setLoading(false);
  }, 5000);

  const unsubscribe = onSnapshot(docRef, (docSnap: any) => {
    clearTimeout(timeoutId);
      if (docSnap.exists()) {
        const data = docSnap.data();
        
        const mergedData: SiteContent = {
            ...DEFAULT_CONTENT,
            ...data,
            hero: { ...DEFAULT_CONTENT.hero, ...(data.hero || {}) },
            homePage: { ...DEFAULT_CONTENT.homePage, ...(data.homePage || {}) },
            about: { ...DEFAULT_CONTENT.about, ...(data.about || {}) },
            contact: { ...DEFAULT_CONTENT.contact, ...(data.contact || {}) },
            programs: data.programs?.length ? data.programs : DEFAULT_CONTENT.programs,
            stories: data.stories?.length ? data.stories : DEFAULT_CONTENT.stories,
            children: data.children?.length ? data.children : DEFAULT_CONTENT.children,
            gallery: data.gallery?.length ? data.gallery : DEFAULT_CONTENT.gallery,
        };

        if (Array.isArray(mergedData.gallery) && mergedData.gallery.length > 0 && typeof mergedData.gallery[0] === 'string') {
           mergedData.gallery = (mergedData.gallery as unknown as string[]).map((url: string, i: number) => ({
             id: `legacy-${i}`,
             url,
             publicId: 'legacy',
             type: 'image',
             category: 'General',
             createdAt: new Date().toISOString()
           }));
        }
        setContent(mergedData as SiteContent);
      } else {
        console.log("Document does not exist in Firestore. Using defaults.");
      }
      setLoading(false);
    }, (error: any) => {
      console.warn("Firestore connection issue (falling back to offline mode):", error.message);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [isDemoMode]);

  const updateContent = async (section: keyof SiteContent, data: any) => {
    const newContent = { ...content, [section]: data };
    
    setContent(newContent);
    localStorage.setItem('obomo_content', JSON.stringify(newContent));

    if (isDemoMode) {
      return;
    }

    try {
        const docRef = doc(db, 'website_content', 'main_v1');
        await updateDoc(docRef, { [section]: data });
    } catch (e: any) {
        if (e.code === 'not-found') {
           const docRef = doc(db, 'website_content', 'main_v1');
           await setDoc(docRef, { [section]: data }, { merge: true });
        } else {
           console.error("Failed to update content in Firestore", e);
           console.log("Changes saved locally only (Database connection failed).");
        }
    }
  };

  const updateProgram = async (updatedProgram: Program) => {
    const newPrograms = content.programs.map(p => p.id === updatedProgram.id ? updatedProgram : p);
    await updateContent('programs', newPrograms);
  };

  const addProgram = async (program: Program) => {
    const newPrograms = [...content.programs, program];
    await updateContent('programs', newPrograms);
  };

  const deleteProgram = async (id: string) => {
    const newPrograms = content.programs.filter(p => p.id !== id);
    await updateContent('programs', newPrograms);
  };

  return (
    <ContentContext.Provider value={{ content, loading, updateContent, updateProgram, addProgram, deleteProgram }}>
      {children}
    </ContentContext.Provider>
  );
};

