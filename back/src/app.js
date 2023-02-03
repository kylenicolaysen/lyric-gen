const express = require('express')
const cors = require('cors')
require('dotenv').config()
const { Configuration, OpenAIApi } = require('openai')
const router = new express.Router()
const app = express()

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
})
const openai = new OpenAIApi(configuration)


app.use(cors({
    origin: 'http://localhost:8080'
}))

app.use(express.json())

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

module.exports = app