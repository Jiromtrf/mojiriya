// component/uer-register

"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from 'next/navigation';

export default function Register() {
    const [nickname, setNickname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const router = useRouter();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const response = await axios.post('http://127.0.0.1:5000/register', {
          nickname,
          email,
          password,
        });
  
        if (response.data) {
          setMessage('アカウント作成が成功しました');
          // 2秒待機した後にログインページに遷移
          setTimeout(() => {
            router.push('/components/login');
          }, 2000);
        }
      } catch (error) {
        setMessage('アカウント作成に失敗しました。再度お試しください。');
        console.error(error);
      }
    };
  

    return (
        <div className="flex flex-col justify-center items-center mt-12 gap-4">
          <h1 className="title">アカウント登録</h1>
          <form className="form flex flex-col items-center" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="ニックネーム"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              className="input-field"
              required
            />
            <input
              type="email"
              placeholder="メールアドレス"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-field"
              required
            />
            <input
              type="password"
              placeholder="パスワード"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-field"
              required
            />
            <button type="submit" className="btn btn-wide bg-yellow-400 rounded-full mt-6 mx-auto">登録</button>
          </form>
          {message && <p>{message}</p>}
        </div>
      );
    }