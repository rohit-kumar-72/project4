const input = document.getElementById("input")
const qrform = document.getElementById("qrform")
const image = document.getElementById("image")
const button = document.getElementById("button")
const qrclass = document.getElementById("qrclass")
const url = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="

const qrimagerender = (url) => {
    if (!url) return;
    button.innerHTML = "Generating QR Code..."
    image.src = url
    qrclass.classList.add("show")
    image.addEventListener("load", () => {
        button.innerHTML = "Generated QR Code"
    })
}
qrform.addEventListener("submit", (event) => {
    event.preventDefault();
    const text = input.value;
    // console.log(text)
    const qrcodeurl = url + text
    qrimagerender(qrcodeurl)
})
input.addEventListener("keyup", () => {
    if (!input.value.trim())
        qrclass.classList.remove("show")
})