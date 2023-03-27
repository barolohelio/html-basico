// Alterando estilos
const element = document.querySelector('body')

element.style.backgroundColor = "#f9f3d2"
console.log(element.style.backgroundColor)

// Alterando estilos
// Class list
element.classList.add('active', 'green')
console.log(element.classList)
element.classList.remove('active')
element.classList.toggle('active')

// Como o style inline é mais forte que o style importado, o fundo continua 
// com cor de gelo. 