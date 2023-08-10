let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("HTML");
        habilidades[1].classList.add("CSS");
        habilidades[2].classList.add("WORDPRESS");
        habilidades[3].classList.add("Elementor PRO");
        habilidades[4].classList.add("Woocommerce");
        habilidades[5].classList.add("Advanced Custom Fields");
        habilidades[6].classList.add("Dokan");
        habilidades[7].classList.add("Communiy Manager");
        habilidades[8].classList.add("SEO");
        habilidades[9].classList.add("E-Commerce");
        habilidades[9].classList.add("CANVA");
        habilidades[9].classList.add("SPOTIFY");
        habilidades[9].classList.add("Comunicación");
        habilidades[9].classList.add("Trabajo en Equipo");
        habilidades[9].classList.add("Creatividad");
        habilidades[9].classList.add("Dedicación");
        habilidades[9].classList.add("Puntualidad");
        habilidades[9].classList.add("Aprendizaje");
        habilidades[9].classList.add("Honestidad");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 