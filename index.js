const ACORDION = [...window.document.querySelectorAll(".duvida > .duvida-flex > h2")]
const duvidas_ocultadas = [...window.document.querySelectorAll(".duvida-ocultada")]







ACORDION.map((e, i)=>{

    e.addEventListener("click", ()=>{
        
        
        if(i===0){
            duvidas_ocultadas[0].classList.toggle("duvida-aparacer")
            duvidas_ocultadas[1].classList.remove("duvida-aparacer")
            duvidas_ocultadas[2].classList.remove("duvida-aparacer")
            duvidas_ocultadas[3].classList.remove("duvida-aparacer")
            duvidas_ocultadas[4].classList.remove("duvida-aparacer")
            duvidas_ocultadas[5].classList.remove("duvida-aparacer")
            duvidas_ocultadas[6].classList.remove("duvida-aparacer")
            duvidas_ocultadas[7].classList.remove("duvida-aparacer")
            duvidas_ocultadas[8].classList.remove("duvida-aparacer")
          
        } else if(i===1){
            duvidas_ocultadas[1].classList.toggle("duvida-aparacer")
            duvidas_ocultadas[0].classList.remove("duvida-aparacer")
            duvidas_ocultadas[2].classList.remove("duvida-aparacer")
            duvidas_ocultadas[3].classList.remove("duvida-aparacer")
            duvidas_ocultadas[4].classList.remove("duvida-aparacer")
            duvidas_ocultadas[5].classList.remove("duvida-aparacer")
            duvidas_ocultadas[6].classList.remove("duvida-aparacer")
            duvidas_ocultadas[7].classList.remove("duvida-aparacer")
            duvidas_ocultadas[8].classList.remove("duvida-aparacer")
           
        } else if(i===2){
            duvidas_ocultadas[2].classList.toggle("duvida-aparacer")
            duvidas_ocultadas[1].classList.remove("duvida-aparacer")
            duvidas_ocultadas[0].classList.remove("duvida-aparacer")
            duvidas_ocultadas[3].classList.remove("duvida-aparacer")
            duvidas_ocultadas[4].classList.remove("duvida-aparacer")
            duvidas_ocultadas[5].classList.remove("duvida-aparacer")
            duvidas_ocultadas[6].classList.remove("duvida-aparacer")
            duvidas_ocultadas[7].classList.remove("duvida-aparacer")
            duvidas_ocultadas[8].classList.remove("duvida-aparacer")


        } else if(i===3){
            duvidas_ocultadas[3].classList.toggle("duvida-aparacer")
            duvidas_ocultadas[1].classList.remove("duvida-aparacer")
            duvidas_ocultadas[2].classList.remove("duvida-aparacer")
            duvidas_ocultadas[0].classList.remove("duvida-aparacer")
            duvidas_ocultadas[4].classList.remove("duvida-aparacer")
            duvidas_ocultadas[5].classList.remove("duvida-aparacer")
            duvidas_ocultadas[6].classList.remove("duvida-aparacer")
            duvidas_ocultadas[7].classList.remove("duvida-aparacer")
            duvidas_ocultadas[8].classList.remove("duvida-aparacer")
        } else if(i===4){
            duvidas_ocultadas[4].classList.toggle("duvida-aparacer")
            duvidas_ocultadas[1].classList.remove("duvida-aparacer")
            duvidas_ocultadas[2].classList.remove("duvida-aparacer")
            duvidas_ocultadas[3].classList.remove("duvida-aparacer")
            duvidas_ocultadas[0].classList.remove("duvida-aparacer")
            duvidas_ocultadas[5].classList.remove("duvida-aparacer")
            duvidas_ocultadas[6].classList.remove("duvida-aparacer")
            duvidas_ocultadas[7].classList.remove("duvida-aparacer")
            duvidas_ocultadas[8].classList.remove("duvida-aparacer")
        } else if(i===5){
            duvidas_ocultadas[5].classList.toggle("duvida-aparacer")
            duvidas_ocultadas[1].classList.remove("duvida-aparacer")
            duvidas_ocultadas[2].classList.remove("duvida-aparacer")
            duvidas_ocultadas[3].classList.remove("duvida-aparacer")
            duvidas_ocultadas[4].classList.remove("duvida-aparacer")
            duvidas_ocultadas[0].classList.remove("duvida-aparacer")
            duvidas_ocultadas[6].classList.remove("duvida-aparacer")
            duvidas_ocultadas[7].classList.remove("duvida-aparacer")
            duvidas_ocultadas[8].classList.remove("duvida-aparacer")
        } else if(i===6){
            duvidas_ocultadas[6].classList.toggle("duvida-aparacer")
            duvidas_ocultadas[1].classList.remove("duvida-aparacer")
            duvidas_ocultadas[2].classList.remove("duvida-aparacer")
            duvidas_ocultadas[3].classList.remove("duvida-aparacer")
            duvidas_ocultadas[4].classList.remove("duvida-aparacer")
            duvidas_ocultadas[5].classList.remove("duvida-aparacer")
            duvidas_ocultadas[0].classList.remove("duvida-aparacer")
            duvidas_ocultadas[7].classList.remove("duvida-aparacer")
            duvidas_ocultadas[8].classList.remove("duvida-aparacer")
        } else if(i===7){
            duvidas_ocultadas[7].classList.toggle("duvida-aparacer")
            duvidas_ocultadas[1].classList.remove("duvida-aparacer")
            duvidas_ocultadas[2].classList.remove("duvida-aparacer")
            duvidas_ocultadas[3].classList.remove("duvida-aparacer")
            duvidas_ocultadas[4].classList.remove("duvida-aparacer")
            duvidas_ocultadas[5].classList.remove("duvida-aparacer")
            duvidas_ocultadas[6].classList.remove("duvida-aparacer")
            duvidas_ocultadas[0].classList.remove("duvida-aparacer")
            duvidas_ocultadas[8].classList.remove("duvida-aparacer")
        } else{
            duvidas_ocultadas[8].classList.toggle("duvida-aparacer")
            duvidas_ocultadas[1].classList.remove("duvida-aparacer")
            duvidas_ocultadas[2].classList.remove("duvida-aparacer")
            duvidas_ocultadas[3].classList.remove("duvida-aparacer")
            duvidas_ocultadas[4].classList.remove("duvida-aparacer")
            duvidas_ocultadas[5].classList.remove("duvida-aparacer")
            duvidas_ocultadas[6].classList.remove("duvida-aparacer")
            duvidas_ocultadas[7].classList.remove("duvida-aparacer")
            duvidas_ocultadas[0].classList.remove("duvida-aparacer")
        }

      



})

})



