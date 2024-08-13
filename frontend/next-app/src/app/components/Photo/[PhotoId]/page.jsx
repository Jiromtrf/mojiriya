import React from 'react'
import Image from "next/image";

const Photo = () => {
  return (
    <div class="flex flex-col justify-center items-center gap-4">
      <h1 class="text-2xl mt-12">2024年8月1日</h1> {/* 登録された犬の名前を引っ張ってくる*/}

      <div class="w-72 shadow-xl mt-8">
       <img
         src="/top.png"
         alt="Shoes" />
      </div>


<div className="chat chat-start">
  <div className="chat-header">
    パパ
  </div>
  <div className="chat-bubble  chat-bubble-accent">モカの表情がいいね！すごく楽しそう！</div>
</div>
<div className="chat chat-start">
  <div className="chat-header">
    葵
  </div>
  <div className="chat-bubble  chat-bubble-accent">今日は公園に寄って、モカとたくさん走ったよ！</div>
</div>

<button class="btn btn-ghost my-2 mt-5 rounded-full">戻る</button>

    </div>
  )
} 

export default Photo
