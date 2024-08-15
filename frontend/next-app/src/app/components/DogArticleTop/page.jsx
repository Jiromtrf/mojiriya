'use client';

import React from 'react'
import { useRouter } from 'next/navigation';

export default function MyDogTop() {
  const router = useRouter(); // useRouterを使ってrouterを取得

  
const handleArticleButtonClick = () => {
  router.push('/components/Article/[]');  // ボタンをクリックしたときに遷移する
};

const handleConsideringDogTopBackButtonClick = () => {
  router.push('/components/ConsideringDogTop');  // ボタンをクリックしたときに遷移する
};


  return (
    <div>
    <div class="flex flex-col justify-center items-center gap-4">
      <h1 class="text-2xl mt-12 mb-6">おせわ情報</h1>
      <button class="btn btn-outline btn-square btn-wide">1日のスケジュール</button>
      <button class="btn btn-outline btn-square btn-wide" onClick={handleArticleButtonClick}>散歩の方法・気を付ける点</button>
      <button class="btn btn-outline btn-square btn-wide">トイレはどうする？</button>
      <button class="btn btn-outline btn-square btn-wide">かかる費用は？</button>
      <button class="btn btn-ghost my-2 mt-5 rounded-full" onClick={handleConsideringDogTopBackButtonClick}>戻る</button>
    </div>
    </div>
  )
}

