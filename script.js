document.addEventListener('DOMContentLoaded', () => {
  const refreshMenuBtn = document.getElementById('refresh-menu');
  if (refreshMenuBtn) {
    refreshMenuBtn.addEventListener('click', async () => {
      const menuPlaceholder = document.getElementById('menu-placeholder');
      if (!menuPlaceholder) return;
      menuPlaceholder.textContent = 'Loading menu...';
      try {
        await new Promise(r => setTimeout(r, 800));
        menuPlaceholder.innerHTML = '<ul id="menu-list" class="mb-0"><li>Chicken Sandwich</li><li>Salad</li><li>Soup of the day</li></ul>';
      } catch (err) {
        console.error(err);
        menuPlaceholder.textContent = 'Failed to load menu';
      }
    });
  }

  
  const weatherContainer = document.getElementById('weather-widget');
  if (weatherContainer) {
    const latitude = 40.7128;
    const longitude = -74.0060;
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;

    fetch(url)
      .then(resp => {
        if (!resp.ok) throw new Error('Network response was not ok');
        return resp.json();
      })
      .then(data => {
        if (data && data.current_weather) {
          const tempC = data.current_weather.temperature;
          const wind = data.current_weather.windspeed;
          const weatherHtml = `<p class="mb-0">Current: ${tempC}°C • Wind: ${wind} km/h</p>`;
          weatherContainer.innerHTML = weatherHtml;
        } else {
          weatherContainer.textContent = 'Weather data not available';
        }
      })
      .catch(err => {
        console.error('Weather fetch failed', err);
        weatherContainer.textContent = 'Failed to load weather';
      });
  }
});