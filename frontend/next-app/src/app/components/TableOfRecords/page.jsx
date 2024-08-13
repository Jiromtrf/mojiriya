// src/app/RecordSanpo/page.jsx

"use client";

import React, { useState } from 'react';
import { StaticDatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';

const TableOfRecords = () => {
  const [value, setValue] = useState(dayjs());

  return (
    <div class="flex flex-col justify-center items-center gap-4">
      <h1 class="text-2xl py-12">おせわの記録</h1>
      <StaticDatePicker
        displayStaticWrapperAs="desktop" // "desktop" または "mobile" を指定可能
        label="Static Date Picker"
        value={value}
        onChange={(newValue) => setValue(newValue)}
      />
    <button class="btn btn-wide bg-yellow-400 rounded-full mt-6">表示</button>

    <button class="btn btn-ghost my-2 rounded-full">戻る</button>

    </div>
  );
}

export default TableOfRecords;
