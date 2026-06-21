// src/data/posts.ts
// 화면 개발용 가짜(Mock) 데이터입니다. 아직 서버나 DB가 없으므로
// 배열을 직접 작성해서 사용합니다. (나중에 LocalStorage → API로 대체 → 5·10단계)

import type { Post } from "@/types/post";

// "@/types/post" 의 @ 는 src 폴더를 가리키는 별칭(import alias)입니다.
// 즉 @/types/post === src/types/post 입니다. (tsconfig.json에 설정돼 있음)

export const posts: Post[] = [
  {
    id: 1,
    title: "첫 번째 게시글입니다",
    author: "홍길동",
    createdAt: "2026-06-21",
  },
  {
    id: 2,
    title: "Next.js 정말 재밌네요",
    author: "김소영",
    createdAt: "2026-06-20",
  },
  {
    id: 3,
    title: "App Router 라우팅 정리",
    author: "이몽룡",
    createdAt: "2026-06-19",
  },
];
