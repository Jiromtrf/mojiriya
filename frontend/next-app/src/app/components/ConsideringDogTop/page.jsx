'use client';

import React from 'react'
import { useRouter } from 'next/navigation';

export default function MyDogTop() {
  const router = useRouter(); // useRouterを使ってrouterを取得

  
const handleDogArticleTopButtonClick = () => {
  router.push('/components/DogArticleTop');  // ボタンをクリックしたときに遷移する
};

const handleOsewaExperienceButtonClick = () => {
  router.push('/components/OsewaExperience');  // ボタンをクリックしたときに遷移する
};

const handleDogCheckButtonClick = () => {
  router.push('/components/DogCheck');  // ボタンをクリックしたときに遷移する
};

const handleCourseSelectionBackButtonClick = () => {
  router.push('/components/CourseSelection');  // ボタンをクリックしたときに遷移する
};


  return (
    <div class="flex flex-col justify-center items-center gap-4">
      <h1 class="text-2xl mt-12"></h1>

<div class="w-72 shadow-xl mt-8">
    <img
      src="/considertop.png"
      alt="Shoes" />
</div>

      <button class="btn btn-wide bg-yellow-400 rounded-full mt-12" onClick={handleDogArticleTopButtonClick}>おせわの情報</button>
      <button class="btn btn-wide bg-yellow-400 rounded-full mt-2" onClick={handleOsewaExperienceButtonClick}>おせわスケジュール体験</button>
      <button class="btn btn-wide bg-yellow-400 rounded-full mt-2" onClick={handleDogCheckButtonClick}>わんちゃん診断</button>
      <button class="btn btn-ghost my-2 mt-5 rounded-full" onClick={handleCourseSelectionBackButtonClick}>戻る</button>
    </div>
  )
} 

