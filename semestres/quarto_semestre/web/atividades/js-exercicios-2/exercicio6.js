let modoAtivo = false;

const bannerNormal = "https://wallpaperaccess.com/full/509042.jpg";
const bannerBlackFriday = "https://imgs.search.brave.com/7h7IMwrbObrANiU3h5CcPi0XO4nJKOD_vS7LAoRj2-4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJhY2Nlc3Mu/Y29tL2Z1bGwvNDcw/ODk4LmpwZw";

function trocarBanner(novaSrc) {
    const principal = document.getElementById("banner-principal");
    const overlay = document.getElementById("banner-overlay");

    overlay.src = novaSrc;

    setTimeout(function() {
        overlay.style.opacity = "1";

        setTimeout(function() {
            principal.src = novaSrc;
            overlay.style.transition = "none";
            overlay.style.opacity = "0";
            setTimeout(function() {
                overlay.style.transition = "opacity 0.8s ease";
            }, 50);
        }, 800);
    }, 50);
}

function ativarBlackFriday() {
    const produtos = document.querySelectorAll(".produto-card");
    const cupom = document.getElementById("cupom-secreto");
    const botao = document.getElementById("btn-black-friday");

    if (!modoAtivo) {
        trocarBanner(bannerBlackFriday);
        document.body.style.backgroundColor = "#000000";

        produtos.forEach(function(produto) {
            produto.classList.add("black-friday-theme");
        });

        console.log(cupom.textContent);

        botao.textContent = "Desativar Modo Black Friday";
        modoAtivo = true;
    } else {
        trocarBanner(bannerNormal);
        document.body.style.backgroundColor = "#ffffff";

        produtos.forEach(function(produto) {
            produto.classList.remove("black-friday-theme");
        });

        botao.textContent = "Ativar Modo Black Friday";
        modoAtivo = false;
    }
}
