import React from 'react'

const PhotoAlbum = () => {
  return (
    <div>
    <div class="flex flex-col justify-center items-center gap-4">
      <h1 class="text-2xl mt-12">写真アルバム</h1>

    <div class="h-56 grid grid-cols-2 gap-4 content-start">
      <div class="w-40 shadow-xl mt-8">
       <img
         src="/top.png"
         alt="Shoes" />
       </div>

       <div class="w-40 shadow-xl mt-8">
       <img
         src="/top.png"
         alt="Shoes" />
       </div>

       <div class="w-40 shadow-xl mt-8">
       <img
         src="/top.png"
         alt="Shoes" />
       </div>

       <div class="w-40 shadow-xl mt-8">
       <img
         src="/top.png"
         alt="Shoes" />
       </div>

       <div class="w-40 shadow-xl mt-8">
       <img
         src="/top.png"
         alt="Shoes" />
       </div>

      </div>


      <button class="btn btn-primary z-40 absolute bottom-20 right-20 ">写真を追加</button>

      <button class="btn btn-ghost my-2 mt-5 rounded-full absolute bottom-5">戻る </button>

    </div>
    </div>
  )
}

export default PhotoAlbum