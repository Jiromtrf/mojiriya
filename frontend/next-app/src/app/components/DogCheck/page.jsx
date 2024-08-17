'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function MyDogTop() {
  const router = useRouter();
  const [personality, setPersonality] = useState('');
  const [size, setSize] = useState('');
  const [results, setResults] = useState([]);

  const handleConsideringDogTopButtonClick = () => {
    router.push('/components/ConsideringDogTop');
  };

  const handlepetmiButtonClick = () => {
    window.open('https://petmi.jp/', '_blank');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // 性格と大きさをIDにマッピング
    const personalityMap = {
      '人懐っこい': 1,
      'おとなしい': 2,
      '優しい': 3,
      '穏やか': 4,
      '忠誠心が強い': 5,
      '独立心が強い': 6,
      '明るい': 7,
      '頑固': 8,
      '勇敢': 9,
      '賢い': 10
    };

    const sizeMap = {
      '小型犬': 1,
      '中型犬': 2,
      '大型犬': 3
    };

    const personalityId = personalityMap[personality];
    const sizeId = sizeMap[size];

    // APIリクエストを送信
    const response = await fetch('http://localhost:5000/api/dog_search', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ personalityId, sizeId })
    });

    const data = await response.json();
    setResults(data);
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl mt-12">おすすめのわんちゃん診断</h1>

      <form onSubmit={handleSubmit} className="space-y-4 mt-8">
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">性格</span>
          </div>
          <select
            className="select select-bordered"
            value={personality}
            onChange={(e) => setPersonality(e.target.value)}
          >
            <option disabled value="">選択してください</option>
            <option>人懐っこい</option>
            <option>おとなしい</option>
            <option>優しい</option>
            <option>穏やか</option>
            <option>忠誠心が強い</option>
            <option>独立心が強い</option>
            <option>明るい</option>
            <option>頑固</option>
            <option>勇敢</option>
            <option>賢い</option>
          </select>
        </label>

        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">大きさ</span>
          </div>
          <select
            className="select select-bordered"
            value={size}
            onChange={(e) => setSize(e.target.value)}
          >
            <option disabled value="">選択してください</option>
            <option>大型犬</option>
            <option>中型犬</option>
            <option>小型犬</option>
          </select>
        </label>

        <button className="btn btn-wide bg-yellow-400 rounded-full my-4" type="submit">診断</button>
      </form>

      <h2 className="text-xl mt-12">診断結果</h2>

      <div className="flex flex-wrap gap-6 justify-center mt-6">
        {results.map((dog) => (
          <div key={dog.id} className="card bg-base-100 w-64 shadow-xl p-4">
            <div className="card-body">
              <h2 className="text-lg font-semibold mb-2">{dog.breed_jp}</h2>
              <div className="space-y-1">
                <p><span className="font-bold">特徴:</span> {dog.features}</p>
                <p><span className="font-bold">性格:</span> {dog.personality}</p>
                <p><span className="font-bold">大きさ:</span> {dog.size}</p>
                <p><span className="font-bold">色:</span> {dog.color}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-xl mt-12">ペットショップで探す</h2>
      <button className="btn btn-wide bg-yellow-400 rounded-full my-4" onClick={handlepetmiButtonClick}>petmiへ移動</button>

      <div className="container w-64 flex flex-col justify-center items-center px-4">
        <div className="flex flex-row space-x-6 mb-5">
          <p className="text-xs">ここから先は外部サイトへ移動します。ウェブサイト利用規約については、移動先サイトの方針に従うものとします。</p>
        </div>
      </div>

      <button className="btn btn-ghost my-5 rounded-full" onClick={handleConsideringDogTopButtonClick}>戻る</button>
    </div>
  );
}
