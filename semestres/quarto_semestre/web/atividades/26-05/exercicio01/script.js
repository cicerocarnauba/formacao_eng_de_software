btt = document.getElementById("muda-cor")

btt.addEventListener("click", function () {
    document.body.style.backgroundColor = "rgb(" + Math.floor(Math.random() * 255) + ", " + Math.floor(Math.random() * 255) + ", " + Math.floor(Math.random() * 255) + ")";
})