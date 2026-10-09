const toggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu() { navigation.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); toggle.setAttribute('aria-label', 'Abrir menú'); }
toggle.addEventListener('click', () => { const open = navigation.classList.toggle('open'); toggle.setAttribute('aria-expanded', String(open)); toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú'); });
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
window.addEventListener('resize', () => { if (window.innerWidth > 780) closeMenu(); });
document.querySelector('#year').textContent = new Date().getFullYear();
document.querySelector('#interest-form').addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  const data = new FormData(form);
  const text = `SOLICITUD DE INFORMACIÓN · CTRA RD\nColegio de Técnicos de Refrigeración y Aire Acondicionado de la República Dominicana\n\nNombre: ${data.get('name').trim()}\nCorreo: ${data.get('email').trim()}\nTeléfono: ${data.get('phone').trim() || 'No indicado'}\nInterés: ${data.get('interest')}\nFecha: ${new Date().toLocaleDateString('es-DO', { timeZone: 'America/Santo_Domingo' })}\n\nDeseo recibir información sobre los requisitos, las condiciones y los próximos pasos.\n\nEste documento no confirma una afiliación y debe compartirse a través de un canal oficial del colegio.\n`;
  const url = URL.createObjectURL(new Blob(['\uFEFF', text], { type: 'text/plain;charset=utf-8' }));
  const link = document.createElement('a'); link.href = url; link.download = 'solicitud-ctra-rd.txt'; document.body.append(link); link.click(); link.remove(); setTimeout(() => URL.revokeObjectURL(url), 1000);
  const status = document.querySelector('#form-status'); status.hidden = false; status.textContent = 'Solicitud preparada. Comparte el archivo con el colegio por un canal oficial.';
});
