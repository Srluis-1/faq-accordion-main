const option = document.getElementById("option")
const info = document.querySelectorAll(".info")
const textInfo = document.querySelectorAll(".text-info")
let lastClickedIndex = -1; // Reinicia o índice clicado

info.forEach((element, index) => {
    element.addEventListener("click", function() {
        if (lastClickedIndex === index) {
            // Se o mesmo elemento foi clicado novamente, esconda o text-info correspondente
            textInfo[index].style.display = "none";
            lastClickedIndex = -1; // Reinicia o índice clicado
        } else {
            // Esconde o último text-info clicado (se houver) e mostra o novo
            if (lastClickedIndex !== -1) {
                textInfo[lastClickedIndex].style.display = "none";
            }
            textInfo[index].style.display = "block";
            lastClickedIndex = index;
        }
    });
});