"use client";

import Link from "next/link";
import NaverMap from "@/features/ui/NaverMap";
import Footer from "@/widgets/ui/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 p-4 sm:p-8">
      <main className="flex-1 px-6 pb-6">
        <section className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-3">
            주변 카페를 쉽게 찾고,
          </h2>
          <p className="text-lg text-gray-600 mb-6">나만의 카페를 발견하세요</p>
        </section>

        <section className="mb-8">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="p-4 bg-gradient-to-r from-amber-500 to-orange-500">
              <h3 className="text-white font-semibold text-center">
                🗺️ 현재 위치 주변 카페
              </h3>
            </div>
            <div className="relative">
              <NaverMap className="w-full h-80" zoom={14} />
              {/* Map Overlay */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                <div className="text-sm text-gray-600">
                  <div className="font-medium">📍 서울시청</div>
                  <div className="text-xs text-gray-500">
                    주변 카페 탐색 중...
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-4 mb-8">
          <Link
            href="/map"
            className="bg-amber-400 text-white p-4 rounded-2xl font-semibold text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <div className="text-2xl mb-2">🗺️</div>
            <div>실시간 카페 자리 확인하기</div>
          </Link>
        </section>

        <section className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">
            카페잇 통계
          </h3>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-amber-600">1,234</div>
              <div className="text-sm text-gray-600">등록된 카페</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-orange-600">5,678</div>
              <div className="text-sm text-gray-600">리뷰</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-red-600">9,012</div>
              <div className="text-sm text-gray-600">사용자</div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
