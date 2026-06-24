"use client";

import Link from 'next/link';

export default function LandingPage() {
  return (
    <div style={{ backgroundColor: '#fcf8f9', minHeight: '100vh', fontFamily: 'sans-serif', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
      
      {/* KARTU UTAMA ONBOARDING (Sesuai Tampilan di Gambar edited-image.png) */}
      <div style={{ backgroundColor: 'white', padding: '40px 30px', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', maxWidth: '500px', width: '100%', textAlign: 'center' }}>
        
        {/* Nama Aplikasi */}
        <h2 style={{ margin: '0 0 10px 0', color: '#ff69b4', fontSize: '22px', fontWeight: '700' }}>
          GlowUp Skin Analyzer ✨
        </h2>

        {/* Deskripsi */}
        <p style={{ fontSize: '15px', color: '#555', margin: '0 0 25px 0', lineHeight: '1.6' }}>
          Kenali kulitmu lebih detail untuk menemukan solusi perawatan yang paling tepat.
        </p>

        {/* Garis Pembatas Estetik */}
        <hr style={{ border: 'none', borderTop: '2px solid #ffb6c1', opacity: 0.5, margin: '0 0 25px 0' }} />

        {/* TEKS PENGANTAR (Sudah Diperbaiki Menjadi Pink Tua/Tegas Sesuai Garis Merah di Gambar) */}
        <p style={{ 
          fontSize: '14px', 
          fontWeight: '600', 
          color: '#d81b60', 
          marginBottom: '15px', 
          letterSpacing: '0.5px' 
        }}>
          Mulai Analisis Sekarang:
        </p>

        {/* TOMBOL CALL TO ACTION (Menuju Tahap 2: Login) */}
        <Link href="/login">
          <button style={{ 
            width: '100%',
            backgroundColor: '#ff69b4', 
            color: '#ffffff', 
            border: 'none', 
            padding: '16px 0', 
            borderRadius: '12px', 
            cursor: 'pointer', 
            fontWeight: 'bold', 
            fontSize: '16px', 
            boxShadow: '0px 8px 20px rgba(255,105,180,0.35)',
            transition: 'all 0.2s ease-in-out'
          }}>
            Mulai Analisis Kulit Gratis ➔
          </button>
        </Link>

      </div>

    </div>
  );
}