import React from 'react'
import Image from "next/image";

const MyDogTop = () => {
  return (
    <div class="flex flex-col justify-center items-center gap-4">
      <h1 class="text-2xl mt-12">モカ（登録名）</h1> {/* 登録された犬の名前を引っ張ってくる*/}

<div class="card bg-base-100 w-72 shadow-xl mt-8">
  <figure>
    <img
      src="/top.png"
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">モカからのメッセージ</h2>
    <p>今日もお散歩楽しかったね。暑いから熱中症に気をつけようね。</p>
  </div>
</div>

      <button class="btn btn-wide bg-yellow-400 rounded-full mt-12">おせわを記録</button>
      <button class="btn btn-wide bg-yellow-400 rounded-full mt-2">写真アルバム</button>
    </div>
  )
} 

export default MyDogTop
