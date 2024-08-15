'use client';

import React from 'react'
import { useRouter } from 'next/navigation';

export default function MyDogTop() {
  const router = useRouter(); // useRouterを使ってrouterを取得

  
const handleConsideringDogTopBackButtonClick = () => {
  router.push('/components/ConsideringDogTop');  // ボタンをクリックしたときに遷移する
};


  return (
    <div>
    <div class="flex flex-col justify-center items-center gap-4">
      <h1 class="text-2xl mt-12">おせわスケジュール体験</h1>
      
      <div class="container mx-auto flex flex-col justify-center items-center px-4">
            <div class="flex flex-col mt-8">
                <p class="text-lg">おせわの時間を</p>
                <p class="text-lg">スマートフォンで通知します</p>
            </div>
      </div>

      <button class="btn btn-wide bg-yellow-400 rounded-full mt-10">体験する</button>

      <button class="btn btn-ghost my-2 mt-5 rounded-full" onClick={handleConsideringDogTopBackButtonClick}>戻る</button>
      
    </div>
    </div>
  )
}
