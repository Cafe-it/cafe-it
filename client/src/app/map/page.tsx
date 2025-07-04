"use client";

import { useState } from "react";
import MobileBar from "@/features/ui/MobileBar";
import NaverMap from "@/features/ui/NaverMap";
import CafeMarker from "@/features/ui/CafeMarker";
import { CafeInfoSheet } from "@/features/ui/CafeInfoSheet";

// 샘플 카페 데이터
const sampleCafes = [
  {
    id: "1",
    name: "스타벅스 강남점",
    address: "서울 강남구 강남대로 123",
    position: { lat: 37.5665, lng: 126.978 },
    availableSeats: 5,
    totalSeats: 20,
  },
  {
    id: "2",
    name: "투썸플레이스 홍대점",
    address: "서울 마포구 홍대로 456",
    position: { lat: 37.5575, lng: 126.925 },
    availableSeats: 0,
    totalSeats: 15,
  },
  {
    id: "3",
    name: "할리스 커피 신촌점",
    address: "서울 서대문구 신촌로 789",
    position: { lat: 37.5595, lng: 126.943 },
    availableSeats: 8,
    totalSeats: 25,
  },
  {
    id: "4",
    name: "1231 강남점",
    address: "서울 강남구 강남대로 123",
    position: { lat: 37.103, lng: 116.978 },
    availableSeats: 1,
    totalSeats: 10,
  },
  {
    id: "5",
    name: "메가MGC커피 신촌점",
    address: "서울 서대문구 신촌로 234",
    position: { lat: 37.5585, lng: 126.942 },
    availableSeats: 12,
    totalSeats: 30,
  },
  {
    id: "6",
    name: "이디야 커피 홍대입구점",
    address: "서울 마포구 홍대로 567",
    position: { lat: 37.5565, lng: 126.924 },
    availableSeats: 3,
    totalSeats: 18,
  },
  {
    id: "7",
    name: "빽다방 강남역점",
    address: "서울 강남구 강남대로 456",
    position: { lat: 37.5675, lng: 126.977 },
    availableSeats: 0,
    totalSeats: 12,
  },
  {
    id: "8",
    name: "컴포즈커피 신촌점",
    address: "서울 서대문구 신촌로 890",
    position: { lat: 37.5605, lng: 126.944 },
    availableSeats: 6,
    totalSeats: 22,
  },
  {
    id: "9",
    name: "스타벅스 홍대점",
    address: "서울 마포구 홍대로 789",
    position: { lat: 37.5585, lng: 126.926 },
    availableSeats: 2,
    totalSeats: 28,
  },
  {
    id: "10",
    name: "투썸플레이스 강남점",
    address: "서울 강남구 강남대로 234",
    position: { lat: 37.5655, lng: 126.979 },
    availableSeats: 15,
    totalSeats: 35,
  },
  {
    id: "11",
    name: "할리스 커피 홍대점",
    address: "서울 마포구 홍대로 890",
    position: { lat: 37.5575, lng: 126.927 },
    availableSeats: 0,
    totalSeats: 20,
  },
  {
    id: "12",
    name: "메가MGC커피 강남점",
    address: "서울 강남구 강남대로 567",
    position: { lat: 37.5645, lng: 126.976 },
    availableSeats: 9,
    totalSeats: 25,
  },
  {
    id: "13",
    name: "이디야 커피 신촌점",
    address: "서울 서대문구 신촌로 345",
    position: { lat: 37.5615, lng: 126.945 },
    availableSeats: 4,
    totalSeats: 16,
  },
  {
    id: "14",
    name: "빽다방 홍대점",
    address: "서울 마포구 홍대로 123",
    position: { lat: 37.5595, lng: 126.928 },
    availableSeats: 7,
    totalSeats: 19,
  },
  {
    id: "15",
    name: "컴포즈커피 강남점",
    address: "서울 강남구 강남대로 890",
    position: { lat: 37.5635, lng: 126.975 },
    availableSeats: 11,
    totalSeats: 32,
  },
];

export default function MapPage() {
  const [mapInstance, setMapInstance] = useState<any>(null);
  const [selectedCafe, setSelectedCafe] = useState<
    (typeof sampleCafes)[0] | null
  >(null);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const handleMapLoad = (map: any) => {
    setMapInstance(map);
  };

  const handleCafeClick = (cafe: (typeof sampleCafes)[0]) => {
    setSelectedCafe(cafe);
    setIsSheetOpen(true);
  };

  return (
    <main className="relative flex flex-col h-screen pb-16">
      {/* 지도 섹션 */}
      <div className="flex-1 relative">
        <NaverMap
          center={{ lat: 37.5665, lng: 126.978 }}
          zoom={12}
          className="w-full h-full"
          onMapLoad={handleMapLoad}
        />

        {/* 카페 마커들 */}
        {mapInstance &&
          sampleCafes.map((cafe) => (
            <CafeMarker
              key={cafe.id}
              map={mapInstance}
              position={cafe.position}
              cafeInfo={{
                id: cafe.id,
                name: cafe.name,
                address: cafe.address,
                availableSeats: cafe.availableSeats,
                totalSeats: cafe.totalSeats,
              }}
            />
          ))}
      </div>

      {/* 하단 카페 리스트 */}
      <div className="bg-white border-t border-gray-200 p-4 max-h-64 overflow-y-auto">
        <h3 className="text-sm font-medium text-gray-900 mb-3">
          주변 카페 현황
        </h3>
        <div className="space-y-3">
          {sampleCafes.map((cafe) => (
            <div
              key={cafe.id}
              className="flex items-center justify-between p-3 bg-gray-50 rounded-md hover:bg-gray-100 cursor-pointer transition-colors"
              onClick={() => handleCafeClick(cafe)}
            >
              <div>
                <p className="text-sm font-medium text-gray-900">{cafe.name}</p>
                <p className="text-xs text-gray-500">{cafe.address}</p>
              </div>
              <div className="text-right">
                <p
                  className={`text-sm font-medium ${
                    cafe.availableSeats > 0 ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {cafe.availableSeats > 0 ? "자리 있음" : "자리 없음"}
                </p>
                <p className="text-xs text-gray-500">
                  {cafe.availableSeats}/{cafe.totalSeats}석
                </p>
              </div>
            </div>
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
