let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

let count = 0

function increment(){
    count++;
    countEl.textContent = count

}

function Save(){
    let countstr = count + "-"
    saveEl.textContent += countstr
    countEl.textContent = 0
    count = 0
}