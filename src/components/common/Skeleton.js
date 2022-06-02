import React from "react";

export default function Skeleton() {
  return (
    <div className="border border-main shadow rounded-md p-4 max-w-sm w-full mx-auto">
      <div className="animate-pulse flex space-x-4">
        <div className="flex-1 space-y-3 py-1">
          <div className="h-4 bg-main rounded"></div>
          <div className="grid grid-cols-3 gap-2">
            <div className="h-4 bg-main rounded col-span-2"></div>
            <div className="h-4 bg-main rounded col-span-1"></div>
            <div className="h-4 bg-main rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
