// Alterando estilos
const element = document.querySelector('body')

// element.style.backgroundColor = "#f9f3d2"
// console.log(element.style.backgroundColor)

// Alterando estilos
// Class list
element.classList.add('active', 'green')
// console.log(element.classList)
// element.classList.remove('active')
element.classList.toggle('active')

// Como o style inline é mais forte que o style importado, o fundo continua 
// com cor de gelo. 

// Navegando nos elementos Pais
// parentNode parentElement 
const body = document.querySelector('body')

// Qual é o nó pai
console.log(body.parentNode)

// Navegando pelos elementos 
// childNodes children
const el = document.querySelector('body')


// NODE LIST
console.log(el.childNodes)

// HTML COLLECTION
console.log(el.children)

// Selecionando o primeiro filho
// firstChild() e firstElementChild()
console.log(el.firstChild)
console.log(el.firstElementChild)
// Selecionando o último filho
console.log(el.lastChild)
console.log(el.lastElementChild)

// Navegando pelos elementos 
// Navegando entre os irmãos 
const elBrothers = document.querySelector('header')
// nextSibling() e nextElementSibling()
console.log(elBrothers.nextSibling)

// previousSibling previousSibling
console.log(el.previousSibling)


