"use strict"

/* helpers */
const getId = (id) => document.getElementById(id)

/* html-element */
const btnContact = getId('btnContact')

/* contact-form */
btnContact.addEventListener('click', (e) => {
    e.preventDefault()
})