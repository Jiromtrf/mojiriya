"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function RecordCompletion() {
  const router = useRouter();
  const [userName, setUserName] = useState('');
  const [activity, setActivity] = useState('');

  useEffect(() => {
    // ユーザー名を取得
    const storedUserName = localStorage.getItem("userName");
    if (storedUserName) {
      setUserName(storedUserName);
    }

    // 遷移元によってアクティビティを変更
    const fromSanpo = localStorage.getItem("fromSanpo");
    const fromEat = localStorage.getItem("fromEat");
    if (fromSanpo) {
      setActivity("お散歩");
      localStorage.removeItem("fromSanpo");
    } else if (fromEat) {
      setActivity("ごはん");
      localStorage.removeItem("fromEat");
    }
  }, []);

  const handleBackToTop = () => {
    router.push("/components/MyDogTop"); // トップページに遷移
  };

  // 今後の課題：名前のところを{userName}で反映させたい
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <h1 className="text-2xl mt-40 font-bold" style={{ color: 'red' }}>登録完了</h1>
      <p className="text-2xl font-bold mt-10">葵さん</p> 
      <p className="text-2xl font-bold">{activity}をありがとう！</p>
      <p className="text-2xl font-bold">あなたのケアが愛犬にとって本当に大きな助けとなっています。</p>
      <p className="text-2xl font-bold text-yellow-500">5PT獲得！</p>
      <button
        onClick={handleBackToTop}
        className="btn btn-wide bg-yellow-400 rounded-full mt-6"
      >
        トップページへ戻る
      </button>
    </div>
  );
}
