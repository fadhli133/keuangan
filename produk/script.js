function toggleMenu() {
    document.getElementById("menu").classList.toggle("active");
}

function beli(nama, harga) {
    let keranjang = JSON.parse(localStorage.getItem("keranjang")) || [];

    keranjang.push({ nama, harga });

    localStorage.setItem("keranjang", JSON.stringify(keranjang));

    alert(nama + " ditambahkan!");
}

function lihatKeranjang() {
    let data = JSON.parse(localStorage.getItem("keranjang")) || [];

    let isi = "Keranjang:\n";
    data.forEach(item => {
        isi += item.nama + " - " + item.harga + "\n";
    });

    alert(isi);
}

function checkout() {
    let keranjang = JSON.parse(localStorage.getItem("keranjang")) || [];

    if (keranjang.length === 0) {
        alert("Keranjang kosong!");
        return;
    }

    document.getElementById("qris").style.display = "block";
}

function konfirmasiBayar() {
    document.getElementById("qris").style.display = "none";
    document.getElementById("sukses").style.display = "block";
    localStorage.removeItem("keranjang");
}

function kirim() {
    alert("Pesan berhasil dikirim!");
}

// toggle menu mobile
function toggleMenu() {
    document.getElementById("menu").classList.toggle("show");
}

// efek scroll navbar
window.addEventListener("scroll", function() {
    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.classList.add("active");
    } else {
        navbar.classList.remove("active");
    }
});

function filterProduk(kategori) {
    let produk = document.querySelectorAll('.card');

    produk.forEach(card => {
        if (kategori === 'all') {
            card.style.display = 'block';
        } else {
            if (card.classList.contains(kategori)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        }
    });
}