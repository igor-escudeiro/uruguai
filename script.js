// ===================================================
// HEADER — encolhe ao rolar
// ===================================================
const cabecalho = document.querySelector('.cabecalho');
const logoImg   = document.querySelector('.logo img');

window.addEventListener('scroll', () => {
    // Ativa a classe .scrolled quando rolar mais de 80px
    if (window.scrollY > 80) {
        cabecalho.classList.add('scrolled');
        logoImg.src = 'assets/Sol_de_Mayo-Bandera_de_Uruguay.svg';
    } else {
        cabecalho.classList.remove('scrolled');
        logoImg.src = 'assets/sol_de_mayo_uruguai_bw (1).png';
    }
});

// =============================================
// SCROLL SUAVE COM OFFSET DO HEADER + MENU
// =============================================

document.querySelectorAll('.barra-menu a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // cancela o scroll nativo

        const targetId = this.getAttribute('href'); // ex: "#sobre"

        // redireciona para outra página (cardápio)
        if (!targetId.startsWith('#')) {
            window.location.href = targetId;
            return;
        }

        const target = document.querySelector(targetId);
        if (!target) return;

        const cabecalho   = document.querySelector('.cabecalho'); 
        const barraMenu   = document.querySelector('.barra-menu');

        const alturaHeader = cabecalho.offsetHeight;   // altura real do header
        const alturaMenu   = barraMenu.offsetHeight;   // altura real do menu
        const offset       = alturaHeader + alturaMenu + 20; // +20px de respiro

        const posicaoAlvo = target.getBoundingClientRect().top
                          + window.scrollY
                          - offset;

        window.scrollTo({
            top: posicaoAlvo,
            behavior: 'smooth'
        });
    });
});
