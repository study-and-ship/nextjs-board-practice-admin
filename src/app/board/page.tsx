// src/app/board/page.tsx → "/board"
// 게시글 목록 화면입니다. Mock 데이터를 map으로 순회하며 화면에 그립니다.

import Link from "next/link";
import { posts } from "@/data/posts";

export default function BoardPage() {
  return (
    <main className="mx-auto w-full max-w-3xl p-8">
      <h1 className="text-2xl font-bold">게시판</h1>

      {/*
        배열 렌더링: posts 배열을 map으로 돌면서 게시글마다 <li>를 만듭니다.
        - key={post.id} : React가 각 항목을 구분하는 식별자. 배열 렌더링에는 필수입니다.
          (key가 없으면 목록이 바뀔 때 React가 비효율적으로 다시 그리고, 경고도 뜹니다.)
        - Link href={`/board/${post.id}`} : 클릭하면 상세 페이지로 이동 (상세는 3단계에서 구현)
      */}
      <ul className="mt-6 divide-y border-t border-b">
        {posts.map((post) => (
          <li key={post.id}>
            <Link
              href={`/board/${post.id}`}
              className="flex items-center justify-between gap-4 py-3 hover:bg-gray-50"
            >
              <span className="font-medium">{post.title}</span>
              <span className="shrink-0 text-sm text-gray-500">
                {post.author} · {post.createdAt}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
