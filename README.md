# 정태일의 모험 공식 웹사이트

`정태일의 모험` 시리즈 공식 웹사이트용 정적 기반 동적 페이지입니다.

## 포함된 섹션

- 게임 소개
- 시리즈 작품 목록
- 업데이트 노트 / 패치노트
- 공지사항
- 게임 스크린샷
- 커뮤니티 뉴스
- 빠른 다운로드
- 푸터 정책 링크 및 문의 정보

## 추가된 상호작용

- 상단 메뉴 부드러운 이동
- 모바일 메뉴 열기 / 닫기
- 시리즈 필터: 전체, RPG, 스토리, 연애
- 게임 카드 상세보기 모달
- 다운로드 버튼 모달 및 토스트 알림
- 업데이트 노트 상세 모달
- 공지사항 상세 모달
- 스크린샷 라이트박스 갤러리
- 커뮤니티 뉴스 상세 모달
- 푸터 정책 / 문의 모달
- 이메일 주소 복사 알림
- SNS 버튼 클릭 알림

## 파일 구조

```text
.
├── index.html
├── styles.css
├── script.js
├── script-dynamic.js
└── README.md
```

`script-dynamic.js`가 현재 실제 상호작용을 담당합니다. `script.js`는 이전 기본 스크립트 파일입니다.

## 다운로드 파일 연결 방법

현재 다운로드 버튼은 아래 경로를 바라보도록 미리 연결되어 있습니다.

```text
downloads/jeongtaeil-adventure-1-v1.3.2.zip
downloads/jeongtaeil-adventure-2-v1.2.8.zip
downloads/jeongtaeil-adventure-3-v1.1.0.zip
downloads/jung-adventure-1-v1.0.5.zip
downloads/jung-adventure-2-v1.0.3.zip
downloads/sutaegong-love-simulation-v1.0.1.zip
```

실제 배포 파일을 위 이름으로 `downloads` 폴더에 올리면 사이트의 다운로드 버튼이 바로 작동합니다.

## GitHub Pages 배포

GitHub 저장소 설정에서 Pages를 켠 뒤, `main` 브랜치의 루트 경로를 선택하면 정적 사이트로 배포할 수 있습니다.
