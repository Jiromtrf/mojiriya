import React from 'react'

const DogArticleTop = () => {
  return (
    <div>
    <div class="flex flex-col justify-center items-center gap-4">
      <h1 class="text-2xl mt-12 mb-6">おせわ情報</h1>
      <button class="btn btn-outline btn-square btn-wide">1日のスケジュール</button>
      <button class="btn btn-outline btn-square btn-wide">散歩の方法</button>
      <button class="btn btn-outline btn-square btn-wide">トイレはどうする？</button>
      <button class="btn btn-outline btn-square btn-wide">かかる費用は？</button>
      <button class="btn btn-ghost my-2 mt-5 rounded-full">戻る</button>
    </div>
    </div>
  )
}

export default DogArticleTop
