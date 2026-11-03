import React from 'react';

export default function Loader({ size = 'md', text = 'Loading...' }) {
  const sizeClasses = {
    sm: 'w-5 h-5 border-2',
    md: 'w-8 h-8 border-3',
    lg: 'w-12 h-12 border-4'
  };

  return (
    <div className="flex flex-col items-center justify-center gap-3 p-6">
      <div
        className={`${sizeClasses[size] || sizeClasses.md} rounded-full border-blue-200 border-t-blue-600 animate-spin`}
        role="status"
        aria-label="loading"
      />
      {text && <span className="text-sm font-medium text-slate-600 animate-pulse">{text}</span>}
    </div>
  );
}
