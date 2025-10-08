
const menuBtn = document.querySelector(".menu-mobile-btn");
const menuNav = document.querySelector(".menu-nav");

if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    menuNav.classList.toggle("open");
  });
}


function animarBarras() {
  const habilidades = document.querySelectorAll("#habilidades .habilidade");

  habilidades.forEach(habilidade => {
    const barra = habilidade.querySelector(".progresso");
    const span = habilidade.querySelector(".porcentagem");

   
    const valor = parseInt(barra ? barra.getAttribute("data-valor") : null);

    if (!barra || isNaN(valor)) return;

    barra.style.width = "0%";
    if (span) {
        span.textContent = `0%`;
    }

    
    setTimeout(() => {
        barra.style.width = `${valor}%`; 
        if (span) {
            span.textContent = `${valor}%`;
        }
    }, 50); 
  });
}


document.addEventListener("DOMContentLoaded", () => {
  animarBarras();
  const fadeIns = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.3 }
  );

  fadeIns.forEach(secao => observer.observe(secao));

  // ================= MÁQUINA DE ESCREVER =================
  const elemento = document.querySelector(".saudacao.maquina"); 
  if (!elemento) return;
  const texto = elemento.textContent;
  elemento.textContent = "";
  let i = 0;
  function digitar() {
    if (i < texto.length) {
      elemento.textContent += texto.charAt(i);
      i++;
      setTimeout(digitar, 80);
    }
  }
  digitar();
});