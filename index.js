const apredizados = [...document.querySelectorAll(".apredizado")]

/*Sessao Conteudos para que o client vai aprender slide */
const conteudos = [...window.document.querySelectorAll("#conteudos > input")]
let imagem_conteudo = window.document.getElementById("imagem_conteudo")

/* Variantes e constantes do Acordion = (Duvidas?) */

const setas_acordion  = [...document.querySelectorAll(".acordion")]
const duvidas_ocultadas = [...document.querySelectorAll(".duvida-ocultada")]





for (let i = 0; i< apredizados.length; i++){


    apredizados[i].addEventListener("click", ()=>{


        if(apredizados[i] == apredizados[0]){

            apredizados[0].style.backgroundColor = "blue";
            apredizados[1].style.backgroundColor = "white";
            apredizados[3].style.backgroundColor = "white";
            apredizados[4].style.backgroundColor = "white";
            apredizados[5].style.backgroundColor = "white";
            
        } else if(apredizados[i] == apredizados[1]){
            apredizados[0].style.backgroundColor = "white";
            apredizados[2].style.backgroundColor = "white";
            apredizados[3].style.backgroundColor = "white";
            apredizados[4].style.backgroundColor = "white";
            apredizados[5].style.backgroundColor = "white";

            apredizados[1].style.backgroundColor = "blue";

        } else if(apredizados[i] == apredizados[2]){
            apredizados[1].style.backgroundColor = "white";
            apredizados[0].style.backgroundColor = "white";
            apredizados[3].style.backgroundColor = "white";
            apredizados[4].style.backgroundColor = "white";
            apredizados[5].style.backgroundColor = "white";

            apredizados[2].style.backgroundColor = "blue";
        } else if(apredizados[i] == apredizados[3]){

            apredizados[0].style.backgroundColor = "white";
            apredizados[1].style.backgroundColor = "white";
            apredizados[2].style.backgroundColor = "white"; 
            apredizados[4].style.backgroundColor = "white";
            apredizados[5].style.backgroundColor = "white";

            apredizados[3].style.backgroundColor = "blue";


        } else if(apredizados[i] == apredizados[4]){
            apredizados[0].style.backgroundColor = "white";
            apredizados[1].style.backgroundColor = "white";
            apredizados[2].style.backgroundColor = "white";  
            apredizados[3].style.backgroundColor = "white";
            apredizados[5].style.backgroundColor = "white";

            apredizados[4].style.backgroundColor = "blue";
        } else if(apredizados[i] == apredizados[5]){
            apredizados[0].style.backgroundColor = "white";
            apredizados[1].style.backgroundColor = "white";
            apredizados[2].style.backgroundColor = "white";  
            apredizados[3].style.backgroundColor = "white";
            apredizados[4].style.backgroundColor = "white";

            apredizados[5].style.backgroundColor = "blue";

        }


    })

}
    

conteudos.map((e, i, array)=>{

    e.addEventListener("click", ()=>{

        if(i==0){
            
            imagem_conteudo.setAttribute("src", "src/img/interrogacao.jpg")

        }

    })

})




/* Sessão duvidas acordion*/

setas_acordion.map((e, i, array)=>{

    e.addEventListener("click", ()=>{

        if(i==0){
            duvidas_ocultadas[0].classList.toggle("duvida-ocultada-toggle")
        } else if(i==1){
            duvidas_ocultadas[1].classList.toggle("duvida-ocultada-toggle")
        } else if (i==2){
            duvidas_ocultadas[2].classList.toggle("duvida-ocultada-toggle")
        } else if (i==3){
            duvidas_ocultadas[3].classList.toggle("duvida-ocultada-toggle")
        } else{
            duvidas_ocultadas[4].classList.toggle("duvida-ocultada-toggle")
        }

    })


})
