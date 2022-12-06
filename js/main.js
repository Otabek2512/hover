// let h1 = document.createElement('h1')
// h1.textContent = 'hello world'
// h1.className = 'title'
// h1.style.color = 'red'

// window.addEventListener('mousemove', function(event) {
//     const x = event.clientX
//     const y = event.clientY
//     h1.style.position = 'absolute'
//     // h1.style.transition = '250ms'
//     h1.style.top = y + 'px'
//     h1.style.left = x + 'px'
// })

// document.body.append(h1)





let createCirle = (event) =>{
    const div = document.createElement('div')
    div.style.width = '50px'
    div.style.height = '50px'
    div.style.background = 'black'
    div.style.borderRadius = '50%'
    div.style.position = 'absolute'
    div.style.top = event.clientY + 'px'
    div.style.left = event.clientX + 'px'
    div.style.transform = 'translate(-50%, -50%)'
    return div
}

window.addEventListener('click', (event) =>{
    document.body.append(createCirle(event))
})