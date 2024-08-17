'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

export default function CourseSelection() {
  const router = useRouter();

  const handleConsideringDog = () => {
    router.push('/components/ConsideringDogTop');
  };

  const handleCaringForDog = () => {
    router.push('/components/login');
  };

  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <h1 className="text-2xl mt-12">コース選択</h1>
      <h2 class="mt-12">犬を飼う前の</h2>
      <button 
        className="btn btn-wide bg-yellow-400 rounded-full mt-6"
        onClick={handleConsideringDog}
      >
        検討中コース
      </button>
      <h2 class="mt-12">犬を飼っている</h2>
      <button 
        className="btn btn-wide bg-yellow-400 rounded-full mt-6"
        onClick={handleCaringForDog}
      >
        おせわコース
      </button>
    </div>
  );
}
