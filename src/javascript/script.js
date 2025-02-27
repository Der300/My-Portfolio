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


// Fetch data from json file
// let infoUser = [];
// fetch('resources/data/information.json')
//     .then(res => res.json())
//     .then(data => {
//         infoUser = data;
//         console.log(infoUser);
//     });

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
    images[n - 1].style.display = 'block';
    images[n - 1].style.animation = 'FadeIn 0.5s ease-in-out forwards';
}

document.querySelectorAll('.change-img').forEach(item =>
    item.addEventListener('click', function (e) {
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

// move label input
document.querySelectorAll(".c-form-input").forEach(input => {
    input.addEventListener("focus", function () {
        this.previousElementSibling.classList.add("c-form-active");
    });
    input.addEventListener("blur", function () {
        if (!this.value) {
            this.previousElementSibling.classList.remove("c-form-active");
        }
    });
});

// send email to me
document.querySelector('.c-form-btn-send').addEventListener('click', function (e) {
    let dataForm = [];
    document.querySelectorAll('.c-form-input').forEach(((data, index) => {
        dataForm[index] = data.value;

    }));
    // open email client
    // window.location.href = `mailto:tranvanvuluantp@gmail.com?
    // subject=${encodeURIComponent(dataForm[2])}
    // &body=${encodeURIComponent(`Name: ${dataForm[0]}%0AEmail: ${dataForm[1]}%0A%0A${dataForm[3]}`
    // )}`;
    alert(`Sorry ${dataForm[0]}. This function hasn\'t complete. It will be completed in the near future`);
});