// NavBar Opening and Closing
const navBar = document.querySelector(".fa-bars-staggered")

const menu = document.querySelector(".menu")

const xMark = document.querySelector(".fa-rectangle-xmark")

navBar.addEventListener("click", function () {
    menu.classList.add("aktiv")
})

xMark.addEventListener("click", function () {
    menu.classList.remove("aktiv")
})


// Cards
// htmlde divin yerini teyin edir
// const DivOfProducts = document.querySelector(".cards")

// window.addEventListener("DOMContentLoaded", getProducts)

// async function getProducts() {
//     // sayta girib melumatlari getirmek ucun
//     const address = "https://fakestoreapi.com/products"

//     try {
//         // sayta girilib girilmediyinin cavabi
//         const answers = await fetch(address)

//         //    saytdan melumatlarin cekilmesi 
//         const products = await answers.json()

//         for (i = 0; i < products.length; i++) {
//             DivOfProducts.innerHTML += `   <div class="card border border-secondary col-lg-4 col-md-6 col-12   ">
//                     <a href="#">
//                         <img class="card-img-top rounded-top d-block mx-auto" src="./assets/images/cards/firstcard.svg" alt="" style="width: 220px;"/>
//                     </a>
//                     <div class="card-body">
//                         <a href="#">
//                             <h5 class="card-title mb-2 fw-bold text-start">Noteworthy technology acquisitions 2021</h5>
//                         </a>
//                         <p class="card-text mb-3" text-start>Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                       
                           
                          
//                         </a>
//                     </div>
//                 </div>
// `

//         }

//     }

//     catch {

//     }
// }



// Cards With Swiper
const swiper = new Swiper(".cardsSwiper", {
    
    breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 1,
        },
      },
  });


const cardsDiv = document.getElementById("kartlar")

window.addEventListener("DOMContentLoaded", getInformations)

  async function getInformations(){
    // sayta girir
    const address = "/assets/cards.json"
    try{

        // cavabin gelib gelmediyini gosterir
        const answers = await fetch(address)

        const totalcards = await answers.json()
        
        totalcards.forEach(function(kartlarinFunksiyasi) {
            cardsDiv.innerHTML += ` <div class="swiper-slide">
                <div class="card">
                    <img src="${kartlarinFunksiyasi.cards_image}" class="card-img-top" alt="...">
                    <div class="card-body">
                      
                      <p class="card-text">${kartlarinFunksiyasi.cards_article}</p>
                      <h5 class="card-title">${kartlarinFunksiyasi.person_names}</h5>
                    </div>
                  </div>
              </div>`
        });
        

    }

    catch(error){

    };
    
}

// Accordion code
new Accordion('.accordion-left');
new Accordion('.accordion-right')