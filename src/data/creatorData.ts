import type { CreatorBio, QuickStat, TikTokVideo, AdPackage, ProcessStep } from '../types';

export const CREATOR_INFO = {
  name: 'Lij Dawud',
  amharicName: 'ልጅ ዳውድ',
  handle: '@lij.dawud',
  location: 'Addis Ababa, Ethiopia',
  amharicLocation: 'አዲስ አበባ፣ ኢትዮጵያ',
  primaryCategory: 'Comedy & Entertainment',
  primaryPlatform: 'TikTok',
  tiktokUrl: 'https://www.tiktok.com/@lij.dawud',
  youtubeUrl: 'https://www.youtube.com/@Lijdawud23',
  instagramUrl: 'https://www.instagram.com/lijdawud',
  telegramUrl: 'https://t.me/lijdawud',
  heroImage: '/images/lij_hero_portrait.png',
};

export const QUICK_STATS: QuickStat[] = [
  {
    id: 'channel',
    label: { en: 'Primary Platform', am: 'ዋና የመድረክ አድራሻ' },
    value: 'TikTok Official',
    sub: { en: '@lij.dawud • Addis Ababa', am: '@lij.dawud • አዲስ አበባ' },
  },
  {
    id: 'audience',
    label: { en: 'Core Audience', am: 'ተመልካች ስብጥር' },
    value: 'Youth & Diaspora',
    sub: { en: 'Ethiopia & Global Habesha', am: 'ኢትዮጵያና የውጭ ሀገር ዳያስፖራ' },
  },
  {
    id: 'content',
    label: { en: 'Content Focus', am: 'የይዘት ዘርፍ' },
    value: 'Viral Comedy',
    sub: { en: 'Situational & Relatable Skits', am: 'አስቂኝ ድራማዎችና አጫጭር ቪዲዮዎች' },
  },
  {
    id: 'speed',
    label: { en: 'Production Speed', am: 'የስራ ፍጥነት' },
    value: '3–5 Days',
    sub: { en: 'Fast Creative Turnaround', am: 'ፈጣን የማጠናቀቂያ ጊዜ' },
  },
];

export const TIKTOK_VIDEOS: TikTokVideo[] = [
  {
    id: 'vid-1',
    videoId: '7694227362493271316',
    url: 'https://www.tiktok.com/@lij.dawud/video/7694227362493271316',
  },
  {
    id: 'vid-2',
    videoId: '7695731869241052436',
    url: 'https://www.tiktok.com/@lij.dawud/video/7695731869241052436',
  },
  {
    id: 'vid-3',
    videoId: '7694972309248953620',
    url: 'https://www.tiktok.com/@lij.dawud/video/7694972309248953620',
  },
  {
    id: 'vid-4',
    videoId: '7688002847400660245',
    url: 'https://www.tiktok.com/@lij.dawud/video/7688002847400660245',
  },
  {
    id: 'vid-5',
    videoId: '7686831521721847060',
    url: 'https://www.tiktok.com/@lij.dawud/video/7686831521721847060',
  },
  {
    id: 'vid-6',
    videoId: '7682425984741674261',
    url: 'https://www.tiktok.com/@lij.dawud/video/7682425984741674261',
  },
];

