"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const PhotoSelect = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const router = useRouter();

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('photo', selectedFile);

      try {
        const response = await fetch('http://localhost:5000/photo_upload', {
          method: 'POST',
          body: formData,
        });

        if (response.ok) {
          console.log('アップロード成功');
          // アップロード成功後にリダイレクト
          router.push('/components/PhotoAlbum');
        } else {
          console.error('アップロード失敗');
        }
      } catch (error) {
        console.error('アップロードエラー:', error);
      }
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <h2 className="text-xl mb-4">写真を選択</h2>

      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="mb-4"
      />

      <button
        onClick={handleUpload}
        className="btn btn-primary"
      >
        アップロード
      </button>
    </div>
  );
};

export default PhotoSelect;
