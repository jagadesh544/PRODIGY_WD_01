let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');

}
window.onscroll = () =>{
menu.classList.remove('fa-times');
navbar.classList.remove('active');

}

let cart =[];
let totalprice=0;

function ORDERNOW(name,price){
    cart.push({name,pricr});
    totalprice+=price;
    renderCart();

}
function renderCart()
{
    const cartitem=document.getElementById('cart-itmes');
    cartitem.innerHTML='';
    cart.forEach(item=>{const li=document.createElement('li');
      li.textcontent='${item.name} -$${item.price.tofixed(2)}';
      cartitem.appendChild(li);
    });
    document.getElementById('total-price').textContent='Total: $${totalprice.toFixed(2)}';
}
 var swiper =new Swiper(".review-slider", {
        spaceBetween:20,
        centeredSlides:true,
        autoplay:{
            delay:7500,
            disableOnInteraction:false,   
        },
        loop:true,
        breakpoints:{
            0:{
                slidePreview:1,
            },
            640:{
                slidePreview:2,
            },
            769: {slidePreview:3,
            },
            1024:{
                slidePreview:4,
            },
        }

 });
