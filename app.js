
const arrows = document.querySelectorAll(".arrow")
const au_dropdown = document.querySelector(".au-dropdown")
const c_dropdown = document.querySelector(".c-dropdown")
const si_dropdown = document.querySelector(".si-dropdown")
const bp_dropdown = document.querySelector(".bp-dropdown")
const op_dropdown = document.querySelector(".op-dropdown")


arrows.forEach(function(arrow){
    arrow.addEventListener("click", function(){
        if(arrow.parentElement.nextElementSibling.classList.contains("op-dropdown")){

            if(op_dropdown.classList.contains("open")){
                arrow.src = "images/down-arrow.png"
                op_dropdown.classList.toggle("open")

            }
            else {
                op_dropdown.classList.toggle("open")
                arrow.src = "images/swipe-up.png"
            }  
        }
        else if(arrow.parentElement.nextElementSibling.classList.contains("bp-dropdown")){
            
            if(bp_dropdown.classList.contains("open")){
                arrow.src = "images/down-arrow.png"
                bp_dropdown.classList.toggle("open")
            }

            else {
                bp_dropdown.classList.toggle("open")
                arrow.src = "images/swipe-up.png"

            }
        } 
        else if(arrow.parentElement.nextElementSibling.classList.contains("si-dropdown")){
            
            if(si_dropdown.classList.contains("open")){
                arrow.src = "images/down-arrow.png"
                si_dropdown.classList.toggle("open")
            }

            else {
                si_dropdown.classList.toggle("open")
                arrow.src = "images/swipe-up.png"
            }
        }
        else if(arrow.parentElement.nextElementSibling.classList.contains("c-dropdown")){
            
            if(c_dropdown.classList.contains("open")){
                arrow.src = "images/down-arrow.png"
                c_dropdown.classList.toggle("open")
            }

            else {
                c_dropdown.classList.toggle("open")
                arrow.src = "images/swipe-up.png"
            }
        }
        else if(arrow.parentElement.nextElementSibling.classList.contains("au-dropdown")){
            
            if(au_dropdown.classList.contains("open")){
                arrow.src = "images/down-arrow.png"
                au_dropdown.classList.toggle("open")
            }

            else {
                au_dropdown.classList.toggle("open")
                arrow.src = "images/swipe-up.png"
            }
        }
    })
})


