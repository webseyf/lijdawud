export type Language = 'en' | 'am';

export type Platform = 'tiktok' | 'youtube' | 'instagram' | 'telegram';

export interface TikTokVideo {
  id: string;
  videoId: string;
  url: string;
}

export interface QuickStat {
  id: string;
  label: { en: string; am: string };
  value: string;
  sub: { en: string; am: string };
}

export interface AdPackage {
  id: string;
  name: { en: string; am: string };
  badge?: { en: string; am: string };
  pricing: { en: string; am: string };
  pricingSubtext: { en: string; am: string };
  description: { en: string; am: string };
  deliverables: { en: string[]; am: string[] };
  turnaroundTime: { en: string; am: string };
  revisionRounds: { en: string; am: string };
  isFeatured?: boolean;
}

export interface ProcessStep {
  step: string;
  title: { en: string; am: string };
  description: { en: string; am: string };
}

export interface CreatorBio {
  name: { en: string; am: string };
  tagline: { en: string; am: string };
  bioParagraphs: { en: string[]; am: string[] };
  coreThemes: { en: string[]; am: string[] };
}

export interface BookingFormData {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  productOrService: string;
  packageType: string;
  campaignObjective: string;
  budgetRange: string;
  preferredTimeline: string;
  preferredContact: 'email' | 'telegram' | 'whatsapp' | 'phone';
  socialOrWebsite: string;
  campaignBrief: string;
}

export interface SubmissionResult {
  success: boolean;
  referenceNumber: string;
  timestamp: string;
  data: BookingFormData;
}
