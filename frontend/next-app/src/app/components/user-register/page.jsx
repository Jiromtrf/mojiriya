"use client";

import { useState } from "react";
import axios from "axios";

export default function Register() {
    const [nickname, setNickname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/user-register', {
                nickname,
                email,
                password,
            });
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="container">
            <h1 className="title">アカウント登録</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="input-field"
                    placeholder="ニックネーム"
                    value={nickname}
                    onChange={(e) => setNickname(e.target.value)}
                />
                <input
                    type="email"
                    className="input-field"
                    placeholder="メールアドレス"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    className="input-field"
                    placeholder="パスワード"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit" className="button">登録</button>
            </form>
        </div>
    );
}
