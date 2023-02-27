import { useEffect } from "react"
import apiKey from './test.config.js'

const App = () => {

  const getQuoteData = async () => {
    const response = await fetch('https://api.api-ninjas.com/v1/quotes?category=hope',
    {
      mode:'cors',
      headers:{'X-Api-Key': apiKey}
    }
      )
    const [quoteData] = await response.json()
    let quoteText = document.getElementById('text')
    let quoteAuthor = document.getElementById('author')
    quoteText.textContent = quoteData.quote
    quoteAuthor.textContent = quoteData.author
   }
  
  useEffect(() => {
    document.getElementById('new-quote').addEventListener('click',getQuoteData)
    getQuoteData()
  },[])
  
  return (
    <main id='quote-box'>
      <section class='info-container'>
        <div>
          <p id='text'></p>
        </div>
        <div class='author-container'>
          <p id='author'></p>
        </div>
      </section>
      
      <section class='quote-buttons'>
        <button>
          <a href='twitter.com/intent/tweet' id='tweet-quote'>Tweet</a>
        </button>
        <button id='new-quote'>
            New Quote
        </button>
      </section>
    </main>
  )
}


export default App
