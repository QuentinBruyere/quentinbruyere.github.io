// HOMEMADE TILT

// Sélectionner l'îcone

let icon = document.querySelector(".parallax");

// Quand la souris passe dessus, je veux avoir les coordonnées de la sourie

icon.addEventListener("mouseover", listenMouse);
icon.addEventListener("mouseout", iconDefault);

function listenMouse(e){

    // Selon sa position, je change le css de l'icone

    icon.addEventListener("mousemove", parallaxEffect);

    function parallaxEffect(e){
    
        // let clientX = e.clientX;
        // let clientY = e.clientY;

        // let iconLeft = icon.getBoundingClientRect()['left'];
        // let iconTop = icon.getBoundingClientRect()['top'];
        // let iconRight = icon.getBoundingClientRect()['right'];
        // let iconBottom = icon.getBoundingClientRect()['bottom'];

        // let originX = (iconRight - iconLeft) / 2;
        // let originY = (iconBottom - iconTop) / 2;

        // let diffX = clientX - iconLeft;
        // let diffY = clientY - iconTop;

        // let coefX = (diffX - originX) / 100000;
        // let coefY = (diffY - originY) / 100000;

        // icon.style.transform = `matrix3d(1,0,0.00,${coefX},0.00,1,0.00,${coefY},0,0,1,0,0,0,0,1) scale(1.2)`;



        let client = {
            x: e.clientX,
            y: e.clientY
        }

        let iconProps = {
            left: icon.getBoundingClientRect()['left'],
            top: icon.getBoundingClientRect()['top'],
            right: icon.getBoundingClientRect()['right'],
            bottom: icon.getBoundingClientRect()['bottom'],
            get originX() {return (this.right - this.left) / 2},
            get originY() {return (this.bottom - this.top) / 2}
        }

        let cursorPos = {
            diffX: client.x - iconProps.left,
            diffY: client.y - iconProps.top
        }

        let coefParallax = {
            X: (cursorPos.diffX - iconProps.originX) / 100000,
            Y: (cursorPos.diffY - iconProps.originY) / 100000
        }

        icon.style.transform = `matrix3d(1,0,0.00,${coefParallax.X},0.00,1,0.00,${coefParallax.Y},0,0,1,0,0,0,0,1)`;
        
    }
}

function iconDefault(e) {
    icon.style.transform = `matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,0,0,0,1) scale(1)`;
}
