/**
 * JAVASCRIPT LOGIC: SYAFIRA ISSAUMA DWI ANDISA PORTFOLIO
 * Features: Navbar interactions, Category filtering, Case study modal, 
 * Experience tabs, Copy to clipboard, Form validation & Toast notifications.
 */

// Project Data for Interactive Case Study Modals
const projectsData = {
  'ngopi-in': {
    title: 'NGOPI.IN - Food & Beverage Ordering Platform',
    category: 'UI/UX Design & Web Development',
    tag: 'Case Study • Mobile App & Web',
    image: 'assets/images/ngopi-in.jpg',
    tools: ['Figma', 'React', 'UI/UX Design', 'User Research', 'Design System'],
    overview: 'Perancangan dan pengembangan aplikasi pemesanan makanan dan minuman untuk Cafe Ngopi.in. Fokus utama proyek ini adalah memangkas waktu antre kasir, mempermudah eksplorasi menu bagi pelanggan, dan menyediakan sistem checkout cepat berbasis QR code di meja.',
    problem: 'Pengunjung cafe sering kali mengalami antrean panjang di jam sibuk (lunch & coffee break), kebingungan melihat menu fisik yang terbatas tanpa visual gambar yang jelas, serta kesulitan mengetahui ketersediaan stok menu secara real-time.',
    solution: 'Merancang antarmuka mobile-first yang bersih dengan kategori visual yang intuitif (Iced Coffee, Hot Coffee, Pastry), sistem pencarian instan, rincian kustomisasi pesanan (sugar level & ice level), serta checkout 2-langkah dengan konfirmasi status pesanan real-time.',
    process: [
      '<strong>01. Empathize & Survey:</strong> Mengamati alur pemesanan di 3 kedai kopi lokal dan mewawancarai 12 pelanggan aktif.',
      '<strong>02. User Persona:</strong> Mengidentifikasi persona mahasiswa/pekerja remote yang memprioritaskan efisiensi waktu pemesanan.',
      '<strong>03. Wireframing & Prototyping:</strong> Merancang low-fidelity wireframe dan membuat design token (warna kopi hangat + aksen hijau segar).',
      '<strong>04. Usability Testing:</strong> Menguji prototype interaktif di Figma pada 5 pengguna dengan skor keberhasilan task completion 94%.'
    ],
    figmaLink: '#',
    liveLink: '#'
  },
  'digital-library': {
    title: 'Digital Library - Academic Book Management System',
    category: 'UI/UX Design',
    tag: 'Case Study • Web & Tablet',
    image: 'assets/images/digital-library.jpg',
    tools: ['Figma', 'UI/UX Design', 'Information Architecture', 'System Analysis'],
    overview: 'Perancangan interface perpustakaan digital untuk perguruan tinggi guna memudahkan mahasiswa dalam mencari, memfilter katalog literatur ilmiah, melihat ketersediaan buku fisik maupun e-book, serta memonitor tenggat waktu peminjaman secara mandiri.',
    problem: 'Sistem perpustakaan lama memiliki Information Architecture yang membingungkan. Mahasiswa kesulitan mencari nomor rak buku fisik, sering terlambat mengembalikan buku karena tidak ada notifikasi pengingat, dan antarmuka desktop terasa kaku serta tidak ramah pengguna perangkat mobile.',
    solution: 'Merancang dashboard terpusat yang modern dengan filter multi-parameter (kategori, penulis, tahun terbit, format), kartu status peminjaman aktif dengan countdown sisa hari, dan fitur perpanjangan mandiri (1-click renew).',
    process: [
      '<strong>01. Stakeholder & Student Interview:</strong> Menggali keluhan mahasiswa tingkat 1-4 dan pustakawan kampus.',
      '<strong>02. Information Architecture (IA):</strong> Menyusun ulang sitemap navigasi utama menjadi: Home, Browse, My Borrowings, dan Profile.',
      '<strong>03. High-Fidelity UI:</strong> Menerapkan hierarki tipografi yang kuat, tata letak kartu buku dengan cover visual, dan badge status warna (Active, Overdue).',
      '<strong>04. Evaluation:</strong> Menghasilkan SUS (System Usability Scale) score 86/100 dalam pengujian pengoperasian katalog.'
    ],
    figmaLink: '#',
    liveLink: '#'
  },
  'edutrack': {
    title: 'EduTrack LMS - Student Learning & Progress Tracker',
    category: 'UI/UX Design (Placeholder Proyek)',
    tag: 'Case Study • University Student Dashboard',
    image: 'assets/images/edutrack.jpg',
    tools: ['Figma', 'System Analysis', 'Wireframing', 'Prototyping'],
    overview: 'Perancangan antarmuka dashboard monitoring aktivitas akademik mahasiswa. Membantu mahasiswa mengatur jadwal kuliah, memonitor target IPK semesteran, melihat progres penyelesaian tugas, dan deadline submission mingguan.',
    problem: 'Mahasiswa sering mengeluhkan fragmented tools (pengumuman di WhatsApp, tugas di portal kampus lama yang lambat, dan catatan jadwal manual di buku) yang sering memicu keterlambatan pengumpulan tugas kuliah.',
    solution: 'Dashboard terpadu yang memvisualisasikan progres belajar dalam bentuk progress bars, ringkasan capaian IPK (GPA tracker), dan kalender interaktif dengan penanda deadline tugas yang berkode warna.',
    process: [
      '<strong>01. Need Analysis:</strong> Mengkaji alur kerja akademik mahasiswa Sistem Informasi semester awal hingga akhir.',
      '<strong>02. Wireframing:</strong> Merancang layout kartu modular untuk ringkasan mata kuliah (Course Progress) dan kalender tenggat waktu.',
      '<strong>03. Visual Styling:</strong> Menggunakan gaya kartu minimalis dengan sudut membulat (rounded 20px) dan aksen hijau emerald segar untuk mengurangi cognitive fatigue.',
      '<strong>04. Design Review:</strong> Presentasi rancangan prototype kepada dosen pengampu mata kuliah Interaksi Manusia & Komputer.'
    ],
    figmaLink: '#',
    liveLink: '#'
  }
};