export const PACKAGES: AdPackage[] = [
  {
    id: 'sponsored-video',
    name: {
      en: 'Sponsored TikTok Video',
      am: 'ስፖንሰርድ የቲክቶክ ቪዲዮ',
    },
    badge: {
      en: 'Single Video',
      am: 'ነጠላ ቪዲዮ',
    },
    pricing: {
      en: 'Custom Quote',
      am: 'በስምምነት',
    },
    pricingSubtext: {
      en: 'Dedicated comedic skit for your product',
      am: 'ለምርትዎ የሚዘጋጅ ልዩ አስቂኝ ቪዲዮ',
    },
    description: {
      en: 'A fully dedicated short-form comedic video produced around your brand, app, service, or product with Lij Dawud’s signature style.',
      am: 'ለእርስዎ ድርጅት፣ አፕሊኬሽን ወይም ምርት ተብሎ በልጅ ዳውድ ልዩ የአስቂኝ ትወና ዘይቤ የሚዘጋጅ የተሟላ ማስታወቂያ።',
    },
    deliverables: {
      en: [
        '1x Custom scripted TikTok video (30–60s)',
        'Original comedic storyline tailored to your message',
        'Brand tag, agreed hashtags & pinned comment CTA',
        'Published on official @lij.dawud account',
      ],
      am: [
        '1 የተሟላ የቲክቶክ ቪዲዮ (30–60 ሰከንድ)',
        'የምርትዎን ጠቀሜታ በሳቅ የሚያስረዳ ልዩ ስክሪፕት',
        'የድርጅትዎ ስም፣ ሀሽታጎችና የተሰካ ማብራሪያ',
        'በ@lij.dawud ኦፊሴላዊ ገጽ ላይ የሚለቀቅ',
      ],
    },
    turnaroundTime: {
      en: '3–5 business days',
      am: 'ከ3 እስከ 5 የስራ ቀናት',
    },
    revisionRounds: {
      en: '1 concept review + 1 minor adjustment',
      am: '1 የስክሪፕት ግምገማ + 1 ማስተካከያ',
    },
    isFeatured: false,
  },
  {
    id: 'brand-integration',
    name: {
      en: 'Creative Brand Integration',
      am: 'የፈጠራ ብራንድ ጥምረት',
    },
    badge: {
      en: 'Most Popular',
      am: 'ተመራጭ',
    },
    pricing: {
      en: 'Custom Quote',
      am: 'በስምምነት',
    },
    pricingSubtext: {
      en: 'High organic retention & engagement',
      am: 'ተፈጥሮአዊና ከፍተኛ ተመልካች የሚስብ',
    },
    description: {
      en: 'Seamlessly weaves your brand into an organic comedy sketch. Perfect for products that benefit from natural everyday use rather than hard-selling commercials.',
      am: 'ምርትዎ ወይም አገልግሎትዎ በታሪኩና በንግግሩ መሃል በተፈጥሮአዊ መንገድ ተካቶ የሚቀርብበት ማራኪ የጥምረት ስራ።',
    },
    deliverables: {
      en: [
        '1x Contextual comedic integration (45–75s)',
        'Natural product placement in everyday situational dialogue',
        'Brand mention in caption + Instagram Story share',
        'Authentic audience response without ad fatigue',
      ],
      am: [
        '1 የተፈጥሮአዊ ይዘት ጥምረት ቪዲዮ (45–75 ሰከንድ)',
        'ምርቱን በታሪኩ ውስጥ በተጨባጭ የመጠቀም ገጠመኝ',
        'የድርጅቱ ስም በማብራሪያው ውስጥ + የኢንስታግራም ስቶሪ',
        'ተመልካች ሳይሰለቸው በደስታ የሚቀበለው አቀራረብ',
      ],
    },
    turnaroundTime: {
      en: '4–6 business days',
      am: 'ከ4 እስከ 6 የስራ ቀናት',
    },
    revisionRounds: {
      en: '2 rounds of collaborative review',
      am: '2 ዙር የጋራ ግምገማ',
    },
    isFeatured: true,
  },
  {
    id: 'multi-video-campaign',
    name: {
      en: 'Multi-Video Campaign',
      am: 'የተከታታይ ቪዲዮዎች ዘመቻ',
    },
    badge: {
      en: 'Maximum Reach',
      am: 'ከፍተኛ ተደራሽነት',
    },
    pricing: {
      en: 'Campaign Quote',
      am: 'በዘመቻው ስፋት',
    },
    pricingSubtext: {
      en: 'Tiered 3-part storyline for product launches',
      am: 'አዳዲስ ምርቶችን በተከታታይ ለማስተዋወቅ',
    },
    description: {
      en: 'A strategic series of 3 short-form videos released over 2–4 weeks. Ideal for product launches and campaigns requiring repeated brand impressions.',
      am: 'በ2-4 ሳምንታት ውስጥ ተከታትለው የሚለቀቁ 3 የተያያዙ አጫጭር ቪዲዮዎች። አዲስ ምርት ለገበያ ሲቀርብ ተመራጭ ነው።',
    },
    deliverables: {
      en: [
        '3x Coordinated short-form videos across TikTok & Reels',
        'Episodic storytelling keeping viewers engaged across parts',
        'Coordinated release schedule aligned with your milestones',
        'Campaign performance review upon completion',
      ],
      am: [
        '3 የተቀናጁ የቲክቶክ እና የኢንስታግራም ቪዲዮዎች',
        'ተመልካች ቀጣዩን ክፍል በጉጉት እንዲጠብቅ የሚያደርግ ታሪክ',
        'ከድርጅትዎ የግብይት ዕቅድ ጋር የተጣጣመ የመልቀቂያ ቀን',
        'የዘመቻው መጠናቀቂያ አፈጻጸም ሪፖርት',
      ],
    },
    turnaroundTime: {
      en: 'Phased over 2–4 weeks',
      am: 'በ2–4 ሳምንታት ውስጥ',
    },
    revisionRounds: {
      en: 'Milestone approvals for each part',
      am: 'በእያንዳንዱ ክፍል የፀደቀ የስራ ሂደት',
    },
    isFeatured: false,
  },
  {
    id: 'custom-collaboration',
    name: {
      en: 'Custom 360° & Event Activation',
      am: 'ልዩ ጥምረትና ዝግጅት',
    },
    badge: {
      en: 'Bespoke',
      am: 'እንደ ፍላጎትዎ',
    },
    pricing: {
      en: 'On Consultation',
      am: 'በውይይት',
    },
    pricingSubtext: {
      en: 'Events, hosting, and brand ambassador deals',
      am: 'ለትልልቅ ዝግጅቶችና የብራንድ አምባሳደርነት',
    },
    description: {
      en: 'Bespoke partnership for live event hosting, commercial voiceovers, brand ambassador roles, or multi-creator entertainment activations.',
      am: 'በዝግጅቶች ላይ በአካል መገኘትን፣ የረጅም ጊዜ አምባሳደርነትን ወይም ከሌሎች ፈጣሪዎች ጋር የሚሰሩ ትልልቅ ፕሮጀክቶች።',
    },
    deliverables: {
      en: [
        'Live event attendance, stage hosting, or crowd skits',
        'Full digital & broadcast commercial rights available',
        'Direct creative consultation with Lij Dawud',
      ],
      am: [
        'በዝግጅቶች ላይ በአካል መገኘትና መድረክ መምራት',
        'የተሟላ የንግድና የቴሌቪዥን ማስተላለፊያ ፈቃድ',
        'ከፈጣሪው ጋር በቀጥታ የሚደረግ የፈጠራ ውይይት',
      ],
    },
    turnaroundTime: {
      en: 'Custom schedule',
      am: 'እንደ ዝግጅቱ ቀን',
    },
    revisionRounds: {
      en: 'Collaborative planning',
      am: 'የተሟላ የቅድመ-ዝግጅት ውይይት',
    },
    isFeatured: false,
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: { en: 'Send Brief', am: 'የስራ ዝርዝር' },
    description: {
      en: 'Tell us your product, objective, and preferred timeline via the form below.',
      am: 'ስለ ምርትዎ፣ ስለ ዘመቻው ግብና የመልቀቂያ ቀን በቅጹ በኩል ያሳውቁን።',
    },
  },
  {
    step: '02',
    title: { en: 'Concept & Script', am: 'የፈጠራ ስክሪፕት' },
    description: {
      en: 'We craft a punchy, humorous concept tailored to Ethiopian social audiences.',
      am: 'ለኢትዮጵያ ተመልካች የሚመጥን አዝናኝና ሳቢ የቪዲዮ ስክሪፕት እናዘጋጃለን።',
    },
  },
  {
    step: '03',
    title: { en: 'Production', am: 'ቀረጻና ዝግጅት' },
    description: {
      en: 'High-definition filming and editing in Addis Ababa upon approval.',
      am: 'ስምምነቱ ሲፀድቅ ጥራት ያለው ቀረጻና ቅንብር ይከናወናል።',
    },
  },
  {
    step: '04',
    title: { en: 'Publish & Reach', am: 'ህትመትና ተደራሽነት' },
    description: {
      en: 'Content goes live on @lij.dawud during peak engagement hours.',
      am: 'ቪዲዮው ከፍተኛ ተመልካች በሚገኝበት ሰዓት በኦፊሴላዊ ገጽ ላይ ይለቀቃል።',
    },
  },
];

