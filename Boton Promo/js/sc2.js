const profileButton = document.getElementById('profileButton');
const dropdownContent = document.getElementById('dropdownContent');

profileButton.addEventListener('click', () => {
  dropdownContent.classList.toggle('show');
});
