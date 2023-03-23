const url = require ('url')
const address = 'https://www.meusite.com.br/catalogo?produto=cadeira'
const parsedURL = new url.URL(address)

console.log(parsedURL.host)
console.log(parsedURL.pathname)
console.log(parsedURL.search)
console.log(parsedURL.searchParams)
console.log(parsedURL.searchParams.get('produtos'))