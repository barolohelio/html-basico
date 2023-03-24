//  Manipulando conteúdo
// textContent

const element = document.querySelector('h1')
element.textContent += " Quebrada linda."
console.log(element.textContent)

// Manipulando conteúdo
// innerText
// Substitui o texto
const elementInnerText = document.querySelector('h1')
element.innerText = "Olá Devs!!"


// Manipulando conteúdo
// innerHTML
const elementInnerHTML = "Olá Devs! <small>!!!</small>"

// Manipulando conteúdo
// value
const elementInput = document.querySelector('input')
// Popular Input
// elementInput.value = "Valor que eu quiser"

// Para ver o valor do value
console.log(elementInput.value)

// Manipulando elementos
// Atributos

const header = document.querySelector('header')
header.setAttribute('id', 'header')

const headerId = document.querySelector('#header')

console.log(headerId)
console.log(headerId.getAttribute('class'))

//Removendo um atributo
header.removeAttribute('id')
console.log(headerId)

