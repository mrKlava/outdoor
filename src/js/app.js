"use strict"

/* helpers */
const getId = (id) => document.getElementById(id)

/* html-elements */
const btnBurger = getId('btnBurger')
const navBar = getId('nav')

/* nav-bar */
btnBurger.addEventListener('click', (e) => {
    e.preventDefault()

    btnBurger.classList.toggle('active')
    navBar.classList.toggle('active')
})