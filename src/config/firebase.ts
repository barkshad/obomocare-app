import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { FIREBASE_CONFIG } from './constants';

let app: any = null;
let auth: any = null;
let db: any = null;

try {
  app = initializeApp(FIREBASE_CONFIG);
  auth = getAuth(app);
  db = getFirestore(app);
} catch (e) {
  console.warn('Firebase init failed, running in offline mode:', e);
}

export { auth, db };
export let analytics: any = null;
try {
  if (typeof window !== 'undefined' && app) {
    import('firebase/analytics').then(({ getAnalytics }) => {
      analytics = getAnalytics(app);
    }).catch(() => {});
  }
} catch {}

export default app;
