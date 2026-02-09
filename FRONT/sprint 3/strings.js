const company = "TITAN"

console.log (company.charAt(2)) // Retorna o caractere na posição 2
console.log (company.charCodeAt(0)) // Retorna o código do caractere na posição 0
console.log (company.indexOf("A")) // Retorna a posição do caractere "A"
console.log (company.substring(0,4)) // Retorna os caracteres da posição 0 até a posição 4
console.log (company.replace("TITAN", "TITANTITANTITAN")) // Substitui "TITAN" por "TITANTITANTITAN"
console.log (company.concat(" é uma empresa de tecnologia")) // Concatena as duas strings

//Converter string com virgulas em array
const frase = "TITAN, empresa, de, tecnologia"
const arr = frase.split(", ")
console.log(arr) // Retorna um array com as palavras separadas por vírgula
