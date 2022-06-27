"use strict";


async function fetchObject(url, payload) { //this returns a javascript object
    const method = "GET" //Some service will want a POST 
    const headers = { 'Accept': 'text/html', 'Content-Type': 'application/json' }
    const response = await fetch(url, { method: method, body: JSON.stringify(payload), headers: headers })
    //const response = await fetch(url, {method:method,headers:{'Accept':'text/html','Content-Type':'application/json'}})
    if (response.ok) {
        return await response.json()
    }
    else {
        console.log(`unexpected response status ${response.status} + ${response.statusText}`)
    }
}


async function getJoke(){

    let joke = await fetchObject("https://v2.jokeapi.dev/joke/Any")
         
    let question=document.createElement("h1")
    question.innerText=joke.setup
    document.body.appendChild(question)

    let punchline=document.createElement("h2")
    punchline.innerText=joke.delivery
    document.body.appendChild(punchline)

}

getJoke()