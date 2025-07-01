document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById('myModal');
  const openBtn = document.getElementById('openModalBtn');
  const closeBtn = document.getElementById('closeModalBtn');

  // Fungsi buka modal
  openBtn.addEventListener('click', function () {
    modal.style.display = 'block';
  });

  // Fungsi tutup modal (klik tombol X)
  closeBtn.addEventListener('click', function () {
    modal.style.display = 'none';
  });

  // Tutup modal jika klik di luar area modal-content
  window.addEventListener('click', function (event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
});
