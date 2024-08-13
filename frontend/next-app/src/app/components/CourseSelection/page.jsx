import React from 'react'

const CourseSelection = () => {
  return (
    <div class="flex flex-col justify-center items-center gap-4">
      <h1 class="text-2xl mt-12">コース選択</h1>


      <h2 class="mt-12">犬を飼う前の</h2>
      <button class="btn btn-wide bg-yellow-400 rounded-full mt-2">検討中コース</button>
      <h2 class="mt-12">犬を飼っている</h2>
      <button class="btn btn-wide bg-yellow-400 rounded-full mt-2">おせわコース</button>
    </div>
  )
} 

export default CourseSelection