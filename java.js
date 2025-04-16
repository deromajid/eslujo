const toggleButton = document.querySelector('.menu-toggle');
const menuPhone = document.querySelector('.menu-phone ul');

toggleButton.addEventListener('click', () => {
  menuPhone.classList.toggle('show');
});