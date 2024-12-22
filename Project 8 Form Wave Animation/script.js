const labeles = document.querySelectorAll(".form-control label")

labeles.forEach(label =>{
    label.innerHTML = label.innerText
    .split(``)
    .map((letter,index)=>`<span>${letter}</span>` )
    .join(``)
})