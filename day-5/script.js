console.log(`printerError('aaabbyydooss')`)
console.log(`"${printerError('aaabbyydooss')}"`)

function printerError(s) {
    let err = 0

    for (let i = 0; i < s.length; i++) {
        if (s.charCodeAt(i) >= 97 && s.charCodeAt(i) <= 122) if (!(s.charCodeAt(i) >= 97 && s.charCodeAt(i) <= 109)) err++
    }

    return `${err}/${s.length}`
}
