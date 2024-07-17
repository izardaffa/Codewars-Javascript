function narcissistic(value) {
    const numberString = value.toString()
    let calculatedNumber = 0

    for (let i = 0; i < numberString.length; i++) {
        calculatedNumber += (parseInt(numberString[i]) ** numberString.length)
    }

    console.log(value)
    console.log(calculatedNumber)
    console.log(value === calculatedNumber)

    return value === calculatedNumber
}

const form = document.querySelector('form')
const number = document.querySelector('#number')
const result = document.querySelector('#result')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    result.innerHTML = narcissistic(parseInt(form.number.value))
    form.reset()
})

number.innerHTML = form.number.value
