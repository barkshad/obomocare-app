import { SiteContent } from './types';

export const FIREBASE_CONFIG = {
  apiKey: "AIzaSyCxQ7pKCdlJgtH1cxfM5QChgtULqRHmx_s",
  authDomain: "ksas-33f7b.firebaseapp.com",
  databaseURL: "https://ksas-33f7b-default-rtdb.firebaseio.com",
  projectId: "ksas-33f7b",
  storageBucket: "ksas-33f7b.firebasestorage.app",
  messagingSenderId: "485938520817",
  appId: "1:485938520817:web:b4553e8e403dd756ffff50",
  measurementId: "G-1YWG6SZC0F"
};

export const CLOUDINARY_CLOUD_NAME = "dilrcexxe";
export const CLOUDINARY_UPLOAD_PRESET = "MingleKe";

export const DEFAULT_CONTENT: SiteContent = {
  theme: {
    primaryColor: "#0A0A1A"
  },
  hero: {
    headline: "Delivering care. Restoring dignity.",
    subheadline: "We are a registered CBO in Kisii and Nyamira. Food. Transport. Personal care. Companionship. The things that keep people alive and human — we bring them to the households formal systems keep missing.",
    heroImage: "https://res.cloudinary.com/dilrcexxe/image/upload/obomo/pexels-hero.jpg"
  },
  homePage: {
    stats: [
      { id: "st1", value: 2000, suffix: "+", label: "Families served since 2020" },
      { id: "st2", value: 5, suffix: " yrs", label: "Community-funded operation" },
      { id: "st3", value: 40, suffix: "", label: "Volunteer caregivers" }
    ],
    aboutPreviewTitle: "Who we are",
    aboutPreviewHeadline: "A community that refuses to leave its most vulnerable behind",
    programsTitle: "Four pillars. One integrated model.",
    programsSubtitle: "We don't choose between food or healthcare or dignity. The needs don't arrive separately — and neither do our interventions."
  },
  about: {
    mission: "To provide integrated community support through food assistance, healthcare access, transportation facilitation, volunteer caregiving, companionship, community partnerships, and sustainable development initiatives that improve the lives of vulnerable households.",
    vision: "A community where every vulnerable person lives with dignity, receives compassionate care, has access to essential services, and belongs to a supportive and inclusive society.",
    founderStory: "When the lockdowns hit in March 2020, most of the country was watching Covid numbers. We were watching our neighbour Mama Kerubo, who is 76 and lives alone. Her children work in Nairobi. They could not reach her. She had run out of food three days before we found out. Not because nobody cared — because nobody knew. We pooled money from our own pockets. Bought maize flour, beans, cooking oil, soap. Started walking door to door in our own village. That first week we found seven more households in the same situation. Someone said the word obomo, which in our language means the warm, nurturing feeling a mother gives her child. It stuck. Five years later, we have served over two thousand families. We have never taken international funding. We are still neighbours taking care of our own.",
    founderImage: "https://res.cloudinary.com/dilrcexxe/image/upload/obomo/pexels-founder.jpg",
    values: [
      "Dignity. We do not take photos of beneficiaries without asking. We do not share identifying details in reports. When someone cannot bathe alone, we help them in privacy. Dignity is not a word on a poster — it is a thousand small decisions made right every day.",
      "Community. We are not outsiders bringing solutions to a problem we studied from afar. We live in these villages. Our caregivers are drawn from the communities they serve. When a household falls through the cracks, it is their neighbour who notices first.",
      "Accountability. We publish quarterly financial reports. Every donor can see exactly where their money went. Our books are audited annually by an independent auditor. We do not deduct admin costs from donations — we raise that separately."
    ],
    homePreviewImage1: "https://res.cloudinary.com/dilrcexxe/image/upload/obomo/pexels-village.jpg",
    homePreviewImage2: "https://res.cloudinary.com/dilrcexxe/image/upload/obomo/pexels-community.jpg"
  },
  getInvolved: {
    introTitle: "Get Involved",
    introText: "Cash, supplies, or your time. Pick what fits. Everything reaches a household that needs it.",
    financialText: "Every shilling goes to beneficiaries. Nothing is deducted for admin. We publish quarterly financial reports — any donor can see them. That is not a promise. That is how we operate.",
    suppliesText: "We need food, sanitary towels, soap, clothing, and mobility aids. A bag of maize flour feeds a household for two weeks. A bar of soap stops a skin infection. Drop-off points in Kisii and Nyamira.",
    volunteerText: "Are you a trained caregiver, a nurse, a community health volunteer, or someone who just wants to help? We train and deploy 40 caregivers across the two counties. You get a stipend, transport money, and a clear career path into county health roles."
  },
  contact: {
    address: "Kisii and Nyamira Counties, Gusii Region, Kenya",
    email: "obomocare@gmail.com",
    phone: "+254 700 000 000",
    whatsapp: "+254 712 146179",
    bankDetails: `Equity Bank Kenya
Account Name: OBOMOCARE Community Based Organisation
Account Number: 0123456789
Branch: Kisii
SWIFT Code: EQBLKENA
M-Pesa Paybill: 123456, Account: Donation`,
    mpesa: "Paybill: 123456, Account: Donation",
    socials: {
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      twitter: "",
      linkedin: ""
    }
  },
  programs: [
    {
      id: "p1",
      title: "Food Support",
      description: "A food basket every two weeks. Maize flour, beans, cooking oil, salt, soap. For elderly beneficiaries who cannot cook, we coordinate meals. We source through supermarkets, local businesses, and church networks.",
      image: "https://res.cloudinary.com/dilrcexxe/image/upload/obomo/pexels-food.jpg",
      stats: "2,000+ Families Served"
    },
    {
      id: "p2",
      title: "Transport Facilitation",
      description: "We partner with boda boda associations in Kisii and Nyamira. Beneficiaries get subsidised rides to clinics, hospitals, and pharmacy pickups. A missed appointment means failed treatment. We make sure they get there.",
      image: "https://res.cloudinary.com/dilrcexxe/image/upload/obomo/pexels-transport.jpg",
      stats: "Healthcare Access"
    },
    {
      id: "p3",
      title: "Personal Care and Dignity",
      description: "Trained caregivers visit homes to help with bathing, dressing, grooming, wound care. We document every visit so we catch deterioration early. Dignity is not a luxury. It is the baseline.",
      image: "https://res.cloudinary.com/dilrcexxe/image/upload/obomo/pexels-care.jpg",
      stats: "40 Active Caregivers"
    },
    {
      id: "p4",
      title: "Companionship and Inclusion",
      description: "We sit and talk. We play games. We accompany people to community events. Isolation kills — it accelerates cognitive decline and deepens depression. We have watched people come back to life when someone shows up regularly.",
      image: "https://res.cloudinary.com/dilrcexxe/image/upload/obomo/pexels-companion.jpg",
      stats: "Community Resilience"
    }
  ],
  stories: [
    {
      id: "s1",
      title: "Started during the lockdowns",
      author: "OBOMOCARE",
      date: "2020-06-15",
      excerpt: "We watched our elderly neighbours struggle while the rest of the country was focused on Covid statistics. So we pooled money and started walking.",
      content: "In March 2020, the lockdowns hit. Most of the country was watching the daily case numbers on television. We were watching Mama Kerubo, our neighbour, who had not eaten in three days. Her children work in Nairobi and could not reach her. The formal systems — what formal systems? We pooled personal money that first week. Bought maize flour, beans, soap. Started walking door to door. We found seven more households in the same situation within that first week. The word obomo means nurturing warmth in our language. It is still what drives us five years later.",
      image: "https://res.cloudinary.com/dilrcexxe/image/upload/obomo/pexels-story-1.jpg",
      category: "Success Story"
    },
    {
      id: "s2",
      title: "Five Years, Zero International Funding",
      author: "OBOMOCARE",
      date: "2025-01-01",
      excerpt: "Not one dollar of foreign funding. Two thousand families served. Every shilling raised locally.",
      content: "Five years, and we have never received international funding. Personal contributions. Supermarket donations. Church offerings. Harambee. We have served over two thousand families this way. We have 22 active caregivers and 18 community health volunteers linked to our network. Now we are ready to scale, but we will not compromise how we operate.",
      image: "https://res.cloudinary.com/dilrcexxe/image/upload/obomo/pexels-story-2.jpg",
      category: "Community"
    },
    {
      id: "s3",
      title: "Building a Caregiver Corps",
      author: "OBOMOCARE",
      date: "2025-03-01",
      excerpt: "Forty volunteers trained to provide professional home-based care. A stipend, transport reimbursement, and a career pathway into county health.",
      content: "Forty community volunteers now deliver home-based care across Kisii and Nyamira. They train in personal care techniques, first aid, CPR, waste management, basic mental health support, and safeguarding. It is not just volunteering — it is a career pathway. Skills gained qualify volunteers for community health assistant roles within the county government system. They get a monthly stipend, transport money, peer support, and formal recognition.",
      image: "https://res.cloudinary.com/dilrcexxe/image/upload/obomo/pexels-story-3.jpg",
      category: "Education"
    }
  ],
  children: [
    {
      id: "c1",
      name: "Elderly Support Programme",
      age: 0,
      dream: "Dignity in Later Life",
      bio: "Elderly persons living alone. We bring food, help them bathe, keep them company, and get them to the clinic. Every visit documented so we catch problems before they become emergencies.",
      image: "https://res.cloudinary.com/dilrcexxe/image/upload/obomo/pexels-child-elderly.jpg",
      needsSponsorship: true
    },
    {
      id: "c2",
      name: "Household Care Programme",
      age: 0,
      dream: "Complete Household Support",
      bio: "Households headed by orphaned children or persons with disabilities. Food baskets every two weeks, hygiene supplies, and regular care visits. We do not let them fall through the cracks.",
      image: "https://res.cloudinary.com/dilrcexxe/image/upload/obomo/pexels-child-household.jpg",
      needsSponsorship: true
    },
    {
      id: "c3",
      name: "Volunteer Caregiver Corps",
      age: 0,
      dream: "Professional Community Care",
      bio: "40 trained caregivers. They bathe, dress, groom, treat wounds, and keep people company. Training covers personal care, first aid, and basic mental health. A stipend, transport, and a career path.",
      image: "https://res.cloudinary.com/dilrcexxe/image/upload/obomo/pexels-child-volunteer.jpg",
      needsSponsorship: true
    }
  ],
  gallery: [
    {
      id: "g1",
      url: "https://res.cloudinary.com/dilrcexxe/image/upload/obomo/pexels-gallery-1.jpg",
      publicId: "obomo/pexels-gallery-1",
      type: "image",
      category: "General",
      createdAt: "2024-01-01T00:00:00.000Z"
    },
    {
      id: "g2",
      url: "https://res.cloudinary.com/dilrcexxe/image/upload/obomo/pexels-gallery-2.jpg",
      publicId: "obomo/pexels-gallery-2",
      type: "image",
      category: "Community",
      createdAt: "2024-01-02T00:00:00.000Z"
    },
    {
      id: "g3",
      url: "https://res.cloudinary.com/dilrcexxe/image/upload/obomo/pexels-gallery-3.jpg",
      publicId: "obomo/pexels-gallery-3",
      type: "image",
      category: "Care",
      createdAt: "2024-01-03T00:00:00.000Z"
    },
    {
      id: "g4",
      url: "https://res.cloudinary.com/dilrcexxe/image/upload/obomo/pexels-gallery-4.jpg",
      publicId: "obomo/pexels-gallery-4",
      type: "image",
      category: "General",
      createdAt: "2024-01-04T00:00:00.000Z"
    },
    {
      id: "g5",
      url: "https://res.cloudinary.com/dilrcexxe/image/upload/obomo/pexels-gallery-5.jpg",
      publicId: "obomo/pexels-gallery-5",
      type: "image",
      category: "Community",
      createdAt: "2024-01-05T00:00:00.000Z"
    },
    {
      id: "g6",
      url: "https://res.cloudinary.com/dilrcexxe/image/upload/obomo/pexels-gallery-6.jpg",
      publicId: "obomo/pexels-gallery-6",
      type: "image",
      category: "Care",
      createdAt: "2024-01-06T00:00:00.000Z"
    }
  ]
};

