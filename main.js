console.log("hi");



window.addEventListener("load", (event)=>{
    let top = document.getElementById("top");
    window.addEventListener("scroll", (event)=>{    
        top.style.display = "flex";    
    });

    top.addEventListener("click", (event)=>{
        window.scrollTo({
           top: 0,
           left: 0,
           behavior: 'smooth'
        });
    });
});



