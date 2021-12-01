const button = document.getElementById("convert-button")
const select = document.getElementById("currency-select")

const dolar = 5.59 // Valor do dia 26/11/21
const euro = 6.33 // Valor do dia 26/11/21
const bitcoin = 303375.56 // Valor do dia 26/11/21


const convertValues = () => {
    const inputReais = document.getElementById("input-real").value
    const realValueText = document.getElementById("real-value-text")
    const currencyValueText = document.getElementById("currency-value")

    realValueText.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(inputReais)

    if (select.value === "US$ Dólar americano") {
        currencyValueText.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputReais / dolar)
    }

    if (select.value === "€ Euro") {
        currencyValueText.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputReais / euro)
    }

    if (select.value === "Ƀ Bitcoin") {

        currencyValueText.innerHTML = new Intl.NumberFormat("de-De", {
            style: "currency",
            currency: "BTC",
        }).format(inputReais / bitcoin)
    }

}

changeCurrency = () => {
    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.getElementById("currency-img")

    if (select.value === 'US$ Dólar americano') {
        currencyName.innerHTML = "Dólar americano"
        currencyImg.src = "../Aula 15 Projeto HTML/assets/Eua.svg"
    }

    if (select.value === '€ Euro') {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "../Aula 15 Projeto HTML/assets/Euro.svg"
    }

    if (select.value === 'Ƀ Bitcoin') {
        currencyName.innerHTML = "Bitcoin"
        currencyImg.src = "../Aula 15 Projeto HTML/assets/Bitcoin.svg"
    }
 
    convertValues()
}

function adicionarPeloEnter(teclas){

    if(teclas.key === "Enter"){
        convertValues()
    }
}

button.addEventListener("click", convertValues)
select.addEventListener("change", changeCurrency)

document.addEventListener("keypress", adicionarPeloEnter)