import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const Quote = () => {
    const [quote, setQuote] = useState('title');
    const [author, setAuthor] = useState('');
    
    useEffect(() => {
        getQuote()
    }, [])

    const getQuote = () => {
        let url = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';


        fetch(url)
            .then(res => res.json())
            .then(data => {
                let dataQuote = data.quotes;
                let random = Math.floor(Math.random() * dataQuote.length);
                let randomQuote = dataQuote[random];
                console.log(randomQuote)
                setQuote(randomQuote.quote)
                setAuthor(randomQuote.author)
            })
    }

    const handleClick = () => {
        getQuote();
    }
    
    const voiceClick = (e) => {
        const text = `${quote} by ${author}`
        const value = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(value);
        e.preventDefault();
    }

    return (
        <div id="quote-box">
            <div id="text">
                <p id="quote">"{quote}"</p>
            </div>
            <div id="author">
                <p>- {author}</p>
            </div>

            <div id="button">
                <div className="social-media">
                    <a onClick={voiceClick} href="" id="sound" className='mx-5'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-volume-up" viewBox="0 0 16 16">
                        <path d="M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z"/>
                        <path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z"/>
                        <path d="M10.025 8a4.486 4.486 0 0 1-1.318 3.182L8 10.475A3.489 3.489 0 0 0 9.025 8c0-.966-.392-1.841-1.025-2.475l.707-.707A4.486 4.486 0 0 1 10.025 8zM7 4a.5.5 0 0 0-.812-.39L3.825 5.5H1.5A.5.5 0 0 0 1 6v4a.5.5 0 0 0 .5.5h2.325l2.363 1.89A.5.5 0 0 0 7 12V4zM4.312 6.39 6 5.04v5.92L4.312 9.61A.5.5 0 0 0 4 9.5H2v-3h2a.5.5 0 0 0 .312-.11z"/>
                    </svg>
                    </a>
                    <a href="" id="tweet-quote" className='mx-5'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                    </svg>
                    </a>
                    <a href="" id="facebook-quote" className='mx-5'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                        </svg>
                    </a>
                </div>
                <button onClick={handleClick} id="new-quote">
                    New Quote
                </button>
            </div>
        </div>
    )
}

export default Quote
