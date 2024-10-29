const panels = document.querySelectorAll('.panel')

// console.log(panels) gives us node list as an output

panels.forEach((panel)=>{
   
    panel.addEventListener("click",()=>{
        removeActiveClass()
        panel.classList.add("active")
    })
})

function removeActiveClass (panel){
    panels.forEach(panel=>{
        panel.classList.remove("active")
    })
}

