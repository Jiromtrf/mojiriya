"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // ログイン処理のAPIコールなど
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="container">
            <div className="logo">
                <Image src="/moka.png" alt="Logo" width={200} height={150} />
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
