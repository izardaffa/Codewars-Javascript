const form = document.querySelector('form')
const number = document.querySelector('#number')
const result = document.querySelector('#result')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    result.innerText = narcissistic(parseInt(form.number.value))
    form.reset()
})

number.innerText = form.number.value

function narcissistic(value) {
    const numberString = value.toString()
    let total = 0

    for (let i = 0; i < numberString.length; i++) {
        total += (parseInt(numberString[i]) ** numberString.length)
    }

    return value === total
}
