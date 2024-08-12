import React from 'react'
import Image from "next/image";

const MyDogTop = () => {
  return (
    <div class="flex flex-col justify-center items-center gap-4">
      <h1 class="mt-12">モカ（登録名）</h1> {/* 登録された犬の名前を引っ張ってくる*/}

      <Image
            src="/top.png" //配置した画像のパスを記述する。
            alt="Top Image"
            width={256}
            height={170}
          />

<div class="card bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src="/top.png"
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">◆モカからのメッセージ◆</h2>
    <p>今日もお散歩楽しかったね。暑いから熱中症に気をつけようね。</p>
  </div>
</div>

      <div class="md:container md:mx-auto flex flex-col justify-center items-center gap-4 border-4 border-yellow-200 w-96 mx-20 py-5 px-5" >
        <h1 class="">◆モカからのメッセージ◆</h1>
        <h1 class="">今日もお散歩楽しかったね。暑いから熱中症に気をつけようね。</h1>
      </div>
      <button class="btn btn-wide bg-yellow-400 rounded-full">おせわを記録</button>
      <button class="btn btn-wide bg-yellow-400 rounded-full">写真アルバム</button>
    </div>
  )
} 

export default MyDogTop
