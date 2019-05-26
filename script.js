/*------Hamburger------*/
let hamburger = document.getElementById('nav-icon3');
hamburger.addEventListener('click', function () {
    console.log("Test");
    this.classList.toggle('open');
})
/*---------------------*/

/*-------Gallery-------*/
let images = document.querySelectorAll('.item');
document.getElementById('all').addEventListener("click", function () {
    for(let i=0; i<images.length; i++) {
        images[i].style.display = 'flex';
    }
})

document.getElementById('2d').addEventListener("click", function () {
for(let i=0; i<images.length; i++){
    if(images[i].classList.contains('2d')){
        images[i].style.display = 'flex';
    }
    else{
        images[i].style.display = 'none';
    }
}
})

document.getElementById('3d').addEventListener("click", function () {
    for(let i=0; i<images.length; i++){
        if(images[i].classList.contains('3d')){
            images[i].style.display = 'flex';
        }
        else{
            images[i].style.display = 'none';
        }
    }
})

document.getElementById('Frontend').addEventListener("click", function () {
    for(let i=0; i<images.length; i++){
        if(images[i].classList.contains('frontend')){
            images[i].style.display = 'flex';
        }
        else{
            images[i].style.display = 'none';
        }
    }
})
/*---------------------*/