document.addEventListener('DOMContentLoaded', function () {
    const button = document.querySelector('.container button');
  
    button.addEventListener('click', () => {
      button.classList.add('clicked');
      setTimeout(() => {
        button.classList.remove('clicked');
      }, 500);
    });
  });
  