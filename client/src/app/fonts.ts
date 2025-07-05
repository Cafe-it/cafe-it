import localFont from "next/font/local";

export const pretendard = localFont({
  src: [
    {
      path: "./fonts/Pretendard/Pretendard-Thin.woff2",
      weight: "100",
    },
    {
      path: "./fonts/Pretendard/Pretendard-ExtraLight.woff2",
      weight: "200",
    },
    {
      path: "./fonts/Pretendard/Pretendard-Light.woff2",
      weight: "300",
    },
    {
      path: "./fonts/Pretendard/Pretendard-Regular.woff2",
      weight: "400",
    },
    {
      path: "./fonts/Pretendard/Pretendard-Medium.woff2",
      weight: "500",
    },
    {
      path: "./fonts/Pretendard/Pretendard-SemiBold.woff2",
      weight: "600",
    },
    {
      path: "./fonts/Pretendard/Pretendard-Bold.woff2",
      weight: "700",
    },
    {
      path: "./fonts/Pretendard/Pretendard-ExtraBold.woff2",
      weight: "800",
    },
    {
      path: "./fonts/Pretendard/Pretendard-Black.woff2",
      weight: "900",
    },
  ],
  variable: "--font-pretendard",
});
