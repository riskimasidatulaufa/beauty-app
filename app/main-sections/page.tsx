"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function MainSectionsPage() {
  // --- STATE DYNAMIC DATA DARI KUIS ---
  const [userData, setUserData] = useState({
    nama: "User",
    tipeKulit: "Sedang dianalisis...",
    keluhan: "Umum"
  });

  // --- AMBIL DATA KUIS SAAT HALAMAN DIBUKA ---
  useEffect(() => {
    const namaKuis = localStorage.getItem('user_nama') || "Sarah";
    const tipeKuis = localStorage.getItem('user_tipe_kulit') || "Kombinasi / Normal";
    const keluhanKuis = localStorage.getItem('user_keluhan') || "Kulit Kusam & Dehidrasi";

    setUserData({
      nama: namaKuis,
      tipeKulit: tipeKuis,
      keluhan: keluhanKuis
    });
  }, []);

  // --- DATA KONTEN UNTUK 5 PILAR MENU UTAMA ---
  const menus = [
    {
      title: "Products",
      description: "Referensi Skincare & Makeup",
      icon: "🛍️",
      bgColor: "#fff5ee", // Soft Peach
      href: "/products"
    },
    {
      title: "Skin Diary",
      description: "Jurnal Foto & Catatan Kulit",
      icon: "📖",
      bgColor: "#fff0f5", // Lavender Blush
      href: "/skin-diary"
    },
    {
      title: "Problem & Solve Skin",
      description: "Scan Wajah & Solusi Kandungan",
      icon: "🔍",
      bgColor: "#e6fafa", // Light Cyan
      href: "/skin-analysis"
    },
    {
      title: "Tutorials & Tips",
      description: "Artikel & Video Edukasi",
      icon: "📚",
      bgColor: "#fef9e7", // Soft Yellow
      href: "/tutorials"
    },
    {
      title: "My Account",
      description: "Profil & Pengaturan Alarm",
      icon: "👤",
      bgColor: "#f4ecf7", // Soft Purple
      href: "/account"
    }
  ];

  return (
    <div style={{ backgroundColor: '#fcf8f9', minHeight: '100vh', padding: '30px 20px', fontFamily: 'sans-serif' }}>
      
      {/* 1. MINI HEADER PROFILE */}
      <div style={{ maxWidth: '600px', margin: '0 auto 25px auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'white', padding: '15px 20px', borderRadius: '16px', boxShadow: '0 2px 10px rgba(0,0,0,0.02)' }}>
        <div>
          <span style={{ fontSize: '12px', color: '#888' }}>Profil Teranalisis</span>
          <h4 style={{ margin: '2px 0 0 0', fontSize: '16px', color: '#222' }}>✨ {userData.nama} ({userData.tipeKulit})</h4>
        </div>
        <Link href="/dashboard" style={{ textDecoration: 'none', color: '#ff69b4', fontSize: '13px', fontWeight: 'bold', backgroundColor: '#fff0f5', padding: '6px 12px', borderRadius: '20px' }}>
          ⬅️ Dashboard
        </Link>
      </div>

      {/* 2. MAIN SECTIONS MENU GRID */}
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        
        {/* Judul Halaman */}
        <div style={{ marginBottom: '20px' }}>
          <h2 style={{ margin: 0, fontSize: '22px', color: '#222', fontWeight: '700' }}>📱 Main Sections</h2>
          <p style={{ margin: '4px 0 0 0', fontSize: '13px', color: '#777' }}>Pilih menu layanan utama untuk merawat kulitmu</p>
        </div>
        
        {/* Container Grid Kotak-Kotak Menu */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          
          {menus.map((menu, index) => (
            <Link href={menu.href} key={index} style={{ textDecoration: 'none' }}>
              <div style={{ 
                backgroundColor: 'white', 
                padding: '18px 16px', 
                borderRadius: '14px', 
                border: '1px solid #f0f0f0', 
                display: 'flex', 
                alignItems: 'center', 
                gap: '14px', 
                cursor: 'pointer', 
                boxShadow: '0 4px 12px rgba(0,0,0,0.02)',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 16px rgba(0,0,0,0.04)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.02)';
              }}
              >
                {/* Bulatan Ikon Pastel */}
                <div style={{ 
                  fontSize: '24px', 
                  backgroundColor: menu.bgColor, 
                  width: '50px', 
                  height: '50px', 
                  borderRadius: '12px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  {menu.icon}
                </div>
                
                {/* Teks Info Menu */}
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: '700', color: '#222222', fontSize: '15px' }}>
                    {menu.title}
                  </div>
                  <div style={{ color: '#888888', fontSize: '12px', marginTop: '3px', lineHeight: '1.3' }}>
                    {menu.description}
                  </div>
                </div>

                {/* Panah Indikator */}
                <div style={{ color: '#ccc', fontSize: '14px' }}>➔</div>
              </div>
            </Link>
          ))}

        </div>
      </div>

    </div>
  );
}