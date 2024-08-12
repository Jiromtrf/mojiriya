
"use client";

import React, { useState } from 'react';
import { DateTimePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';

const Page = () => {
  const [value, setValue] = useState(dayjs());

  return (
    <div class="flex flex-col justify-center items-center gap-4">
      <h1 class="text-2xl py-12">ごはんを記録</h1>
      <DateTimePicker
        label="記録日時"
        value={value}
        onChange={(newValue) => setValue(newValue)}
      />

    <label class="form-control w-full max-w-64 mt-4">
        <div class="label">
         <span class="label-text">食べた量</span>
        </div>
     <select class="select select-bordered">
        <option disabled selected>選択してください</option>
        <option>完食</option>
        <option>食べ残し</option>
        <option>食べない</option>
    </select>

</label>

      <label class="form-control w-full max-w-xs mt-4">
         <div class="label">
         <span class="label-text">写真</span>
        </div>
     <input type="file" class="file-input file-input-bordered file-input-ghost w-full max-w-xs" />
    </label>

    <button class="btn btn-wide bg-yellow-400 rounded-full mt-6">保存</button>
    </div>
  );
}

export default Page;
