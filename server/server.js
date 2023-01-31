const path = require('path')
const express = require('express')
const { Configuration, OpenAIApi } = require('openai')
require('dotenv').config()

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
})
const openai = new OpenAIApi(configuration)


const app = express()
const publicPath = path.join(__dirname, '..', 'public')
const port = process.env.PORT || 3000

app.use(express.static(publicPath))

app.get('/api', async (req, res) => {
  const prompt = `Write me a short eight line verse from a ${req.query.vibes} song about ${req.query.topic}`
  const response = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: prompt,
    temperature: 0,
    max_tokens: 500
  })
  const responseString = response.data.choices[0].text
  res.send({
    response: responseString
  })
})

app.get('/*', (req, res) => {
  res.send('<a href="/"> Go Home</a>')
})
app.listen(port, () => {
  console.log("Server is serving.")
})