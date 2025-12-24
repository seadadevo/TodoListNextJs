"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  
  useEffect(() => {
    console.error({
    message: error.message,
    digest: error.digest,
    stack: error.stack,
  });
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-red-50 p-4">
      <h2 className="text-3xl font-bold text-red-600 mb-4">
        عذراً، حدث خطأ ما! 😔
      </h2>
      <p className="text-gray-600 mb-6 text-center max-w-md">
        {error.message || "لم نتمكن من تحميل البيانات في الوقت الحالي."}
      </p>
      
      <button
        onClick={
          () => reset()
        }
        className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
      >
        حاول مرة أخرى
      </button>
    </div>
  );
}