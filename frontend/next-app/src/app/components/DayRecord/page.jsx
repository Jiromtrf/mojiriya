"use client";

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import axios from 'axios';

export default function DayRecord() {
  const searchParams = useSearchParams();
  const date = searchParams.get('date');
  const [eatRecords, setEatRecords] = useState([]);
  const [sanpoRecords, setSanpoRecords] = useState([]);

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    axios.get(`http://127.0.0.1:5000/get-eat-records`, {
      params: { user_id: userId, date }
    })
    .then(response => {
      setEatRecords(response.data);
    })
    .catch(error => {
      console.error('ごはんの記録の取得に失敗しました:', error);
    });

    axios.get(`http://127.0.0.1:5000/get-sanpo-records`, {
      params: { user_id: userId, date }
    })
    .then(response => {
      setSanpoRecords(response.data);
    })
    .catch(error => {
      console.error('さんぽの記録の取得に失敗しました:', error);
    });
  }, [date]);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl py-12">{date}</h1>

      <h2 className="text-xl py-4">さんぽ</h2>
      {sanpoRecords.map(record => (
        <div key={record.id} className="record-container mb-6 p-4 border border-gray-300 rounded-lg w-64">
          <div className="flex justify-between mb-2">
            <span>{record.time}</span>
            <span>{record.duration}分</span>
          </div>
          {record.photo_url && (
            <div className="mt-2">
              <img 
                src={`http://127.0.0.1:5000/${record.photo_url}`} 
                alt="さんぽの写真" 
                className="w-full h-auto object-cover" 
              />
            </div>
          )}
        </div>
      ))}

      <h2 className="text-xl py-4">ごはん</h2>
      {eatRecords.map(record => (
        <div key={record.id} className="record-container mb-6 p-4 border border-gray-300 rounded-lg w-64">
          <div className="flex justify-between mb-2">
            <span>{record.time}</span>
            <span>{record.amount}</span>
          </div>
          {record.photo_url && (
            <div className="mt-2">
              <img 
                src={`http://127.0.0.1:5000/${record.photo_url}`} 
                alt="食べた量の写真" 
                className="w-full h-auto object-cover" 
              />
            </div>
          )}
        </div>
      ))}

      <button className="btn btn-outline mt-4" onClick={() => window.history.back()}>戻る</button>
    </div>
  );
}
