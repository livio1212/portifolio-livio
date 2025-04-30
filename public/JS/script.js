function toggleDropdown() {
    const menu = document.getElementById('dropdownMenu');
    menu.classList.toggle('hidden');
  }

  // Fecha o menu ao clicar fora
  window.addEventListener('click', function (e) {
    const menu = document.getElementById('dropdownMenu');
    const button = e.target.closest('button');
    if (!menu.contains(e.target) && !button) {
      menu.classList.add('hidden');
    }
  });