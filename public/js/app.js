const vibeSelector = document.querySelector('#vibe')
const topicInput = document.querySelector('#topic')
const submitButton = document.querySelector('#submit-button')
const outputContainer = document.querySelector('#output-container')
submitButton.addEventListener('click', () => {
    let vibes = vibeSelector.value
    const topic = topicInput.value
    outputContainer.innerHTML = 'loading...'
    if (vibes === 'random') {
        const r = Math.floor(Math.random() * 4)
        vibes = ['happy', 'sad', 'romantic', 'angry'][r]
    }
    fetch(`/api?vibes=${vibes}&topic=${topic}`).then((res) => {
        res.json().then((data) => {
            const lines = data.response.split('\n')
            let outputString = `<div><p>here's some ${vibes} lines about ${topic}:</p><br>`
            lines.forEach((line) => {
                if (line === '') {
                    return
                }
                outputString = `${outputString}<p>${line}</p>`
            })
            outputString = outputString + '</div>'
            outputContainer.innerHTML = outputString
        })
    })
    console.log('clicked')
})