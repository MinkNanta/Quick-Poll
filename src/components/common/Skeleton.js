import React from "react";

export default function Skeleton() {
  return (
    <div className="max-w-sm w-full mx-auto">
      <div className="animate-pulse flex space-x-4">
        <div className="flex-1 space-y-3 py-1">
          <div className="h-40 bg-main rounded-3xl"></div>
          <div className="grid grid-cols-3 gap-2">
            <div className="h-4 bg-main rounded-3xl col-span-2"></div>
            <div className="h-4 bg-main rounded-3xl col-span-1"></div>
            <div className="h-4 bg-main rounded-3xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
