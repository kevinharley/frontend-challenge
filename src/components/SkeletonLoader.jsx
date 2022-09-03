import React from 'react';

export const SkeletonLoader = () => {
  return (
    <div className="w-full mx-auto my-3">
      <div className="animate-pulse flex">
        <div className="flex-1 space-y-6 py-1">
          <div className="h-2 bg-slate-300 rounded"></div>
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-slate-300 rounded col-span-1"></div>
              <div className="h-2 bg-slate-300 rounded col-span-2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
