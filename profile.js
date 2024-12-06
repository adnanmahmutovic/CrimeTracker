document.addEventListener('DOMContentLoaded', () => {
    const profileForm = document.getElementById('profileForm');
    const saveChangesBtn = document.getElementById('saveChanges');
    const savedAreasList = document.getElementById('savedAreasList');
    const addAreaBtn = document.getElementById('addArea');
  
    // Load profile data
    const loadProfile = () => {
      document.getElementById('name').value = localStorage.getItem('name') || '';
      document.getElementById('email').value = localStorage.getItem('email') || '';
    };
  
    // Save profile data
    saveChangesBtn.addEventListener('click', () => {
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      localStorage.setItem('name', name);
      localStorage.setItem('email', email);
      alert('Profile updated successfully!');
    });
  
    // Load saved areas
    const loadSavedAreas = () => {
      const areas = JSON.parse(localStorage.getItem('savedAreas')) || [];
      savedAreasList.innerHTML = '';
      areas.forEach(area => {
        const li = document.createElement('li');
        li.textContent = area;
        savedAreasList.appendChild(li);
      });
    };
  
    // Add a new saved area
    addAreaBtn.addEventListener('click', () => {
      const area = prompt('Enter the name of the area:');
      if (area) {
        const areas = JSON.parse(localStorage.getItem('savedAreas')) || [];
        areas.push(area);
        localStorage.setItem('savedAreas', JSON.stringify(areas));
        loadSavedAreas();
      }
    });
  
    loadProfile();
    loadSavedAreas();
  });
  