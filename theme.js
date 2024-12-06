document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    const applyTheme = (theme) => {
      if (theme === 'dark') {
        document.body.style.backgroundColor = '#333';
        document.body.style.color = '#fff';
      } else {
        document.body.style.backgroundColor = '#fff';
        document.body.style.color = '#000';
      }
    };
    applyTheme(savedTheme);
  });
  