"use client";

import React, { useState, useEffect } from 'react';
import { DateTimePicker } from '@mui/x-date-pickers';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import dayjs from 'dayjs';

export default function RecordSanpoPage() {
  const [date, setDate] = useState(dayjs());  // 日時をDay.jsオブジェクトで管理
  const [duration, setDuration] = useState('');
  const [photo, setPhoto] = useState(null);
  const [message, setMessage] = useState('');
  const [petId, setPetId] = useState(null);
  const router = useRouter();  // useRouterフックを使用してルーターを取得

  useEffect(() => {
    // ユーザーIDに紐づくペットIDを取得
    const userId = localStorage.getItem('userId');
    axios.get('http://127.0.0.1:5000/get-pets', { params: { user_id: userId } })
      .then(response => {
        if (response.data.length > 0) {
          setPetId(response.data[0].id);  // 最初のペットIDを使用
        } else {
          setMessage('ペットが見つかりませんでした。');
        }
      })
      .catch(error => {
        console.error('ペットIDの取得に失敗しました:', error);
        setMessage('エラーが発生しました。');
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('user_id', localStorage.getItem('userId'));  // ユーザーIDを送信
    formData.append('date', date.format('YYYY-MM-DDTHH:mm'));  // 日時をフォーマットして送信
    formData.append('duration', duration);  // 散歩時間を送信
    formData.append('photo', photo);

    try {
      const response = await axios.post('http://127.0.0.1:5000/save-sanpo-record', formData);

      if (response.data.message) {
        // 保存処理が成功した後に実行
        localStorage.setItem("fromSanpo", "true");
        // ユーザー名を localStorage に保存
        localStorage.setItem("userName", response.data.nickname);
        setMessage('保存しました');
        setTimeout(() => {
          router.push(`/components/RecordCompletion?username=${response.data.username}&activity=おさんぽ`);  // 2秒後に遷移
        }, 2000);
      } else {
        setMessage('保存に失敗しました。');
      }
    } catch (error) {
      setMessage('保存に失敗しました。');
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <form className="form" onSubmit={handleSubmit}>
        <h1 className="text-2xl py-12">さんぽを記録</h1>
        <div className="mb-4">
          <DateTimePicker
            label="記録日時"
            value={date}
            onChange={(newValue) => setDate(newValue)}
            renderInput={(params) => <TextField {...params} />}
          />
        </div>

        <label className="form-control w-full max-w-64 mt-4">
        <div className="label">
          <span className="label-text">さんぽ時間（分）</span>
        </div>
        <div>
          <TextField
            label="さんぽした分数を入力"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            fullWidth
          />
        </div>
        </label>

        <div className="mb-4">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">写真</span>
            </div>
            <input
              type="file"
              className="file-input file-input-bordered file-input-ghost w-full max-w-xs"
              onChange={(e) => setPhoto(e.target.files[0])}
            />
          </label>
        </div>

        <button className="btn btn-wide bg-yellow-400 rounded-full mt-6">保存</button>
      </form>
      {message && <p  className="flex flex-col mr-40">{message}</p>}
    </div>
  );
}
