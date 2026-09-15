// ---------- mobile sidebar toggle ----------
const navToggle = document.getElementById('navToggle');
const sidebar = document.getElementById('sidebar');

navToggle?.addEventListener('click', () => {
  const isOpen = sidebar.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    sidebar.classList.remove('open');
    navToggle?.setAttribute('aria-expanded', 'false');
  });
});

// ---------- active section highlight ----------
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav-link');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinks.forEach(link => {
        link.classList.toggle('active', link.dataset.section === id);
      });
    }
  });
}, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });

sections.forEach(section => observer.observe(section));

// ---------- terminal status typing effect ----------
const statusEl = document.querySelector('.typed-status');
const roles = ['"learning"', '"building"', '"open to internships"'];
let roleIndex = 0, charIndex = 0, deleting = false;

function typeLoop() {
  if (!statusEl) return;
  const current = roles[roleIndex];

  if (!deleting) {
    charIndex++;
    statusEl.textContent = current.slice(0, charIndex);
    if (charIndex === current.length) {
      deleting = true;
      setTimeout(typeLoop, 1400);
      return;
    }
  } else {
    charIndex--;
    statusEl.textContent = current.slice(0, charIndex);
    if (charIndex === 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }
  setTimeout(typeLoop, deleting ? 40 : 70);
}
typeLoop();

// ---------- contact form (static demo) ----------
const form = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');

form?.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const name = data.get('name');

  // NOTE: this is a static front-end demo only — it does not send email.
  // Connect a real service (Formspree, EmailJS, Vercel Serverless Function, etc.)
  // or swap this handler for a mailto: link if you don't want a backend.
  formNote.textContent = `Terima kasih, ${name}! Formulir ini demo statis — hubungkan ke layanan seperti Formspree atau EmailJS agar pesan benar-benar terkirim.`;
  form.reset();
});
