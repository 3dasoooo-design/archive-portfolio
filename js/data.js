/**
 * GACHON.IA Archive - Master Database
 * 가천대학교 실내건축학과(Interior Architecture) 전체 전시 & 프로젝트 아카이브
 */

window.STUDIO_INFO = {
  name: "GACHON.IA Archive",
  shortName: "GACHON.IA",
  department: "가천대학교 디자인대학 실내건축학과",
  tagline: "인간의 삶을 담는 공간과 지속 가능한 장소를 만듭니다.",
  tel: "+82 (0)31 750 5114",
  email: "ia@gachon.ac.kr",
  instagram: "@gachon_ia_archive",
  addressKr: "경기도 성남시 수정구 성남대로 1342 가천대학교 비전타워",
  addressEn: "Vision Tower, Gachon University, 1342 Seongnam-daero, Sujeong-gu, Seongnam-si, Gyeonggi-do",
  manifesto: [
    { num: "1", text: "가천대학교 디자인대학 실내건축학과입니다." },
    { num: "2", text: "인간의 삶을 담는 공간과 지속 가능한 장소를 만듭니다." },
    { num: "3", text: "예술적 감성과 건축적 구조, 기술의 융합으로 미래 환경을 디자인합니다." }
  ]
};

// ==========================================
// 전체 전시 마스터 디렉토리 (Master Exhibitions Catalog)
// ==========================================
window.EXHIBITIONS_DATA = [
  {
    id: "2026-3rd-external",
    year: "2026",
    title: "3학년 외부전시",
    engTitle: "3rd Year External Exhibition",
    type: "외부전시 (External Show)",
    period: "2026. 10. 15 – 10. 20",
    teamsCount: "18 Teams (A, B, C반)",
    status: "CURRENT",
    link: "exhibition.html?id=2026-3rd-external",
    description: "동시대 브랜드 공간과 라이프스타일을 탐구한 3학년 3개 스튜디오 18개 팀의 외부 연계 전시 아카이브.",
    thumbnail: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: "2026-graduation",
    year: "2026",
    title: "졸업전시회 (Degree Show)",
    engTitle: "4th Year Graduation Exhibition",
    type: "졸업전시 (Graduation)",
    period: "2026. 11. 20 – 11. 26",
    teamsCount: "Scheduled",
    status: "UPCOMING",
    link: "#",
    description: "가천대학교 실내건축학과 4학년 졸업작품 전시회.",
    thumbnail: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: "2025-semester-works",
    year: "2025",
    title: "2학기 종합 과제전",
    engTitle: "Fall Semester Studio Works",
    type: "과제전 (Studio Archive)",
    period: "2025. 12. 10 – 12. 16",
    teamsCount: "24 Teams",
    status: "ARCHIVED",
    link: "#",
    description: "공간 설계 스튜디오 기초 및 심화 과제전 결과물 아카이브.",
    thumbnail: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&auto=format&fit=crop&q=80"
  }
];

