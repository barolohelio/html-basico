// getElementById()

const element = document.getElementById('blog-title')
console.log(element)

// getElementByClassName()
const elementClass = document.getElementsByClassName('blog-phrase')
console.log(elementClass)

// getElementByTagName()
const elementByTagName = document.getElementsByTagName('h1')
console.log(elementByTagName)

// querySelector()
// Dessa forma ele pega o primeiro que encontrar com seletor 
const elementQuerySelector = document.querySelector('.post')
console.log(elementQuerySelector)

//querySelectorAll()
// Pega todos os elementos que tiverem o seletor especificado
const elementQuerySelectorAll = document.querySelectorAll('.post')

//Qual usar 

// getElementById() (element)
//getElementByClassName() (HTMLCollection)
//getElementByTagName() (HTMLCollection)
//querySelector()  (element)
//querySelectorAll() (Nodelist - podemos percorrer forEach element)