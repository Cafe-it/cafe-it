"use client";

import { useEffect, useRef, useState } from "react";
import { CafeInfoSheet } from "./CafeInfoSheet";

interface CafeInfo {
  id: string;
  name: string;
  address: string;
  availableSeats: number;
  totalSeats: number;
  distance?: string;
}

interface CafeMarkerProps {
  map: any;
  position: { lat: number; lng: number };
  cafeInfo: CafeInfo;
}

export default function CafeMarker({
  map,
  position,
  cafeInfo,
}: CafeMarkerProps) {
  const markerRef = useRef<any>(null);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  useEffect(() => {
    if (!map || !window.naver) return;

    // 마커 생성
    const marker = new window.naver.maps.Marker({
      position: new window.naver.maps.LatLng(position.lat, position.lng),
      map: map,
      icon: {
        content: `
          <div class="cafe-marker" style="
            background: ${cafeInfo.availableSeats > 0 ? "#10B981" : "#EF4444"};
            color: white;
            padding: 8px 12px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: bold;
            box-shadow: 0 2px 4px rgba(0,0,0,0.2);
            white-space: nowrap;
            cursor: pointer;
          ">
            ${cafeInfo.availableSeats > 0 ? "자리있음" : "자리없음"}
          </div>
        `,
        size: new window.naver.maps.Size(80, 30),
        anchor: new window.naver.maps.Point(40, 15),
      },
    });

    window.naver.maps.Event.addListener(marker, "click", () => {
      setIsSheetOpen(true);
    });

    markerRef.current = marker;

    return () => {
      if (markerRef.current) {
        markerRef.current.setMap(null);
      }
    };
  }, [map, position, cafeInfo]);

  return (
    <>
      <CafeInfoSheet
        open={isSheetOpen}
        onOpenChange={setIsSheetOpen}
        cafeInfo={cafeInfo}
      />
    </>
  );
}
