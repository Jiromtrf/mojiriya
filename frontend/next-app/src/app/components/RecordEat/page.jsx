"use client";

import React, { useState, useEffect } from 'react';
import { DateTimePicker } from '@mui/x-date-pickers';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import dayjs from 'dayjs';

export default function RecordEatPage() {
  const [date, setDate] = useState(dayjs());  // 日時をDay.jsオブジェクトで管理
  const [amount, setAmount] = useState('');  // 初期値を空に設定
  const [photo, setPhoto] = useState(null);
  const [preview, setPreview] = useState(null);  // プレビュー用ステートを追加
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

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    setPhoto(file);

    // プレビューを表示するための処理を追加
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

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
    <div className="flex flex-col justify-center items-center gap-4">
      <form className="form flex flex-col items-center" onSubmit={handleSubmit}>
        <h1 className="text-2xl py-12">ごはんを記録</h1>
        <DateTimePicker
          label="記録日時"
          value={date}
          onChange={(newValue) => setDate(newValue)}  // setDateを使用
          renderInput={(params) => <TextField {...params} className="input-field" required />}
        />

        <label className="form-control w-full max-w-64 mt-4">
          <div className="label">
            <span className="label-text">食べた量</span>
          </div>
          <select
            className="select select-bordered"
            value={amount}  // amountの値を反映
            onChange={(e) => setAmount(e.target.value)}  // 選択された値をamountに設定
            name="amount"  // name属性を追加
            required
          >
            <option value="" disabled>選択してください</option> {/* 初期値を空に設定 */}
            <option value="完食">完食</option>
            <option value="食べ残し">食べ残し</option>
            <option value="食べない">食べない</option>
          </select>
        </label>

        <label className="form-control w-full max-w-xs mt-4">
          <div className="label">
            <span className="label-text">写真</span>
          </div>
          <input 
            type="file" 
            className="file-input file-input-bordered file-input-ghost w-full max-w-xs" 
            onChange={handlePhotoChange}  // 選択されたファイルをphotoに設定
            required
          />
        </label>

        {/* 画像プレビュー表示 */}
        {preview && (
          <div className="image-preview mt-4">
            <img src={preview} alt="プレビュー画像" className="max-w-full h-auto" />
          </div>
        )}

        <button className="btn btn-wide bg-yellow-400 rounded-full mt-6" type="submit">保存</button>

      </form>
      {message && <p className="flex flex-col">{message}</p>}
      <button
        className="btn btn-ghost my-2 mt-5 rounded-full"
        onClick={() => router.back()}
      >戻る</button>
    </div>
  );
}
