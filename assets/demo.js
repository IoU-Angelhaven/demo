// Demon sparar ingenting: formulären visar bara vad som skulle hända.
document.addEventListener('submit', function (e) {
  if (!e.target.hasAttribute('data-demo')) return;
  e.preventDefault();
  var old = document.querySelector('.demonote'); if (old) old.remove();
  var n = document.createElement('div'); n.className = 'demonote'; n.setAttribute('role', 'status');
  n.textContent = 'This is a demo: nothing is saved. On the real platform this change would be saved, logged and possible to undo.';
  document.body.appendChild(n); setTimeout(function () { n.remove(); }, 6000);
});
