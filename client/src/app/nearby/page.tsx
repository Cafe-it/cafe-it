"use client";

import { useState } from "react";
import MobileBar from "@/features/ui/MobileBar";
import { CafeListItem } from "@/features/ui/CafeListItem";
import { CafeInfoSheet } from "@/features/ui/CafeInfoSheet";
import { Search, Filter } from "lucide-react";

// 임시 데이터 (실제로는 API에서 가져올 데이터)
const mockCafes = [
  {
    id: "1",
    name: "스타벅스 강남점",
    address: "서울 강남구 강남대로 123",
    availableSeats: 5,
    totalSeats: 20,
    distance: "0.2km",
  },
  {
    id: "2",
    name: "투썸플레이스 강남점",
    address: "서울 강남구 테헤란로 456",
    availableSeats: 0,
    totalSeats: 15,
    distance: "0.5km",
  },
  {
    id: "3",
    name: "이디야 커피 강남점",
    address: "서울 강남구 역삼동 789",
    availableSeats: 8,
    totalSeats: 25,
    distance: "0.8km",
  },
  {
    id: "4",
    name: "할리스 커피 강남점",
    address: "서울 강남구 논현동 321",
    availableSeats: 3,
    totalSeats: 18,
    distance: "1.2km",
  },
];

export default function NearbyPage() {
  const [selectedCafe, setSelectedCafe] = useState<
    (typeof mockCafes)[0] | null
  >(null);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const handleCafeClick = (cafe: (typeof mockCafes)[0]) => {
    setSelectedCafe(cafe);
    setIsSheetOpen(true);
  };

  return (
    <main className="relative flex flex-col h-screen pb-16">
      {/* 헤더 */}
      <div className="bg-white border-b border-gray-200 p-4">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-bold text-gray-900">내 주변 카페</h1>
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <Filter className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* 검색바 */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="카페 이름으로 검색"
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* 카페 리스트 */}
      <div className="flex-1 overflow-y-auto bg-gray-50">
        <div className="p-4 space-y-3">
          {mockCafes.map((cafe) => (
            <CafeListItem key={cafe.id} cafe={cafe} onClick={handleCafeClick} />
          ))}
        </div>
      </div>

      {/* 바텀 시트 */}
      {selectedCafe && (
        <CafeInfoSheet
          open={isSheetOpen}
          onOpenChange={setIsSheetOpen}
          cafeInfo={selectedCafe}
        />
      )}

      <MobileBar />
    </main>
  );
}