export const CREATOR_BIO: CreatorBio = {
  name: { en: 'Lij Dawud', am: 'ልጅ ዳውድ' },
  tagline: {
    en: 'Ethiopian short-form comedy, relatable everyday humor, and high-impact brand promotions.',
    am: 'የኢትዮጵያ አዝናኝ አጫጭር ኮሜዲዎች፣ የዕለት ተዕለት ገጠመኞች እና ተደማጭ የብራንድ ማስታወቂያዎች።',
  },
  bioParagraphs: {
    en: [
      'Lij Dawud (ልጅ ዳውድ) is one of the most recognizable and engaging comedic creators on Ethiopian TikTok. With his fast comedic timing, expressive delivery, and relatable everyday sketches, he captures huge attention across Ethiopia and the diaspora.',
      'For brands, Lij transforms promotional messages into organic, entertaining stories that viewers watch, laugh with, and share — ensuring your brand stands out and gets remembered.',
    ],
    am: [
      'ልጅ ዳውድ በኢትዮጵያ ቲክቶክ ላይ ተወዳጅና ተደማጭ ከሆኑ ወጣት የኮሜዲ ፈጣሪዎች አንዱ ነው። በፈጣን የንግግር ቅላጼውና የዕለት ተዕለት ገጠመኞችን በሳቅ በሚያቀርብበት ዘይቤው በኢትዮጵያና በዳያስፖራው ዘንድ ከፍተኛ ተወዳጅነት አለው።',
      'ምርትና አገልግሎቶችን በተፈጥሮአዊ ሳቅና ታሪክ ውስጥ በማካተት ተመልካች በደስታ እንዲቀበለውና ለሌሎች እንዲያጋራው ያደርጋል።',
    ],
  },
  coreThemes: {
    en: [
      'Situational Comedy & Parodies',
      'Relatable Everyday Ethiopian Life',
      'Creator Collaborations',
      'Organic Brand Integrations',
    ],
    am: [
      'ወቅታዊ እና አስቂኝ ድራማዎች',
      'የዕለት ተዕለት የህይወት ገጠመኞች',
      'ከሌሎች ፈጣሪዎች ጋር የሚሰሩ ስራዎች',
      'አሳታፊ የብራንድ ማስታወቂያዎች',
    ],
  },
};

