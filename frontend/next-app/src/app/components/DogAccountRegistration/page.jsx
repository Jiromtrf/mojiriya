import React from 'react'

const DogAccountRegistration = () => {
  return (
    <div class="flex flex-col justify-center items-center gap-4">
      <h1 class="mt-12">わんこの情報を登録しましょう</h1>
      



      <input
        type="text" placeholder="名前" class="input input-bordered w-full max-w-xs mt-6" />
      <input
        type="text" placeholder="性別" class="input input-bordered w-full max-w-xs" />
      <input
        type="text" placeholder="種類" class="input input-bordered w-full max-w-xs" />
      <input
        type="text" placeholder="誕生日" class="input input-bordered w-full max-w-xs" />

    <label class="form-control w-full max-w-xs">
         <div class="label">
         <span class="label-text">わんこの写真</span>
        </div>
     <input type="file" class="file-input file-input-bordered file-input-ghost w-full max-w-xs" />
    </label>

      <button class="btn btn-wide bg-yellow-400 rounded-full mt-6">登録</button>

      <button class="btn btn-ghost my-2 rounded-full">共有コードでの登録はこちら</button>
    </div>
  )
}

export default DogAccountRegistration
