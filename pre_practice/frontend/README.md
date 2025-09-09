# Frontend (React)

React 프론트엔드 애플리케이션입니다.

## 설치 및 실행

### 1. 의존성 설치
```bash
npm install
```

### 2. 개발 서버 실행
```bash
npm start
```

- React 앱이 `http://localhost:3000`에서 실행됩니다
- Flask 백엔드 서버(`localhost:5001`)의 API를 호출합니다

## 주요 기능

- Flask 서버의 `/api/hello` 엔드포인트 호출
- 받은 메시지를 화면에 표시
- React 로고 애니메이션

## 파일 구조

- `src/App.js`: 메인 React 컴포넌트
- `src/App.css`: 스타일 파일
- `public/`: 정적 파일들
