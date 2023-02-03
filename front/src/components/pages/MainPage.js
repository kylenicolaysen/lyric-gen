import React from 'react'
import { Link } from 'react-router-dom'

export default () => {
  const submitButton = document.querySelector('#submit-button')
  console.log(submitButton)
  // submitButton.addEventListener('click', () => {
  //   console.log('skynet moved to nashville to write songs')
  // })
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
                  <input type="text" id="topic" name="topic" />
                </div>
                <button id="submit-button">submit</button>
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