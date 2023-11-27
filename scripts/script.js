document.getElementById("main-action-button").onclick=function (){
    document.getElementById("products").scrollIntoView({behavior:"smooth"});
}
let Links=document.querySelectorAll(".menu-item > a");

for (let i=0; i <Links.length; i++){
    Links[i].onclick=function (){
        document.getElementById(Links[i].getAttribute("data-link")).scrollIntoView({behavior:"smooth"});
    }

}

let buttons=document.getElementsByClassName("product-button");

for (let i=0; i <buttons.length; i++){
    buttons[i].onclick=function (){
        document.getElementById("order").scrollIntoView({behavior:"smooth"});
    }

}

let burger=document.getElementById("burger")
let name=document.getElementById("name")
let phone=document.getElementById("phone")
document.getElementById("order-action").onclick=function (){
    let heserror=false;
    [burger,name,phone].forEach(item =>{
     if (!item.value){
         item.parentElement.style.background="red";
         heserror=true
     } else {
         item.parentElement.style.background=""
     }

     if (!heserror){
         [burger,name,phone].forEach(item=>{
             item.value=""
         })
         alert("спасибо за заказ!Мы скоро свяжемся с вами!")
     }
    });
}
let pricees=document.getElementsByClassName("products-price");
document.getElementById("chenge-currency").onclick=function (e){
    let currentCurrency=e.target.innerText
    let newCuurency="$"
    let coeffcient= 1
    if (currentCurrency === "$"){
        newCuurency = "₽";
        coeffcient=80
    }else if(currentCurrency === "₽"){
        newCuurency = "BYN";
        coeffcient=4
    }else if(currentCurrency === "BYN"){
        newCuurency = "֏";
        coeffcient=4.8
    }else if(currentCurrency === "֏"){
        newCuurency = "€";
        coeffcient=1.06
    }else if(currentCurrency === "€"){
        newCuurency = "¥";
        coeffcient= 0.14
    }
    e.target.innerText = newCuurency
    for (let i=0;i < pricees.length; i++){
        pricees[i].innerText = +(pricees[i].getAttribute("data-base-price") *  coeffcient).toFixed(1) + " " + newCuurency;

    }
}