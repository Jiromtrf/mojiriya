"use client";

import { useState } from 'react';
import axios from 'axios';

export default function PetRegister() {
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [breed, setBreed] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [photo, setPhoto] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('gender', gender);
        formData.append('breed', breed);
        formData.append('birthdate', birthdate);
        formData.append('photo', photo);

        try {
            const response = await axios.post('http://localhost:5000/pet-register', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="container">
            <h2 className="title">わんこの情報を登録しましょう</h2>
            <button className="share-button">共有コードで登録する</button>
            <div className="photo-placeholder">
                <input
                    type="file"
                    className="photo-input"
                    onChange={(e) => setPhoto(e.target.files[0])}
                />
            </div>
            <form onSubmit={handleSubmit} className="form">
                <input
                    type="text"
                    className="input-field"
                    placeholder="名前"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="text"
                    className="input-field"
                    placeholder="性別"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    required
                />
                <input
                    type="text"
                    className="input-field"
                    placeholder="種類"
                    value={breed}
                    onChange={(e) => setBreed(e.target.value)}
                    required
                />
                <input
                    type="date"
                    className="input-field"
                    placeholder="誕生日"
                    value={birthdate}
                    onChange={(e) => setBirthdate(e.target.value)}
                    required
                />
                <button type="submit" className="button">登録</button>
            </form>
        </div>
    );
}
