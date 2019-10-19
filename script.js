/*------Hamburger------*/
const hamburger = document.getElementById('nav-icon3');
hamburger.addEventListener('click', function () {
    console.log("Test");
    this.classList.toggle('open');
})
/*---------------------*/

/*-------Gallery-------*/
const img = document.querySelectorAll('.item');
const width = screen.width;
if(width < 768){
    for (let i = 3; i < img.length; i++) {
        img[i].style.display = "none";
    }
    for (let i = 0; i < 3; i++) {
        img[i].style.display = "flex";
    }
}
else {
    for (let i = 8; i < img.length; i++) {
        img[i].style.display = "none";
    }
    for (let i = 0; i < 8; i++) {
        img[i].style.display = "flex";
    }
}


function filter(category) {
    const images = document.querySelectorAll('.item');
    const more = document.querySelector('.more');
    more.style.display = "inline-block";

    if(category === 'all'){
        for (let i = 8; i < images.length; i++) {
            images[i].style.display = "none";
        }
        for (let i = 0; i < 8; i++) {
            images[i].style.display = "flex";
        }
    }
    else {
        more.style.display = 'none';
        for(let j = 0; j < images.length; j++){
            if(images[j].classList.contains(category)){
                images[j].style.display = 'flex';
            }
            else images[j].style.display = 'none';
        }
    }

    const buttons = document.getElementsByClassName("click");
    const active = document.getElementsByClassName("active");
    active[0].classList.remove('active')
    buttons[category].classList.add("active");
}
/*---------------------*/

/*---Show more button---*/
function showMore() {
    const images = document.getElementsByClassName("item");
    for(let i = 0; i < images.length; i++){
        images[i].style.display = "flex";
    }

    const more = document.querySelector('.more');
    more.style.display = "none";
}

/*----------------------*/
