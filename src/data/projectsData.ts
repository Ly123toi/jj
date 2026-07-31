import { ProjectItem } from '../types';

export const projectItems: ProjectItem[] = [
  // Hanoi University
  {
    id: 'hanoi-1',
    institution: 'hanoi',
    institutionName: { ENG: 'Hanoi University', IT: 'Università di Hanoi', VN: 'Đại học Hà Nội' },
    type: { ENG: 'Group Project', IT: 'Progetto di gruppo', VN: 'Dự án Nhóm' },
    title: { ENG: 'Multifunzione braccialetto', IT: 'Braccialetto multifunzionale', VN: 'Vòng tay đa chức năng' },
    description: {
      ENG: 'Innovative multifunctional bracelet product concept design.',
      IT: 'Design di concetto di un braccialetto multifunzionale innovativo.',
      VN: 'Thiết kế ý tưởng sản phẩm vòng tay đa chức năng sáng tạo.',
    },
    image: '/Screenshot 2026-06-29 184247.png',
  },
  {
    id: 'hanoi-2',
    institution: 'hanoi',
    institutionName: { ENG: 'Hanoi University', IT: 'Università di Hanoi', VN: 'Đại học Hà Nội' },
    type: { ENG: 'Group Presentation', IT: 'Presentazione di gruppo', VN: 'Thuyết trình Nhóm' },
    title: { ENG: 'La baia di Halong', IT: 'La baia di Halong', VN: 'Vịnh Hạ Long' },
    description: {
      ENG: 'Cultural heritage presentation on Halong Bay, Vietnam.',
      IT: 'Presentazione sul patrimonio culturale della Baia di Halong, Vietnam.',
      VN: 'Bài thuyết trình di sản văn hóa Vịnh Hạ Long, Việt Nam.',
    },
    image: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'hanoi-3',
    institution: 'hanoi',
    institutionName: { ENG: 'Hanoi University', IT: 'Università di Hanoi', VN: 'Đại học Hà Nội' },
    type: { ENG: 'Group Presentation', IT: 'Presentazione di gruppo', VN: 'Thuyết trình Nhóm' },
    title: { ENG: 'Sovranità dello Stato', IT: 'Sovranità dello Stato', VN: 'Chủ quyền Nhà nước' },
    description: {
      ENG: 'Academic analysis of state sovereignty and international political discourse.',
      IT: 'Analisi accademica della sovranità statale e del discorso politico internazionale.',
      VN: 'Phân tích học thuật về chủ quyền quốc gia và diễn ngôn chính trị quốc tế.',
    },
    image: '/luat.png',
  },
  {
    id: 'hanoi-4',
    institution: 'hanoi',
    institutionName: { ENG: 'Hanoi University', IT: 'Università di Hanoi', VN: 'Đại học Hà Nội' },
    type: { ENG: 'Group Presentation', IT: 'Presentazione di gruppo', VN: 'Thuyết trình Nhóm' },
    title: { ENG: 'L’etnia Tày', IT: 'L’etnia Tày', VN: 'Dân tộc Tày' },
    description: {
      ENG: 'Ethnographic study on Tay ethnic culture and traditions in Northern Vietnam.',
      IT: 'Studio etnografico sulla cultura e le tradizioni dell’etnia Tay nel Vietnam del Nord.',
      VN: 'Nghiên cứu dân tộc học về văn hóa và truyền thống dân tộc Tày tại miền Bắc Việt Nam.',
    },
    image: '/etnia tay.png',
  },

  // University of Wroclaw
  {
    id: 'wroclaw-1',
    institution: 'wroclaw',
    institutionName: { ENG: 'University of Wroclaw', IT: 'Università di Wroclaw', VN: 'Đại học Wroclaw' },
    type: { ENG: 'Group Project', IT: 'Progetto di gruppo', VN: 'Dự án nhóm' },
    title: { ENG: 'Storyboard for TV commercial', IT: 'Storyboard per uno spot televisivo', VN: 'Storyboard cho TVC quảng cáo' },
    description: {
      ENG: 'Visual storyboard sequence for commercial broadcasting.',
      IT: 'Sequenza di storyboard visivo per uno spot commerciale.',
      VN: 'Kịch bản phân cảnh hình ảnh cho phim quảng cáo truyền hình.',
    },
    image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'wroclaw-2',
    institution: 'wroclaw',
    institutionName: { ENG: 'University of Wroclaw', IT: 'Università di Wroclaw', VN: 'Đại học Wroclaw' },
    type: { ENG: 'Startup pitch deck', IT: 'Pitch deck per una startup', VN: 'Bài thuyết trình khởi nghiệp' },
    title: { ENG: 'Wildlife Guardian: Animal Conservation NGO', IT: 'ONG per la conservazione della fauna selvatica', VN: 'Tổ chức bảo tồn động vật hoang dã (NGO)' },
    description: {
      ENG: 'Comprehensive startup funding pitch deck for wildlife NGO.',
      IT: 'Pitch deck completo per il finanziamento di un’ONG per la fauna selvatica.',
      VN: 'Hồ sơ thuyết trình gọi vốn cho tổ chức phi chính phủ bảo tồn động vật.',
    },
    image: 'https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'wroclaw-3',
    institution: 'wroclaw',
    institutionName: { ENG: 'University of Wroclaw', IT: 'Università di Wroclaw', VN: 'Đại học Wroclaw' },
    type: { ENG: 'Group Feature Article', IT: 'Articolo di gruppo', VN: 'Bài báo nhóm' },
    title: { ENG: 'Wedding in Vietnam', IT: 'Il matrimonio in Vietnam', VN: 'Đám cưới ở Việt Nam' },
    description: {
      ENG: 'Feature journalism article exploring traditional and contemporary Vietnamese weddings.',
      IT: 'Articolo giornalistico sulla tradizione dei matrimoni in Vietnam.',
      VN: 'Bài báo chuyên đề khám phá phong tục đám cưới truyền thống và hiện đại tại Việt Nam.',
    },
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'wroclaw-4',
    institution: 'wroclaw',
    institutionName: { ENG: 'University of Wroclaw', IT: 'Università di Wroclaw', VN: 'Đại học Wroclaw' },
    type: { ENG: 'Group Feature Article', IT: 'Articolo di gruppo', VN: 'Bài báo nhóm' },
    title: { ENG: 'Young people speak up about masculinity', IT: 'I giovani parlano della mascolinità', VN: 'Người trẻ lên tiếng về nam tính' },
    description: {
      ENG: 'Sociological feature investigating modern shifts in youth perception of masculinity.',
      IT: 'Inchiesta sociologica sulla percezione della mascolinità tra i giovani.',
      VN: 'Bài báo xã hội học nghiên cứu nhận thức của giới trẻ về vẻ đẹp nam tính hiện đại.',
    },
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80',
  },

  // University of Padova
  {
    id: 'padova-1',
    institution: 'padova',
    institutionName: { ENG: 'University of Padova', IT: 'Università di Padova', VN: 'Đại học Padova' },
    type: { ENG: 'Group Presentation', IT: 'Presentazione di gruppo', VN: 'Thuyết trình nhóm' },
    title: {
      ENG: 'Cosmetic Surgery among Women: Empowerment or Internalized Racism?',
      IT: 'Chirurgia estetica tra le donne: emancipazione o razzismo interiorizzato?',
      VN: 'Phẫu thuật thẩm mỹ ở phụ nữ: Trao quyền hay phân biệt chủng tộc nội tâm hóa?',
    },
    description: {
      ENG: 'Critical discourse analysis of beauty standards and cosmetic surgery.',
      IT: 'Analisi critica del discorso sugli standard di bellezza e la chirurgia estetica.',
      VN: 'Phân tích diễn ngôn phê phán về chuẩn mực vẻ đẹp và phẫu thuật thẩm mỹ.',
    },
    image: 'https://images.unsplash.com/photo-1512290900673-700232230324?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'padova-2',
    institution: 'padova',
    institutionName: { ENG: 'University of Padova', IT: 'Università di Padova', VN: 'Đại học Padova' },
    type: { ENG: 'Individual Project', IT: 'Progetto individuale', VN: 'Dự án cá nhân' },
    title: { ENG: 'Gesture analysis', IT: 'Analisi dei gesti', VN: 'Phân tích cử chỉ' },
    description: {
      ENG: 'Non-verbal communication study analyzing Italian non-verbal gestures.',
      IT: 'Studio di comunicazione non verbale focalizzato sui gesti italiani.',
      VN: 'Nghiên cứu giao tiếp phi ngôn ngữ phân tích các ngôn ngữ cơ thể và cử chỉ.',
    },
    image: '/Screenshot 2026-07-03 071102.png',
  },
  {
    id: 'padova-3',
    institution: 'padova',
    institutionName: { ENG: 'University of Padova', IT: 'Università di Padova', VN: 'Đại học Padova' },
    type: { ENG: 'Group Project', IT: 'Progetto di gruppo', VN: 'Dự án nhóm' },
    title: { ENG: 'Sitemap for e-commerce website', IT: 'Mappa del sito per un sito di e-commerce', VN: 'Sơ đồ trang web cho website thương mại điện tử' },
    description: {
      ENG: 'E-commerce information architecture blueprint.',
      IT: 'Mappa dell’architettura dell’informazione per e-commerce.',
      VN: 'Sơ đồ kiến trúc thông tin cho nền tảng bán hàng trực tuyến.',
    },
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'padova-4',
    institution: 'padova',
    institutionName: { ENG: 'University of Padova', IT: 'Università di Padova', VN: 'Đại học Padova' },
    type: { ENG: 'Group Presentation', IT: 'Presentazione di gruppo', VN: 'Thuyết trình nhóm' },
    title: { ENG: 'Linguistic Agency & Sentiment Analysis in Online Discourse', IT: 'Agency linguistica e analisi del sentiment nel discorso online', VN: 'Agency ngôn ngữ và phân tích cảm xúc trong diễn ngôn trực tuyến' },
    description: {
      ENG: 'Computational discourse study presentation.',
      IT: 'Presentazione dello studio di analisi computazionale del discorso.',
      VN: 'Bài báo cáo nghiên cứu phân tích cảm xúc và diễn ngôn máy tính.',
    },
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
  },
];
