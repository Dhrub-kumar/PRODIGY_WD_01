(() => {
  const body = document.body;
  const searchInput = document.querySelector('.search-bar input');
  const welcomeMessage = document.querySelector('.welcome-message');

  // Background colors to cycle through on body click
  const bgColors = [
    '#2563eb', // Blue
    '#10b981', // Emerald
    '#fbbf24', // Amber
    '#ef4444', // Red
    '#6b7280' // Gray
  ];
  let currentColorIndex = -1;

  // On body click, cycle background color
  // Ensure clicks on input or links do not trigger background color change
  body.addEventListener('click', (event) => {
    // Prevent color change if click is inside input or nav links etc
    if (
      event.target.closest('input') ||
      event.target.closest('nav') ||
      event.target.closest('a')
    ) {
      return;
    }
    currentColorIndex = (currentColorIndex + 1) % bgColors.length;
    body.style.backgroundColor = bgColors[currentColorIndex];
  });

  // Update welcome message with search input
  searchInput.addEventListener('input', (e) => {
    const value = e.target.value.trim();
    if (value.length > 0) {
      welcomeMessage.textContent = `Searching for "${value}"...`;
    } else {
      welcomeMessage.textContent = 'Start typing to search the portal content.';
    }
  });
})();

