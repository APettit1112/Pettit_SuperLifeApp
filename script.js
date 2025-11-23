document.addEventListener('DOMContentLoaded', () => {
  const refreshMenuBtn = document.getElementById('refresh-menu');
  if (refreshMenuBtn) {
    refreshMenuBtn.addEventListener('click', async () => {
      const placeholder = document.getElementById('menu-placeholder');
      placeholder.textContent = 'Loading...';
      try {
        await new Promise(r => setTimeout(r, 800));
        placeholder.textContent = 'Chicken Sandwich, Salad, Soup of the day';
      } catch (err) {
        placeholder.textContent = 'Failed to load menu';
      }
    });
  }
});