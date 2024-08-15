'use client';

import React from 'react'
import { useRouter } from 'next/navigation';

export default function MyDogTop() {
  const router = useRouter(); // useRouterを使ってrouterを取得

  
const handleConsideringDogTopButtonClick = () => {
  router.push('/components/ConsideringDogTop');  // ボタンをクリックしたときに遷移する
};

const handlepetmiButtonClick = () => {
  window.open('https://petmi.jp/', '_blank'); 
};


  return (
    <div>
    <div class="flex flex-col justify-center items-center gap-2">
      <h1 class="text-2xl mt-12">おすすめの</h1>
      <h1 class="text-2xl mt-2">わんちゃん診断</h1>
  
 <label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">性格</span>
  </div>
  <select className="select select-bordered">
    <option disabled selected>選択してください</option>
    <option>人懐っこい</option>
    <option>おとなしい</option>
    <option>優しい</option>
    <option>穏やか</option>
    <option>気性が荒い</option>
    <option>忠誠心が強い</option>
    <option>独立心が強い</option>
  </select>
</label>

<label className="form-control w-full max-w-xs">
  <div className="label">
    <span className="label-text">大きさ</span>
  </div>
  <select className="select select-bordered">
    <option disabled selected>選択してください</option>
    <option>大型犬</option>
    <option>中型犬</option>
    <option>小型犬</option>
  </select>
</label>

<button class="btn btn-wide bg-yellow-400 rounded-full my-4">診断</button>

<h1 class="text-2xl mt-12">診断結果</h1>

<div className="card bg-base-100 w-64 shadow-xl">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">ゴールデン・レトリバー</h2>
    <p>人や他の動物に対して友好的で、社交的な性格です</p>
  </div>
</div>

<div className="card bg-base-100 w-64 shadow-xl">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">ゴールデン・レトリバー</h2>
    <p>人や他の動物に対して友好的で、社交的な性格です</p>
  </div>
</div>

<h1 class="text-2xl mt-12">ペットショップで探す</h1>
<button class="btn btn-wide bg-yellow-400 rounded-full my-4" onClick={handlepetmiButtonClick}>petmiへ移動</button>


<div class="container w-64 flex flex-col justify-center items-center px-4">
            <div class="flex flex-row space-x-6 mb-5">
                <p class="text-xs">ここから先は外部サイトへ移動します. ウェブサイト利用規約については、移動先サイトの方針に従うものとします。</p>
             </div>
      </div>

      <button class="btn btn-ghost my-5  rounded-full" onClick={handleConsideringDogTopButtonClick}>戻る</button>

    </div>
    </div>
  )
}