// ==========================================
// [2026 3학년 외부전시] 18개 팀 데이터
// ==========================================
window.PROJECTS_DATA = [
  // ==========================================
  // [A반] 6개 팀 (안은희 교수님)
  // ==========================================
  {
    id: "hwayo",
    exhibitionId: "2026-3rd-external",
    classGroup: "A반",
    studio: "A반",
    brand: "화요 (Hwayo)",
    title: "화요",
    members: "장효진, 하은지",
    genre: "Distillery Bar & Heritage Tasting Room",
    category: "Spatial",
    concept: "한국 프리미엄 증류식 소주 화요의 깊은 풍미와 옹기 숙성의 시간을 옻칠과 거친 화강암의 물성으로 번역한 테이스팅 바.",
    thumbnail: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=1600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?w=1600&auto=format&fit=crop&q=80"
    ]
  },
  {
    id: "dongwha",
    exhibitionId: "2026-3rd-external",
    classGroup: "A반",
    studio: "A반",
    brand: "동화약품",
    title: "동화약품",
    members: "김희수, 이지연, 손지후",
    genre: "Heritage Archive & Modern Wellness",
    category: "Branding",
    concept: "대한민국 최초의 제약기업 동화약품의 127년 역사를 아카이빙하고, 현대인의 지친 심신을 치유하는 새로운 약방 공간.",
    thumbnail: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1600&auto=format&fit=crop&q=80"
    ]
  },
  {
    id: "galaxy",
    exhibitionId: "2026-3rd-external",
    classGroup: "A반",
    studio: "A반",
    brand: "삼성 갤럭시 (Samsung Galaxy)",
    title: "삼성 갤럭시",
    members: "김민석, 임동혁, 잠시드",
    genre: "Tech Experience & Future Lab",
    category: "Spatial",
    concept: "모바일 기술과 인간의 감각이 조우하는 미래형 테크 익스피리언스 스페이스. 인공지능과 빛의 반응형 인터랙션 설계.",
    thumbnail: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=1600&auto=format&fit=crop&q=80"
    ]
  },
  {
    id: "gopherwood",
    exhibitionId: "2026-3rd-external",
    classGroup: "A반",
    studio: "A반",
    brand: "고퍼우드 (Gopherwood)",
    title: "고퍼우드",
    members: "김누리, 이수민, 장호연",
    genre: "Acoustic Instrument Showroom",
    category: "Spatial",
    concept: "어쿠스틱 기타의 정교한 목공 디테일과 공명(Resonance)을 입체 공간으로 구현한 사운드 크래프트맨십 쇼룸.",
    thumbnail: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1600&auto=format&fit=crop&q=80"
    ]
  },
  {
    id: "studio-ahn-cho",
    exhibitionId: "2026-3rd-external",
    classGroup: "A반",
    studio: "A반",
    brand: "조예은 프로젝트",
    title: "조예은",
    members: "조예은",
    genre: "Independent Spatial Design",
    category: "Spatial",
    concept: "개인 작업자로서의 깊이 있는 탐구를 담아낸 독립 공간 디자인 기획 및 프로토타입 전시.",
    thumbnail: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&auto=format&fit=crop&q=80"
    ]
  },
  {
    id: "bilguun-team",
    exhibitionId: "2026-3rd-external",
    classGroup: "A반",
    studio: "A반",
    brand: "글로벌 익스체인지",
    title: "빌궁 절러 나문다리",
    members: "빌궁, 절러, 나문다리",
    genre: "Cultural Exchange & Spatial Installation",
    category: "Architectural",
    concept: "국경을 넘는 다문화적 시선과 공간적 조형 언어를 결합한 실험적 공간 인스톨레이션.",
    thumbnail: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&auto=format&fit=crop&q=80"
    ]
  },

  // ==========================================
  // [B반] 5개 팀 (이재석 교수님)
  // ==========================================
  {
    id: "marshall",
    exhibitionId: "2026-3rd-external",
    classGroup: "B반",
    studio: "B반",
    brand: "마샬 (Marshall)",
    title: "마샬",
    members: "송현진, 김보경, 이고은",
    genre: "Audio Showroom & Sound Lounge",
    category: "Spatial",
    concept: "마샬의 아이코닉한 앰프 헤리티지와 아날로그 텍스처를 공간으로 확장한 사운드 몰입형 플래그십 라운지.",
    thumbnail: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=1600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=1600&auto=format&fit=crop&q=80"
    ]
  },
  {
    id: "tekla",
    exhibitionId: "2026-3rd-external",
    classGroup: "B반",
    studio: "B반",
    brand: "TEKLA",
    title: "TEKLA",
    members: "김민서, 이설아, 이예원",
    genre: "Home Textile & Sanctuary",
    category: "Spatial",
    concept: "북유럽 코펜하겐의 정제된 색채와 고요한 빛을 머금은 패브릭 쇼룸. 일상에 휴식을 선사하는 순수한 물성의 안식처.",
    thumbnail: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1600&auto=format&fit=crop&q=80"
    ]
  },
  {
    id: "hanyul",
    exhibitionId: "2026-3rd-external",
    classGroup: "B반",
    studio: "B반",
    brand: "한율 (Hanyul)",
    title: "한율",
    members: "조하나, 김민서",
    genre: "Beauty & Botanical Sanctuary",
    category: "Branding",
    concept: "한국의 사계절과 땅의 생명력을 담아낸 자연주의 뷰티 스페이스. 흙과 한지, 볏짚의 따스한 온기로 채운 웰니스 리트릿.",
    thumbnail: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800&auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=1600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?w=1600&auto=format&fit=crop&q=80"
    ]
  },
  {
    id: "gachi-ieum",
    exhibitionId: "2026-3rd-external",
    classGroup: "B반",
    studio: "B반",
    brand: "가치이음",
    title: "가치이음",
    members: "명나연, 권은진",
    genre: "Community Hub & Social Platform",
    category: "Spatial",
    concept: "세대와 지역을 연결하고 일상의 따뜻한 온기를 나누는 지속가능한 소셜 커뮤니티 복합 공간 기획.",
    thumbnail: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=1600&auto=format&fit=crop&q=80"
    ]
  },
  {
    id: "karrot",
    exhibitionId: "2026-3rd-external",
    classGroup: "B반",
    studio: "B반",
    brand: "당근 (Karrot)",
    title: "당근",
    members: "최소윤, 정진석, 박태준",
    genre: "Local Offline Lounge",
    category: "Spatial",
    concept: "온라인 이웃 연결 플랫폼 당근의 첫 오프라인 거점. 신뢰와 온기를 바탕으로 동네 이웃이 모이고 교류하는 공유 라운지.",
    thumbnail: "https://images.unsplash.com/photo-1517502884422-41eaead166d4?w=800&auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1517502884422-41eaead166d4?w=1600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1600&auto=format&fit=crop&q=80"
    ]
  },

  // ==========================================
  // [C반] 7개 팀 (이길호 교수님)
  // ==========================================
  {
    id: "ggott",
    exhibitionId: "2026-3rd-external",
    classGroup: "C반",
    studio: "C반",
    brand: "ggott",
    title: "ggott",
    members: "김민준, 안상영",
    genre: "Botanical Atelier & Planterior",
    category: "Spatial",
    concept: "자연의 식생과 조형미를 도시 실내 공간으로 끌어들인 감각적 플랜테리어 아틀리에 & 바이오필릭 쇼룸.",
    thumbnail: "https://images.unsplash.com/photo-1445116572660-238429888805?w=800&auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1445116572660-238429888805?w=1600&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=1600&auto=format&fit=crop&q=80"
    ]
  },
  {
    id: "dedar",
    exhibitionId: "2026-3rd-external",
    classGroup: "C반",
    studio: "C반",
    brand: "DEDAR",
    title: "DEDAR",
    members: "이새영, 박정민",
    genre: "Luxury Italian Textile Showroom",
    category: "Spatial",
    concept: "이탈리아 밀라노 하이엔드 텍스타일 브랜드 DEDAR의 대담한 패턴과 우아한 실크 물성을 극대화한 패브릭 아카이브.",
    thumbnail: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1600&auto=format&fit=crop&q=80"
    ]
  },
  {
    id: "medicube",
    exhibitionId: "2026-3rd-external",
    classGroup: "C반",
    studio: "C반",
    brand: "메디큐브 (Medicube)",
    title: "메디큐브",
    members: "임주현, 복선우, 이재진",
    genre: "Derma Aesthetic Clinic Lounge",
    category: "Spatial",
    concept: "클리니컬한 신뢰감과 감각적인 힐링을 선사하는 메디컬 뷰티테크 플래그십. 미래형 스킨케어 진단 및 라운지.",
    thumbnail: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=1600&auto=format&fit=crop&q=80"
    ]
  },
  {
    id: "headspace",
    exhibitionId: "2026-3rd-external",
    classGroup: "C반",
    studio: "C반",
    brand: "헤드스페이스 (Headspace)",
    title: "헤드스페이스",
    members: "최규민, 최서림",
    genre: "Mindfulness & Meditation Retreat",
    category: "Spatial",
    concept: "도심 속 과부하된 뇌를 비워내는 명상과 마인드풀니스 웰니스 리트릿. 빛과 어둠의 절제된 대비를 통한 내면의 쉼.",
    thumbnail: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1600&auto=format&fit=crop&q=80"
    ]
  },
  {
    id: "yoshida-porter",
    exhibitionId: "2026-3rd-external",
    classGroup: "C반",
    studio: "C반",
    brand: "요시다 포터 (Yoshida Porter)",
    title: "요시다 포터",
    members: "강홍인, 장도연",
    genre: "Craftsmanship Luggage Flagship",
    category: "Spatial",
    concept: "일침입혼(一針入魂)의 장인정신. 나일론 본딩 원단의 질감과 기능적 금속 모듈 시스템을 공간 요소로 전면화한 매장.",
    thumbnail: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&auto=format&fit=crop&q=80"
    ]
  },
  {
    id: "bang-olufsen",
    exhibitionId: "2026-3rd-external",
    classGroup: "C반",
    studio: "C반",
    brand: "BANG & OLUFSEN",
    title: "BANG & OLUFSEN",
    members: "김동욱, 한유빈",
    genre: "Acoustic Art Gallery",
    category: "Spatial",
    concept: "덴마크 명품 오디오 뱅앤올룹슨의 정밀한 알루미늄 가공 미학과 풍부한 음향을 하나의 예술품처럼 감상하는 갤러리형 쇼룸.",
    thumbnail: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&auto=format&fit=crop&q=80"
    ]
  },
  {
    id: "palace",
    exhibitionId: "2026-3rd-external",
    classGroup: "C반",
    studio: "C반",
    brand: "PALACE (팔라스)",
    title: "PALACE",
    members: "류채민, 이현채",
    genre: "Skate Culture & Streetwear Flagship",
    category: "Spatial",
    concept: "런던 스트리트 스케이트보드 컬처의 반항적 위트와 거친 인더스트리얼 마감재를 해체주의적 구조로 연출한 플래그십 스토어.",
    thumbnail: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&auto=format&fit=crop&q=80",
    images: [
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1600&auto=format&fit=crop&q=80"
    ]
  }
];
