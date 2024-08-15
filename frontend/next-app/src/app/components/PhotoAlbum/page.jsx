"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const PhotoAlbum = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/photos');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        if (Array.isArray(data.photos)) {
          setPhotos(data.photos);
        } else {
          console.error('Unexpected data format:', data);
        }
      } catch (error) {
        console.error('Error fetching photos:', error);
      }
    };

    fetchPhotos();
  }, []);

  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-4">
        <h1 className="text-2xl mt-12">写真アルバム</h1>

        <div className="h-56 grid grid-cols-2 gap-4 content-start">
          {photos.map((photo, index) => (
            <div key={index} className="w-40 shadow-xl mt-8">
              <img
                src={photo.photo_data} // Base64 データ URL を使用
                alt={`写真 ${index}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        <Link href="/components/PhotoSelect">
          <button className="btn btn-primary z-40 absolute bottom-20 right-20">
            写真を追加
          </button>
        </Link>

        <Link href="/components/MyDogTop">
          <button className="btn btn-ghost my-2 mt-5 rounded-full absolute bottom-5">
            戻る
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PhotoAlbum;
