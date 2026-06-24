"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation'; // 1. TAMBAHKAN IMPORT INI

export default function OnboardingFlow() {
  const router = useRouter(); // 2. INISIALISASI ROUTER DI SINI
  const [step, setStep] = useState(1);

  // --- STATE DATA UNTUK STEP 1 (SKIN QUIZ) ---
  const [nama, setNama] = useState('');
  const [sebum, setSebum] = useState('');
  const [pori, setPori] = useState('');
  const [concern, setConcern] = useState('');
  const [sensitif, setSensitif] = useState('');
      
  // --- STATE DATA UNTUK STEP 2 (PREFERENCES) ---
  const [skincareStep, setSkincareStep] = useState('');
  const [ingredientAvoid, setIngredientAvoid] = useState('');
    
  // --- STATE DATA UNTUK STEP 3 (NOTIFICATIONS) ---
  const [notif, setNotif] = useState(false);

  // Fungsi Navigasi Halaman
  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  // Logika Sederhana Menentukan Tipe Kulit Berdasarkan Jawaban
  const hitungTipeKulit = () => {
    if (sensitif === "Ya, sangat mudah merah/perih") return "Sensitif";
    if (sebum === "Sangat berminyak di seluruh wajah") return "Berminyak (Oily Skin)";
    if (sebum === "Kering dan terasa kaku ketarik") return "Kering (Dry Skin)";
    return "Kombinasi / Normal";
  };

  return (
    <div style={{ backgroundColor: '#fff0f5', minHeight: '100vh', padding: '40px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ backgroundColor: 'white', padding: '35px', borderRadius: '16px', maxWidth: '600px', width: '100%', boxShadow: '0px 4px 20px rgba(0,0,0,0.08)' }}>
        
        {/* Progress Tracker (Indikator Step Atas) */}
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '30px', fontSize: '10px', color: '#bbb', fontWeight: 'bold', letterSpacing: '0.5px' }}>
          <span style={{ color: step >= 1 ? '#ff69b4' : '#bbb', borderBottom: step === 1 ? '2px solid #ff69b4' : 'none', paddingBottom: '3px' }}>1. SKIN QUIZ</span>
          <span style={{ color: step >= 2 ? '#ff69b4' : '#bbb', borderBottom: step === 2 ? '2px solid #ff69b4' : 'none', paddingBottom: '3px' }}>2. PREFERENCES</span>
          <span style={{ color: step >= 3 ? '#ff69b4' : '#bbb', borderBottom: step === 3 ? '2px solid #ff69b4' : 'none', paddingBottom: '3px' }}>3. NOTIFICATIONS</span>
          <span style={{ color: step >= 4 ? '#ff69b4' : '#bbb', borderBottom: step === 4 ? '2px solid #ff69b4' : 'none', paddingBottom: '3px' }}>4. WELCOME OFFER</span>
        </div>

        {/* ================= STEP 1: SKIN QUIZ (TYPE & CONCERNS) ================= */}
        {step === 1 && (
          <div>
            <h3 style={{ color: '#ff69b4', marginBottom: '5px', fontWeight: 'bold' }}>Step 1: Skin Quiz (Type & Concerns) 🧪</h3>
            <p style={{ fontSize: '14px', color: '#222222', marginBottom: '25px' }}>Pertanyaan komprehensif untuk memetakan kondisi biologis kulitmu.</p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              {/* Input Nama */}
              <div>
                <label style={{ display: 'block', marginBottom: '6px', fontSize: '14px', fontWeight: 'bold', color: '#222222' }}>Nama Panggilan Kamu:</label>
                <input 
                  type="text" 
                  placeholder="Masukkan nama kamu" 
                  value={nama} 
                  onChange={(e) => setNama(e.target.value)}
                  style={{ width: '100%', padding: '11px', borderRadius: '8px', border: '2px solid #222222', boxSizing: 'border-box', fontSize: '14px', color: '#222222', backgroundColor: '#ffffff' }}
                />
              </div>

              {/* Pertanyaan Sebum */}
              <div>
                <label style={{ display: 'block', marginBottom: '6px', fontSize: '14px', fontWeight: 'bold', color: '#222222' }}>1. Bagaimana kondisi kulit 1 jam setelah mencuci muka tanpa skincare?</label>
                <select value={sebum} onChange={(e) => setSebum(e.target.value)} style={{ width: '100%', padding: '11px', borderRadius: '8px', border: '1px solid #ddd', backgroundColor: 'white', fontSize: '14px', color: '#222222' }}>
                  <option value="" style={{ color: '#222222' }}>-- Pilih Jawaban --</option>
                  <option value="Sangat berminyak di seluruh wajah" style={{ color: '#222222' }}>Sangat mengkilap dan berminyak di seluruh wajah</option>
                  <option value="Berminyak di area T-Zone saja" style={{ color: '#222222' }}>Berminyak di dahi dan hidung, tapi pipi kering</option>
                  <option value="Kering dan terasa kaku ketarik" style={{ color: '#222222' }}>Terasa kaku, kering, kesat, atau mengelupas</option>
                  <option value="Normal dan nyaman" style={{ color: '#222222' }}>Terasa pas, tidak terlalu kering/berminyak</option>
                </select>
              </div>

              {/* Pertanyaan Pori-pori */}
              <div>
                <label style={{ display: 'block', marginBottom: '6px', fontSize: '14px', fontWeight: 'bold', color: '#222222' }}>2. Bagaimana ukuran pori-pori pada wajahmu?</label>
                <select value={pori} onChange={(e) => setPori(e.target.value)} style={{ width: '100%', padding: '11px', borderRadius: '8px', border: '1px solid #ddd', backgroundColor: 'white', fontSize: '14px', color: '#222222' }}>
                  <option value="" style={{ color: '#222222' }}>-- Pilih Jawaban --</option>
                  <option value="Besar dan terlihat jelas" style={{ color: '#222222' }}>Besar dan terlihat jelas di area pipi & hidung</option>
                  <option value="Hanya terlihat di area T-Zone" style={{ color: '#222222' }}>Samar, hanya terlihat di sekitar hidung</option>
                  <option value="Kecil dan hampir tidak terlihat" style={{ color: '#222222' }}>Sangat kecil, halus, dan hampir tidak terlihat</option>
                </select>
              </div>

              {/* Pertanyaan Masalah Kulit */}
              <div>
                <label style={{ display: 'block', marginBottom: '6px', fontSize: '14px', fontWeight: 'bold', color: '#222222' }}>3. Apa keluhan atau masalah kulit utama yang ingin disembuhkan?</label>
                <select value={concern} onChange={(e) => setConcern(e.target.value)} style={{ width: '100%', padding: '11px', borderRadius: '8px', border: '1px solid #ddd', backgroundColor: 'white', fontSize: '14px', color: '#222222' }}>
                  <option value="" style={{ color: '#222222' }}>-- Pilih Masalah Kulit --</option>
                  <option value="Jerawat dan Beruntusan" style={{ color: '#222222' }}>Jerawat aktif, kemerahan, atau beruntusan</option>
                  <option value="Flek Hitam & Bekas Jerawat" style={{ color: '#222222' }}>Noda hitam, flek, atau bekas jerawat melanin</option>
                  <option value="Kulit Kusam & Dehidrasi" style={{ color: '#222222' }}>Kusam, warna kulit tidak rata, tampak capek</option>
                  <option value="Garis Halus & Kerutan" style={{ color: '#222222' }}>Tanda penuaan dini dan kulit mulai kendur</option>
                </select>
              </div>

              {/* Pertanyaan Sensitivitas */}
              <div>
                <label style={{ display: 'block', marginBottom: '6px', fontSize: '14px', fontWeight: 'bold', color: '#222222' }}>4. Seberapa sensitif kulitmu terhadap produk baru atau sinar matahari?</label>
                <select value={sensitif} onChange={(e) => setSensitif(e.target.value)} style={{ width: '100%', padding: '11px', borderRadius: '8px', border: '1px solid #ddd', backgroundColor: 'white', fontSize: '14px', color: '#222222' }}>
                  <option value="" style={{ color: '#222222' }}>-- Pilih Sensitivitas --</option>
                  <option value="Ya, sangat mudah merah/perih" style={{ color: '#222222' }}>Ya, gampang bereaksi perih, gatal, atau merah</option>
                  <option value="Tidak, kulit cenderung kuat" style={{ color: '#222222' }}>Jarang sekali, kulit cenderung aman pakai apa saja</option>
                </select>
              </div>

              <button 
                disabled={!nama || !sebum || !pori || !concern || !sensitif} 
                onClick={nextStep}
                style={{ backgroundColor: (!nama || !sebum || !pori || !concern || !sensitif) ? '#ffb6c1' : '#ff69b4', color: 'white', border: 'none', padding: '13px', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', marginTop: '10px', fontSize: '14px' }}
              >
                Lanjut ke Preferensi Produk ➔
              </button>
            </div>
          </div>
        )}

        {/* ================= STEP 2: PREFERENCES (PRODUCT INTERESTS) ================= */}
        {step === 2 && (
          <div>
            <h3 style={{ color: '#ff69b4', marginBottom: '5px', fontWeight: 'bold' }}>Step 2: Preferences (Product Interests) ⭐</h3>
            <p style={{ fontSize: '14px', color: '#222222', marginBottom: '25px' }}>Saring kriteria produk yang sesuai dengan kenyamanan dan ketertarikanmu.</p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '6px', fontSize: '14px', fontWeight: 'bold', color: '#222222' }}>1. Berapa banyak tahapan skincare yang sanggup kamu pakai rutin?</label>
                <select value={skincareStep} onChange={(e) => setSkincareStep(e.target.value)} style={{ width: '100%', padding: '11px', borderRadius: '8px', border: '1px solid #ddd', backgroundColor: 'white', fontSize: '14px', color: '#222222' }}>
                  <option value="" style={{ color: '#222222' }}>-- Pilih Rutinitas --</option>
                  <option value="Skincare Minimalis (Basic)" style={{ color: '#222222' }}>Minimalis (Cukup 3 produk utama: Cuci muka, pelembap, sunscreen)</option>
                  <option value="Skincare Lengkap (Advanced)" style={{ color: '#222222' }}>Lengkap (Sanggup tambah toner, essence, serum, dan eksfoliasi)</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '6px', fontSize: '14px', fontWeight: 'bold', color: '#222222' }}>2. Jenis kandungan formulasi apa yang kamu prioritaskan?</label>
                <select value={ingredientAvoid} onChange={(e) => setIngredientAvoid(e.target.value)} style={{ width: '100%', padding: '11px', borderRadius: '8px', border: '1px solid #ddd', backgroundColor: 'white', fontSize: '14px', color: '#222222' }}>
                  <option value="" style={{ color: '#222222' }}>-- Pilih Prioritas --</option>
                  <option value="Bebas Alkohol & Parfum" style={{ color: '#222222' }}>Wajib lembut, tanpa alkohol murni & tanpa wewangian parfum</option>
                  <option value="Bahan Herbal & Alami" style={{ color: '#222222' }}>Mengutamakan ekstrak tumbuhan alami / organik</option>
                  <option value="Bebas, yang penting Aman BPOM" style={{ color: '#222222' }}>Apa saja boleh yang penting aman dan teruji klinis resmi</option>
                </select>
              </div>

              <div style={{ display: 'flex', gap: '10px', marginTop: '15px' }}>
                <button onClick={prevStep} style={{ flex: 1, backgroundColor: '#ccc', color: 'white', border: 'none', padding: '13px', borderRadius: '8px', cursor: 'pointer', fontSize: '14px' }}>Kembali</button>
                <button disabled={!skincareStep || !ingredientAvoid} onClick={nextStep} style={{ flex: 1, backgroundColor: (!skincareStep || !ingredientAvoid) ? '#ffb6c1' : '#ff69b4', color: 'white', border: 'none', padding: '13px', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', fontSize: '14px' }}>Lanjut ➔</button>
              </div>
            </div>
          </div>
        )}

        {/* ================= STEP 3: NOTIFICATIONS (OPT-IN) ================= */}
        {step === 3 && (
          <div style={{ textAlign: 'center', padding: '15px 0' }}>
            <span style={{ fontSize: '55px' }}>🔔</span>
            <h3 style={{ color: '#ff69b4', margin: '15px 0 5px 0', fontWeight: 'bold' }}>Step 3: Notifications (Opt-in)</h3>
            <p style={{ fontSize: '14px', color: '#222222', marginBottom: '25px', lineHeight: '1.5' }}>
              Konsistensi adalah kunci kesembuhan kulit! Aktifkan alarm pengingat harian agar kamu tidak lupa memakai rangkaian perawatan kulit pagi dan malam.
            </p>
            
            <label style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', padding: '18px', borderRadius: '12px', border: '2px dashed #ff69b4', cursor: 'pointer', marginBottom: '30px', backgroundColor: notif ? '#fff0f5' : 'transparent', transition: '0.3s' }}>
              <input type="checkbox" checked={notif} onChange={(e) => setNotif(e.target.checked)} style={{ transform: 'scale(1.4)' }} />
              <span style={{ fontWeight: 'bold', color: '#222222', fontSize: '15px' }}>Aktifkan Notifikasi Pengingat Skin-Routine</span>
            </label>

            <div style={{ display: 'flex', gap: '10px' }}>
              <button onClick={prevStep} style={{ flex: 1, backgroundColor: '#ccc', color: 'white', border: 'none', padding: '13px', borderRadius: '8px', cursor: 'pointer', fontSize: '14px' }}>Kembali</button>
              <button onClick={nextStep} style={{ flex: 1, backgroundColor: '#ff69b4', color: 'white', border: 'none', padding: '13px', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', fontSize: '14px' }}>Lihat Hasil Analisis Awal ➔</button>
            </div>
          </div>
        )}

        {/* ----------------- STEP 4: WELCOME PERK (NON-E-COMMERCE) & RESULT ----------------- */}
        {step === 4 && (
          <div style={{ animation: 'fadeIn 0.5s ease-in-out' }}>
            {/* Banner Welcome Perk */}
            <div style={{ textAlign: 'center', backgroundColor: '#e6fafa', padding: '20px', borderRadius: '12px', border: '1px solid #b2ebeb', marginBottom: '30px' }}>
              <span style={{ fontSize: '36px', display: 'block', marginBottom: '8px' }}>🎁</span>
              <h4 style={{ margin: '0 0 4px 0', color: '#008b8b', fontSize: '18px', fontWeight: '700' }}>Welcome Perk Unlocked!</h4>
              <p style={{ fontSize: '13px', margin: '0 0 12px 0', color: '#555' }}>Terima kasih telah menyelesaikan kuis onboarding.</p>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', backgroundColor: 'white', border: '1px solid #008b8b', padding: '8px 16px', borderRadius: '20px', fontWeight: 'bold', color: '#008b8b', fontSize: '13px', boxShadow: '0 2px 6px rgba(0,139,139,0.1)' }}>
                <span>🔓</span> GRATIS: Fitur Deep Skin Analysis & Routine Builder Terbuka
              </div>
            </div>

            {/* Judul Report */}
            <div style={{ textAlign: 'center', marginBottom: '25px' }}>
              <h3 style={{ color: '#222', margin: '0 0 6px 0', fontSize: '22px', fontWeight: '700' }}>Skin Report: <span style={{ color: '#ff69b4' }}>{nama}</span> ✨</h3>
              <p style={{ fontSize: '13px', color: '#777', margin: 0 }}>Profil dasar kulit wajahmu berhasil dipetakan secara digital.</p>
            </div>
            
            {/* Tampilan Hasil Model Kartu Kontemporer */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '30px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', backgroundColor: '#fff0f5', padding: '16px', borderRadius: '12px', border: '1px solid #ffe4e1' }}>
                <div style={{ fontSize: '24px', backgroundColor: 'white', width: '45px', height: '45px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>🩺</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '12px', color: '#999', fontWeight: '600', textTransform: 'uppercase' }}>Jenis Kulit Awal</div>
                  <div style={{ fontSize: '15px', color: '#d81b60', fontWeight: '700', marginTop: '2px' }}>{hitungTipeKulit()}</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', backgroundColor: '#f9f9f9', padding: '16px', borderRadius: '12px', border: '1px solid #eee' }}>
                <div style={{ fontSize: '24px', backgroundColor: 'white', width: '45px', height: '45px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>🎯</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '12px', color: '#999', fontWeight: '600', textTransform: 'uppercase' }}>Fokus Masalah</div>
                  <div style={{ fontSize: '15px', color: '#333', fontWeight: '700', marginTop: '2px' }}>Mengatasi Keluhan {concern}</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', backgroundColor: '#f9f9f9', padding: '16px', borderRadius: '12px', border: '1px solid #eee' }}>
                <div style={{ fontSize: '24px', backgroundColor: 'white', width: '45px', height: '45px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>🧪</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '12px', color: '#999', fontWeight: '600', textTransform: 'uppercase' }}>Rencana Program</div>
                  <div style={{ fontSize: '15px', color: '#333', fontWeight: '700', marginTop: '2px' }}>Skema Rutinitas {skincareStep}</div>
                </div>
              </div>
            </div>

            {/* 3. SEKARANG SUDAH AMAN MENGGUNAKAN router.push */}
            <button 
              onClick={() => {
                localStorage.setItem('user_nama', nama);
                localStorage.setItem('user_tipe_kulit', hitungTipeKulit());
                localStorage.setItem('user_keluhan', concern);
                router.push("/dashboard"); 
              }}
              style={{ 
                width: '100%', backgroundColor: '#ff69b4', color: 'white', border: 'none', padding: '16px', borderRadius: '12px', 
                cursor: 'pointer', fontWeight: 'bold', fontSize: '16px', boxShadow: '0px 6px 15px rgba(255,105,180,0.3)', textAlign: 'center'
              }}
            >
              Masuk ke Home Feed Kamu ➔
            </button>
          </div>
        )}

      </div>
    </div>
  );
}