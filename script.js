const sections = [...document.querySelectorAll('section[id]')];
const tocLinks = [...document.querySelectorAll('.toc a')];

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    tocLinks.forEach((link) => {
      link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
    });
  });
}, { rootMargin: '-35% 0px -55% 0px', threshold: 0.01 });
sections.forEach((section) => observer.observe(section));

const copyButton = document.getElementById('copy-bibtex');
if (copyButton) {
  copyButton.addEventListener('click', async () => {
    const code = copyButton.closest('.bibtex-code').querySelector('code').innerText;
    try {
      await navigator.clipboard.writeText(code);
      copyButton.textContent = 'Copied';
      setTimeout(() => { copyButton.textContent = 'Copy'; }, 1400);
    } catch (error) {
      copyButton.textContent = 'Select text';
      setTimeout(() => { copyButton.textContent = 'Copy'; }, 1600);
    }
  });
}

// Keep video placeholders quiet when source files have not been added yet.
document.querySelectorAll('video').forEach((video) => {
  video.addEventListener('error', () => {
    video.controls = false;
  }, true);
});
