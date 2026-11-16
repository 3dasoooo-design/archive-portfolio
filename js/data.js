/**
 * GACHON.IA Archive - Master Database
 * 가천대학교 실내건축학과(Interior Architecture) 전체 전시 & 프로젝트 아카이브
 */

window.STUDIO_INFO = {
  name: "GACHON.IA Archive",
  shortName: "GACHON.IA",
  department: "가천대학교 공과대학 실내건축학과",
  tagline: "인간의 삶을 담는 공간과 지속 가능한 장소를 만듭니다.",
  tel: "+82 (0)31 750 5114",
  email: "ia@gachon.ac.kr",
  instagram: "@gachon_ia_archive",
  addressKr: "경기도 성남시 수정구 성남대로 1342 가천대학교 비전타워",
  addressEn: "Vision Tower, Gachon University, 1342 Seongnam-daero, Sujeong-gu, Seongnam-si, Gyeonggi-do",
  manifesto: [
    { num: "1", text: "가천대학교 공과대학 실내건축학과입니다." },
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
    thumbnail: "assets/lofi_receipt.png"
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
    description: "소스 받으면 수정하여 올리겠습니다",
    thumbnail: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: "2026-2nd-studio",
    year: "2026",
    title: "2학년 과제전",
    engTitle: "2nd Year Studio Works",
    type: "과제전 (Studio Works)",
    period: "2026",
    teamsCount: "Scheduled",
    status: "UPCOMING",
    link: "#",
    description: "소스 받으면 수정하여 올리겠습니다",
    thumbnail: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&auto=format&fit=crop&q=80"
  },
  {
    id: "2026-3rd-studio",
    year: "2026",
    title: "3학년 과제전",
    engTitle: "3rd Year Studio Works",
    type: "과제전 (Studio Works)",
    period: "2026",
    teamsCount: "Scheduled",
    status: "UPCOMING",
    link: "#",
    description: "소스 받으면 수정하여 올리겠습니다",
    thumbnail: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&auto=format&fit=crop&q=80"
  }
];