document.addEventListener('DOMContentLoaded', () => {
  // --------------------------------------------------------------------------
  // 1. NAVBAR SCROLL EFFECT & ACTIVE SECTION HIGHLIGHTING
  // --------------------------------------------------------------------------
  const navbar = document.getElementById('navbar');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mobileNav = document.getElementById('mobileNav');

  window.addEventListener('scroll', () => {
    // Navbar shadow on scroll
    if (window.scrollY > 30) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Active link highlighting
    let scrollY = window.pageYOffset;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });

  // Mobile menu toggle
  if (hamburgerBtn && mobileNav) {
    hamburgerBtn.addEventListener('click', () => {
      const isOpen = mobileNav.classList.toggle('open');
      hamburgerBtn.setAttribute('aria-expanded', isOpen);
      hamburgerBtn.innerHTML = isOpen 
        ? `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`
        : `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`;
    });

    // Close mobile nav when clicking any link
    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileNav.classList.remove('open');
        hamburgerBtn.setAttribute('aria-expanded', 'false');
        hamburgerBtn.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`;
      });
    });
  }

  // --------------------------------------------------------------------------
  // 2. PROJECT FILTERING
  // --------------------------------------------------------------------------
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category.includes(filterValue)) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });

  // --------------------------------------------------------------------------
  // 3. INTERACTIVE CASE STUDY MODAL
  // --------------------------------------------------------------------------
  const caseStudyModal = document.getElementById('caseStudyModal');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const modalContentContainer = document.getElementById('modalDynamicContent');

  function openProjectModal(projectId) {
    const data = projectsData[projectId];
    if (!data) return;

    let processHTML = '';
    data.process.forEach(step => {
      processHTML += `<li style="margin-bottom: 8px; font-size: 0.95rem; color: var(--text-muted);">${step}</li>`;
    });

    let toolsHTML = '';
    data.tools.forEach(tool => {
      toolsHTML += `<span class="tool-tag" style="background: var(--primary-tint); color: var(--primary-dark);">${tool}</span>`;
    });

    modalContentContainer.innerHTML = `
      <div class="modal-header-image">
        <img src="${data.image}" alt="${data.title}">
      </div>
      <div class="modal-body-content">
        <span class="modal-tag">${data.tag}</span>
        <h2 class="modal-title">${data.title}</h2>
        <div class="modal-tools-list">${toolsHTML}</div>

        <div class="modal-section-block">
          <h4>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
            Ringkasan Proyek
          </h4>
          <p>${data.overview}</p>
        </div>

        <div class="modal-section-block">
          <h4>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
            Tantangan & Masalah Pengguna
          </h4>
          <p>${data.problem}</p>
        </div>

        <div class="modal-section-block">
          <h4>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            Solusi Desain
          </h4>
          <p>${data.solution}</p>
        </div>

        <div class="modal-section-block">
          <h4>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
            Proses & Metodologi Perancangan
          </h4>
          <ul style="list-style: none; padding-left: 0; display: flex; flex-direction: column; gap: 8px;">${processHTML}</ul>
        </div>

        <div class="modal-footer-actions">
          <button class="btn btn-primary" onclick="showToast('Membuka file preview desain Figma...')">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path></svg>
            Buka Prototype Figma
          </button>
          <button class="btn btn-secondary" onclick="closeModal()">Tutup Studi Kasus</button>
        </div>
      </div>
    `;

    caseStudyModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  window.openProjectModal = openProjectModal;

  function closeModal() {
    if (caseStudyModal) {
      caseStudyModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }
  window.closeModal = closeModal;

  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', closeModal);
  }

  if (caseStudyModal) {
    caseStudyModal.addEventListener('click', (e) => {
      if (e.target === caseStudyModal) {
        closeModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && caseStudyModal && caseStudyModal.classList.contains('active')) {
      closeModal();
    }
  });

  // --------------------------------------------------------------------------
  // 4. EXPERIENCE & ACTIVITIES TABS
  // --------------------------------------------------------------------------
  const expTabBtns = document.querySelectorAll('.exp-tab-btn');
  const expPanels = document.querySelectorAll('.exp-content-panel');

  expTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetCategory = btn.getAttribute('data-target');

      expTabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      expPanels.forEach(panel => {
        if (panel.id === targetCategory) {
          panel.style.display = 'flex';
          panel.style.opacity = '1';
        } else {
          panel.style.display = 'none';
          panel.style.opacity = '0';
        }
      });
    });
  });

  // --------------------------------------------------------------------------
  // 5. COPY EMAIL TO CLIPBOARD
  // --------------------------------------------------------------------------
  const copyEmailBtn = document.getElementById('copyEmailBtn');
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      const email = 'syafira.andisa@email.com';
      navigator.clipboard.writeText(email).then(() => {
        showToast('Email syafira.andisa@email.com berhasil disalin! 📋');
        const originalText = copyEmailBtn.innerHTML;
        copyEmailBtn.innerHTML = `✓ Tersalin`;
        setTimeout(() => {
          copyEmailBtn.innerHTML = originalText;
        }, 2200);
      }).catch(() => {
        showToast('Salin email: syafira.andisa@email.com');
      });
    });
  }

  // --------------------------------------------------------------------------
  // 6. DOWNLOAD CV BUTTON
  // --------------------------------------------------------------------------
  const downloadCvBtn = document.getElementById('downloadCvBtn');
  if (downloadCvBtn) {
    downloadCvBtn.addEventListener('click', (e) => {
      e.preventDefault();
      showToast('📄 Menyiapkan resume/CV Syafira Issauma Dwi Andisa...');
      setTimeout(() => {
        showToast('💡 File CV dapat ditautkan ke file PDF asli Anda di folder assets/cv.pdf');
      }, 1800);
    });
  }

  // --------------------------------------------------------------------------
  // 7. CONTACT FORM VALIDATION & SUBMISSION
  // --------------------------------------------------------------------------
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const nameInput = document.getElementById('name');
      const emailInput = document.getElementById('email');
      const messageInput = document.getElementById('message');

      if (!nameInput.value.trim() || !emailInput.value.trim() || !messageInput.value.trim()) {
        showToast('Harap lengkapi semua kolom form pesan! ⚠️');
        return;
      }

      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.innerHTML = `Mengirim...`;
      submitBtn.disabled = true;

      setTimeout(() => {
        showToast(`Terima kasih, ${nameInput.value}! Pesan Anda telah terkirim. Syafira akan segera merespons.`);
        contactForm.reset();
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
      }, 1000);
    });
  }

  // --------------------------------------------------------------------------
  // 8. TOAST NOTIFICATION UTILITY
  // --------------------------------------------------------------------------
  function showToast(message) {
    let toast = document.getElementById('portfolioToast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'portfolioToast';
      toast.className = 'toast-box';
      toast.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
        <span id="toastMessage"></span>
      `;
      document.body.appendChild(toast);
    }

    const messageSpan = toast.querySelector('#toastMessage');
    messageSpan.textContent = message;
    toast.classList.add('show');

    clearTimeout(window.toastTimeout);
    window.toastTimeout = setTimeout(() => {
      toast.classList.remove('show');
    }, 3500);
  }
  window.showToast = showToast;
});
