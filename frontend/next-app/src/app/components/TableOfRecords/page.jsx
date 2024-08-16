"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import dayjs from 'dayjs';

export default function TableOfRecords() {
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const router = useRouter();

  const handleShowRecords = () => {
    const formattedDate = selectedDate.format('YYYY-MM-DD');
    router.push(`/components/DayRecord?date=${formattedDate}`);
  };

  return (
    <div class="flex flex-col justify-center items-center gap-4">
      <h1 class="text-2xl py-12">おせわの記録</h1>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar
          value={selectedDate}
          onChange={(newValue) => setSelectedDate(newValue)}
        />
      </LocalizationProvider>
      <button 
        class="btn btn-wide bg-yellow-400 rounded-full mt-6" 
        onClick={handleShowRecords}
      >
        表示
      </button>
      <button class="btn btn-outline mt-4" onClick={() => router.back()}>戻る</button>
    </div>
  );
}
