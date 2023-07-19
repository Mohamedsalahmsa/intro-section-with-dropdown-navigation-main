let list1 = document.querySelector("#list1");
let list2 = document.querySelector("#list2");
let li1 = document.querySelector("#li1");
let li2 = document.querySelector("#li2");
let img1 = document.querySelector("#img1");
let img2 = document.querySelector("#img2");
let img3 = document.querySelector("#img3");

/* Check Elements 
// console.log(list1)
// console.log(list2)
// console.log(li1)
// console.log(li2)*/

 let att = img1.getAttribute("src");
li1.addEventListener("click", function() {
   list1.classList.toggle("active");
 

    if(list1.getAttribute("class") == "list1") {
    att = "./images/icon-arrow-up.svg"
    img1.src = att;
    } else {
        att = "./images/icon-arrow-down.svg"
        img1.src = att;
    }

})

 let att2 = img2.getAttribute("src");
li2.addEventListener("click", function() {
   list2.classList.toggle("active");
 

    if(list2.getAttribute("class") == "list2") {
    att2 = "./images/icon-arrow-up.svg"
    img2.src = att2;
    } else {
        att2 = "./images/icon-arrow-down.svg"
        img2.src = att2;
    }

})


// ------------------------------

// mobile Nav

let li5 = document.querySelector("#li5")
let li6 = document.querySelector("#li6")
let openMenu = document.querySelector("#open-menu")
let closeMenu = document.querySelector("#closeMenu")
let catog = document.querySelector("#catog")
let catog2 = document.querySelector("#catog2")
let pare = document.querySelector("#pare")
let img4 = document.querySelector("#img4")

openMenu.addEventListener("click" , function() {
    openMenu.classList.add("active");
    pare.style.marginLeft = "0"
    pare.style.display = "flex"
    closeMenu.addEventListener("click",function() {
        pare.style.marginLeft = "70%"
        openMenu.classList.remove("active")
        pare.style.display = "none"
        document.body.style.backgroundColor = "hsl(0, 0%, 98%)"
    })
    document.body.style.backgroundColor = "rgba(0,0,0,0.6)"
})
let att3 = img3.getAttribute("src");
li5.addEventListener("click" , function() {
    catog.classList.toggle("active");

    if(catog.getAttribute("class") == "cls") {
        att3 = "./images/icon-arrow-up.svg"
        img3.src = att3;
        } else {
            att3 = "./images/icon-arrow-down.svg"
            img3.src = att3;
        }
})

let att4 = img4.getAttribute("src");
li6.addEventListener("click" , function() {
    catog2.classList.toggle("active");

    if(catog2.getAttribute("class") == "cls2") {
        att4 = "./images/icon-arrow-up.svg"
        img4.src = att4;
        } else {
            att4 = "./images/icon-arrow-down.svg"
            img4.src = att4;
        }
})