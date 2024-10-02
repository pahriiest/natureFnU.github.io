let isEnglish = true; // Flag untuk melacak bahasa saat ini

function translateToIndonesian() {
    if (isEnglish) {
        // Mengganti teks menjadi Bahasa Indonesia
        document.getElementById('header-title').innerText = 'Nature FnU';
        document.getElementById('header-desc').innerText = 'Nature FnU adalah perusahaan perdagangan yang mengkhususkan diri dalam rempah-rempah dan kopi berkualitas tinggi, bekerja sama dengan petani di seluruh Indonesia.';

        document.getElementById('about-title').innerText = 'Tentang Kami';
        document.getElementById('about-desc-1').innerText = 'Kami adalah perusahaan perdagangan yang berlokasi di Tangerang, Banten, menjual rempah-rempah dan kopi, termasuk Jahe, Kunyit, Lengkuas, Lada Hitam, Lada Putih, Kayu Manis, Biji Pala, Kapulaga, Cengkeh, Greenbean Arabika, Greenbean Robusta, Roastbean Arabika, dan Roastbean Robusta. Kami menawarkan produk dalam berbagai kualitas untuk memenuhi kebutuhan pelanggan.';
        document.getElementById('about-desc-2').innerText = 'Kami bekerja sama dengan petani di seluruh Indonesia untuk memastikan pasokan dan kualitas produk yang diinginkan pelanggan. Produk kami melalui proses Kontrol Kualitas yang ketat untuk memastikan mutu dan keamanan sampai ke tujuan. Setiap pembelian minimal 30 ton akan mendapatkan diskon khusus.';

        document.getElementById('vision-title').innerText = 'Visi & Misi';
        document.getElementById('vision-desc').innerText = 'Memberikan produk berkualitas tinggi dengan harga yang kompetitif untuk memastikan kepuasan pelanggan dan menjalin kemitraan jangka panjang.';

        document.getElementById('advantages-title').innerText = 'Keunggulan Perusahaan';
        
        // Update hanya teks di dalam elemen <p>, bukan seluruh elemen agar icon tidak hilang
        document.querySelector('#advantage-1 p').innerText = 'Produk Berkualitas Tinggi';
        document.querySelector('#advantage-2 p').innerText = 'Pengembangan Petani';
        document.querySelector('#advantage-3 p').innerText = 'Kerja Sama Langsung dengan Petani Lokal';
        document.querySelector('#advantage-4 p').innerText = 'Diskon untuk Pembelian Besar';
        document.querySelector('#advantage-5 p').innerText = 'Kontrol Kualitas yang Ketat';

        document.getElementById('products-title').innerText = 'Produk Kami';
        document.getElementById('product-ginger-title').innerText = 'Jahe';
        document.getElementById('product-ginger-desc').innerText = 'Jahe banyak digunakan dalam pengobatan tradisional dan masakan. Dapat disediakan dalam bentuk irisan kering atau bubuk.';
        document.getElementById('product-turmeric-title').innerText = 'Kunyit';
        document.getElementById('product-turmeric-desc').innerText = 'Kunyit merupakan rempah penting yang tersedia dalam bentuk irisan, kunyit polish, atau bubuk, terkenal dengan manfaat kesehatannya.';
        document.getElementById('product-blackpepper-title').innerText = 'Lada Hitam';
        document.getElementById('product-blackpepper-desc').innerText = 'Dikenal dengan rasa yang kuat, Lada Hitam tersedia dalam bentuk utuh atau bubuk, sangat cocok untuk bumbu masakan.';
        document.getElementById('product-whitepepper-title').innerText = 'Lada Putih';
        document.getElementById('product-whitepepper-desc').innerText = 'Lada Putih menawarkan rasa yang lebih ringan, sering digunakan dalam masakan berwarna terang seperti saus atau sup.';
        document.getElementById('product-cinnamon-title').innerText = 'Kayu Manis';
        document.getElementById('product-cinnamon-desc').innerText = 'Kayu Manis sangat harum dan digunakan dalam hidangan manis maupun gurih, tersedia dalam bentuk batang atau bubuk.';
        document.getElementById('product-nutmeg-title').innerText = 'Biji Pala';
        document.getElementById('product-nutmeg-desc').innerText = 'Biji Pala menambahkan rasa hangat dan pedas pada resep, tersedia dalam bentuk utuh atau bubuk.';
        document.getElementById('product-cardamom-title').innerText = 'Kapulaga';
        document.getElementById('product-cardamom-desc').innerText = 'Dikenal sebagai "Ratu Rempah," kapulaga adalah rempah serbaguna yang tersedia dalam bentuk polong atau bubuk.';
        document.getElementById('product-clove-title').innerText = 'Cengkeh';
        document.getElementById('product-clove-desc').innerText = 'Cengkeh digunakan dalam aplikasi kuliner dan pengobatan, menawarkan rasa yang kuat dan tajam.';
        document.getElementById('product-arabica-greenbean-title').innerText = 'Coffe';
        document.getElementById('product-arabica-greenbean-desc').innerText = 'Kopi adalah minuman populer yang dikenal karena rasa aromatiknya yang kaya dan efek stimulasinya, digunakan dalam berbagai bentuk seperti espresso dan latte';
        document.getElementById('product-robusta-greenbean-title').innerText = 'Galangal';
        document.getElementById('product-robusta-greenbean-desc').innerText = 'Galangal adalah rempah dengan rasa pedas dan aroma khas, sering digunakan dalam masakan Asia Tenggara dan pengobatan tradisional.';
        document.getElementById('The Root of Pasak Bumi').innerText = 'Akar Pasak Bumi';
        document.getElementById('The Root of Pasak Bumi desc').innerText = 'Akar pasak bumi terkenal dengan khasiat afrodisiaknya, dianggap sebagai obat herbal untuk kejantanan pria.';
        document.getElementById('Mitragyna speciosa').innerText = 'Mitragyna Speciosa';
        document.getElementById('Mitragyna speciosa desc').innerText = 'Mitragyna speciosa, yang dikenal dengan nama ilmiahnya Mitragyna speciosa, telah lama digunakan oleh masyarakat di beberapa wilayah Asia Tenggara termasuk Indonesia untuk tujuan pengobatan tradisional. Daunnya';

        document.getElementById('uhuy').innerText = 'Nature FnU adalah entitas hukum yang terdaftar di pemerintah Indonesia. Kami beroperasi dengan mematuhi sepenuhnya regulasi lokal dan internasional, memastikan standar operasi tertinggi dalam setiap aspek bisnis kami.Perusahaan kami memiliki sertifikat dan telah memperoleh semua izin legal yang diperlukan untuk berdagang rempah-rempah dan kopi secara global.';

        document.getElementById('footer-title').innerText = 'Nature FnU';
        document.getElementById('kontakas').innerText = 'Kontak Kami ';
        document.getElementById('kampeni').innerText = 'Legalitas Perusahaan';
        document.getElementById('footer-desc').innerText = '"Di Nature FnU, kami bersemangat untuk menghadirkan rempah-rempah terbaik dari alam ke dapur Anda. Dengan komitmen pada kualitas dan keberlanjutan, kami dengan hati-hati memilih, membuat, dan mengirimkan beragam rasa untuk memperkaya kreasi kuliner Anda. Rasakan esensi tradisi dengan setiap cubitan."';

        document.querySelector('.translate-button button').innerText = 'Translate to English'; // Mengubah label tombol
    } else {
        // Mengembalikan teks ke Bahasa Inggris
        location.reload(); // Reset halaman ke bahasa default (Inggris)
    }
    isEnglish = !isEnglish; // Membalik flag bahasa
}
