// show icon navbar
let navbarItems = document.querySelectorAll('.h-navbar-item');
navbarItems.forEach(item => {
    item.addEventListener('click', function() {
        navbarItems.forEach(i => i.classList.remove('active'));
        this.classList.toggle('active');
        
        // add caption in header and hide navbar-list
        document.getElementById('h-nav-caption').innerText =this.innerText;
        navbarList.classList.toggle('show-h-navbar-list');
    });
});

// show hide navbar side left
let navbarList = document.getElementsByClassName('h-navbar-list')[0];
document.getElementById('h-nav-caption').addEventListener('click', () => {
    navbarList.classList.toggle('show-h-navbar-list');
});

