 const qoute = document.querySelector(".qoute")
 const person = document.querySelector(".person")

 const btn = document.querySelector("#new-quote")

const body = document.querySelector("body")

 const qoutes = [
    { q: "It is hard to fail but it is worse never to have tried to succeed.",
       by:"Theodore Roosevelt"
    },
    {
        q:"“That which does not kill us makes us stronger.”",
        by:"Friedrich Nietzsche"
    },
    {
        q:"“I have not failed. I’ve just found 10,000 ways that wont work.”",
        by:"Thomas A. Edison"
    },
    {
        q:"“Be miserable. Or motivate yourself. Whatever has to be done, it’s always your choice.”",
        by:"Wayne Dyer"
    }
 ]

const imgUrl = ["images\pexels-ivo-rainha-1290141.jpg"]

 btn.addEventListener("click",function(){
    let randomNumber = Math.floor(Math.random()*qoutes.length)
    
    qoute.textContent = qoutes[randomNumber].q
    person.textContent = qoutes[randomNumber].by

    let randomImg = Math.floor(Math.random()*6)+1

    console.log(randomImg);

     body.style.background = "url(images/img"+randomImg+".jpg)"

 })