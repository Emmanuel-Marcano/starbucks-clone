
const arrows = document.querySelectorAll(".arrow")
const au_dropdown = document.querySelector(".au-dropdown")
const c_dropdown = document.querySelector(".c-dropdown")
const si_dropdown = document.querySelector(".si-dropdown")
const bp_dropdown = document.querySelector(".bp-dropdown")
const op_dropdown = document.querySelector(".op-dropdown")


arrows.forEach(function(arrow){
    arrow.addEventListener("click", function(){
        if(arrow.parentElement.nextElementSibling.classList.contains("op-dropdown")){

            if(arrow.parentElement.parentElement.classList.contains("open")){
                arrow.classList.toggle("rotate-arrow")
                
                arrow.parentElement.parentElement.classList.toggle("open")
            }

            else {
              
                arrow.parentElement.parentElement.classList.toggle("open")
                arrow.classList.toggle("rotate-arrow")
            }
        }
        else if(arrow.parentElement.nextElementSibling.classList.contains("bp-dropdown")){
            
            if(arrow.parentElement.parentElement.classList.contains("open")){
                arrow.classList.toggle("rotate-arrow")
              
                arrow.parentElement.parentElement.classList.toggle("open")
            }

            else {
               
                arrow.parentElement.parentElement.classList.toggle("open")
                arrow.classList.toggle("rotate-arrow")
            }
        } 
        else if(arrow.parentElement.nextElementSibling.classList.contains("si-dropdown")){
            
            if(arrow.parentElement.parentElement.classList.contains("open")){
                arrow.classList.toggle("rotate-arrow")
              
                arrow.parentElement.parentElement.classList.toggle("open")
            }

            else {
               
                arrow.parentElement.parentElement.classList.toggle("open")
                arrow.classList.toggle("rotate-arrow")
            }
        }
        else if(arrow.parentElement.nextElementSibling.classList.contains("c-dropdown")){
            
            if(arrow.parentElement.parentElement.classList.contains("open")){
                arrow.classList.toggle("rotate-arrow")
               
                arrow.parentElement.parentElement.classList.toggle("open")
            }

            else {
              
                arrow.parentElement.parentElement.classList.toggle("open")
                arrow.classList.toggle("rotate-arrow")
            }
        }
        else if(arrow.parentElement.nextElementSibling.classList.contains("au-dropdown")){
            
            if(arrow.parentElement.parentElement.classList.contains("open")){
                arrow.classList.toggle("rotate-arrow")
               
                arrow.parentElement.parentElement.classList.toggle("open")
            }

            else {
               
                arrow.parentElement.parentElement.classList.toggle("open")
                
                arrow.classList.toggle("rotate-arrow")
            }
        }
    })
})


