"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    naver: any;
  }
}

interface NaverMapProps {
  center?: { lat: number; lng: number };
  zoom?: number;
  className?: string;
  onMapLoad?: (map: any) => void;
}

export default function NaverMap({
  center = { lat: 37.5665, lng: 126.978 }, // 서울 시청
  zoom = 15,
  className = "w-full h-96",
  onMapLoad,
}: NaverMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);

  useEffect(() => {
    const initMap = () => {
      if (!mapRef.current || !window.naver) return;

      const mapOptions = {
        center: new window.naver.maps.LatLng(center.lat, center.lng),
        zoom: zoom,
        zoomControl: true,
        zoomControlOptions: {
          style: window.naver.maps.ZoomControlStyle.SMALL,
          position: window.naver.maps.Position.TOP_RIGHT,
        },
      };

      mapInstanceRef.current = new window.naver.maps.Map(
        mapRef.current,
        mapOptions
      );

      // onMapLoad 콜백 호출
      if (onMapLoad) {
        onMapLoad(mapInstanceRef.current);
      }
    };

    // 네이버 지도 API 스크립트 로드
    const script = document.createElement("script");
    script.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID}&submodules=geocoder`;
    script.async = true;
    script.onload = initMap;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [center.lat, center.lng, zoom]);

  return (
    <div ref={mapRef} className={className} style={{ minHeight: "400px" }} />
  );
}
