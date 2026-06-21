// src/app/board/page.tsx
// 이 파일은 폴더 구조에 따라 자동으로 "/board" URL에 매핑됩니다.
// (App Router 규칙: app/board/page.tsx → /board)
//
// 별도의 "use client" 선언이 없으므로 이 컴포넌트는 '서버 컴포넌트'입니다.
// 지금은 정적인 화면만 보여주므로 서버 컴포넌트로 충분합니다.
// (useState 같은 브라우저 동작이 필요해지면 그때 "use client"를 추가합니다 → 4단계)

export default function BoardPage() {
  return (
    <main className="mx-auto w-full max-w-3xl p-8">
      <h1 className="text-2xl font-bold">게시판</h1>
      <p className="mt-2 text-gray-500">
        여기에 게시글 목록이 표시될 예정입니다. (2단계에서 구현)
      </p>
    </main>
  );
}
