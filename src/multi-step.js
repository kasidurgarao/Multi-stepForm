const nextbutton = document.getElementById('next-step')
const prevbutton = document.getElementById('go-back')
const changeheader = document.querySelector('.header-change h1')
console.log(changeheader.textContent)
const changesubheader = document.querySelector('.header-change p')

let header = ['Personal info','Select your plan','Pick add-ons','Finishing up','Thank you!'];

let subheader = ['Please provide your name, email address, and phone number.',
                'You have the option of monthly or yearly billing.',
                'Add-ons help enhance your gaming experience.','Double-check everything looks OK before confirming.',
                'Thank you! Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.'];



let counter = 1

nextbutton.addEventListener('click',()=>{
    if(counter===1 && pageonevalidation(counter)){
        movetonextpage()
        counter++
    }
})


function pageonevalidation(count) {
    const nameField = document.getElementById('name');
    const emailField = document.getElementById('email');
    const phoneField = document.getElementById('phone');

    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const phoneError = document.getElementById('phone-error');

    // Regex for email and phone validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?[0-9]{10,15}$/;

    let isValid = true;

    if (!nameField.value.trim()) {
        nameError.classList.remove('hidden');
        nameField.classList.add('border-red-500');
        isValid = false;
    } else {
        nameError.classList.add('hidden');
        nameField.classList.remove('border-red-500');
    }

    if (!emailField.value.trim() || !emailRegex.test(emailField.value.trim())) {
        emailError.classList.remove('hidden');
        emailField.classList.add('border-red-500');
        isValid = false;
    } else {
        emailError.classList.add('hidden');
        emailField.classList.remove('border-red-500');
    }

    if (!phoneField.value.trim() || !phoneRegex.test(phoneField.value.trim())) {
        phoneError.classList.remove('hidden');
        phoneField.classList.add('border-red-500');
        isValid = false;
    } else {
        phoneError.classList.add('hidden');
        phoneField.classList.remove('border-red-500');
    }
    return isValid;
};

function movetonextpage(){
        const currentPage = document.querySelector(`.page${counter}`); 
        const nextPage = document.querySelector(`.page${counter + 1}`); 
        if (currentPage) {
            currentPage.classList.add('hidden'); 
        }
        if (nextPage) {
            nextPage.classList.remove('hidden'); 
        }
        prevbutton.classList.remove('invisible')
        changeheader.innerHTML = header[counter]
        changesubheader.innerHTML = subheader[counter]
      
    }
function movetoprevpage(){
        const currentPage = document.querySelector(`.page${counter}`); 
        const prevPage = document.querySelector(`.page${counter - 1}`); 
        if (currentPage) {
            currentPage.classList.add('hidden'); 
        }
        if (prevPage) {
            prevPage.classList.remove('hidden'); 
        }
        prevbutton.classList.add('invisible')
        changeheader.innerHTML = header[counter-2]
        changesubheader.innerHTML = subheader[counter-2];
}
prevbutton.addEventListener('click',()=>{
    if(counter>1){
        movetoprevpage()
        counter--
    }
})


let togglebutton = document.getElementById('togglebutton');
let priceElements = document.querySelectorAll('.price');
let freeMonthElements = document.querySelectorAll('.free-month'); 

console.log(freeMonthElements);

togglebutton.addEventListener('change', () => {
    priceElements.forEach((element, index) => {
        // let yearPrice = element.getAttribute('data-yearly');
        // console.log(yearPrice);
        
        if (togglebutton.checked) {  
            element.textContent = `$${element.getAttribute('data-yearly')}/yr`;  
            if (freeMonthElements[index]) {
                freeMonthElements[index].textContent = '2 months free';  
            }
        } else {
            element.textContent = `$${element.getAttribute('data-monthly')}/mo`; 
            if (freeMonthElements[index]) {
                freeMonthElements[index].textContent = '';  
            }
        }
    });
});

