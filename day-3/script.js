const form = document.querySelector('form')
const result = document.querySelector('#result')

form.addEventListener('submit', (e) => {
    try {
        e.preventDefault()

        result.innerText = tribonacci(
            form.signature.value.split(',').map(x => parseInt(x)),
            form.number.value
        ).join(', ')

        form.reset()
    } catch (error) {
        result.innerText = 'Inputan tidak sesuai!'
    }
})

function tribonacci(signature, n) {
    let tribonacci = signature.map(x => x)
    let result = []

    if (signature.length >= 3) {
        while (tribonacci.length < n) {
            let arrLength = tribonacci.length
            tribonacci.push(tribonacci[arrLength - 3] + tribonacci[arrLength - 2] + tribonacci[arrLength - 1])
        }
        
        for (let i = 0; i < n; i++) {
            result.push(tribonacci[i])
        }
        
        return result
    } else {
        console.error('This is not Tribonacci Sequence.')
    }
}
