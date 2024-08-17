'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
    const router = useRouter();

    const handleStartClick = () => {
        router.push('/components/CourseSelection');
    };

    return (
        <div className="flex flex-col justify-center items-center mt-12 gap-4">
            <div className="mb-8">
                <img src="/app_top.png" alt="Paw Journey" className="w-48 h-48" />
            </div>
            <div className="text-4xl font-bold text-gray-800 mb-8">
              Paw Journey
            </div>
            <button 
                className="btn btn-wide bg-yellow-400 rounded-full mt-2" 
                onClick={handleStartClick}>
                はじめる
            </button>
        </div>
    );
}