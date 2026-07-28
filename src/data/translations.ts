import { Language } from '../types';

export const translations = {
  nav: {
    home: { ENG: 'Home', IT: 'Home', VN: 'Trang chủ' },
    about: { ENG: 'About', IT: 'Chi sono', VN: 'Giới thiệu' },
    portfolio: { ENG: 'Portfolio', IT: 'Portfolio', VN: 'Hồ sơ' },
    research: { ENG: 'Research', IT: 'Ricerca', VN: 'Nghiên cứu' },
    projects: { ENG: 'Projects', IT: 'Progetti', VN: 'Dự án' },
    publications: { ENG: 'Publications', IT: 'Pubblicazioni', VN: 'Công bố' },
    contacts: { ENG: 'Contacts', IT: 'Contatti', VN: 'Liên hệ' },
    downloadCV: { ENG: 'Download CV', IT: 'Scarica il CV', VN: 'Tải CV' },
  },
  hero: {
    badge: {
      ENG: 'MEDIA RESEARCHER & COMMUNICATION SPECIALIST',
      IT: 'RICERCATRICE NEL CAMPO DEI MEDIA E SPECIALISTA DELLA COMUNICAZIONE',
      VN: 'CHUYÊN GIA VÀ NGHIÊN CỨU TRUYỀN THÔNG',
    },
    name: 'Khanh Ly Vu',
    tags: {
      ENG: 'Media Research | Content Creator | Storyteller',
      IT: 'Ricerca sui Media | Creatrice di Contenuti | Storytelling',
      VN: 'Nghiên cứu truyền thông | Nhà sáng tạo nội dung | Người kể chuyện',
    },
    description: {
      ENG: 'With experience in media research, strategic communication, content creation, video production, digital marketing, and UX design, I develop communication solutions that are both analytical and audience-focused.',
      IT: "Con esperienza nella ricerca sui media, nella comunicazione strategica, nella creazione di contenuti, nella produzione video, nel marketing digitale e nel design UX, sviluppo soluzioni di comunicazione basate sull'analisi e orientate al pubblico.",
      VN: 'Với kinh nghiệm trong nghiên cứu truyền thông, truyền thông chiến lược, sáng tạo nội dung, sản xuất video, tiếp thị số và thiết kế UX, tôi phát triển các giải pháp truyền thông dựa trên tư duy phân tích và hướng đến nhu cầu của đối tượng mục tiêu.',
    },
    exploreBtn: { ENG: 'Explore My Work', IT: 'Scopri i miei progetti', VN: 'Khám phá dự án của tôi' },
    contactBtn: { ENG: 'Contact me', IT: 'Contattami', VN: 'Liên hệ với tôi' },
  },
  aboutShort: {
    badge: { ENG: 'ABOUT ME', IT: 'CHI SONO', VN: 'GIỚI THIỆU' },
    heading: { ENG: 'Hello, I’m Ly.', IT: 'Ciao, sono Ly.', VN: 'Xin chào, tôi là Ly.' },
    text: {
      ENG: 'I specialize in media research, strategic communication, and digital content development, combining academic insight with practical communication solutions. My work focuses on understanding how media shapes public perception and transforming research into accessible, engaging, and impactful communication.',
      IT: "Sono specializzata nella ricerca sui media, nella comunicazione strategica e nello sviluppo di contenuti digitali, combinando approfondimento accademico e soluzioni di comunicazione concrete. Il mio lavoro si concentra sull'analisi di come i media influenzano la percezione pubblica e sulla trasformazione della ricerca in una comunicazione accessibile, coinvolgente e di impatto.",
      VN: 'Tôi chuyên về nghiên cứu truyền thông, truyền thông chiến lược và phát triển nội dung số, kết hợp nền tảng học thuật với các giải pháp truyền thông thực tiễn. Công việc của tôi tập trung vào việc tìm hiểu cách truyền thông định hình nhận thức của công chúng, đồng thời chuyển hóa các kết quả nghiên cứu thành những nội dung dễ tiếp cận, hấp dẫn và có sức lan tỏa.',
    },
    timeline: [
      {
        year: '2024 - 2026',
        title: {
          ENG: 'Research & International Collaboration',
          IT: 'Ricerca e Collaborazione Internazionale',
          VN: 'Nghiên cứu & Hợp tác Quốc tế',
        },
        desc: {
          ENG: 'Media research, Erasmus+, academic projects across Europe.',
          IT: 'Ricerca sui media, programmi Erasmus+ e progetti accademici in collaborazione con partner europei.',
          VN: 'Nghiên cứu truyền thông, chương trình Erasmus+ và các dự án học thuật hợp tác với các đối tác trên khắp châu Âu.',
        },
      },
      {
        year: '2023 - 2024',
        title: {
          ENG: 'Communication & Content Strategy',
          IT: 'Comunicazione e Strategia dei Contenuti',
          VN: 'Truyền thông & Chiến lược Nội dung',
        },
        desc: {
          ENG: 'Content localization, digital storytelling, and communication campaigns.',
          IT: 'Localizzazione dei contenuti, storytelling digitale e campagne di comunicazione.',
          VN: 'Bản địa hóa nội dung, digital storytelling và phát triển các chiến dịch truyền thông.',
        },
      },
      {
        year: '2020 - 2023',
        title: {
          ENG: 'Creative & Digital Media',
          IT: 'Media Creativi e Digitali',
          VN: 'Truyền thông Sáng tạo & Kỹ thuật số',
        },
        desc: {
          ENG: 'Video production, copywriting, and social media content development.',
          IT: 'Produzione video, copywriting e creazione di contenuti per i social media.',
          VN: 'Sản xuất video, viết nội dung (copywriting) và phát triển nội dung cho mạng xã hội.',
        },
      },
    ],
    moreBtn: { ENG: 'Get to know more about me!', IT: 'Scopri di più su di me!', VN: 'Tìm hiểu thêm về tôi' },
  },
  aboutDetailed: {
    title: { ENG: 'About', IT: 'Chi sono', VN: 'Giới thiệu' },
    subtitle: {
      ENG: 'Everything there is to know about me',
      IT: "Tutto quello che c'è da sapere su di me",
      VN: 'Mọi điều bạn cần biết về tôi',
    },
    educationHeading: { ENG: 'EDUCATION', IT: 'ISTRUZIONE', VN: 'HỌC VẤN' },
    educationItems: [
      {
        period: '2013 - 2016',
        desc: {
          ENG: 'Graduated with Distinction from Le Quy Don HS',
          IT: 'Diplomata con lode presso il Liceo Le Quy Don',
          VN: 'Tốt nghiệp loại Giỏi tại trường THPT Lê Quý Đôn',
        },
      },
      {
        period: '2016 - 2020',
        desc: {
          ENG: 'Graduated with Distinction from Hanoi University',
          IT: "Laureata con lode presso l'Università di Hanoi",
          VN: 'Tốt nghiệp loại Giỏi tại Đại học Hà Nội',
        },
      },
      {
        period: '2024 - 2025',
        desc: {
          ENG: 'Studied abroad at the University of Wroclaw',
          IT: "Studio all'estero presso l'Università di Breslavia",
          VN: 'Học tập tại trường Đại học Wroclaw - Ba Lan',
        },
      },
      {
        period: '2024 - 2025',
        desc: {
          ENG: 'Enrolled in Erasmus Exchange Program',
          IT: 'Partecipazione al Programma Erasmus+',
          VN: 'Tham gia chương trình trao đổi Erasmus tại Italia',
        },
      },
      {
        period: '2026',
        desc: {
          ENG: 'Graduated from University of Wroclaw',
          IT: "Laureata presso l'Università di Wroclaw",
          VN: 'Tốt nghiệp trường Đại học Wrocław - Ba Lan',
        },
      },
    ],
    honors: [
      {
        ENG: '2016: Admitted as the Top-Ranked Student to the Italian Studies Program, Hanoi University',
        IT: "2016: Ammessa come prima classificata al Corso di Laurea in Studi Italiani dell'Università di Hanoi.",
        VN: '2016: Trúng tuyển thủ khoa ngành Ngôn ngữ Ý - Đại học Hà Nội',
      },
      {
        ENG: '2016 – 2020: Awarded Academic Scholarships for Four Consecutive Years at Hanoi University',
        IT: "2016 – 2020: Assegnataria di borse di studio al merito per quattro anni consecutivi presso l'Università di Hanoi.",
        VN: '2016 – 2020: Nhận học bổng khuyến khích học tập trong 4 năm liên tiếp tại Đại học Hà Nội',
      },
      {
        ENG: '2020: Graduated as the Valedictorian of the Italian Studies Program, Hanoi University',
        IT: "2020: Laureata come migliore studentessa del Corso di Laurea in Studi Italiani dell'Università di Hanoi.",
        VN: '2020: Tốt nghiệp với danh hiệu Thủ khoa đầu ra ngành Ngôn ngữ Ý - Đại học Hà Nội',
      },
      {
        ENG: '2024: Awarded the Rector’s Scholarship at the University of Wrocław',
        IT: "2024: Vincitrice della Borsa di Studio del Rettore presso l'Università di Breslavia.",
        VN: '2024: Nhận Học bổng của Hiệu trưởng tại Đại học Wroclaw',
      },
      {
        ENG: '2025: Awarded the Erasmus+ Exchange Scholarship',
        IT: '2025: Vincitrice della borsa di studio Erasmus+ per il programma di mobilità internazionale.',
        VN: '2025: Nhận Học bổng trao đổi Erasmus+',
      },
    ],
    skillsHeading: { ENG: 'SKILLS & TOOLS', IT: 'COMPETENZE E STRUMENTI', VN: 'KỸ NĂNG & CÔNG CỤ' },
    skillsBars: [
      { name: { ENG: 'Content Creation', IT: 'Creazione di contenuti', VN: 'Sáng tạo nội dung' }, percent: 90 },
      { name: { ENG: 'Digital Marketing', IT: 'Marketing digitale', VN: 'Tiếp thị số (Digital Marketing)' }, percent: 85 },
      { name: { ENG: 'UI/UX Design', IT: 'Design UI/UX', VN: 'Thiết kế UI/UX' }, percent: 75 },
      { name: { ENG: 'Video Production', IT: 'Produzione video', VN: 'Sản xuất video' }, percent: 88 },
      { name: { ENG: 'E-commerce & Business', IT: 'E-commerce e Business', VN: 'Thương mại điện tử & Kinh doanh' }, percent: 70 },
    ],
    languagesList: {
      ENG: ['Vietnamese: Native', 'English: 8.0 IELTS (C1)', 'Italian: B2', 'Polish: A2'],
      IT: ['Vietnamita: Madrelingua', 'Inglese: IELTS 8.0 (C1)', 'Italiano: B2', 'Polacco: A2'],
      VN: ['Tiếng Việt: Bản ngữ', 'Tiếng Anh: IELTS 8.0 (Trình độ C1)', 'Tiếng Ý: B2', 'Tiếng Ba Lan: A2'],
    },
    toolsList: [
      {
        ENG: 'Microsoft Office and Google Workspace',
        IT: 'Microsoft Office e Google Workspace',
        VN: 'Microsoft Office và Google Workspace',
      },
      {
        ENG: 'AI Tools (ChatGPT, Claude, Gemini)',
        IT: 'Strumenti di IA (ChatGPT, Claude, Gemini)',
        VN: 'Công cụ AI (ChatGPT, Claude, Gemini)',
      },
      {
        ENG: 'Analytical tools (Google Analytics, Meta Business Suite, Semrush, Google Search Console)',
        IT: 'Strumenti di analisi (Google Analytics, Meta Business Suite, Semrush, Google Search Console)',
        VN: 'Công cụ phân tích dữ liệu (Google Analytics, Meta Business Suite, Semrush, Google Search Console)',
      },
      {
        ENG: 'Design tools (Canva, Figma, Adobe Illustrator, Adobe Photoshop)',
        IT: 'Strumenti di progettazione (Canva, Figma, Adobe Illustrator, Adobe Photoshop)',
        VN: 'Công cụ thiết kế (Canva, Figma, Adobe Illustrator, Adobe Photoshop)',
      },
      {
        ENG: 'Video editing tools (CapCut, After Effects, Adobe Premiere Pro, DaVinci Resolve, MadMapper)',
        IT: 'Software di montaggio video (CapCut, After Effects, Adobe Premiere Pro, DaVinci Resolve, MadMapper)',
        VN: 'Công cụ chỉnh sửa video (CapCut, After Effects, Adobe Premiere Pro, DaVinci Resolve, MadMapper)',
      },
      {
        ENG: 'E-commerce platforms (Shopify, Etsy)',
        IT: 'Piattaforme di e-commerce (Shopify, Etsy)',
        VN: 'Nền tảng thương mại điện tử (Shopify, Etsy)',
      },
    ],
    interestsHeading: { ENG: 'INTERESTS & HOBBIES', IT: 'INTERESSI E HOBBY', VN: 'SỞ THÍCH & MỐI QUAN TÂM' },
    interestCategories: [
      {
        title: { ENG: 'Academic interests', IT: 'Interessi accademici', VN: 'Học thuật' },
        items: [
          { ENG: 'Disability studies', IT: 'Studi sulla disabilità', VN: 'Nghiên cứu về người khuyết tật' },
          { ENG: 'Digital media', IT: 'Media digitali', VN: 'Truyền thông số' },
          { ENG: 'Media discourse analysis', IT: 'Analisi del discorso mediatico', VN: 'Phân tích diễn ngôn truyền thông' },
          { ENG: 'Gender studies', IT: 'Studi di genere', VN: 'Nghiên cứu giới' },
          { ENG: 'Social media communication', IT: 'Comunicazione sui social media', VN: 'Truyền thông mạng xã hội' },
        ],
      },
      {
        title: { ENG: 'Professional interests', IT: 'Interessi professionali', VN: 'Chuyên môn' },
        items: [
          { ENG: 'Digital storytelling', IT: 'Storytelling digitale', VN: 'Kể chuyện số (Digital Storytelling)' },
          { ENG: 'Inclusive design', IT: 'Design inclusivo', VN: 'Thiết kế hòa nhập' },
          { ENG: 'Content strategy', IT: 'Strategia dei contenuti', VN: 'Chiến lược nội dung' },
          { ENG: 'AI in communication', IT: 'Intelligenza artificiale nella comunicazione', VN: 'Ứng dụng AI trong truyền thông' },
          { ENG: 'Digital marketing trends', IT: 'Tendenze del marketing digitale', VN: 'Xu hướng tiếp thị số' },
        ],
      },
      {
        title: { ENG: 'Creative interests', IT: 'Interessi creativi', VN: 'Sáng tạo' },
        items: [
          { ENG: 'Digital Drawing', IT: 'Disegno digitale', VN: 'Vẽ kỹ thuật số' },
          { ENG: 'Origami', IT: 'Origami', VN: 'Nghệ thuật gấp giấy (Origami)' },
          { ENG: 'Creative Writing', IT: 'Scrittura creativa', VN: 'Viết sáng tạo' },
          { ENG: 'Travel filmmaking', IT: 'Produzione di video di viaggio', VN: 'Làm phim du lịch' },
          { ENG: 'Visual storytelling', IT: 'Storytelling visivo', VN: 'Kể chuyện bằng hình ảnh' },
        ],
      },
      {
        title: { ENG: 'Personal interests', IT: 'Interessi personali', VN: 'Cá nhân' },
        items: [
          { ENG: 'Cultural Exploration', IT: 'Esplorazione culturale', VN: 'Khám phá văn hóa' },
          { ENG: 'Language Learning', IT: 'Apprendimento delle lingue', VN: 'Học ngoại ngữ' },
          { ENG: 'Travel Documentation', IT: 'Documentazione di viaggio', VN: 'Ghi chép và lưu giữ hành trình du lịch' },
          { ENG: 'Cinema & Music', IT: 'Cinema e musica', VN: 'Điện ảnh & Âm nhạc' },
          { ENG: 'Nature & Outdoor', IT: 'Natura e attività all’aperto', VN: 'Thiên nhiên & Hoạt động ngoài trời' },
        ],
      },
    ],
    degreesHeading: { ENG: 'DEGREES & CERTIFICATES', IT: 'TITOLI DI STUDIO E CERTIFICAZIONI', VN: 'BẰNG CẤP & CHỨNG CHỈ' },
    degreesList: [
      {
        title: { ENG: 'Bachelor’s Degree in Italian Studies', IT: 'Laurea triennale in Studi Italiani', VN: 'Cử nhân Ngôn ngữ Ý' },
        issuer: 'Hanoi University',
      },
      {
        title: { ENG: 'Master’s Degree in Media Content Creation', IT: 'Laurea magistrale in Creazione di Contenuti per i Media', VN: 'Thạc sĩ Truyền thông & Sáng tạo Nội dung' },
        issuer: 'University of Wroclaw',
      },
      {
        title: { ENG: 'Certificate Coursera: CapCut for beginners', IT: 'Certificazione Coursera: CapCut per principianti', VN: 'Chứng chỉ Coursera: CapCut dành cho người mới bắt đầu' },
        issuer: 'Coursera',
      },
      {
        title: { ENG: 'Certificate Coursera: Iconic Logo Design', IT: 'Certificazione Coursera: Progettazione di loghi iconici', VN: 'Chứng chỉ Coursera: Thiết kế Logo Biểu tượng' },
        issuer: 'Coursera',
      },
      {
        title: { ENG: 'Certificate Coursera: Logo Design: From Concept to Client-Approved Work', IT: 'Certificazione Coursera: Progettazione di loghi – Dal concept al lavoro approvato dal cliente', VN: 'Chứng chỉ Coursera: Thiết kế Logo – Từ Ý tưởng đến Sản phẩm được Khách hàng Phê duyệt' },
        issuer: 'Coursera',
      },
      {
        title: { ENG: 'Certificate Coursera: Graphic Design (CalArts)', IT: 'Certificazione Coursera: Graphic Design (CalArts)', VN: 'Chứng chỉ Coursera: Thiết kế Đồ họa (CalArts)' },
        issuer: 'Coursera / CalArts',
      },
      {
        title: { ENG: 'Certificate Coursera: Google UX Design', IT: 'Certificazione Coursera: Google UX Design', VN: 'Chứng chỉ Coursera: Google UX Design' },
        issuer: 'Coursera / Google',
      },
      {
        title: { ENG: 'Certificate Coursera: Digital Marketing with Canva', IT: 'Certificazione Coursera: Marketing digitale con Canva', VN: 'Chứng chỉ Coursera: Tiếp thị số với Canva' },
        issuer: 'Coursera',
      },
    ],
    artworkHeading: { ENG: 'MY ARTWORK', IT: 'LE MIE OPERE', VN: 'TÁC PHẨM CỦA TÔI' },
  },
  portfolio: {
    heading: { ENG: 'Portfolio', IT: 'Portfolio', VN: 'Danh mục dự án' },
    subheading: {
      ENG: 'A collection of my creative work.',
      IT: 'Una raccolta dei miei lavori creativi.',
      VN: 'Tổng hợp các dự án sáng tạo của tôi.',
    },
    categories: {
      content: { ENG: 'CONTENT CREATION', IT: 'CREAZIONE DI CONTENUTI', VN: 'SÁNG TẠO NỘI DUNG' },
      marketing: { ENG: 'DIGITAL MARKETING', IT: 'MARKETING DIGITALE', VN: 'TIẾP THỊ SỐ' },
      uiux: { ENG: 'UI/UX DESIGN', IT: 'PROGETTAZIONE UI/UX', VN: 'THIẾT KẾ UI/UX' },
      ai: { ENG: 'AI AUTOMATION', IT: 'AUTOMAZIONE AI', VN: 'TỰ ĐỘNG HÓA AI' },
      video: { ENG: 'VIDEO PRODUCTION', IT: 'PRODUZIONE VIDEO', VN: 'SẢN XUẤT VIDEO' },
      ecommerce: { ENG: 'E-COMMERCE & BUSINESS', IT: 'E-COMMERCE E BUSINESS', VN: 'THƯƠNG MẠI ĐIỆN TỬ & KINH DOANH' },
    },
    viewFullFileBtn: { ENG: 'View full file', IT: 'Visualizza il file completo', VN: 'Xem toàn bộ file' },
  },
  research: {
    heading: { ENG: 'Research', IT: 'Ricerca', VN: 'Nghiên cứu' },
    subheading: {
      ENG: 'Exploring media, disability and culture',
      IT: 'Esplorando media, disabilità e cultura',
      VN: 'Khám phá truyền thông, nghiên cứu về người khuyết tật và văn hóa',
    },
    tabs: {
      thesis: { ENG: 'Master’s thesis', IT: 'Tesi di Laurea Magistrale', VN: 'Luận văn Thạc sĩ' },
      media: { ENG: 'Media studies', IT: 'Studi sui Media', VN: 'Nghiên cứu Truyền thông' },
      university: { ENG: 'University research', IT: 'Ricerca Universitaria', VN: 'Nghiên cứu Đại học' },
    },
    viewAbstractBtn: { ENG: 'View abstract', IT: "Leggi l'abstract", VN: 'Xem tóm tắt' },
  },
  projects: {
    heading: { ENG: 'Projects', IT: 'Progetti', VN: 'Dự án' },
    subheading: {
      ENG: 'Ideas, collaboration and products',
      IT: 'Idee, collaborazioni e progetti',
      VN: 'Ý tưởng, hợp tác và sản phẩm',
    },
    tabs: {
      hanoi: { ENG: 'Hanoi University', IT: 'Università di Hanoi', VN: 'Đại học Hà Nội' },
      wroclaw: { ENG: 'University of Wroclaw', IT: 'Università di Wroclaw', VN: 'Đại học Wroclaw' },
      padova: { ENG: 'University of Padova', IT: 'Università di Padova', VN: 'Đại học Padova' },
    },
  },
  publications: {
    heading: { ENG: 'Publications', IT: 'Pubblicazioni', VN: 'Công bố' },
    subheading: {
      ENG: 'Academic papers, research articles, and localized media publications.',
      IT: 'Articoli accademici, ricerche e pubblicazioni mediatiche localizzate.',
      VN: 'Bài báo học thuật, báo cáo nghiên cứu và xuất bản truyền thông.',
    },
  },
  contact: {
    heading: { ENG: 'Contact', IT: 'Contatti', VN: 'Liên hệ' },
    subheading: { ENG: 'Let’s connect!', IT: 'Restiamo in contatto!', VN: 'Liên hệ với tôi' },
    emailLabel: { ENG: 'Email', IT: 'Email', VN: 'Email' },
    phoneLabel: { ENG: 'Phone', IT: 'Telefono', VN: 'Số điện thoại' },
    linkedInLabel: { ENG: 'LinkedIn', IT: 'LinkedIn', VN: 'LinkedIn' },
    locationLabel: { ENG: 'Location', IT: 'Posizione', VN: 'Vị trí' },
    locationValue: { ENG: 'Ferrara, Italy', IT: 'Ferrara, Italia', VN: 'Ferrara, Ý' },
    downloadCV: { ENG: 'Download CV', IT: 'Scarica il CV', VN: 'Tải CV' },
    formName: { ENG: 'Your Name', IT: 'Il tuo nome', VN: 'Họ và tên' },
    formEmail: { ENG: 'Your Email', IT: 'La tua email', VN: 'Email của bạn' },
    formMessage: { ENG: 'Your Message', IT: 'Il tuo messaggio', VN: 'Lời nhắn' },
    sendBtn: { ENG: 'Send Message', IT: 'Invia messaggio', VN: 'Gửi tin nhắn' },
    successMsg: {
      ENG: 'Thank you! Your message has been sent successfully.',
      IT: 'Grazie! Il tuo messaggio è stato inviato con successo.',
      VN: 'Cảm ơn bạn! Tin nhắn của bạn đã được gửi thành công.',
    },
  },
};
