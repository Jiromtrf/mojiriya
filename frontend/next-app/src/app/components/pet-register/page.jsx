// component/pet-register
'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function RegisterPet() {
    const [name, setName] = useState('');
    const [gender, setGender] = useState('オス');
    const [species, setSpecies] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [profileImage, setProfileImage] = useState(null);
    const [message, setMessage] = useState('');
    const [userId, setUserId] = useState(null);
    const router = useRouter();
  
    // ページロード時にユーザーIDをlocalStorageから取得
    useEffect(() => {
      const storedUserId = localStorage.getItem('userId');
      if (storedUserId) {
        setUserId(storedUserId);
      } else {
        setMessage('ユーザーIDが取得できませんでした。再度ログインしてください。');
      }
    }, []);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      // userIdがnullの場合はフォーム送信を中断
      if (!userId) {
        setMessage('ユーザーIDが確認できません。再度ログインしてください。');
        return;
      }
  
      const formData = new FormData();
      formData.append('name', name);
      formData.append('gender', gender);
      formData.append('species', species);
      formData.append('birthdate', birthdate);
      formData.append('profile_image', profileImage);
      formData.append('user_id', userId);
  
      try {
        const response = await axios.post('http://127.0.0.1:5000/register-pet', formData);
  
        if (response.data.message) {
          setMessage(response.data.message);
          setTimeout(() => {
            router.push('/components/MyDogTop');
          }, 2000);
        } else {
          setMessage('登録に失敗しました。再度お試しください。');
        }
      } catch (error) {
        setMessage('登録に失敗しました。再度お試しください。');
        console.error(error);
      }
    };
  
    return (
      <div className="container">
        <h1 className="title">ペット情報登録</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="ペットの名前"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input-field"
            required
          />
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="input-field"
            required
          >
            <option value="オス">オス</option>
            <option value="メス">メス</option>
          </select>
          <input
            type="text"
            placeholder="種類"
            value={species}
            onChange={(e) => setSpecies(e.target.value)}
            className="input-field"
            required
          />
          <input
            type="date"
            value={birthdate}
            onChange={(e) => setBirthdate(e.target.value)}
            className="input-field"
            required
          />
          <input
            type="file"
            onChange={(e) => setProfileImage(e.target.files[0])}
            className="input-field"
          />
          <button type="submit" className="button">登録</button>
        </form>
        {message && <p>{message}</p>}
      </div>
    );
  }