// Add 'active' class to clicked menu item
const menuItems = document.querySelectorAll('.menu li a');

menuItems.forEach(item => {
  item.addEventListener('click', function() {
    menuItems.forEach(item => item.classList.remove('active'));
    this.classList.add('active');
  });
});
