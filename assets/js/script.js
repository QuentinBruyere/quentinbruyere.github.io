addEventListener('DOMContentLoaded', (event) => {


    ////////// VARIABLES
    //////
    ///
    let tiltButton = document.querySelector(".tiltButton");
    let tiltCheckbox = document.querySelector(".tiltCheckbox");
    let profilSection = document.querySelector(".profile-section");
    let profilCard = document.querySelector(".profile-card");
    let topCard = document.querySelector(".top-card");
    let languages = document.querySelector(".languages");
    let social = document.querySelector(".social");

    var isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);


    ////////// INITIALISATION
    //////
    ///
    init();


    ////////// EVENT-LISTENERS
    //////
    ///
    window.addEventListener("resize", scalling);
    tiltCheckbox.addEventListener("click", tiltSwitch);

    
    ////////// FUNCTIONS
    //////
    ///
    function init() {
        isMobile();
        scalling();
        tiltSwitch();
        iosInit();
    }

    function isMobile(){
        // Smaller device means smaller perspective
        if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
            // true for mobile device
            profilCard.setAttribute("data-tilt-perspective", "200");
            tiltButton.style.setProperty("transform", "translateZ(12px)");
            topCard.style.setProperty("transform", "translateZ(7px)");
            languages.style.setProperty("transform", "translateZ(12px)");
            social.style.setProperty("transform", "translateZ(7px)");
        }
    }

    function scalling(){
        let profilCardHeight = profilCard.offsetHeight;
        let scale = window.innerHeight/(profilCardHeight + 100);

        profilSection.style.setProperty("transform", `scale(${scale})`);
    }

    function tiltSwitch(){
        if(tiltCheckbox.checked){
            profilCard.setAttribute("data-tilt-full-page-listening", "");
            VanillaTilt.init(profilCard, {
                max: 5,
                glare: true,
                "max-glare": .3,
            });
            
            if(isIOS){
                DeviceMotionEvent.requestPermission();
            }
        }
        if(!tiltCheckbox.checked){
            profilCard.vanillaTilt.destroy();
        }
    }

    function iosInit() {
        if(isIOS){
            tiltCheckbox.removeAttribute("checked");
        }
    }
});