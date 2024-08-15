'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

export default function RecordPage() {
  const router = useRouter();

  // 各ボタンをクリックしたときの遷移処理
  const handleSanpoButtonClick = () => {
    router.push('/components/RecordSanpo');
  };

  const handleEatButtonClick = () => {
    router.push('/components/RecordEat');
  };

  const handleTableOfRecordsButtonClick = () => {
    router.push('/components/TableOfRecords');
  };

  const handlePointButtonClick = () => {
    router.push('/components/Point');
  };

  return (
    <div>
    <div class="flex flex-col justify-center items-center gap-4">
      <h1 class="text-2xl mt-12">おせわを記録</h1>
      <button class="btn btn-wide bg-yellow-400 rounded-full mt-10" onClick={handleSanpoButtonClick}> さんぽを記録</button>
      <button class="btn btn-wide bg-yellow-400 rounded-full mt-2" onClick={handleEatButtonClick}>ごはんを記録</button>
      <button class="btn btn-wide bg-yellow-400 rounded-full mt-2" onClick={handleTableOfRecordsButtonClick}>記録一覧</button>
      <button class="btn btn-wide bg-yellow-400 rounded-full mt-2" onClick={handlePointButtonClick}>おせわポイント</button>
    </div>
    </div>
  )
}

