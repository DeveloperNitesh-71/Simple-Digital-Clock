const hours = document.querySelector(".hrs")
const minutes = document.querySelector(".mins")
const seconds = document.querySelector(".secs")


window.addEventListener("DOMContentLoaded", () =>{
    setInterval(starttime, 1000)
})

function starttime () {
    let date = new Date()

    let hrs = date.getHours()
    let mins = date.getMinutes()
    let secs = date.getSeconds()
    if(hrs<10) {
        hours.textContent = `0${hrs}:`
    }else{
        hours.textContent = `${hrs}:`
    }
    if(mins<10) {
        minutes.textContent = `0${mins}:`
    }else{
        minutes.textContent = `${mins}:`
    }
    if(secs<10) {
        seconds.textContent = `0${secs}`
    }else{
        seconds.textContent = `${secs}`
    }
    
}