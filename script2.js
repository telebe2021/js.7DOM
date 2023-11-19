document.addEventListener('DOMContentLoaded', function () {
    const colorDiv = document.getElementById('colorDiv');
    const colorButtons = document.querySelectorAll('.colorBtn');
  
    colorButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        const color = button.getAttribute('data-color');
        colorDiv.style.backgroundColor = color;
      });
    });
  });
  