"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function DashboardHomeFeed() {
  // --- STATE DYNAMIC DATA DARI KUIS ---
  const [userData, setUserData] = useState({
    nama: "User",
    tipeKulit: "Sedang dianalisis...",
    keluhan: "Umum"
  });

  // --- STATE UNTUK TRACKER CHECKLIST ---
  const [pagiSkincare, setPagiSkincare] = useState({ wash: false, moist: false, uv: false });
  const [malamSkincare, setMalamSkincare] = useState({ wash: false, moist: false, treatment: false });

  // --- AMBIL DATA KUIS DAN STATUS CHECKLIST SAAT HALAMAN DIBUKA ---
  useEffect(() => {
    const namaKuis = localStorage.getItem('user_nama') || "Sarah";
    const tipeKuis = localStorage.getItem('user_tipe_kulit') || "Kombinasi / Normal";
    const keluhanKuis = localStorage.getItem('user_keluhan') || "Kulit Kusam & Dehidrasi";

    setUserData({
      nama: namaKuis,
      tipeKulit: tipeKuis,
      keluhan: keluhanKuis
    });

    // AMBIL STATUS CENTANG YANG PERNAH DISIMPAN USER
    const savedPagi = localStorage.getItem('pagi_skincare_status');
    const savedMalam = localStorage.getItem('malam_skincare_status');

    if (savedPagi) setPagiSkincare(JSON.parse(savedPagi));
    if (savedMalam) setMalamSkincare(JSON.parse(savedMalam));
  }, []);

  // --- FUNGSI BARU UNTUK MENYIMPAN CENTANG SECARA OTOMATIS ---
  const handlePagiChange = (updatedState: typeof pagiSkincare) => {
    setPagiSkincare(updatedState);
    localStorage.setItem('pagi_skincare_status', JSON.stringify(updatedState));
  };

  const handleMalamChange = (updatedState: typeof malamSkincare) => {
    setMalamSkincare(updatedState);
    localStorage.setItem('malam_skincare_status', JSON.stringify(updatedState));
  };

  return (
    <div style={{ backgroundColor: '#fcf8f9', minHeight: '100vh', padding: '25px 20px', fontFamily: 'sans-serif' }}>
      
      {/* 1. HEADER & PROFILE SUMMARY */}
      <div style={{ maxWidth: '600px', margin: '0 auto 25px auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'white', padding: '20px', borderRadius: '16px', boxShadow: '0 2px 10px rgba(0,0,0,0.03)' }}>
        <div>
          <h2 style={{ margin: 0, fontSize: '22px', color: '#222' }}>Halo, <span style={{ color: '#ff69b4' }}>{userData.nama}</span> 👋</h2>
          <p style={{ margin: '4px 0 0 0', fontSize: '13px', color: '#777' }}>Yuk, pantau perkembangan kulitmu hari ini!</p>
        </div>
        <div style={{ textAlign: 'right' }}>
          <span style={{ display: 'inline-block', backgroundColor: '#fff0f5', color: '#d81b60', padding: '6px 12px', borderRadius: '20px', fontSize: '11px', fontWeight: 'bold', border: '1px solid #ffe4e1' }}>
            ✨ {userData.tipeKulit}
          </span>
          <div style={{ fontSize: '11px', color: '#999', marginTop: '5px' }}>Fokus: {userData.keluhan}</div>
        </div>
      </div>

      {/* 2. MAIN SECTIONS SHORTCUTS */}
      <div style={{ maxWidth: '600px', margin: '0 auto 25px auto' }}>
        <h4 style={{ margin: '0 0 12px 0', color: '#444', fontSize: '14px', fontWeight: '600' }}>FITUR UTAMA ANALISIS</h4>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
          
          <Link href="/skin-analysis" style={{ textDecoration: 'none' }}>
            <div style={{ backgroundColor: 'white', padding: '16px', borderRadius: '12px', border: '1px solid #eee', display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer', boxShadow: '0 2px 6px rgba(0,0,0,0.02)' }}>
              <span style={{ fontSize: '24px', backgroundColor: '#e6fafa', padding: '8px', borderRadius: '10px' }}>🔍</span>
              <div>
                <div style={{ fontWeight: 'bold', color: '#333', fontSize: '13px' }}>Skin Analysis</div>
                <div style={{ color: '#999', fontSize: '11px', marginTop: '2px' }}>Scan & Deteksi Kulit</div>
              </div>
            </div>
          </Link>

          <Link href="/routine-builder" style={{ textDecoration: 'none' }}>
            <div style={{ backgroundColor: 'white', padding: '16px', borderRadius: '12px', border: '1px solid #eee', display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer', boxShadow: '0 2px 6px rgba(0,0,0,0.02)' }}>
              <span style={{ fontSize: '24px', backgroundColor: '#fff0f5', padding: '8px', borderRadius: '10px' }}>🧪</span>
              <div>
                <div style={{ fontWeight: 'bold', color: '#333', fontSize: '13px' }}>Routine Builder</div>
                <div style={{ color: '#999', fontSize: '11px', marginTop: '2px' }}>Rapor Skincare Custom</div>
              </div>
            </div>
          </Link>

        </div>
      </div>

      {/* 3. DAILY ROUTINE TRACKER */}
      <div style={{ maxWidth: '600px', margin: '0 auto 25px auto', backgroundColor: 'white', padding: '20px', borderRadius: '16px', boxShadow: '0 2px 10px rgba(0,0,0,0.03)' }}>
        <h4 style={{ margin: '0 0 15px 0', color: '#333', fontSize: '15px', fontWeight: '700', borderBottom: '1px dashed #eee', paddingBottom: '10px' }}>☀️ Progress Tracker Skincare Harian</h4>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <div>
            <div style={{ fontSize: '12px', fontWeight: 'bold', color: '#ff8c00', marginBottom: '8px' }}>AM ROUTINE (PAGI)</div>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px', backgroundColor: pagiSkincare.wash ? '#e6fafa' : '#f5f5f5', padding: '8px 12px', borderRadius: '20px', fontSize: '12px', cursor: 'pointer' }}>
                <input type="checkbox" checked={pagiSkincare.wash} onChange={(e) => handlePagiChange({...pagiSkincare, wash: e.target.checked})} />
                <span style={{ color: '#222222', fontWeight: '500' }}>Facial Wash</span>
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px', backgroundColor: pagiSkincare.moist ? '#e6fafa' : '#f5f5f5', padding: '8px 12px', borderRadius: '20px', fontSize: '12px', cursor: 'pointer' }}>
                <input type="checkbox" checked={pagiSkincare.moist} onChange={(e) => handlePagiChange({...pagiSkincare, moist: e.target.checked})} />
                <span style={{ color: '#222222', fontWeight: '500' }}>Moisturizer</span>
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px', backgroundColor: pagiSkincare.uv ? '#e6fafa' : '#f5f5f5', padding: '8px 12px', borderRadius: '20px', fontSize: '12px', cursor: 'pointer' }}>
                <input type="checkbox" checked={pagiSkincare.uv} onChange={(e) => handlePagiChange({...pagiSkincare, uv: e.target.checked})} />
                <span style={{ color: '#222222', fontWeight: '500' }}>Sunscreen 🛡️</span>
              </label>
            </div>
          </div>

          <div>
            <div style={{ fontSize: '12px', fontWeight: 'bold', color: '#4b0082', marginBottom: '8px' }}>PM ROUTINE (MALAM)</div>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px', backgroundColor: malamSkincare.wash ? '#fff0f5' : '#f5f5f5', padding: '8px 12px', borderRadius: '20px', fontSize: '12px', cursor: 'pointer' }}>
                <input type="checkbox" checked={malamSkincare.wash} onChange={(e) => handleMalamChange({...malamSkincare, wash: e.target.checked})} />
                <span style={{ color: '#222222', fontWeight: '500' }}>Double Cleansing</span>
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px', backgroundColor: malamSkincare.moist ? '#fff0f5' : '#f5f5f5', padding: '8px 12px', borderRadius: '20px', fontSize: '12px', cursor: 'pointer' }}>
                <input type="checkbox" checked={malamSkincare.moist} onChange={(e) => handleMalamChange({...malamSkincare, moist: e.target.checked})} />
                <span style={{ color: '#222222', fontWeight: '500' }}>Night Cream</span>
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px', backgroundColor: malamSkincare.treatment ? '#fff0f5' : '#f5f5f5', padding: '8px 12px', borderRadius: '20px', fontSize: '12px', cursor: 'pointer' }}>
                <input type="checkbox" checked={malamSkincare.treatment} onChange={(e) => handleMalamChange({...malamSkincare, treatment: e.target.checked})} />
                <span style={{ color: '#222222', fontWeight: '500' }}>Obat Jerawat/Serum</span>
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* 4. REKOMENDASI EDUKASI */}
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <h4 style={{ margin: '0 0 12px 0', color: '#444', fontSize: '14px', fontWeight: '600' }}>REKOMENDASI EDUKASI UNTUKMU</h4>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ backgroundColor: 'white', padding: '16px', borderRadius: '12px', border: '1px solid #eee', display: 'flex', gap: '15px', alignItems: 'center' }}>
            <div style={{ fontSize: '28px', backgroundColor: '#fff5ee', padding: '12px', borderRadius: '8px' }}>🧼</div>
            <div>
              <span style={{ fontSize: '11px', color: '#ff69b4', fontWeight: 'bold', textTransform: 'uppercase' }}>TIPS STRATEGIS</span>
              <h5 style={{ margin: '2px 0 4px 0', fontSize: '14px', color: '#222', fontWeight: '700' }}>Siklus Penanganan Kulit Berdasarkan Diagnosis Awal</h5>
              <p style={{ margin: 0, fontSize: '12px', color: '#777', lineHeight: '1.4' }}>Kunci utama menyembuhkan keluhan {userData.keluhan} pada jenis kulit {userData.tipeKulit} adalah menjaga keseimbangan barier alami wajah...</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}