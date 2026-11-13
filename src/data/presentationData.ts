export type Language = 'en' | 'ar';

export interface SocialStat {
  id: string;
  platform: 'facebook' | 'instagram' | 'tiktok';
  nameEn: string;
  nameAr: string;
  value: string;
  numericValue: number;
  labelEn: string;
  labelAr: string;
  status: 'verified' | 'preliminary';
  sourceEn: string;
  sourceAr: string;
  url: string;
}

export interface PortfolioItem {
  id: string;
  reelId: string;
  url: string;
  category: 'retail' | 'tourism' | 'restaurants';
  titleEn: string;
  titleAr: string;
  descriptionEn: string;
  descriptionAr: string;
  highlightEn: string;
  highlightAr: string;
  thumbnailUrl?: string;
  isDuplicate?: boolean;
}

export interface AdvertisingOpportunity {
  id: string;
  titleEn: string;
  titleAr: string;
  subtitleEn: string;
  subtitleAr: string;
  deliverablesEn: string[];
  deliverablesAr: string[];
  icon: string;
  focusEn: string;
  focusAr: string;
}

export interface CommercialPackage {
  id: string;
  nameEn: string;
  nameAr: string;
  tierEn: string;
  tierAr: string;
  priceAmount: number;
  currencyEn: string;
  currencyAr: string;
  priceDisplayEn: string;
  priceDisplayAr: string;
  platforms: ('facebook' | 'instagram' | 'tiktok')[];
  descriptionEn: string;
  descriptionAr: string;
  recommended?: boolean;
}

export interface PresentationData {
  meta: {
    agencyName: string;
    agencyWebsite: string;
    agencyLogo: string;
    creatorNameEn: string;
    creatorNameAr: string;
    creatorPhotos: {
      photo1: string;
      photo2: string;
    };
    socialLinks: {
      instagram: string;
      facebook: string;
      tiktok: string;
    };
    contact: {
      email: string;
      whatsapp: string;
      whatsappNumber?: string;
      whatsappInternational?: string;
      salesOfficeEn: string;
      salesOfficeAr: string;
    };
  };
  hero: {
    overtitleEn: string;
    overtitleAr: string;
    titleEn: string;
    titleAr: string;
    headlineEn: string;
    headlineAr: string;
    supportingEn: string;
    supportingAr: string;
    ctaPrimaryEn: string;
    ctaPrimaryAr: string;
    ctaSecondaryEn: string;
    ctaSecondaryAr: string;
    viewsHighlight: {
      number: string;
      labelEn: string;
      labelAr: string;
      subtextEn: string;
      subtextAr: string;
      periodEn: string;
      periodAr: string;
    };
  };
  meetCreators: {
    titleEn: string;
    titleAr: string;
    subtitleEn: string;
    subtitleAr: string;
    bioParagraphsEn: string[];
    bioParagraphsAr: string[];
    corePillarsEn: { title: string; desc: string }[];
    corePillarsAr: { title: string; desc: string }[];
  };
  socialStats: SocialStat[];
  portfolioCategories: {
    retail: {
      titleEn: string;
      titleAr: string;
      descriptionEn: string;
      descriptionAr: string;
      items: PortfolioItem[];
    };
    tourism: {
      titleEn: string;
      titleAr: string;
      descriptionEn: string;
      descriptionAr: string;
      items: PortfolioItem[];
    };
    restaurants: {
      titleEn: string;
      titleAr: string;
      descriptionEn: string;
      descriptionAr: string;
      items: PortfolioItem[];
    };
  };
  opportunities: AdvertisingOpportunity[];
  packages: CommercialPackage[];
  contactSection: {
    titleEn: string;
    titleAr: string;
    subtitleEn: string;
    subtitleAr: string;
    actionPromptEn: string;
    actionPromptAr: string;
    ctaButtonEn: string;
    ctaButtonAr: string;
  };
}

