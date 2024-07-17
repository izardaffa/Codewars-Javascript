function tribonacci(signature, n) {
    let tribonacci = signature.map(x => x)
    let result = []

    while (tribonacci.length < n) {
        let arrLength = tribonacci.length
        const nextNumber = tribonacci[arrLength - 3] + tribonacci[arrLength - 2] + tribonacci[arrLength - 1]
        tribonacci.push(nextNumber)
    }

    for (let i = 0; i < n; i++) {
        result.push(tribonacci[i])
    }

    return result
}

const form = document.querySelector('form')
const result = document.querySelector('#result')

form.addEventListener('submit', (e) => {
    try {
        e.preventDefault()

        const signature = form.signature.value.split(',').map(x => parseInt(x))
        const number = form.number.value

        result.innerText = tribonacci(signature, number).join(', ')
        form.reset()
    } catch (error) {
        result.innerText = 'Inputan tidak sesuai!'
    }
})
