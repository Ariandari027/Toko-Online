function openBuyPopup(productName = '') {
  const modal = document.getElementById('buyModal');
  const desc = document.getElementById('modalDesc');
  const waLink = document.getElementById('waOrderLink');

  desc.textContent = productName ? `Kamu akan membeli: ${productName}` : 'Kamu akan membeli produk ini.';

  const phone = '6285640364995';
  const msg = productName
    ? `Halo AR fishing, saya mau order ${productName}. Masih tersedia?`
    : 'Halo AR fishing, saya mau order produk.';

  waLink.href = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;

  modal.classList.add('show');
  modal.setAttribute('aria-hidden', 'false');
}

function closeBuyPopup() {
  const modal = document.getElementById('buyModal');
  modal.classList.remove('show');
  modal.setAttribute('aria-hidden', 'true');
}

// tutup kalau klik area gelap
document.addEventListener('click', function (e) {
  const modal = document.getElementById('buyModal');
  if (modal && modal.classList.contains('show') && e.target === modal) closeBuyPopup();
});

// tutup pakai ESC
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') closeBuyPopup();
});
