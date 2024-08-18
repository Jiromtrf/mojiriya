'use client';

import React from 'react'
import Image from "next/image";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function MyDogTop() {
  const [pet, setPet] = useState(null);
  const [userId, setUserId] = useState(null);
  const router = useRouter();

  useEffect(() => {
    // ページロード時にユーザーIDをlocalStorageから取得
    const storedUserId = localStorage.getItem('userId');
    if (storedUserId) {
      setUserId(storedUserId);
      fetchPet(storedUserId);
    } else {
      console.error("ユーザーIDが取得できませんでした。再度ログインしてください。");
    }
  }, []);

  const fetchPet = async (userId) => {
    try {
      const response = await axios.get('http://127.0.0.1:5000/get-pets', {
        params: { user_id: userId }
      });
      if (response.data.length > 0) {
        setPet(response.data[0]);  // 最初のペット情報のみ使用
      }
    } catch (error) {
      console.error('ペット情報の取得に失敗しました:', error);
    }
  };

  const handleRecordButtonClick = () => {
    router.push('/components/Record');  // ボタンをクリックしたときに遷移する
  };

  const handlePhotoAlbumButtonClick = () => {
    router.push('/components/PhotoAlbum');  // 写真アルバムボタンをクリックしたときに遷移
  };

  const handleCourseSelectionButtonClick = () => {
    router.push('/components/CourseSelection');  // 写真アルバムボタンをクリックしたときに遷移
  };


  return (
    <div class="flex flex-col justify-center items-center gap-4">
      <h1 class="text-2xl mt-12">{pet ? pet.name : 'ペットの名前'}</h1> {/* 登録された犬の名前を引っ張ってくる*/}

<div class="card bg-base-100 w-72 shadow-xl mt-8">
  <figure>
    <img
      src={pet && pet.profile_image ? `http://127.0.0.1:5000/${pet.profile_image}` : '/top.png'}
      alt={pet ? pet.name : 'ペットの画像'} />
  </figure>
  <div class="card-body">
    <h2 class="card-title">モカからのメッセージ</h2>
    <p>今日もお散歩楽しかったね。暑いから熱中症に気をつけようね。</p>
  </div>
</div>

      <button class="btn btn-wide bg-yellow-400 rounded-full mt-12" onClick={handleRecordButtonClick}>おせわを記録</button>
      <button class="btn btn-wide bg-yellow-400 rounded-full mt-2" onClick={handlePhotoAlbumButtonClick}>写真アルバム</button>
      <button class="btn btn-ghost my-2 mt-5 rounded-full" onClick={handleCourseSelectionButtonClick}>コース選択にもどる</button>
    </div>
  )
} 