// ==========================================
// [2026 3학년 외부전시] 17개 팀 데이터
// ==========================================
window.PROJECTS_DATA = [
  // ==========================================
  // [A반] 5개 팀 (안은희 교수님)
  // ==========================================
  {
    id: "hwayo",
    exhibitionId: "2026-3rd-external",
    classGroup: "A반",
    studio: "A반",
    brand: "화요 (Hwayo)",
    title: "화요담",
    members: "장효진, 하은지",
    genre: "Flagship Store & Heritage Dining Space",
    category: "Spatial",
    concept: "화요는 광주요의 도기에 우리 음식과 술을 함께 즐기자는 철학에서 탄생한 브랜드이다. 본 프로젝트는 이러한 브랜드의 정체성을 ‘어울림’이라는 공간적 가치로 확장하여, 사람과 음식, 술이 함께 어우러지는 플래그십 스토어를 제안한다. 브랜드명 ‘화요’의 불을 모티브로 한 디자인을 통해 타오르는 생동감과 함께 나누는 즐거움을 담아내며, 흙과 불, 물과 빛 등 자연적 요소를 공간에 녹여 브랜드의 본질을 표현한다.",
    receiptImg: "assets/hwayo_receipt.png",
    thumbnail: "assets/hwayo_receipt.png",
    images: [
      "assets/hwayo_receipt.png"
    ]
  },
  {
    id: "dongwha",
    exhibitionId: "2026-3rd-external",
    classGroup: "A반",
    studio: "A반",
    brand: "동화약품",
    title: "호—: 우리를 낫게 했던 동화의 바람",
    members: "김희수, 손지후, 이지연",
    genre: "Heritage Archive & Modern Wellness",
    category: "Branding",
    concept: "어린 시절 상처에 불어주시던 어머니의 “호—”에는 아픔을 달래는 따뜻한 돌봄이 담겨 있었다. 동화약품은 그 기억을 이어받아 지친 현대인에게 회복의 쉼을 제공한다. 갈대의 유연함과 돌의 원초성을 통해 보이지 않는 ‘호—’의 바람을 공간으로 구현한다. 가시적인 지상에는 육체적 회복을, 비가시적인 지하에는 정신적 회복을 담아 서로 다른 치유의 층위를 구성하고, 이를 통해 어머니의 따뜻한 돌봄을 현재의 공간으로 확장한다.",
    receiptImg: "assets/dongwha_receipt.png",
    thumbnail: "assets/dongwha_receipt.png",
    images: [
      "assets/dongwha_receipt.png"
    ]
  },
  {
    id: "galaxy",
    exhibitionId: "2026-3rd-external",
    classGroup: "A반",
    studio: "A반",
    brand: "갤럭시 (Samsung Galaxy)",
    title: "품",
    members: "김민석, 임동혁, 잠시드",
    genre: "Tech Experience & Human-Centered Sanctuary",
    category: "Spatial",
    concept: "‘품’은 갤럭시의 이중 보안 구조인 보안 폴더에서 착안한 공간이다. 차가운 외피 안에 수공간과 정원을 이중으로 감싸 기술이 사람을 향할 때의 따뜻함을 표현한다. 방문자는 공간을 거닐며 기술 속 배려와 보호를 발견하고, 차갑고 이성적인 이미지를 넘어 따뜻하고 인간 중심적인 갤럭시의 브랜드 이미지를 새롭게 인식하게 된다.",
    receiptImg: "assets/galaxy_receipt.png",
    thumbnail: "assets/galaxy_receipt.png",
    images: [
      "assets/galaxy_receipt.png"
    ]
  },
  {
    id: "gopherwood",
    exhibitionId: "2026-3rd-external",
    classGroup: "A반",
    studio: "A반",
    brand: "고퍼우드 (Gopherwood)",
    title: "THE RIPPLE : 울림이 머무는 공간",
    members: "김누리, 이수민, 장호연",
    genre: "Acoustic Instrument Showroom",
    category: "Spatial",
    concept: "고퍼우드의 브랜드 철학과 기타의 구조, 소리가 만들어지는 원리를 공간으로 풀어낸 브랜드 체험 공간이다. 기타의 울림에서 시작되는 파동과 리플을 공간의 형태와 동선으로 확장하여, 방문객이 브랜드를 경험하고 음악을 통해 소통할 수 있는 공간을 제안한다.",
    receiptImg: "assets/gopherwood_receipt.png",
    thumbnail: "assets/gopherwood_receipt.png",
    images: [
      "assets/gopherwood_receipt.png"
    ]
  },
  {
    id: "bilguun-team",
    exhibitionId: "2026-3rd-external",
    classGroup: "A반",
    studio: "A반",
    brand: "Lego (3)",
    title: "3",
    members: "졸자야, 빌궁, 나문다리",
    genre: "Modular Hotel & Spatial Design",
    category: "Architectural",
    concept: "우리 작품은 레고 브랜드를 콘셉트 해서 호텔 만들오 보려고 합니다.",
    receiptImg: "assets/lego_receipt.png",
    thumbnail: "assets/lego_receipt.png",
    images: [
      "assets/lego_receipt.png"
    ]
  },

  // ==========================================
  // [B반] 6개 팀 (이재석 교수님)
  // ==========================================
  {
    id: "marshall",
    exhibitionId: "2026-3rd-external",
    classGroup: "B반",
    studio: "B반",
    brand: "마샬 (Marshall)",
    title: "marshall livehouse seoul",
    members: "송현진, 김보경, 이고은",
    genre: "Audio Showroom & Sound Lounge",
    category: "Spatial",
    concept: "마샬은 뮤지션의 표현을 증폭하고 공연의 에너지를 관객에게 전달하며 성장해 온 오디오 브랜드이다. 그러나 라이프스타일 제품으로 대중화되면서, 일부 소비자에게는 음악적 역사보다 클래식한 디자인과 감성적인 인테리어 오브제로서의 이미지가 먼저 전달되고 있다. 우리는 마샬이 인기도의 상승으로 밴드와 관객의 좁아진 거리감을 '마샬 스택'으로 조절한 마샬의 시도를 다시 재해석하여 마샬 제품에 대한 인식의 갭을 조절한다.",
    receiptImg: "assets/marshall_receipt.png",
    thumbnail: "assets/marshall_receipt.png",
    images: [
      "assets/marshall_receipt.png"
    ]
  },
  {
    id: "tekla",
    exhibitionId: "2026-3rd-external",
    classGroup: "B반",
    studio: "B반",
    brand: "TEKLA (TEKLA HOUSE in Seochon)",
    title: "TEKLA HOUSE in Seochon",
    members: "이예원, 이설아, 김민서",
    genre: "Home Textile & Sanctuary",
    category: "Spatial",
    concept: "우리는 익숙하다는 이유로 일상과 사물이 지닌 가치를 무심코 지나치곤 합니다. 하지만 특별함은 새로운 것에만 있는 것이 아니라, 늘 우리 곁에 있는 것들에도 존재합니다. 익숙함 속 작은 변주를 통해 일상의 가치를 새롭게 바라보고, 그 안에서 스스로 의미를 발견하며 일상의 질을 가꾸어 나가길 바라는 마음으로 이 프로젝트를 시작합니다.",
    receiptImg: "assets/tekla_receipt.png",
    thumbnail: "assets/tekla_receipt.png",
    images: [
      "assets/tekla_receipt.png"
    ]
  },
  {
    id: "tekla-minseo",
    exhibitionId: "2026-3rd-external",
    classGroup: "B반",
    studio: "B반",
    brand: "TEKLA (A Day with TEKLA)",
    title: "A Day with TEKLA",
    members: "김민서",
    genre: "Home Textile & Sanctuary",
    category: "Spatial",
    concept: "TEKLA 의 패브릭이 지닌 부드러운 촉감과 오래 쓰는 가치를 공간으로 확장한 프로젝트다. 천을 천장과 벽의 요소로 풀어내어 사용자를 포근하게 감싸고, 빛과 소재의 결이 어우러지는 일상 속 휴식을 제안한다. 유행보다 지속되는 편안함에 집중한다.",
    receiptImg: "assets/tekla_minseo_receipt.png",
    thumbnail: "assets/tekla_minseo_receipt.png",
    images: [
      "assets/tekla_minseo_receipt.png"
    ]
  },
  {
    id: "hanyul",
    exhibitionId: "2026-3rd-external",
    classGroup: "B반",
    studio: "B반",
    brand: "한율 (Hanyul)",
    title: "한율의 뜰로 초대합니다",
    members: "조하나",
    genre: "Beauty & Botanical Sanctuary",
    category: "Branding",
    concept: "한율의 브랜드 가치인 ‘한국의 이로움으로 전하는 균형 잡힌 아름다움’을 한국의 뜰로 재해석한 브랜드 플래그쉽 스토어 공간이다. 비움·채움·균형을 중심으로 한국의 자연 원료와 전통 소재를 공간에 담아 고객이 피부와 마음을 정돈하고 자신만의 아름다움을 발견하는 경험을 제안한다.",
    receiptImg: "assets/hanyul_receipt.png",
    thumbnail: "assets/hanyul_receipt.png",
    images: [
      "assets/hanyul_receipt.png"
    ]
  },
  {
    id: "gachi-ieum",
    exhibitionId: "2026-3rd-external",
    classGroup: "B반",
    studio: "B반",
    brand: "가치이음",
    title: "〈울퉁과 불퉁〉",
    members: "권은진, 명나연",
    genre: "Traditional Craft & Contemporary Space",
    category: "Spatial",
    concept: "가치이음의 미션은 전통 공예가 일상에서 익숙한 대상이 되도록 하는 것이다. 우리는 익숙해지는 첫걸음을 ‘관찰’로 보고, 방문객이 공예를 자세히 바라볼 수 있는 공간을 만들기 위하여 공예품의 미세한 차이를 살펴 흔적과 짜임을 공간 곳곳에 적용했다. 〈울퉁과 불퉁〉은 공예품에서 발견한 ‘울퉁불퉁함’을 전통과 현대가 만나는 방식으로 확장한다. 두 요소는 각자의 모습을 유지한 채 나란히 놓이며 조화로운 이질감을 만든다. 이는 균일한 일상에 차이를 만들어 방문객이 잠시 멈춰 주목하는 계기가 된다.",
    receiptImg: "assets/gachi_ieum_receipt.png",
    thumbnail: "assets/gachi_ieum_receipt.png",
    images: [
      "assets/gachi_ieum_receipt.png"
    ]
  },
  {
    id: "karrot",
    exhibitionId: "2026-3rd-external",
    classGroup: "B반",
    studio: "B반",
    brand: "당근 (DAANGN NODE)",
    title: "DAANGN NODE",
    members: "정진석, 박태준, 최소윤",
    genre: "Urban Node & Community Pavilion",
    category: "Spatial",
    concept: "3,800만 국민의 모바일 앱 당근이 가진 친근하고 따뜻한 '곡선'의 언어를 도시와 건축의 물리적 환경으로 확장합니다. 삭막하고 각진 도시의 경계를 허물고, 골목길을 걷다 누구나 자연스럽게 발걸음을 멈추고 이웃과 눈을 맞출 수 있는 쉼터를 만듭니다. 어두운 골목 어귀나 지하철 출구 앞에서 어색하게 서성이던 중고거래의 순간을, 바람이 통하는 기둥 회랑과 나무 그늘 아래서 이웃의 온기를 마주하는 '다정한 동네의 일상적 축제'로 새롭게 정의합니다.",
    receiptImg: "assets/karrot_receipt.png",
    thumbnail: "assets/karrot_receipt.png",
    images: [
      "assets/karrot_receipt.png"
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
    brand: "ggott (누블곳)",
    title: "누블곳",
    members: "김민준, 안상영",
    genre: "Botanical Atelier & Planterior",
    category: "Spatial",
    concept: "평범한 하루에도 꽃을 가까이 두고 즐길 수는 없을까요? 식탁 위에 꽃 한 송이가 놓이면 무엇이 달라질까요? 저희는 함께 고르고, 가까이 바라보고, 이야기를 나눌 수 있는 시간을 제안합니다. 이 경험을 담을 공간의 단서는 송정동의 산책로에서 발견했습니다. 그 속에는 짙은 그늘 사이로 들어오는 작은 햇살, ‘볕뉘’가 있었습니다. 평범한 식사의 시간 속에서 꽃 한 송이의 존재를 느끼고, 그 경험을 자신의 일상으로 이어가는 공간입니다.",
    receiptImg: "assets/ggott_receipt.png",
    thumbnail: "assets/ggott_receipt.png",
    images: [
      "assets/ggott_receipt.png"
    ]
  },
  {
    id: "dedar",
    exhibitionId: "2026-3rd-external",
    classGroup: "C반",
    studio: "C반",
    brand: "DEDAR (데다르)",
    title: "苧 너머",
    members: "이새영, 박정민",
    genre: "Luxury Italian Textile Showroom",
    category: "Spatial",
    concept: "‘苧 너머’ 는 직조의 역사가 켜켜이 쌓인 동대문에서 이탈리아 직물 브랜드 DEDAR가 한산모시의 전통적 가치를 재해석한 공간이다. 타자를 받아들이기 위해 스스로를 비워내는 한국적 포용의 미학을 바탕으로, 후퇴한 벽과 중정에 빛과 바람을 들이고 직물의 결을 감각하는 경험을 제공한다. 이를 통해 전통과 현대, 자연과 사람이 조응하는 새로운 직물의 장을 제안한다.",
    receiptImg: "assets/dedar_receipt.png",
    thumbnail: "assets/dedar_receipt.png",
    images: [
      "assets/dedar_receipt.png"
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
    title: "(   ) ; 덜어내다",
    members: "최규민, 최서림",
    genre: "Mindfulness & Meditation Retreat",
    category: "Spatial",
    concept: "\"명상은 거창한 것이 아니다. 언제나 누구든지 할 수 있다.\" 지금 귀에 들리는 소리에 집중해보세요. 누군가의 말소리, 발소리 .. 감각을 존재하는 그대로를 느끼는 것, 그것이 명상입니다. 우리는 그 시작을 덜어냄이라 보았습니다. 덜어낼수록 그 속에서 들리는 발소리, 숨소리. 그제서야 느껴지는 있는 그대로의 감각. 침묵할수록 선명해지는, 선명한 침묵을 공간으로 가져와봅니다.",
    receiptImg: "assets/headspace_receipt.png",
    thumbnail: "assets/headspace_receipt.png",
    images: [
      "assets/headspace_receipt.png"
    ]
  },
  {
    id: "yoshida-porter",
    exhibitionId: "2026-3rd-external",
    classGroup: "C반",
    studio: "C반",
    brand: "요시다 포터 (Yoshida Porter)",
    title: "포터 진단실",
    members: "강홍인, 장도연",
    genre: "Craftsmanship Luggage Flagship",
    category: "Spatial",
    concept: "가방을 사용하는 사람의 라이프스타일에 주목하는 공간으로, 개인의 취향과 일상, 소지품을 탐색하며 각자의 삶에 어울리는 가방을 발견하는 경험을 제안한다. 사람과 사물, 빛과 소재가 서로 관계를 맺으며 새로운 의미와 경험을 만들어가는 과정을 통해 PORTER의 브랜드 철학을 공간으로 표현하고자 한다.",
    receiptImg: "assets/porter_receipt.png",
    thumbnail: "assets/porter_receipt.png",
    images: [
      "assets/porter_receipt.png"
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
    brand: "LOFI STUDIO _ PALACE",
    title: "LOFI STUDIO _ PALACE",
    members: "이현채, 류채민",
    genre: "Skate Culture & Architectural Installation",
    category: "Spatial",
    concept: "스케이트보드가 커브를 따라 중력의 방향을 거스르는 움직임에서 출발한 공간이다. 중심을 향하는 중력의 흐름과 이에 저항하는 움직임 사이의 어긋남을 구의 곡률과 비정형적인 공간으로 표현한다. 또한 사람의 움직임과 자연환경에 의해 축적되는 마찰과 산화의 흔적을 콘크리트와 금속의 물성 변화로 담아내어, 중력과 움직임이 만들어내는 공간의 역동성을 드러낸다.",
    receiptImg: "assets/lofi_receipt.png",
    thumbnail: "assets/lofi_receipt.png",
    images: [
      "assets/lofi_receipt.png"
    ]
  }
];
