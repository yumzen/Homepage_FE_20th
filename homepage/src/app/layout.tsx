"use client"
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useRouter } from "next/router";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  const isMainPage = router.pathname === "/";

  const isPaymentPage = router.pathname === "/tickets/payment";

  const isLoginPage = router.pathname === "/login";

  const isAdminPage = router.pathname === "/kahlua_admin";

  return (
    <>
      {!isPaymentPage && !isLoginPage && !isAdminPage && <Navbar />}
      {children}
      {!isMainPage && !isPaymentPage && !isLoginPage && !isAdminPage && (
        <Footer />
      )}{" "}
      {/* 메인 페이지가 아닌 경우에만 Footer를 렌더링 */}
      {/* 로그인 & 어드민 페이지 코드 추가 */}
    </>
  );
}
