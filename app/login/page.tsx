"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div style={{ backgroundColor: '#fcf8f9', minHeight: '100vh', fontFamily: 'sans-serif', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
      
      {/* KARTU FORM LOGIN */}
      <div style={{ backgroundColor: 'white', padding: '40px 30px', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', maxWidth: '450px', width: '100%' }}>
        
        {/* Header Login */}
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <h2 style={{ margin: '0 0 8px 0', color: '#ff69b4', fontSize: '24px', fontWeight: '700' }}>Selamat Datang Kembali ✨</h2>
          <p style={{ margin: 0, fontSize: '13px', color: '#666' }}>Masuk untuk melanjutkan analisis kulitmu</p>
        </div>

        {/* FORM FIELD */}
        <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          
          {/* INPUT EMAIL/USERNAME (Sesuai Screenshot 2026-06-24 095026.png) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label style={{ 
              fontSize: '14px', 
              fontWeight: '600', 
              color: '#333333' // Diubah ke abu-abu gelap/hitam agar terlihat sangat kontras
            }}>
              Email/Username:
            </label>
            <input 
              type="text" 
              placeholder="Masukkan email Anda" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ 
                padding: '14px 16px', 
                borderRadius: '10px', 
                border: '1px solid #cccccc', // Border lebih dipertegas
                fontSize: '14px',
                color: '#222222', // Warna teks saat diketik menjadi hitam tegas
                backgroundColor: '#ffffff',
                outline: 'none'
              }} 
            />
          </div>

          {/* INPUT PASSWORD (Sesuai Screenshot 2026-06-24 095026.png) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label style={{ 
              fontSize: '14px', 
              fontWeight: '600', 
              color: '#333333' // Diubah ke abu-abu gelap/hitam agar terlihat sangat kontras
            }}>
              Password:
            </label>
            <input 
              type="password" 
              placeholder="Masukkan password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ 
                padding: '14px 16px', 
                borderRadius: '10px', 
                border: '1px solid #cccccc', // Border lebih dipertegas
                fontSize: '14px',
                color: '#222222', // Warna teks saat diketik menjadi hitam tegas
                backgroundColor: '#ffffff',
                outline: 'none'
              }} 
            />
          </div>

          {/* TOMBOL LOGIN (Menuju Tahap Tambahan: Kuis Onboarding) */}
          <Link href="/quiz" style={{ textDecoration: 'none', marginTop: '10px' }}>
            <button style={{ 
              width: '100%',
              backgroundColor: '#ff69b4', 
              color: '#ffffff', 
              border: 'none', 
              padding: '16px', 
              borderRadius: '12px', 
              cursor: 'pointer', 
              fontWeight: 'bold', 
              fontSize: '16px', 
              boxShadow: '0px 8px 20px rgba(255,105,180,0.3)',
              transition: 'all 0.2s ease'
            }}>
              Masuk & Mulai Kuis ➔
            </button>
          </Link>

        </form>

      </div>
    </div>
  );
}