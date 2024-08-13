import React from 'react'

const Article = () => {
  return (
    <div>
    <div class="flex flex-col justify-center items-center gap-4">
      <h1 class="text-2xl mt-12">1日のスケジュール</h1>

      <div class="w-72 shadow-xl mt-8">
       <img
         src="/top.png"
         alt="Shoes" />
      </div>

<div class="container w-64 flex flex-col justify-center items-center px-4">
            <div class="flex flex-row space-x-6 mb-8">
                <p class="text-base">犬を飼う場合、健康的で幸せな生活を送るためには、規則正しい1日のスケジュールを設定することが大切です。以下は一般的な1日のスケジュールの例です。</p>
             </div>
      </div>

      <button class="btn btn-ghost my-2 mt-5 rounded-full">戻る</button>

    </div>
    </div>
  )
}

export default Article