export const presentationData: PresentationData = {
  meta: {
    agencyName: "ProMedia",
    agencyWebsite: "www.pro-media.com",
    agencyLogo: "/assets/promedia-logo.png",
    creatorNameEn: "ElZuzzat",
    creatorNameAr: "الزوزات",
    creatorPhotos: {
      photo1: "/assets/elzuzzat-photo-1.jpg",
      photo2: "/assets/elzuzzat-photo-2.jpg",
    },
    socialLinks: {
      instagram: "https://www.instagram.com/elzuzzat?stkn=aHRvdXJxOHMzcnB1",
      facebook: "https://www.facebook.com/elzuzzat?rdid=tQ1cAY11wV5eF6Sc&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F18ioNsVEMH%2F#",
      tiktok: "https://www.tiktok.com/@elzuzzat", // Placeholder clearly labeled pending verified URL
    },
    contact: {
      email: "info@pro-media.com",
      whatsapp: "https://wa.me/201283925658?text=Hello%20ProMedia%20Team%2C%20I%20am%20interested%20in%20an%20advertising%20partnership%20with%20ElZuzzat",
      whatsappNumber: "01283925658",
      whatsappInternational: "+20 128 392 5658",
      salesOfficeEn: "ProMedia Official Partnerships Representation",
      salesOfficeAr: "التمثيل التجاري والشراكات الحصرية — بروميديا",
    }
  },
  hero: {
    overtitleEn: "PROMEDIA PRESENTS",
    overtitleAr: "بروميديا تُقدّم",
    titleEn: "MEET ELZUZZAT",
    titleAr: "تعرّف على الزوزات",
    headlineEn: "A POWERFUL CREATOR PRESENCE. MILLIONS OF OPPORTUNITIES.",
    headlineAr: "حضور إبداعي استثنائي. وملايين الفرص التسويقية.",
    supportingEn: "Discover the power of creative content, authentic entertainment, and an engaged audience of millions across the Arab world.",
    supportingAr: "اكتشف قوة المحتوى الإبداعي والترفيه العفوي، وتواصل مع جمهور نشط يضم الملايين عبر المنطقة العربية.",
    ctaPrimaryEn: "EXPLORE THE CREATORS",
    ctaPrimaryAr: "استكشف المحتوى والإحصائيات",
    ctaSecondaryEn: "COMMERCIAL OPPORTUNITIES",
    ctaSecondaryAr: "فرص التعاون الإعلاني",
    viewsHighlight: {
      number: "200M+",
      labelEn: "VIDEO VIEWS",
      labelAr: "مشاهدة فيديو",
      subtextEn: "Across Facebook, Instagram & TikTok combined",
      subtextAr: "عبر فيسبوك وإنستغرام وتيك توك مجتمعة",
      periodEn: "During the last 90 days (ProMedia Verified)",
      periodAr: "خلال الـ 90 يوماً الماضية (موثّقة من بروميديا)",
    }
  },
  meetCreators: {
    titleEn: "MEET THE CREATORS",
    titleAr: "من هما الزوزات؟",
    subtitleEn: "Authentic, relatable, and culturally connected content creators driving massive organic engagement.",
    subtitleAr: "صنّاع محتوى يتميزون بالعفوية والاتصال الوثيق بالجمهور العربي، محققين نسب تفاعل استثنائية.",
    bioParagraphsEn: [
      "ElZuzzat (الزوزات) represent one of the most dynamic and rapidly growing creator duos in the contemporary digital landscape. Known for their organic humor, relatable storytelling, and charismatic on-screen chemistry, they have captured the daily attention of millions.",
      "Their content seamlessly bridges lifestyle, destination travel, brand experiences, retail culture, and culinary exploration, creating authentic moments that resonate with diverse audiences across Egypt, the Gulf, and the wider Middle East.",
      "As an official creator partnership presented by ProMedia, ElZuzzat provide brands with unparalleled exposure through storytelling that feels organic, memorable, and culturally attuned."
    ],
    bioParagraphsAr: [
      "يُعد 'الزوزات' من أبرز الثنائيات الإبداعية الأكثر تأثيراً ونمواً في المشهد الرقمي المعاصر، حيث استطاعا بعفويتهما وروحهما المرحة وقربهما من واقع الجمهور بناء قاعدة جماهيرية وفية تتجاوز الملايين.",
      "يتميّز محتواهما بالقدرة الفائقة على دمج تجارب الحياة اليومية، واستكشاف الوجهات السياحية، والتجارب التجارية والمطاعم، في قوالب إبداعية جذابة تلقى صدى واسعاً في مصر والخليج والوطن العربي.",
      "ومن خلال هذه الشراكة الرسمية التي تُقدّمها بروميديا، يمنح الزوزات العلامات التجارية فرصة فريدة للوصول إلى قلوب وعقول المستهلكين بأسلوب واقعي يرسخ في الذاكرة ويحقق أعلى عائد استثماري."
    ],
    corePillarsEn: [
      { title: "Authentic Humor", desc: "Spontaneous, family-friendly comedic sketches that spark high organic shareability." },
      { title: "Cultural Resonance", desc: "Deep connection with modern youth, families, and everyday lifestyle trends." },
      { title: "Commercial Versatility", desc: "Seamless product placements across Retail, Tourism, Gastronomy, and Tech." },
      { title: "High Retention", desc: "Above-average watch completion rates driven by engaging duo chemistry." }
    ],
    corePillarsAr: [
      { title: "عفوية وروح مرحة", desc: "مواقف كوميدية واقعية وعائلية تحفز المشاركة والانتشار الفيروسي التلقائي." },
      { title: "ارتباط ثقافي عميق", desc: "حضور قوي وتأثير ملموس لدى شريحة الشباب والعائلات في مختلف الأسواق." },
      { title: "مرونة تسويقية شاملة", desc: "قدرة استثنائية على دمج المنتجات بسلاسة في مجالات التجزئة، السياحة، والمطاعم." },
      { title: "معدلات مشاهدة قياسية", desc: "نسب احتفاظ مرتفعة بالمشاهدين بفضل التناغم والجاذبية الثنائية على الشاشة." }
    ]
  },
  socialStats: [
    {
      id: "views-90d",
      platform: "facebook",
      nameEn: "Total 90-Day Reach",
      nameAr: "المشاهدات المجمعة (90 يوماً)",
      value: "200M+",
      numericValue: 200000000,
      labelEn: "Video Views (90 Days)",
      labelAr: "مشاهدة فيديو (آخر 90 يوماً)",
      status: "verified",
      sourceEn: "Supplied & Verified by ProMedia across all 3 platforms",
      sourceAr: "موثّقة من بروميديا عبر المنصات الثلاث مجتمعة",
      url: "https://www.pro-media.com"
    },
    {
      id: "facebook",
      platform: "facebook",
      nameEn: "Facebook",
      nameAr: "فيسبوك",
      value: "4.7M",
      numericValue: 4700000,
      labelEn: "Followers",
      labelAr: "متابع",
      status: "verified",
      sourceEn: "Verified from official Facebook profile screenshot",
      sourceAr: "بيانات رسمية موثقة من لقطة شاشة الصفحة الرسمية",
      url: "https://www.facebook.com/elzuzzat?rdid=tQ1cAY11wV5eF6Sc&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F18ioNsVEMH%2F#"
    },
    {
      id: "tiktok",
      platform: "tiktok",
      nameEn: "TikTok",
      nameAr: "تيك توك",
      value: "~3.64M",
      numericValue: 3640000,
      labelEn: "Followers (Preliminary)",
      labelAr: "متابع (تقديري أولي)",
      status: "preliminary",
      sourceEn: "Preliminary external estimate (Subject to official verification)",
      sourceAr: "تقديرات خارجية أولية (تخضع للتوثيق الرسمي الدوري)",
      url: "https://www.tiktok.com/@elzuzzat"
    },
    {
      id: "instagram",
      platform: "instagram",
      nameEn: "Instagram",
      nameAr: "إنستغرام",
      value: "~1.446M",
      numericValue: 1446000,
      labelEn: "Followers (Preliminary)",
      labelAr: "متابع (تقديري أولي)",
      status: "preliminary",
      sourceEn: "Preliminary external estimate (Subject to official verification)",
      sourceAr: "تقديرات خارجية أولية (تخضع للتوثيق الرسمي الدوري)",
      url: "https://www.instagram.com/elzuzzat?stkn=aHRvdXJxOHMzcnB1"
    }
  ],
  portfolioCategories: {
    retail: {
      titleEn: "Retail & Commercial Showcases",
      titleAr: "التجزئة والعلامات التجارية",
      descriptionEn: "Dynamic in-store experiences, consumer electronics, fashion, and commercial launches translated into high-impact viral entertainment.",
      descriptionAr: "تجارب تسوق تفاعلية، استعراض أحدث الأجهزة والأزياء والعروض التجارية بأسلوب تشويقي يحفز حركة الشراء.",
      items: [
        {
          id: "retail-1",
          reelId: "DfnQTmEM92u",
          url: "https://www.instagram.com/reel/DfnQTmEM92u/?mdxt=MTAxOTd0bG5sZ3RyNw==",
          category: "retail",
          thumbnailUrl: "/assets/thumbnails/retail/retail-1.jpg",
          titleEn: "Retail Activation Showcase 01",
          titleAr: "تغطية تسوق وتجربة تجارية 01",
          descriptionEn: "In-store product discovery and comedic shopping experience engaging commercial shoppers.",
          descriptionAr: "تجربة تسوق مرحة واستعراض منتجات بطريقة عفوية جذبت تفاعل المتسوقين.",
          highlightEn: "High Consumer Engagement",
          highlightAr: "تفاعل استهلاكي مرتفع"
        },
        {
          id: "retail-2",
          reelId: "DehtmEDsh9W",
          url: "https://www.instagram.com/reel/DehtmEDsh9W/?cplk=Y3pib2wzcngyeXBh",
          category: "retail",
          thumbnailUrl: "/assets/thumbnails/retail/retail-2.jpg",
          titleEn: "Retail Experience & Offer Highlights",
          titleAr: "استعراض العروض التجارية المميزة",
          descriptionEn: "Highlighting seasonal promotions with entertaining creative delivery.",
          descriptionAr: "تسليط الضوء على العروض والميزات التجارية بقالب فكاهي سريع الانتشار.",
          highlightEn: "Viral Shareability",
          highlightAr: "معدل مشاركة مرتفع"
        },
        {
          id: "retail-3",
          reelId: "DecqyiDs4mf",
          url: "https://www.instagram.com/reel/DecqyiDs4mf/?mdxt=NjQ3cDh2czEyYWZn",
          category: "retail",
          thumbnailUrl: "/assets/thumbnails/retail/retail-3.jpg",
          titleEn: "Commercial Campaign Feature",
          titleAr: "حملة ترويجية لمنتجات استهلاكية",
          descriptionEn: "Natural integration of consumer products into a relatable daily scenario.",
          descriptionAr: "دمج طبيعي للمنتج ضمن سيناريو يومي مرح يرسخ اسم العلامة في الأذهان.",
          highlightEn: "Brand Recall Focus",
          highlightAr: "ترسيخ اسم العلامة"
        },
        {
          id: "retail-4",
          reelId: "DeZzTaLMMLw",
          url: "https://www.instagram.com/reel/DeZzTaLMMLw/?srtk=MTR3a3ZraHpicWRlaw==",
          category: "retail",
          thumbnailUrl: "/assets/thumbnails/retail/retail-4.jpg",
          titleEn: "Store Walkthrough & Product Review",
          titleAr: "جولة حصرية وتجربة المنتجات",
          descriptionEn: "Engaging branch exploration highlighting variety and customer atmosphere.",
          descriptionAr: "جولة ميدانية داخل المتجر تستعرض تنوع المنتجات وأجواء المكان الحيوية.",
          highlightEn: "Foot-Traffic Driver",
          highlightAr: "تحفيز الزيارات الميدانية"
        },
        {
          id: "retail-5",
          reelId: "DdtitGssHtw",
          url: "https://www.instagram.com/reel/DdtitGssHtw/?xtok=eW1jNnFiaWtlcDBt",
          category: "retail",
          thumbnailUrl: "/assets/thumbnails/retail/retail-5.jpg",
          titleEn: "Special Launch & Shopping Challenge",
          titleAr: "تحدي التسوق وإطلاق العروض الخاصة",
          descriptionEn: "High-energy comedic shopping challenge driving comments and audience shares.",
          descriptionAr: "تحدي مشوّق مليء بالحماس والفكاهة يحفز التعليقات والمشاركات الكثيفة.",
          highlightEn: "High Comment Rate",
          highlightAr: "تفاعل تعليقات قياسي"
        }
      ]
    },
    tourism: {
      titleEn: "Tourism & Destination Experiences",
      titleAr: "السياحة والوجهات الترفيهية",
      descriptionEn: "Captivating travel journeys, luxury resorts, scenic escapades, and city explorations that put destinations in front of millions of active travelers.",
      descriptionAr: "رحلات استكشافية ساحرة، منتجعات سياحية، ومغامرات ممتعة تنقل جمال الوجهات إلى ملايين المتابعين الشغوفين بالسفر.",
      items: [
        {
          id: "tourism-1",
          reelId: "DTvvnLZDKFW",
          url: "https://www.instagram.com/reel/DTvvnLZDKFW/?cplk=MW9vNTE2cHFrOWQ5YQ==",
          category: "tourism",
          thumbnailUrl: "/assets/thumbnails/tourism/tourism-1.jpg",
          titleEn: "Scenic Destination Discovery",
          titleAr: "استكشاف الوجهات الساحرة 01",
          descriptionEn: "Breathtaking landscapes and duo travel commentary inspiring wanderlust.",
          descriptionAr: "مناظر طبيعية خلابة مع تعليقات ممتعة تحفز الرغبة في خوض تجربة السفر.",
          highlightEn: "Travel Inspiration",
          highlightAr: "إلهام السفر والاستكشاف"
        },
        {
          id: "tourism-2",
          reelId: "DTYm26djLAn",
          url: "https://www.instagram.com/reel/DTYm26djLAn/?srtk=MTVveDNsazI0MDl0Mg==",
          category: "tourism",
          thumbnailUrl: "/assets/thumbnails/tourism/tourism-2.jpg",
          titleEn: "Adventure & Outdoor Experience",
          titleAr: "مغامرات وأنشطة خارجية مشوقة",
          descriptionEn: "High-energy travel adventure showcasing activities and local charm.",
          descriptionAr: "مغامرة سياحية مفعمة بالحيوية تبرز الأنشطة الترفيهية وجمال المكان.",
          highlightEn: "Youth Audience Appeal",
          highlightAr: "جاذبية عالية للشباب"
        },
        {
          id: "tourism-3",
          reelId: "DTJWaQajAsI",
          url: "https://www.instagram.com/reel/DTJWaQajAsI/?exln=MWg2ZzN3dzN5Ym4zag==",
          category: "tourism",
          thumbnailUrl: "/assets/thumbnails/tourism/tourism-3.jpg",
          titleEn: "Resort & Hospitality Spotlight",
          titleAr: "تغطية الضيافة والمنتجعات الفندقية",
          descriptionEn: "Comprehensive review of accommodations, amenities, and guest experience.",
          descriptionAr: "استعراض شامل لمرافق الإقامة والخدمات الفندقية والأجواء الاستجمامية.",
          highlightEn: "Hospitality Focus",
          highlightAr: "تسليط الضوء على الضيافة"
        },
        {
          id: "tourism-4",
          reelId: "DTGAyh0jIub",
          url: "https://www.instagram.com/reel/DTGAyh0jIub/?dlrf=MTYxNGQ2dzJ1dXIwMg==",
          category: "tourism",
          thumbnailUrl: "/assets/thumbnails/tourism/tourism-4.jpg",
          titleEn: "City Landmarks & Cultural Tour",
          titleAr: "جولة المعالم الشهيرة والأجواء التراثية",
          descriptionEn: "Exploring signature sights with engaging, authentic storytelling.",
          descriptionAr: "استكشاف أهم معالم المدينة بأسلوب يجمع بين المعرفة والترفيه العفوي.",
          highlightEn: "Cultural Connection",
          highlightAr: "ارتباط ثقافي وسياحي"
        },
        {
          id: "tourism-5",
          reelId: "DTEHFcRDC1C",
          url: "https://www.instagram.com/reel/DTEHFcRDC1C/?psln=dXpwaG5sNDEwdGkx",
          category: "tourism",
          thumbnailUrl: "/assets/thumbnails/tourism/tourism-5.jpg",
          titleEn: "Travel Diary & Leisure Moments",
          titleAr: "يوميات سياحية ولحظات ترفيهية",
          descriptionEn: "Spontaneous vacation moments capturing relaxation and authentic excitement.",
          descriptionAr: "لحظات استرخاء ومرح عفوية تعكس روعة التجربة السياحية المتكاملة.",
          highlightEn: "Organic Atmosphere",
          highlightAr: "أجواء عفوية آسرة"
        },
        {
          id: "tourism-6",
          reelId: "DTBjTeCjHM5",
          url: "https://www.instagram.com/reel/DTBjTeCjHM5/?obrf=dm5lMDBvN2drcDhk",
          category: "tourism",
          thumbnailUrl: "/assets/thumbnails/tourism/tourism-6.jpg",
          titleEn: "Destination Highlights & Activities",
          titleAr: "أبرز فعاليات الوجهة والأنشطة المميزة",
          descriptionEn: "Dynamic highlights recap showcasing why this destination is a must-visit.",
          descriptionAr: "ملخص لأبرز معالم الوجهة ولماذا تستحق أن تكون الخيار الأول للمسافرين.",
          highlightEn: "High Save Rate",
          highlightAr: "معدل حفظ ومشاركة عالٍ"
        }
      ]
    },
    restaurants: {
      titleEn: "Restaurants & Culinary Experiences",
      titleAr: "المطاعم وتجارب الضيافة الغذائية",
      descriptionEn: "Mouth-watering tastings, vibrant dining reviews, menu highlights, and lively kitchen interactions that generate immediate cravings and foot traffic.",
      descriptionAr: "تجارب تذوق شهية، مراجعات حية لقوائم الأطعمة، وتقييمات عفوية تثير شهية المتابعين وتزيد من الإقبال المباشر على المطاعم.",
      items: [
        {
          id: "restaurant-1",
          reelId: "DHZHs-JSv4z",
          url: "https://www.instagram.com/reel/DHZHs-JSv4z/?exln=NXF1dzJ0NjFyZGRi",
          category: "restaurants",
          thumbnailUrl: "/assets/thumbnails/restaurants/restaurant-1.jpg",
          titleEn: "Signature Dish Tasting & Review",
          titleAr: "تذوق الأطباق المميزة وتقييم النكهات",
          descriptionEn: "Genuine first-bite reactions and detailed tasting of signature menu items.",
          descriptionAr: "انطباعات وتفاعل فوري مع أول قضمة وتذوق لأبرز أطباق القائمة الحصرية.",
          highlightEn: "Appetite Driver",
          highlightAr: "محفز قوي لطلب الطعام"
        },
        {
          id: "restaurant-2",
          reelId: "DQ402FGDNkB",
          url: "https://www.instagram.com/reel/DQ402FGDNkB/?psln=MXc0amhkazJxZHUzdQ==",
          category: "restaurants",
          thumbnailUrl: "/assets/thumbnails/restaurants/restaurant-2.jpg",
          titleEn: "Full Dining Experience & Atmosphere",
          titleAr: "تجربة طعام متكاملة وأجواء الضيافة",
          descriptionEn: "Exploring restaurant decor, service speed, and dish variety with duo humor.",
          descriptionAr: "استعراض ديكورات المطعم وسرعة الخدمة وتنوع الأطباق بروح فكاهية.",
          highlightEn: "Atmosphere & Dining",
          highlightAr: "تجربة متكاملة للأجواء"
        },
        {
          id: "restaurant-3",
          reelId: "DDNM_6rN_EH",
          url: "https://www.instagram.com/reel/DDNM_6rN_EH/?psln=eXNzbDQ3cnNyaWMx",
          category: "restaurants",
          thumbnailUrl: "/assets/thumbnails/restaurants/restaurant-3.jpg",
          titleEn: "Gourmet Challenge & Feast",
          titleAr: "وليمة استثنائية وتحدي النكهات الشهية",
          descriptionEn: "Generous table spread showcase triggering intense audience food cravings.",
          descriptionAr: "طاولة طعام عامرة بأشهى الأصناف تثير الرغبة الفورية في التجربة والزيارة.",
          highlightEn: "Viral Food Attraction",
          highlightAr: "جاذبية بصرية للطعام"
        },
        {
          id: "restaurant-4",
          reelId: "DGGyOJJNkQb",
          url: "https://www.instagram.com/reel/DGGyOJJNkQb/?obrf=MTN3OXh1dWM4bnV1Zw==",
          category: "restaurants",
          thumbnailUrl: "/assets/thumbnails/restaurants/restaurant-4.jpg",
          titleEn: "Special Menu & Dessert Showcase",
          titleAr: "قائمة خاصة واستعراض أطباق الحلويات",
          descriptionEn: "Focus on signature dessert and drink items with energetic presentation.",
          descriptionAr: "التركيز على أصناف الحلويات والمشروبات المنعشة بأسلوب مبهج وشيّق.",
          highlightEn: "Craving Conversion",
          highlightAr: "تحويل المشاهدة إلى زيارة"
        },
        // Tracked link duplicate (5th supplied item) identified and catalogued with isDuplicate: true
        {
          id: "restaurant-5-duplicate",
          reelId: "DDNM_6rN_EH",
          url: "https://www.instagram.com/reel/DDNM_6rN_EH/?dlrf=eXNzbDQ3cnNyaWMx",
          category: "restaurants",
          thumbnailUrl: "/assets/thumbnails/restaurants/restaurant-3.jpg",
          titleEn: "Gourmet Challenge & Feast (Alternate Tracking Variant)",
          titleAr: "وليمة استثنائية (رابط تتبع إضافي)",
          descriptionEn: "Supplied alternate tracking parameter URL preserved for reference.",
          descriptionAr: "رابط التتبع الإضافي المحفوظ للمرجعية.",
          highlightEn: "Tracking Variant",
          highlightAr: "رابط تتبع إضافي",
          isDuplicate: true
        }
      ]
    }
  },
  opportunities: [
    {
      id: "instagram-reels",
      titleEn: "Dedicated Instagram Reels",
      titleAr: "فيديوهات ريلز مخصصة على إنستغرام",
      subtitleEn: "High-production vertical storytelling with organic product integration.",
      subtitleAr: "سرد قصصي رأسي عالي الجودة مع دمج انسيابي وطبيعي للمنتج أو العلامة.",
      deliverablesEn: [
        "Full creative concept & script aligned with brand guidelines",
        "Direct duo integration with authentic comedy and storytelling",
        "Permanent video post on official ElZuzzat profile",
        "Brand tag & collaborative post capability where approved",
        "Detailed performance metric reporting post-campaign"
      ],
      deliverablesAr: [
        "ابتكار الفكرة الإبداعية وكتابة السيناريو بما يتوافق مع هوية العلامة",
        "ظهور الثنائي المباشر ودمج الرسائل التسويقية بقالب مرح ومحبوب",
        "نشر دائم للفيديو على الحساب الرسمي للزوزات",
        "إشارة مباشرة لحساب العلامة وإمكانية النشر التعاوني (Collab)",
        "تقرير تحليلي مفصل لأداء الحملة ونسب التفاعل بعد النشر"
      ],
      icon: "Film",
      focusEn: "Maximum brand prestige & algorithmic engagement",
      focusAr: "أعلى درجات الظهور والتفاعل الخوارزمي"
    },
    {
      id: "multi-stories",
      titleEn: "Instagram Stories & Link Stickers",
      titleAr: "سلسلة ستوريز تفاعلية مع روابط مباشرة",
      subtitleEn: "Time-sensitive flash promotions, interactive polls, and direct traffic drivers.",
      subtitleAr: "عروض ترويجية سريعة، استطلاعات رأي، وروابط تحويل مباشرة لموقعك أو متجرك.",
      deliverablesEn: [
        "Sequence of 3 to 5 coordinated narrative story slides",
        "Swipe-up / external link sticker directly to brand landing page",
        "Interactive stickers (polls, questions, countdowns)",
        "Real-time swipe and click-through analytics"
      ],
      deliverablesAr: [
        "سلسلة مترابطة من 3 إلى 5 ستوريز متتالية تشرح ميزات العرض",
        "ملصق رابط مباشر ينقل المتابع إلى متجر العلامة أو تطبيقها",
        "ملصقات تفاعلية (استطلاعات، أسئلة، عد تنازلي للعروض)",
        "تقارير دقيقة لنقر الروابط والتحويلات اللحظية"
      ],
      icon: "Sparkles",
      focusEn: "Immediate conversion & instant traffic driver",
      focusAr: "تحفيز الشراء الفوري والزيارات المباشرة"
    },
    {
      id: "tiktok-viral",
      titleEn: "TikTok Viral Short-Form Videos",
      titleAr: "محتوى تيك توك الفيروسي واسع الانتشار",
      subtitleEn: "Trend-aligned short videos tailored for rapid algorithmic amplification.",
      subtitleAr: "مقاطع قصيرة مصممة خصيصاً للتناغم مع تريندات تيك توك والانتشار الفيروسي السريع.",
      deliverablesEn: [
        "Native TikTok format and comedic hooks within first 2 seconds",
        "Trending audio and sound design optimization",
        "Clear brand punchline without looking like an ad",
        "Hashtag integration and pinned promotional comment"
      ],
      deliverablesAr: [
        "تصوير متوافق تماماً مع لغة المنصة وخطاف بصري في أول ثانيتين",
        "استثمار الموسيقى والأصوات الرائجة لرفع معدلات الانتشار",
        "توصيل الرسالة البيعية بسلاسة دون أن تبدو كإعلان تقليدي",
        "تضمين الهاشتاجات المخصصة وتثبيت أول تعليق ترويجي"
      ],
      icon: "TrendingUp",
      focusEn: "Viral discovery & younger demographic impact",
      focusAr: "انتشار فيروسي وجذب فئة الشباب واليافعين"
    },
    {
      id: "facebook-crosspost",
      titleEn: "Facebook Content & Community Reach",
      titleAr: "محتوى فيسبوك والوصول المجتمعي الواسع",
      subtitleEn: "Capturing a massive, highly engaged 4.7M+ follower base across broad demographics.",
      subtitleAr: "استثمار القاعدة الجماهيرية الضخمة (4.7 مليون متابع) للوصول لكافة فئات المجتمع.",
      deliverablesEn: [
        "High-definition video upload directly into Facebook Watch",
        "Engaging post copy with direct links and tracked URLs",
        "High family and community shareability",
        "Access to broader household decision-makers"
      ],
      deliverablesAr: [
        "رفع الفيديو بجودة عالية مع تحسينات المشاهدة عبر فيسبوك",
        "صياغة نص منشور مشوق مع روابط الشراء المباشرة",
        "معدلات مشاركة عائلية ومجتمعية مرتفعة عبر المجموعات",
        "الوصول إلى متخذي قرارات الشراء داخل الأسرة"
      ],
      icon: "Users",
      focusEn: "Massive scale & household purchasing power",
      focusAr: "انتشار جماهيري وقوة شرائية عائلية واسعة"
    },
    {
      id: "campaign-packages",
      titleEn: "Customized Campaign Packages",
      titleAr: "حملات تسويقية متكاملة ومخصصة",
      subtitleEn: "Multi-episode story arcs and seasonal campaign takeovers tailored to brand KPIs.",
      subtitleAr: "سلاسل إعلانية متعددة الحلقات ورعاية مواسم وعروض متكاملة حسب أهداف علامتك.",
      deliverablesEn: [
        "Custom creative ideation workshops with ProMedia directors",
        "Multi-video episodic concepts (teaser, launch, conclusion)",
        "Omni-platform synchronized publishing calendar",
        "Rights for digital advertising whitelisting / dark posting"
      ],
      deliverablesAr: [
        "ورش عمل إبداعية مخصصة مع فريق الإخراج والإنتاج في بروميديا",
        "أفكار سينمائية متعددة المراحل (تشويق، إطلاق رسمي، ختام)",
        "جدول نشر متزامن عبر كافة المنصات الرقمية لتعظيم الأثر",
        "حقوق استخدام المحتوى في الإعلانات الممولة (Whitelisting)"
      ],
      icon: "Award",
      focusEn: "Complete brand transformation & narrative depth",
      focusAr: "بناء حضور تسويقي راسخ وحملات متكاملة الأركان"
    },
    {
      id: "on-ground-activations",
      titleEn: "Cross-Platform & Experiential Activations",
      titleAr: "افتتاح الفروع والتغطيات الميدانية الحية",
      subtitleEn: "On-site celebrity appearances, branch grand openings, and live fan engagements.",
      subtitleAr: "حضور ميداني، تغطيات افتتاح الفروع الكبرى، وفعاليات تفاعلية تجذب الحشود.",
      deliverablesEn: [
        "In-person creator presence at store opening or event",
        "Live on-the-ground stories and behind-the-scenes content",
        "Direct fan interactions and customer photo moments",
        "Post-event highlight reel produced for ongoing brand use"
      ],
      deliverablesAr: [
        "حضور شخصي للثنائي في موقع الافتتاح أو الفعالية التسويقية",
        "تغطية فورية حية وكواليس تجذب الجمهور للموقع الجغرافي",
        "تفاعل مباشر مع الزوار وجلسات تصوير تزيد ولاء العملاء",
        "إنتاج فيديو توثيقي احترافي متكامل للحدث يُسلّم للعلامة"
      ],
      icon: "Globe",
      focusEn: "Footfall surge, live buzz & community presence",
      focusAr: "حشود جماهيرية وتغطية إعلامية تفاعلية مباشرة"
    }
  ],
  packages: [
    {
      id: "full-social-media",
      nameEn: "Full Social Media Package",
      nameAr: "باقة السوشيال ميديا الشاملة",
      tierEn: "Complete Presence (All Platforms)",
      tierAr: "التغطية الشاملة (كافة المنصات)",
      priceAmount: 300000,
      currencyEn: "EGP",
      currencyAr: "جنيه مصري",
      priceDisplayEn: "300,000 EGP",
      priceDisplayAr: "300,000 جنيه مصري",
      platforms: ["facebook", "instagram", "tiktok"],
      descriptionEn: "Comprehensive campaign published across Facebook, Instagram, and TikTok for maximum scale and complete audience coverage.",
      descriptionAr: "حملة إعلانية شاملة تُنشر عبر فيسبوك، إنستغرام، وتيك توك لتحقيق أعلى وصول جماهيري وتغطية كافة الفئات العمرية.",
      recommended: true
    },
    {
      id: "two-platform",
      nameEn: "Two-Platform Package",
      nameAr: "باقة المنصتين",
      tierEn: "Instagram & TikTok",
      tierAr: "إنستغرام وتيك توك",
      priceAmount: 250000,
      currencyEn: "EGP",
      currencyAr: "جنيه مصري",
      priceDisplayEn: "250,000 EGP",
      priceDisplayAr: "250,000 جنيه مصري",
      platforms: ["instagram", "tiktok"],
      descriptionEn: "Focused short-form video package tailored for rapid virality, visual storytelling, and high youth engagement.",
      descriptionAr: "باقة مركزة للفيديوهات الرأسية القصيرة تضمن سرعة الانتشار الفيروسي والتفاعل المرتفع لدى فئة الشباب.",
      recommended: false
    },
    {
      id: "instagram-package",
      nameEn: "Instagram Package",
      nameAr: "باقة إنستغرام",
      tierEn: "Dedicated Instagram",
      tierAr: "مخصصة لإنستغرام",
      priceAmount: 200000,
      currencyEn: "EGP",
      currencyAr: "جنيه مصري",
      priceDisplayEn: "200,000 EGP",
      priceDisplayAr: "200,000 جنيه مصري",
      platforms: ["instagram"],
      descriptionEn: "Dedicated commercial activation on official ElZuzzat Instagram profile targeting an engaged, high-intent audience.",
      descriptionAr: "تغطية إعلانية مخصصة على الحساب الرسمي للزوزات على إنستغرام لاستهداف جمهور متفاعل عالي الاهتمام.",
      recommended: false
    }
  ],
  contactSection: {
    titleEn: "LET'S CREATE SOMETHING POWERFUL.",
    titleAr: "لنصنع معاً نجاحاً استثنائياً.",
    subtitleEn: "Connect your brand with a powerful creator presence through ProMedia.",
    subtitleAr: "اربط علامتك التجارية بحضور إبداعي استثنائي يصل إلى الملايين من خلال بروميديا.",
    actionPromptEn: "ProMedia is the official management and representation channel for ElZuzzat commercial partnerships. Our team assists with creative strategy, campaign structuring, and seamless production delivery.",
    actionPromptAr: "بروميديا هي الجهة الرسمية المعتمدة لإدارة الشراكات والتعاقدات التجارية الخاصة بالزوزات. يتولى فريقنا تطوير الاستراتيجية الإبداعية، هيكلة الحملات، وضمان أعلى معايير الإنتاج الاحترافي.",
    ctaButtonEn: "Request Collaboration Rate Card",
    ctaButtonAr: "طلب بطاقة الأسعار وحجز الحملة"
  }
};