export const I18N = {
  en: {
    nav: {
      home: 'Home',
      work: 'Selected Work',
      packages: 'Packages',
      process: 'How It Works',
      about: 'About',
      contact: 'Book Collaboration',
      bookCta: 'Book Now',
    },
    hero: {
      eyebrow: 'Creator Media Kit & Brand Partnerships',
      headlineStart: 'Entertainment That Gets',
      headlineHighlight: 'People Talking',
      tagline:
        'Lij Dawud brings dynamic Ethiopian short-form comedy, relatable situational sketches, and viral brand storytelling to hundreds of thousands of engaged viewers.',
      primaryBtn: 'Work With Lij',
      secondaryBtn: 'Watch Videos',
      verifiedNotice: 'Official Brand Collaboration Platform • Addis Ababa, Ethiopia',
    },
    portfolio: {
      eyebrow: 'Selected Work',
      title: 'Watch Lij Dawud in Action',
      subtitle: 'Play selected TikTok videos directly below to experience his comedic style, timing, and audience connection.',
      openTikTokBtn: 'Watch on TikTok',
    },
    packages: {
      eyebrow: 'Collaboration Services',
      title: 'Find The Right Format',
      subtitle: 'From a single dedicated promotional video to multi-part campaigns, choose an option tailored to your goals.',
      deliverablesHeading: 'Included Deliverables',
      selectPackageBtn: 'Select Package',
      customNeedsNote: 'Have a custom event, hosting, or ambassador project? Select Custom Collaboration below.',
      termsDisclaimer: 'Deliverables, publication dates, and terms are confirmed in writing prior to production.',
    },
    process: {
      eyebrow: 'Simple Process',
      title: 'How It Works',
      subtitle: 'A clean 4-step workflow from initial brief to publication.',
    },
    about: {
      eyebrow: 'The Creator',
      title: 'About Lij Dawud',
      themesHeading: 'Content Focus',
      officialChannelsHeading: 'Official Channels',
      connectBtn: 'Send Campaign Brief',
    },
    booking: {
      eyebrow: 'Start Your Campaign',
      title: 'Book a Collaboration',
      subtitle: 'Tell us about your brand and what you want to promote. We will respond promptly with creative options and rates.',
      selectedPackageBadge: 'Selected Package:',
      fullNameLabel: 'Your Full Name *',
      fullNamePlaceholder: 'e.g. Almaz Bekele',
      companyLabel: 'Company / Brand Name *',
      companyPlaceholder: 'e.g. Selam Beverages / Awash Tech',
      emailLabel: 'Business Email *',
      emailPlaceholder: 'you@company.com',
      phoneLabel: 'Phone Number (with Country Code) *',
      phonePlaceholder: '+251 91 123 4567',
      productLabel: 'Product / Service to Promote *',
      productPlaceholder: 'e.g. Mobile payment app, restaurant, apparel brand',
      packageLabel: 'Desired Package *',
      objectiveLabel: 'Campaign Objective *',
      budgetLabel: 'Estimated Budget Range',
      budgetPlaceholder: 'Select an estimated range',
      timelineLabel: 'Target Launch Timeline',
      timelinePlaceholder: 'e.g. Within 2 weeks, next month',
      contactMethodLabel: 'Preferred Communication *',
      websiteLabel: 'Website or Social Link (Optional)',
      websitePlaceholder: 'https://brand.com or @brand',
      briefLabel: 'Campaign Notes & Talking Points',
      briefPlaceholder: 'Key messages, required talking points, discount code, or concept ideas...',
      submitBtn: 'Submit Promotion Request',
      submittingBtn: 'Submitting Request...',
      privacyNotice: 'Your contact details are kept strictly confidential and used solely for coordinating campaigns.',
      successTitle: 'Inquiry Received!',
      successSubtitle: 'Thank you for reaching out to collaborate with Lij Dawud. Your request has been registered.',
      refNumberLabel: 'Reference Code:',
      nextStepsHeading: 'Next Steps:',
      nextStep1: 'Our creative team will review your brief against our schedule.',
      nextStep2: 'We will contact you via your preferred channel within 24–48 hours.',
      nextStep3: 'We will share draft creative concepts and an official quote.',
      copySummaryBtn: 'Copy Summary',
      submitAnotherBtn: 'Submit Another Inquiry',
    },
    contact: {
      eyebrow: 'Direct Access',
      title: 'Ready to Reach Ethiopian Audiences?',
      subtitle: 'Let’s turn your message into memorable, engaging entertainment.',
      bookBtn: 'Book Collaboration',
      tiktokBtn: 'Follow on TikTok',
      verifiedDisclaimer: 'Official inquiries are handled via the booking form and creator links below.',
    },
    footer: {
      tagline: 'Official creator media kit & brand partnership platform for Lij Dawud.',
      navigationHeading: 'Navigation',
      legalHeading: 'Commercial Rights',
      rightsText: 'All creative concepts and media assets are subject to written partnership agreements.',
      copyright: 'All rights reserved. Lij Dawud Creator Operations.',
      changeLanguage: 'Switch to አማርኛ',
    },
  },
  am: {
    nav: {
      home: 'ዋና ገጽ',
      work: 'ስራዎች',
      packages: 'ፓኬጆች',
      process: 'ሂደት',
      about: 'ስለ ልጅ ዳውድ',
      contact: 'ማስታወቂያ ይዘዙ',
      bookCta: 'ይዘዙ',
    },
    hero: {
      eyebrow: 'ኦፊሴላዊ የይዘት ፈጣሪ ሚዲያ ኪት እና የብራንድ ጥምረት መድረክ',
      headlineStart: 'በሳቅና በፈጠራ ሰዎችን',
      headlineHighlight: 'የሚያነጋግሩ ይዘቶች',
      tagline:
        'ልጅ ዳውድ የኢትዮጵያን አዝናኝ አጫጭር ኮሜዲዎች፣ የዕለት ተዕለት ገጠመኞችንና ተደማጭ የብራንድ ማስታወቂያዎችን በመቶ ሺዎች ለሚቆጠሩ ንቁ ተመልካቾች ያደርሳል።',
      primaryBtn: 'ከእኛ ጋር ይስሩ',
      secondaryBtn: 'ቪዲዮዎችን ይመልከቱ',
      verifiedNotice: 'ኦፊሴላዊ የንግድ ማስተዋወቂያ መድረክ • አዲስ አበባ፣ ኢትዮጵያ',
    },
    portfolio: {
      eyebrow: 'የተመረጡ ስራዎች',
      title: 'የልጅ ዳውድ የቲክቶክ ቪዲዮዎች',
      subtitle: 'ከዚህ በታች ያሉትን የቲክቶክ ቪዲዮዎች በቀጥታ በማጫወት የፈጠራ አቀራረቡንና የተመልካች ተሳትፎውን ይመልከቱ።',
      openTikTokBtn: 'ቲክቶክ ላይ ይመልከቱ',
    },
    packages: {
      eyebrow: 'የማስታወቂያ አገልግሎቶች',
      title: 'የሚስማማዎትን ፓኬጅ ይምረጡ',
      subtitle: 'ከአንድ ነጠላ ቪዲዮ እስከ ተከታታይ ዘመቻዎች ድረስ ለድርጅትዎ የሚመጥን አማራጭ ይምረጡ።',
      deliverablesHeading: 'የሚካተቱ ስራዎች',
      selectPackageBtn: 'ይህን ፓኬጅ ይምረጡ',
      customNeedsNote: 'ለየት ያለ ዝግጅት፣ የረጅም ጊዜ አምባሳደርነት ወይም ትልቅ ፕሮጀክት አለዎት? ከዚህ በታች ልዩ ጥምረትን ይምረጡ።',
      termsDisclaimer: 'የቪዲዮው ዝርዝር፣ የመልቀቂያ ቀናትና ክፍያ ከስራው በፊት በጽሁፍ ስምምነት ይረጋገጣል።',
    },
    process: {
      eyebrow: 'ግልጽ የአሰራር ሂደት',
      title: 'የአሰራር ሂደት',
      subtitle: 'ከመጀመሪያው የስራ ሃሳብ እስከ ህትመት ያለው ባለ 4-ደረጃ ሂደት።',
    },
    about: {
      eyebrow: 'ይዘት ፈጣሪው',
      title: 'ስለ ልጅ ዳውድ',
      themesHeading: 'ዋና ዋና የይዘት ዘርፎች',
      officialChannelsHeading: 'ኦፊሴላዊ ገጾች',
      connectBtn: 'የስራ ሃሳብዎን ይላኩ',
    },
    booking: {
      eyebrow: 'ዘመቻዎን ይጀምሩ',
      title: 'የማስታወቂያ ስራ ይዘዙ',
      subtitle: 'ስለ ድርጅትዎ እና ስለሚያስተዋውቁት ምርት ይንገሩን። ከፈጠራ አማራጮችና የዋጋ ዝርዝር ጋር በፍጥነት እንመለሳለን።',
      selectedPackageBadge: 'የተመረጠው ፓኬጅ፦',
      fullNameLabel: 'ሙሉ ስምዎ *',
      fullNamePlaceholder: 'ምሳሌ፡ አልማዝ በቀለ',
      companyLabel: 'የድርጅት ወይም የብራንድ ስም *',
      companyPlaceholder: 'ምሳሌ፡ ሰላም መጠጦች / አዋሽ ቴክ',
      emailLabel: 'የስራ ኢሜይል *',
      emailPlaceholder: 'you@company.com',
      phoneLabel: 'ስልክ ቁጥር (ከአገር መለያ ጋር) *',
      phonePlaceholder: '+251 91 123 4567',
      productLabel: 'የሚያስተዋውቁት ምርት ወይም አገልግሎት *',
      productPlaceholder: 'ምሳሌ፡ አዲስ የሞባይል አፕሊኬሽን፣ የምግብ ቤት ምረቃ',
      packageLabel: 'የሚፈልጉት ፓኬጅ *',
      objectiveLabel: 'የማስታወቂያው ዋና ግብ *',
      budgetLabel: 'የተመደበው በጀት',
      budgetPlaceholder: 'የተገመተ የበጀት መጠን ይምረጡ',
      timelineLabel: 'የሚፈልጉት የመልቀቂያ ጊዜ',
      timelinePlaceholder: 'ምሳሌ፡ በ2 ሳምንት ውስጥ፣ በሚቀጥለው ወር',
      contactMethodLabel: 'የምንገናኝበት መንገድ *',
      websiteLabel: 'የድርጅቱ ድረ-ገጽ ወይም ማህበራዊ ገጽ (አማራጭ)',
      websitePlaceholder: 'https://brand.com ወይም @brand',
      briefLabel: 'የስራው ዝርዝርና አስተያየት',
      briefPlaceholder: 'የሚተላለፉ ዋና ነጥቦች፣ የቅናሽ ኮዶች ወይም የፈጠራ ሃሳቦች...',
      submitBtn: 'የማስታወቂያ ጥያቄውን ላክ',
      submittingBtn: 'መረጃው እየተላከ ነው...',
      privacyNotice: 'የእርስዎ መረጃ በጥብቅ ሚስጥራዊነት የተጠበቀ ሲሆን ከልጅ ዳውድ ጋር ለሚደረገው ስራ ብቻ ይውላል።',
      successTitle: 'ጥያቄዎ ደርሷል!',
      successSubtitle: 'ከልጅ ዳውድ ጋር አብሮ ለመስራት ፍላጎት ስላሳዩ እናመሰግናለን። ጥያቄዎ ተመዝግቧል።',
      refNumberLabel: 'የጥያቄው መለያ ቁጥር፦',
      nextStepsHeading: 'ቀጣይ እርምጃዎች፦',
      nextStep1: 'የፈጠራ ቡድናችን የላኩትን ዝርዝር ከመጪዎቹ ቀናት ጋር በማስተያየት ይገመግማል።',
      nextStep2: 'በመረጡት የመገናኛ መንገድ በ24-48 ሰዓታት ውስጥ ምላሽ እንሰጣለን።',
      nextStep3: 'የፈጠራ ረቂቅ ሃሳቦችንና ይፋዊ የዋጋ ዝርዝርን እናጋራዎታለን።',
      copySummaryBtn: 'ማጠቃለያውን ቅዳ',
      submitAnotherBtn: 'ሌላ ጥያቄ አስገባ',
    },
    contact: {
      eyebrow: 'ቀጥተኛ ግንኙነት',
      title: 'የኢትዮጵያን ተመልካች ለማግኘት ዝግጁ ኖት?',
      subtitle: 'ፈጣን የማህበራዊ ሚዲያ ማስታወቂያ ወይም ትልቅ የይዘት ስፖንሰርሺፕ ለመስራት አብረን እንስራ።',
      bookBtn: 'የስራ መጠየቂያ ቅጹን ይክፈቱ',
      tiktokBtn: 'ቲክቶክ ላይ ይከተሉ',
      verifiedDisclaimer: 'ይፋዊ የስራ ጥያቄዎች የሚስተናገዱት በዚህ ቅጽና በኦፊሴላዊ አድራሻዎች ብቻ ነው።',
    },
    footer: {
      tagline: 'የኢትዮጵያዊው አዝናኝ ይዘት ፈጣሪ ልጅ ዳውድ ኦፊሴላዊ የሚዲያ ኪት እና የብራንድ ጥምረት መድረክ።',
      navigationHeading: 'ፈጣን አሰሳ',
      legalHeading: 'የፈጠራ መብት',
      rightsText: 'ሁሉም የፈጠራ ስራዎችና ማስታወቂያዎች በጽሁፍ ስምምነት ላይ የተመሰረቱ ናቸው።',
      copyright: 'መብቱ በህግ የተጠበቀ ነው። ለልጅ ዳውድ የፈጠራ ስራዎች የተዘጋጀ።',
      changeLanguage: 'ወደ English ይቀይሩ',
    },
  },
};
