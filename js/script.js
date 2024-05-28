// For Basic Package Price

const basicPricePerUnit = 199; // Price per unit
    const basicQuantityElement = document.getElementById('basicQuantity');
    const basicPriceElement = document.getElementById('basicPrice');
    const basicIncreaseButton = document.getElementById('basicIncrease');
    const basicDecreaseButton = document.getElementById('basicDecrease');

    basicIncreaseButton.addEventListener('click', () => {
        let basicQuantity = parseInt(basicQuantityElement.textContent);
        basicQuantity++;
        basicUpdatePrice(basicQuantity);
    });

    basicDecreaseButton.addEventListener('click', () => {
        let basicQuantity = parseInt(basicQuantityElement.textContent);
        if (basicQuantity > 1) {
            basicQuantity--;
            basicUpdatePrice(basicQuantity);
        }
    });

    function basicUpdatePrice(basicQuantity) {
        basicQuantityElement.textContent = basicQuantity + " Room";
        const basicTotalPrice = basicQuantity * basicPricePerUnit;
        basicPriceElement.textContent = `$ ${basicTotalPrice}`;
    }
// Basic Package Booking Mesage
    function basicThank(){
        document.querySelector('.basicThankmsg').innerHTML = "Thank you for choosing " + basicQuantityElement.textContent;     
        // console.log(proQuantityElement.textContent)
    }

// For Pro Package Price
const proPricePerUnit = 249; // Price per unit
    const proQuantityElement = document.getElementById('proQuantity');
    const proPriceElement = document.getElementById('proPrice');
    const proIncreaseButton = document.getElementById('proIncrease');
    const proDecreaseButton = document.getElementById('proDecrease');

    proIncreaseButton.addEventListener('click', () => {
        let proQuantity = parseInt(proQuantityElement.textContent);
        proQuantity++;
        proUpdatePrice(proQuantity);
    });

    proDecreaseButton.addEventListener('click', () => {
        let proQuantity = parseInt(proQuantityElement.textContent);
        if (proQuantity > 1) {
            proQuantity--;
            proUpdatePrice(proQuantity);
        }
    });

    function proUpdatePrice(proQuantity) {
        proQuantityElement.textContent = proQuantity + " Room";
        const proTotalPrice = proQuantity * proPricePerUnit;
        proPriceElement.textContent = `$ ${proTotalPrice}`;
    }
// Pro Package Booking Mesage
    function proThank(){
        document.querySelector('.proThankmsg').innerHTML = "Thank you for choosing " + proQuantityElement.textContent;  
        // console.log(proQuantityElement.textContent)
    }

// Contact form submit Mesage using submit HTML form validation
function formsubmit(event){
    event.preventDefault();
    document.querySelector('.submitmsg').innerHTML = "Thank you for your message";
}

// Contact submit Mesage using only javascritp validation
    // function submitmsg() {
    //     const form = document.querySelector('.contactForm');
        
    //     const isValid = form.checkValidity();
    
    //     if (isValid) {
    //       document.querySelector('.submitmsg').innerHTML = "Thank you for your message";
    //     } else {
    //         document.querySelector('.submitmsg').innerHTML = "Please fill out all fields according types";
    //     }
    //   }


    // function submitmsg(){
    //     if (document.querySelector('.contactForm').checkValidity()) 
    //         {
    //     document.querySelector('.submitmsg').innerHTML = "Thank you for Mesage ";
    //     }
      
    //     // console.log(proQuantityElement.textContent)
    // }



    // let initialProPrice = document.querySelector("p.ProPrice").innerHTML += " 249";

// //let initialSelectedRoom = document.querySelector("p.selectProRoom").innerHTML = "1 " + document.querySelector("p.selectProRoom").innerHTML;
// let initialSelectedRoom = document.querySelector("p.selectProRoom").insertAdjacentHTML('afterbegin', '1 ');



// console.log("initialProPrice");
// console.log("initialSelectedRoom");
