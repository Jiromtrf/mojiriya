import React from 'react'

const Point = () => {
  return (
    <div class="flex flex-col justify-center items-center gap-4">
      <h1 class="text-2xl mt-12">おせわポイント</h1>

    <div class="stats shadow mt-5">
  <div class="stat">
    <div class="stat-figure text-red-400">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        class="inline-block h-8 w-8 stroke-current">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
      </svg>
    </div>
    <div class="stat-title">Total</div>
    <div class="stat-value text-primary">325 pt</div>
    <div class="stat-desc"></div>
  </div>
  </div>

  <div className="overflow-x-auto mt-8">
  <table className="table">
    <tbody>
      {/* row 1 */}
      <tr>
        <td>葵</td>
        <td>180 pt</td>
      </tr>
      {/* row 2 */}
      <tr>
        <td>ママ</td>
        <td>100 pt</td>
      </tr>
      {/* row 3 */}
      <tr>
        <td>パパ</td>
        <td>45 ポイント</td>
      </tr>
    </tbody>
  </table>
</div>

<button class="btn btn-ghost my-2 mt-5 rounded-full">戻る</button>
 
    </div>
  )
}

export default Point
