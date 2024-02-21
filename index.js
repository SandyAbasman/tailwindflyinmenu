let icons = document.querySelectorAll(".fa-solid");
let menuCards = document.querySelectorAll(".fly-in-menu");
let main = document.getElementById("main")



function defaultIcon(){
    menuCards.forEach((item) => {
        item.classList.remove("fly-in-menu-new");
        item.classList.add("fly-in-menu");
    })

}


icons.forEach((item, index) =>{
    item.addEventListener("click", function(e){
        console.log(e.target)
        


        let menuCard = menuCards[index];


        defaultIcon();

        if(menuCard.classList.contains("fly-in-menu")){
                     menuCard.classList.remove("fly-in-menu");
                     menuCard.classList.add("fly-in-menu-new");
                 }else if(menuCard.classList.contains("fly-in-menu-new")){
                     menuCard.classList.remove("fly-in-menu-new");
                     menuCard.classList.add("fly-in-menu");
               }

              
    })
})


main.addEventListener("click", function(e){
    console.log(e.target)

    if(main.has(menuCards)){
        console.log("show")
    }


    // menuCards.forEach((item) => {
    //     item.classList.remove("fly-in-menu-new");
    //     item.classList.add("fly-in-menu");
    // })
})
