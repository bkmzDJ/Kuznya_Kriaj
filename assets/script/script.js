document.getElementById("car0").style.opacity = 1
let carouser;
let interval;
let arr = 0;
function nextImg() {
    carouser = setInterval(() => {
        document.getElementById("car"+arr).style.opacity = 0
        arr = (arr + 1) % 5
        document.getElementById('btn'+arr).checked = true
        document.getElementById("car"+arr).style.opacity = 1
    }, 3000);
}
function obr(par){
    clearInterval(carouser)
    clearTimeout(interval)
    document.getElementById("car"+arr).style.opacity = 0
    document.getElementById("car"+par).style.opacity = 1
    arr = par
    interval = setTimeout(() => {
        nextImg()
    }, 5000);
}
nextImg()
document.getElementById('btn0').addEventListener('click', ()=>obr(0))
document.getElementById('btn1').addEventListener('click', ()=>obr(1))
document.getElementById('btn2').addEventListener('click', ()=>obr(2))
document.getElementById('btn3').addEventListener('click', ()=>obr(3))
document.getElementById('btn4').addEventListener('click', ()=>obr(4))
let openmenu = false
let menu = document.getElementById('menu-op-cl').addEventListener('click', () => {
    if(!openmenu){
        openmenu = true
        let log = document.getElementsByTagName('nav')[0]
        log.style.top = "7.9vh"
    } else {
        openmenu = false
        let log = document.getElementsByTagName('nav')[0]
        log.style.top = "-20vh"
    }
    
})