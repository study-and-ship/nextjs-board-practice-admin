import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
// next/link의 Link는 페이지 전체를 새로고침하지 않고 이동하는 SPA 방식 링크입니다.
// 일반 <a> 태그 대신 Link를 써야 Next.js의 빠른 클라이언트 라우팅이 동작합니다.
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "게시판 연습 프로젝트",
  description: "Next.js 게시판 + 관리자 학습 과제",
};

// 모든 페이지 상단에 공통으로 보이는 네비게이션 메뉴.
// layout.tsx 안에 두었기 때문에 어떤 페이지로 이동해도 항상 함께 렌더링됩니다.
function Navbar() {
  return (
    <nav className="border-b">
      <ul className="mx-auto flex max-w-3xl gap-6 p-4">
        <li>
          <Link href="/" className="hover:underline">
            홈
          </Link>
        </li>
        <li>
          <Link href="/board" className="hover:underline">
            게시판
          </Link>
        </li>
        <li>
          <Link href="/admin" className="hover:underline">
            관리자
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* 공통 메뉴 → 그 아래 children에 각 페이지(page.tsx) 내용이 들어옵니다 */}
        <Navbar />
        {children}
      </body>
    </html>
  );
}
