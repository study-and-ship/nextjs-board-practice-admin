// src/types/post.ts
// 게시글 한 건의 형태(타입)를 정의합니다.
// 타입을 따로 두면 데이터 파일, 목록 화면, 상세 화면 등 여러 곳에서
// 같은 모양을 공유할 수 있어 오타나 형태 불일치를 컴파일 단계에서 잡아줍니다.

export interface Post {
  id: number; // 게시글 고유 번호 (상세 페이지 URL /board/[id]에 사용 → 3단계)
  title: string; // 제목
  author: string; // 작성자
  createdAt: string; // 작성일 (지금은 "2026-06-21" 형태의 문자열로 단순하게 보관)
}
