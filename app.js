document.addEventListener("DOMContentLoaded", () => {
    // Heatmap Interactivity
    const heatmap = document.getElementById("heatmap");
    heatmap.addEventListener("mouseenter", () => {
      heatmap.style.filter = "brightness(0.8)";
      heatmap.style.cursor = "pointer";
    });
  
    heatmap.addEventListener("mouseleave", () => {
      heatmap.style.filter = "brightness(1)";
    });
  
    heatmap.addEventListener("click", () => {
      alert("You clicked on the heatmap! Detailed crime stats coming soon.");
    });
  
    // Dynamic Search Feedback
    const searchInput = document.getElementById("searchInput");
    const feedback = document.getElementById("search-feedback");
  
    searchInput.addEventListener("input", () => {
      const location = searchInput.value.trim();
      feedback.textContent = location
        ? `Searching for: ${location}...`
        : "Start typing to search for a location.";
    });
  });
  