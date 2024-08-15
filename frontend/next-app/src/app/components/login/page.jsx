// component/login

"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const router = useRouter();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const response = await axios.post('http://127.0.0.1:5000/login', {
          email,
          password,
        });
  
        if (response.data.message === 'Login successful') {
          setMessage('Login successful');
          // ユーザーIDをlocalStorageに保存
          localStorage.setItem('userId', response.data.user_id);
          // ペット情報登録ページに遷移
          router.push('/components/pet-register');
        } else {
          setMessage('Invalid credentials');
        }
      } catch (error) {
        setMessage('Error logging in. Please try again.');
        console.error(error);
      }
    };
  

    return (
        <div className="container">
            <div className="logo">
                <Image src="/logo.png" alt="Logo" width={200} height={150} />
            </div>
            <h1 className="title">paw journey</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    className="input-field"
                    placeholder="メールアドレス"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    className="input-field"
                    placeholder="パスワード"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit" className="button">ログイン</button>
            </form>
            <Link href="/components/user-register" className="button-link">
                新規登録
            </Link>
        </div>
    );
}
