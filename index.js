const ACORDION = [...window.document.querySelectorAll(".duvida > h2")]
const duvidas_ocultadas = [...window.document.querySelectorAll(".duvida-ocultada")]







ACORDION.map((e, i)=>{

    e.addEventListener("click", ()=>{
        
        if (i===0){
            duvidas_ocultadas[0].style.display = "block"
            duvidas_ocultadas[1].style.display = "none"
            duvidas_ocultadas[2].style.display = "none"
            duvidas_ocultadas[3].style.display = "none"
            duvidas_ocultadas[4].style.display = "none"
            duvidas_ocultadas[5].style.display = "none"
            duvidas_ocultadas[6].style.display = "none"
            duvidas_ocultadas[7].style.display = "none"
            duvidas_ocultadas[8].style.display = "none"

        } else if (i===1){
            duvidas_ocultadas[1].style.display = "block"
            duvidas_ocultadas[0].style.display = "none"
            duvidas_ocultadas[2].style.display = "none"
            duvidas_ocultadas[3].style.display = "none"
            duvidas_ocultadas[4].style.display = "none"
            duvidas_ocultadas[5].style.display = "none"
            duvidas_ocultadas[6].style.display = "none"
            duvidas_ocultadas[7].style.display = "none"
            duvidas_ocultadas[8].style.display = "none"
        } else if (i===2){
            duvidas_ocultadas[2].style.display = "block"
            duvidas_ocultadas[1].style.display = "none"
            duvidas_ocultadas[0].style.display = "none"
            duvidas_ocultadas[3].style.display = "none"
            duvidas_ocultadas[4].style.display = "none"
            duvidas_ocultadas[5].style.display = "none"
            duvidas_ocultadas[6].style.display = "none"
            duvidas_ocultadas[7].style.display = "none"
            duvidas_ocultadas[8].style.display = "none"
        
        } else if (i==3){
            duvidas_ocultadas[3].style.display = "block"
            duvidas_ocultadas[1].style.display = "none"
            duvidas_ocultadas[0].style.display = "none"
            duvidas_ocultadas[2].style.display = "none"
            duvidas_ocultadas[4].style.display = "none"
            duvidas_ocultadas[5].style.display = "none"
            duvidas_ocultadas[6].style.display = "none"
            duvidas_ocultadas[7].style.display = "none"
            duvidas_ocultadas[8].style.display = "none"
        } else if (i===4){
            duvidas_ocultadas[4].style.display = "block"
            duvidas_ocultadas[1].style.display = "none"
            duvidas_ocultadas[0].style.display = "none"
            duvidas_ocultadas[2].style.display = "none"
            duvidas_ocultadas[3].style.display = "none"
            duvidas_ocultadas[5].style.display = "none"
            duvidas_ocultadas[6].style.display = "none"
            duvidas_ocultadas[7].style.display = "none"
            duvidas_ocultadas[8].style.display = "none"
          
        } else if (i===5){
            duvidas_ocultadas[5].style.display = "block"
            duvidas_ocultadas[1].style.display = "none"
            duvidas_ocultadas[0].style.display = "none"
            duvidas_ocultadas[2].style.display = "none"
            duvidas_ocultadas[3].style.display = "none"
            duvidas_ocultadas[4].style.display = "none"
            duvidas_ocultadas[6].style.display = "none"
            duvidas_ocultadas[7].style.display = "none"
            duvidas_ocultadas[8].style.display = "none"
        } else if (i===6){
            duvidas_ocultadas[6].style.display = "block"
            duvidas_ocultadas[1].style.display = "none"
            duvidas_ocultadas[0].style.display = "none"
            duvidas_ocultadas[2].style.display = "none"
            duvidas_ocultadas[3].style.display = "none"
            duvidas_ocultadas[4].style.display = "none"
            duvidas_ocultadas[5].style.display = "none"
            duvidas_ocultadas[7].style.display = "none"
            duvidas_ocultadas[8].style.display = "none"
         
        } else if (i===7){
            duvidas_ocultadas[7].style.display = "block"
            duvidas_ocultadas[1].style.display = "none"
            duvidas_ocultadas[0].style.display = "none"
            duvidas_ocultadas[2].style.display = "none"
            duvidas_ocultadas[3].style.display = "none"
            duvidas_ocultadas[4].style.display = "none"
            duvidas_ocultadas[5].style.display = "none"
            duvidas_ocultadas[6].style.display = "none"
            duvidas_ocultadas[8].style.display = "none"
        } else{
            duvidas_ocultadas[8].style.display = "block"
            duvidas_ocultadas[1].style.display = "none"
            duvidas_ocultadas[0].style.display = "none"
            duvidas_ocultadas[2].style.display = "none"
            duvidas_ocultadas[3].style.display = "none"
            duvidas_ocultadas[4].style.display = "none"
            duvidas_ocultadas[5].style.display = "none"
            duvidas_ocultadas[6].style.display = "none"
            duvidas_ocultadas[7].style.display = "none"
        }
 

    })



})



