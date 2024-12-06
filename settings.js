document.addEventListener('DOMContentLoaded', () => {
    const themeSelect = document.getElementById('theme');
    const notificationsSelect = document.getElementById('notifications');
    const saveSettingsBtn = document.getElementById('saveSettings');
  
    // Load saved settings from localStorage
    const loadSettings = () => {
      const savedTheme = localStorage.getItem('theme') || 'light';
      const savedNotifications = localStorage.getItem('notifications') || 'enabled';
  
      themeSelect.value = savedTheme;
      notificationsSelect.value = savedNotifications;
  
      // Apply the selected theme immediately
      applyTheme(savedTheme);
    };
  
    // Save settings to localStorage
    saveSettingsBtn.addEventListener('click', () => {
      const selectedTheme = themeSelect.value;
      const selectedNotifications = notificationsSelect.value;
  
      localStorage.setItem('theme', selectedTheme);
      localStorage.setItem('notifications', selectedNotifications);
  
      // Apply the selected theme
      applyTheme(selectedTheme);
  
      alert('Settings saved successfully!');
    });
  
    // Apply the selected theme
    const applyTheme = (theme) => {
      if (theme === 'dark') {
        document.body.style.backgroundColor = '#333';
        document.body.style.color = '#fff';
      } else {
        document.body.style.backgroundColor = '#fff';
        document.body.style.color = '#000';
      }
    };
  
    loadSettings();
  });
  