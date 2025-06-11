function drawViz() {
  const container = document.getElementById("viz");
  container.innerHTML = `
    <button class="custom-button">
      <i class="fas fa-search-check"></i>
      SEO
    </button>
  `;

  // اضافه کردن Font Awesome
  const fa = document.createElement("link");
  fa.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css";
  fa.rel = "stylesheet";
  document.head.appendChild(fa);
}
