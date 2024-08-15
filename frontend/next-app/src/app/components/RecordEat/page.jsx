'use client';  // クライアントコンポーネントとして指定
import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { DateTimePicker } from '@mui/x-date-pickers';
import TextField from '@mui/material/TextField';

export default function RecordEatPage() {
  const [date, setDate] = useState(dayjs());
  const [amount, setAmount] = useState('');
  const [photo, setPhoto] = useState(null);
  const [message, setMessage] = useState('');
  const [petId, setPetId] = useState(null);
  const router = useRouter();

  useEffect(() => {
    // ユーザーIDに紐づくペットIDを取得
    const userId = localStorage.getItem('userId');
    if (!userId) {
      setMessage('ユーザーIDが取得できていません。再度ログインしてください。');
      return;
    }

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
        setMessage('エラーが発生しました。サーバーに接続できません。');
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!petId) {
      setMessage('ペットIDが取得できていません。再度お試しください。');
      return;
    }

    const formData = new FormData();
    formData.append('pet_id', petId);  // ペットIDを追加
    formData.append('date', date.format('YYYY-MM-DDTHH:mm'));  // 日時をフォーマットして送信
    formData.append('amount', amount);  // 食べた量を追加
    formData.append('photo', photo);  // 写真を追加

    try {
      const response = await axios.post('http://127.0.0.1:5000/save-eat-record', formData);

      if (response.data.message) {
        setMessage('保存しました');
        setTimeout(() => {
          router.push('/components/RecordCompletion');  // 2秒後に遷移
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
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div>
        <h1 className="text-2xl mt-12">ごはんの記録</h1>
        <form className="form" onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <DateTimePicker
            label="記録日時"
            value={date}
            onChange={(newValue) => setDate(newValue)}
            renderInput={(params) => <TextField {...params} className="input-field" required />}
            style={{ marginBottom: '10px' }}
          />
          <select
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="input-field"
            required
            style={{ marginBottom: '10px' }}
          >
            <option value="">食べた量を選択</option>
            <option value="少なめ">少なめ</option>
            <option value="普通">普通</option>
            <option value="多め">多め</option>
          </select>
          <input
            type="file"
            onChange={(e) => setPhoto(e.target.files[0])}
            className="input-field"
            required
            style={{ marginBottom: '10px' }}
          />
          <button type="submit" className="button" style={{ width: '100%' }}>保存</button>
        </form>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
}
