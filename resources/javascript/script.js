// show icon navbar
let navbarItems = document.querySelectorAll('.h-navbar-item');
navbarItems.forEach(item => {
    item.addEventListener('click', function () {
        navbarItems.forEach(i => i.classList.remove('active'));
        this.classList.toggle('active');

        // add caption in header and hide navbar-list
        document.getElementById('h-nav-caption').innerText = this.innerText;
    });
});

// show hide navbar side left
let navbarList = document.getElementsByClassName('h-navbar-list')[0];
document.getElementById('h-nav-caption').addEventListener('click', () => {
    navbarList.classList.toggle('show-h-navbar-list');
    // document.body.classList.toggle('overlay');
});

//close nav side left when click on screen
window.onclick = function (event) {
    if (!event.target.matches('#h-nav-caption') && !navbarList.contains(event.target)) {
        navbarList.classList.remove('show-h-navbar-list');
        // document.body.classList.remove('overlay');
    }
};


// ------------------
// portfolio
let projects = document.querySelectorAll('.p-portfolio-item');
projects.forEach(project => {
    project.addEventListener('click', function () {
        this.classList.toggle('rotated');
        if (this.firstElementChild.classList.contains('p-active')) {
            this.firstElementChild.classList.remove('p-active');
            this.lastElementChild.classList.add('p-active');
        } else {
            this.firstElementChild.classList.add('p-active');
            this.lastElementChild.classList.remove('p-active');
        }
    });
})

//  prevent events from overflowing through the parent
document.querySelectorAll('.p-portfolio-footer-link').forEach(link => 
    link.addEventListener('click', function (e) {
    e.stopPropagation();
}));

// slide
let imgCurrentIndex = 1;
function changeImage(n, images) {
    images.forEach(image => {
        image.style.display = 'none';
    })
    images[n-1].style.display = 'block';
    images[n-1].style.animation = 'FadeIn 0.5s ease-in-out forwards';
}

document.querySelectorAll('.change-img').forEach(item =>
    item.addEventListener('click', function(e) {
        e.stopPropagation(); 
        // look for parent element
        prorfolioBack = e.target.closest('.p-portfolio-back');
        images = prorfolioBack.querySelectorAll('.p-slides');  
        if (e.target.classList.contains('next')) {
            if (imgCurrentIndex == images.length) imgCurrentIndex = 0;
            changeImage(++imgCurrentIndex, images);
        } else {
            if (imgCurrentIndex == 1) imgCurrentIndex = images.length + 1;
            changeImage(--imgCurrentIndex, images);
        }
        
    })
);