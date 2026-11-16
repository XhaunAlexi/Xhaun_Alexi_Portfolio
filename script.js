'use strict';
document.getElementById('year').textContent = new Date().getFullYear();
const copyButton = document.getElementById('copy-email');
copyButton.addEventListener('click', async () => {
  const status = document.getElementById('copy-status');
  try {
    await navigator.clipboard.writeText('xhaunalexi3@gmail.com');
    status.textContent = 'Email copied. Let’s connect!';
  } catch {
    status.textContent = 'You can select and copy this address: xhaunalexi3@gmail.com';
  }
});
