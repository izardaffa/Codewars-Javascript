const form = document.querySelector('form')
const result = document.querySelector('#result')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    result.innerText = order(form.words.value)
    form.reset()
})

function order(words) {
    return words.split(' ').sort((a, b) => {
        let itemA = a.match(/\d/)[0]
        let itemB = b.match(/\d/)[0]

        return itemA - itemB
    }).join(' ')
}
