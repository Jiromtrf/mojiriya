"use client";

import React, { useState, useEffect } from 'react';
import { DateTimePicker } from '@mui/x-date-pickers';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import dayjs from 'dayjs';

export default function RecordEatPage() {
  const [date, setDate] = useState(dayjs());  // 日時をDay.jsオブジェクトで管理
  const [amount, setAmount] = useState('');
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
    formData.append('pet_id', petId);  // ペットIDを追加
    formData.append('date', date.format('YYYY-MM-DDTHH:mm'));  // 日時をフォーマットして送信
    formData.append('amount', amount);  // 食べた量を追加
    formData.append('photo', photo);  // 写真を追加

    try {
      const response = await axios.post('http://127.0.0.1:5000/save-eat-record', formData);

      if (response.data.message) {
        // 保存処理が成功した後に実行
        localStorage.setItem("fromEat", "true");
        // ユーザー名を localStorage に保存
        localStorage.setItem("userName", response.data.nickname);
        setMessage('保存しました');
        setTimeout(() => {
          router.push(`/components/RecordCompletion?username=${response.data.nickname}&activity=ごはん`);  // 2秒後に遷移
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
    <div class="flex flex-col justify-center items-center gap-4">
      <form className="form" onSubmit={handleSubmit}>
      <h1 class="text-2xl py-12">ごはんを記録</h1>
      <DateTimePicker
        label="記録日時"
        value={date}
        onChange={(newValue) => setDate(newValue)}  // setDateを使用
        renderInput={(params) => <TextField {...params} className="input-field" required />}
      />

    <label class="form-control w-full max-w-64 mt-4">
        <div class="label">
         <span class="label-text">食べた量</span>
        </div>
     <select 
       class="select select-bordered"
       value={amount}  // amountの値を反映
       onChange={(e) => setAmount(e.target.value)}  // 選択された値をamountに設定
       name="amount"  // name属性を追加
       required
     >
        <option disabled selected>選択してください</option>
        <option value="完食">完食</option>
        <option value="食べ残し">食べ残し</option>
        <option value="食べない">食べない</option>
    </select>

</label>

      <label class="form-control w-full max-w-xs mt-4">
         <div class="label">
         <span class="label-text">写真</span>
        </div>
     <input 
       type="file" 
       class="file-input file-input-bordered file-input-ghost w-full max-w-xs" 
       onChange={(e) => setPhoto(e.target.files[0])}  // 選択されたファイルをphotoに設定
       required
     />
    </label>

    <button class="btn btn-wide bg-yellow-400 rounded-full mt-6" type="submit">保存</button>
  </form>
   {message && <p className="flex flex-col mr-40">{message}</p>}
    </div>
  );
}
