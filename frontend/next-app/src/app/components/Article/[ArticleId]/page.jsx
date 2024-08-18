'use client';

import React from 'react'
import { useRouter } from 'next/navigation';

export default function MyDogTop() {
  const router = useRouter(); // useRouterを使ってrouterを取得

  
const handleDogArticleTopBackButtonClick = () => {
  router.push('/components/DogArticleTop');  // ボタンをクリックしたときに遷移する
};

  return (
    <div>
    <div class="flex flex-col justify-center items-center gap-4">
    <h1 class="text-2xl mt-12">散歩の方法・気を付ける点</h1>

    <div class="w-72 shadow-xl mt-8">
     <img
      src="/article_1.png"
      alt="dog" />
    </div>

    <div class="container w-96 flex flex-col justify-center items-center px-4">
    <div class="text-left">
    <div>
     <h2 class="text-xl">1. リード（引き綱）の使用</h2>
     <p>
       公共の場所では、必ずリードを使用しましょう。犬を自由にさせると他の人や動物に迷惑をかける可能性があります。また、リードの長さは適切に調整し、犬が突然飛び出したりしないようにしましょう。
     </p>
    </div>

    <div>
     <h2 class="text-xl mt-6">2. フンの処理</h2>
     <p>
       散歩中に犬が排泄をした場合、必ず持ち帰るか、指定の場所に処理するようにしてください。フン取り用の袋やトイレットペーパーを持ち歩くことが一般的です。日本では、公共の場をきれいに保つことが強く求められています。
     </p>
    </div>

    <div>
      <h2 class="text-xl mt-6">3. 他の人や動物への配慮</h2>
     <p>
       他の散歩中の犬や、通行人との距離を適切に保ちましょう。特に子供や犬が苦手な人に対しては、配慮が必要です。犬が吠えたり飛びついたりしないように注意しましょう。
      </p>
    </div>

    <div>
      <h2 class="text-xl mt-6">4. 公園や広場でのマナー</h2>
     <p>
       公園や広場では、指定されたエリアでのみ犬を自由にすることが許可されている場合があります。看板や案内板に従い、ルールを守りましょう。また、他の利用者との共存を意識し、犬が迷惑をかけないように心掛けましょう。
     </p>
    </div>

    <div>
     <h2 class="text-xl mt-6">5. 散歩の時間帯</h2>
     <p>
       夏場は特に、地面が熱くなりやすいので、朝早くや夕方以降の涼しい時間帯に散歩するのが良いです。アスファルトの温度が高いと、犬の足裏がやけどすることがあります。
     </p>
    </div>

    <div>
      <h2 class="text-xl mt-6">6. 予防接種と健康管理</h2>
     <p>
        犬の健康管理として、定期的な予防接種を受けさせることが大切です。特に狂犬病の予防接種は法律で義務付けられています。散歩中に他の犬と接触することもあるため、健康管理をしっかり行いましょう。
     </p>
    </div>

    <div>
     <h2 class="text-xl mt-6">7. 迷子札の装着</h2>
     <p>
        犬が万が一迷子になった場合に備え、名前と連絡先が記載された迷子札を装着させておくと安心です。
     </p>
    </div>
  </div>
  </div>

      <button class="btn btn-ghost my-2 mt-5 rounded-full" onClick={handleDogArticleTopBackButtonClick}>戻る</button>

    </div>
    </div>
  )
}
