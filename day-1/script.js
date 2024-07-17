function createPhoneNumber(numbers){
    return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`
}

const form = document.querySelector('form')
const result = document.querySelector('#result')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const number = form.number.value

    result.innerText = createPhoneNumber(number)
    form.reset()
})
