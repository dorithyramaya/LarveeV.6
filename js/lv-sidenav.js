const menuIconEl = $('.menu-icon');
const sidenavEl = $('.sidenav');
const sidenavCloseEl = $('.sidenav__close-icon');

// Add and remove provided class names
function toggleClassName(el, className) {
    if (el.hasClass(className)) {
        el.removeClass(className);
    } else {
        el.addClass(className);
    }
}

// Open the side nav on click
menuIconEl.on('click', function() {
    toggleClassName(sidenavEl, 'active');
});

// Close the side nav on click
sidenavCloseEl.on('click', function() {
    toggleClassName(sidenavEl, 'active');
});

//sidenav collapsed when clicked toggle
    const sidenavToggle = document.getElementById('sidenav-toggle');
    sidenavToggle.onclick = function () {
    const sidenav = document.getElementById('sidenav-left');
    sidenav.classList.toggle('opened');
    console.log("TOGGLE");
}

//GO-TO Search
    const words = [" Abandoned Checkouts","Abandoned Checkouts Settings","Add Blog Post","Add Bulk Voucher","Add Customer","Add EasyParcel Location","Add Featured Product","Add Footer","Add Form","Add Header","Add Navigation","Add Newsletter", "Add Page","Add Page Release","Add Product","Add Role","Add Running Number","Add Staff","Add Store Location"]
    const containerEl = document.querySelector('.goto-search')
    const formEl = document.querySelector('#search')
    const dropEl = document.querySelector('.drop')

    const formHandler = (e) => {
    const userInput = e.target.value.toLowerCase()

    if(userInput.length === 0) {
    dropEl.style.height = 0
    return dropEl.innerHTML = ''
}

    const filteredWords = words.filter(word => word.toLowerCase().includes(userInput)).sort().splice(0, 5)

    dropEl.innerHTML = ''
    filteredWords.forEach(item => {
    const listEl = document.createElement('li')
    listEl.textContent = item
    if(item === userInput) {
    listEl.classList.add('match')
}
    dropEl.appendChild(listEl)
})

    if(dropEl.children[0] === undefined) {
    return dropEl.style.height = 0
}

    let totalChildrenHeight = dropEl.children[0].offsetHeight * filteredWords.length
    dropEl.style.height = totalChildrenHeight + 'px'

}

    formEl.addEventListener('input', formHandler)
