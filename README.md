# THE ARCHIVE — Minimalist Studio Portfolio

> **THE FIRST PENGUIN(t-fp.kr) 스타일의 미니멀리스트 아키텍처 & 공간 디자인 아카이브 웹사이트**  
> 불필요한 장식을 덜어내고 1px 헤어라인 그리드, 타이포그래피, 마우스 커서 추적 썸네일 프리뷰로 완성된 포트폴리오 템플릿입니다.

---

## ⚡ 주요 특징

1. **무설치 & 즉시 실행 (Zero Build Step)**:
   - 번들러나 `npm install` 없이 `index.html`을 더블 클릭하는 것만으로 브라우저에서 바로 동작합니다.
   - GitHub Pages, Vercel, Netlify 등에 즉시 1클릭 배포 가능합니다.
2. **T-FP 오리지널 시그니처 UX 구현**:
   - **3열 연도별 아카이브 테이블**: 시간의 연속성을 시각화하는 인덱스 카탈로그 구조.
   - **마우스 커서 추적 이미지 프리뷰(Hover Image Cursor)**: 텍스트 위에 마우스를 올리면 감각적인 공간 사진이 부드러운 감속(Lerp)으로 커서를 따라다닙니다.
   - **카테고리 필터링**: `All`, `Spatial`, `Branding`, `Architectural` 실시간 정렬.
   - **상세 뷰 슬라이더 & 스펙 시트**: 풀와이드 이미지 갤러리(키보드 좌우 방향키 탐색 지원)와 건축/인테리어 상세 스펙 표.
3. **손쉬운 데이터 관리**:
   - `js/data.js` 파일 하나에서 모든 프로젝트, 사진, 텍스트, 팀원 정보를 JSON 형태로 손쉽게 수정 및 추가할 수 있습니다.

---

## 📁 파일 구조

```
archive-portfolio/
├── index.html        # 메인 아카이브 목록 (3열 테이블 + 플로팅 커서 프리뷰)
├── about.html        # 스튜디오 매니페스토 (3단계 선언문) & 팀원 소개
├── project.html      # 프로젝트 상세 뷰 (대형 이미지 슬라이더 + 스펙 시트)
├── contact.html      # 연락처 및 지하철 노선 기반 모노톤 약도
├── css/
│   └── style.css     # 스위스 그리드, 1px 보더, 타이포그래피 시스템
├── js/
│   ├── data.js       # 프로젝트 전체 데이터베이스 (연도, 카테고리, 이미지, 스펙)
│   ├── main.js       # 메인 테이블 동적 렌더링 & 커서 프리뷰 로직
│   └── project.js    # 상세 슬라이더 및 스펙 표 렌더러
└── README.md
```

---

## 🌐 GitHub Pages 1클릭 배포 방법

본 레포지토리는 이미 GitHub(`https://github.com/3dasoooo-design/archive-portfolio`)에 생성되어 연동되어 있습니다.

1. GitHub 레포지토리 페이지(`https://github.com/3dasoooo-design/archive-portfolio`) 접속
2. 상단 탭에서 **Settings** 클릭
3. 좌측 메뉴에서 **Pages** 클릭
4. **Build and deployment** 항목:
   - **Source**: `Deploy from a branch` 선택
   - **Branch**: `main` 브랜치 / `/ (root)` 폴더 선택 후 **Save** 클릭
5. 약 1분 후 `https://3dasoooo-design.github.io/archive-portfolio/` 주소로 전 세계에 무료 배포됩니다.

---

## ✏️ 내 프로젝트 추가하는 방법

`js/data.js` 파일을 열고 다음과 같이 원하는 프로젝트 객체를 배열에 추가하기만 하면 자동으로 메인 화면과 상세 화면에 반영됩니다.

```javascript
{
  id: "my-new-project",
  year: "2026",
  title: "My Interior Project",
  location: "Seoul",
  category: "Spatial", // "Spatial", "Branding", "Architectural"
  genre: "Commercial Space",
  date: "2026 March",
  address: "Gangnam-gu, Seoul",
  team: "Director: Your Name",
  partner: "Photo: Photographer Name",
  concept: "프로젝트에 대한 간략한 콘셉트 설명글입니다.",
  thumbnail: "https://your-image-url.jpg",
  images: [
    "https://your-image-1.jpg",
    "https://your-image-2.jpg"
  ]
}
```

---

## 📄 라이선스
MIT License
