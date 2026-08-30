document.getElementById('year').textContent = new Date().getFullYear();

const ozonVisual = document.querySelector('.ozon-visual');
if (ozonVisual) {
  const img = document.createElement('img');
  img.src = '/assets/images/ozon.svg';
  img.alt = 'Ростиксон — контент для Ozon';
  img.width = 720;
  img.height = 540;
  img.loading = 'lazy';
  img.decoding = 'async';
  ozonVisual.replaceWith(img);
}

const yachtVisual = document.querySelector('.yacht-visual');
if (yachtVisual) {
  const img = document.createElement('img');
  img.src = '/assets/images/yacht.svg';
  img.alt = 'Съёмки клипа на яхте';
  img.width = 720;
  img.height = 460;
  img.loading = 'lazy';
  img.decoding = 'async';
  yachtVisual.replaceWith(img);
}
