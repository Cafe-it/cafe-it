"use client";

import MobileBar from "../../features/ui/MobileBar";

export default function FavoritesPage() {
  return (
    <main className="relative flex flex-col h-screen pb-16">
      <div className="flex-1 flex flex-col items-center justify-center p-8">
        {/* 귀여운 하트 아이콘 */}
        <div className="mb-6">
          <div className="relative">
            <svg
              className="w-24 h-24 text-red-400 animate-pulse"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            {/* 귀여운 반짝이는 효과 */}
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full animate-bounce"></div>
            <div
              className="absolute -bottom-2 -left-2 w-3 h-3 bg-pink-400 rounded-full animate-bounce"
              style={{ animationDelay: "0.5s" }}
            ></div>
          </div>
        </div>

        {/* 메시지 */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">즐겨찾기</h2>
          <p className="text-lg text-gray-600 mb-4">준비하고 있어요! 💖</p>
          <p className="text-sm text-gray-500">
            마음에 드는 카페를 저장해보세요
          </p>
        </div>
      </div>
      <MobileBar />
    </main>
  );
}
