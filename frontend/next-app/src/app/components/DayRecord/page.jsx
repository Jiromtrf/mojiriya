import React from 'react'

const DayRecord = () => {
  return (
    <div class="flex flex-col justify-center items-center gap-4">
    
      <h1 class="text-2xl mt-12">2024年8月12日</h1> 
      <div class="container mx-auto flex flex-col justify-center items-center px-4">
        <h2 class="text-xl mt-5 font-bold">さんぽ</h2>
            <div class="flex flex-row space-x-6 mt-2">
                <p class="text-lg">10:00</p>
                <p class="text-lg">30分</p>
            </div>
            <div class="flex flex-row space-x-6 mt-2">
                 <p class="text-lg">21:00</p>
                <p class="text-lg">40分</p>
             </div>
      </div>

      <div class="container mx-auto flex flex-col justify-center items-center px-4">
        <h2 class="text-xl mt-5 font-bold">ごはん</h2>
            <div class="flex flex-row space-x-6 mt-2">
                <p class="text-lg">7:00</p>
                <p class="text-lg">完食</p>
            </div>
            <div class="flex flex-row space-x-6 mt-2">
                 <p class="text-lg">19:00</p>
                <p class="text-lg">完食</p>
             </div>
      </div>

      <button class="btn btn-ghost my-2 mt-5 rounded-full">戻る</button>
      
    </div>
  )
} 

export default DayRecord
