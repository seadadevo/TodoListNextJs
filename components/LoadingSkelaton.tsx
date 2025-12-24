import React from 'react'

const LoadingSkelaton = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
      <h2 className="mt-4 text-xl font-semibold text-gray-700">
        جاري تحميل المنتجات...
      </h2>
    </div>
  )
}

export default LoadingSkelaton