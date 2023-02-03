import React from 'react'

const MainPage = () => {
  const submitButtonClicked = () => {
    const outputContainer = document.querySelector('#output-container')
    let vibe = document.querySelector('#vibe').value
    const topic = document.querySelector('#topic-input').value
    if (topic === '') {
      return outputContainer.innerHTML = '<p>Please enter a topic</p>'
    }
    outputContainer.innerHTML = 'loading...'
    if (vibe === 'random') {
      const r = Math.floor(Math.random() * 4)
      vibe = ['happy', 'sad', 'romantic', 'angry'][r]
    }
    fetch(`/api?vibes=${vibe}&topic=${topic}`).then((res) => {
      res.json().then((data) => {
        const lines = data.response.split('\n')
        let outputString = `<div><p>here's some ${vibe} lyrics about ${topic}:</p><br>`
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
  }

  return (
    <div>
      <div>
        <h3 className="title">ai lyric generator</h3>
        <div id="container">
          <div id="left-column">
            <div id="input-container">
              <div id="form">
                <div id="vibe-div">
                  <label htmlFor="vibe">vibe</label>
                  <select name="vibe" id="vibe">
                    <option value="happy">happy</option>
                    <option value="sad">sad</option>
                    <option value="romantic">romantic</option>
                    <option value="angry">angry</option>
                    <option value="random">*random*</option>"
                  </select>
                </div>
                <div id="topic-div">
                  <label htmlFor="topic">topic</label>
                  <input type="text" id="topic-input" name="topic" />
                </div>
                <button id="submit-button" onClick={submitButtonClicked}>submit</button>
              </div>  
            </div>
          </div>
          <div id="right-column">
        <div id="output-container">
      </div>
      </div>
        </div>
        <div id="footer">
          <a href="https://www.flaticon.com/free-icons/mic" title="mic icons">Mic icons created by Freepik - Flaticon</a>
        </div>
      </div>
    </div>
  )
}

export default MainPage