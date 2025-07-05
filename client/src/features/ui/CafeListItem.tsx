"use client";

import { MapPin, Users, Clock } from "lucide-react";
import { cn } from "@/shared/lib/utils";

interface CafeInfo {
  id: string;
  name: string;
  address: string;
  availableSeats: number;
  totalSeats: number;
  distance: string;
}

interface CafeListItemProps {
  cafe: CafeInfo;
  onClick: (cafe: CafeInfo) => void;
}

export function CafeListItem({ cafe, onClick }: CafeListItemProps) {
  const isAvailable = cafe.availableSeats > 0;

  return (
    <div
      className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200 cursor-pointer"
      onClick={() => onClick(cafe)}
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900 text-lg mb-1">
            {cafe.name}
          </h3>
          <div className="flex items-center text-gray-600 text-sm mb-2">
            <MapPin className="w-4 h-4 mr-1" />
            <span>{cafe.address}</span>
          </div>
          <div className="flex items-center text-gray-500 text-sm">
            <Clock className="w-4 h-4 mr-1" />
            <span>{cafe.distance}</span>
          </div>
        </div>

        <div className="flex flex-col items-end space-y-2">
          <div
            className={cn(
              "px-3 py-1 rounded-full text-sm font-medium",
              isAvailable
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            )}
          >
            {isAvailable ? "자리 있음" : "자리 없음"}
          </div>
          <div className="flex items-center text-gray-600 text-sm">
            <Users className="w-4 h-4 mr-1" />
            <span>
              {cafe.availableSeats}/{cafe.totalSeats}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
