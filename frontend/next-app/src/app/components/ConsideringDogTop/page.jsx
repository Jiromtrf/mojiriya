import React from 'react'
import Image from "next/image";

const ConsideringDogTop = () => {
  return (
    <div class="flex flex-col justify-center items-center gap-4">
      <h1 class="text-2xl mt-12"></h1>

<div class="w-72 shadow-xl mt-8">
    <img
      src="/top.png"
      alt="Shoes" />
</div>

      <button class="btn btn-wide bg-yellow-400 rounded-full mt-12">おせわの情報</button>
      <button class="btn btn-wide bg-yellow-400 rounded-full mt-2">おせわスケジュール</button>
      <button class="btn btn-wide bg-yellow-400 rounded-full mt-2">わんちゃん診断</button>
    </div>
  )
} 

export default ConsideringDogTop