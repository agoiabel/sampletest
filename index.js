const showMobileMenu = document.getElementById('showMobileMenu');
const hideMobileMenu = document.getElementById('hideMobileMenu');
const mobileMenu = document.getElementById('mobileMenu');



const toogleMobileMenu = event => {
    //check if mobile menu has hide
    if (mobileMenu.classList.contains("hide")) {
        mobileMenu.classList.remove("hide");
        mobileMenu.classList.add("show");
    } else {
        mobileMenu.classList.remove("show");
        mobileMenu.classList.add("hide");
    }
    //if it has hide, remove that hide
    //put show
}

// const toogleMobileMenu = event => {
    
    
//     console.dir(mobileMenu);

//     mobileMenu.classList.remove("hide");
//     mobileMenu.classList.add("show");
// }

// const hideMobileMenuHandler = event => {
//     mobileMenu.classList.remove("show");
//     mobileMenu.classList.add("hide");
// }


showMobileMenu.addEventListener('click', toogleMobileMenu);
hideMobileMenu.addEventListener('click', toogleMobileMenu);