"use strict";

async function fetchObject(url, payload) { //this returns a javascript object
    const method = "GET" //Some service will want a POST 
    const headers = { 'Access-Control-Allow-Headers': "*", 'Access-Control-Allow-Methods': 'OPTIONS,POST,GET' }
    const response = await fetch(url, { method: method, body: JSON.stringify(payload), headers: headers })
    //const response = await fetch(url, {method:method,headers:{'Accept':'text/html','Content-Type':'application/json'}})
    if (response.ok) {
        return await response.json()
    }
    else {
        console.log(`unexpected response status ${response.status} + ${response.statusText}`)
    }
}


async function coinmap(){
    let users = await fetchObject("https://randomuser.me/api/")

    let location=document.createElement("h1")
    location.innerText=users.results[0].name.first
    document.body.appendChild(location)

    let version=document.createElement("h2")
    version.innerText=users.title
    document.body.appendChild(version)

}

coinmap()