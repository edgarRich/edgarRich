document.addEventListener('DOMContentLoaded', function() {
  const section = document.createElement('section');
  section.id = 'about';
  section.innerHTML = `
      <h1>About Us</h1>
      <p>This is the about section.</p>
  `;
  document.body.appendChild(section);
});