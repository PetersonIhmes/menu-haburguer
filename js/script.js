// SidBar Menu - Ppara Abrir o menu lateral

document.querySelector(".hamburguer").addEventListener("click", () =>
    document.querySelector(".container").classList.toggle("show-menu")
);

//Modo Dark mode - Troca o tema de fundo

const $checkbox = document.querySelector('#switch');

$checkbox.addEventListener('change', function(){
    if ($checkbox.checked==true){
        document.getElementById("imagem").src="img/day.jpeg";

    }
    else {
        document.getElementById("imagem").src="img/night.jpg";

    }
});
