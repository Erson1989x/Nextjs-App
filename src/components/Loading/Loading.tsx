import React from 'react'

const Loading = () => {
  return (
    <div className="flex flex-col justify-center items-center p-8">
    <div className="rounded-full h-12 w-12 border-4 border-blue-200 border-b-blue-500 animate-spin"></div>
    <p className="text-gray-600 text-xl mt-4">Se incarca...</p>
  </div>
  )
}

export default Loading