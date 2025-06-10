// Thay đổi nội dung búc thư ở đây
var letterContent =" helo lại là anh đây anh có đôi lời muốn gửi đến tình iu của anhh❤️. Cảm ơn em đã đến bên anh những lúc anh buồn bả hay thất vọng về bản thân nhất cảm ơn em vì luôn quan tâm lo lắng cho anh Em làm cho anh luôn cảm thấy đặc biệt  Anh chẳng biết nói gì ngoài lời cảm ơn em, nhân dịp này tròn 1 tháng ngày mình yêu nhau thì anh cũng mong muốn em người con gái anh yêu luôn vui vẻ và luôn có được những thứ mình mong muốn, anh rất yêu em💕"

// Tốc độ viết chữ. Số càng nhỏ tốc độ càng nhanh. 50 là tốc độ khá phù hợp
durationWrite = 50 

// Hiệu ứng gõ chữ

function effectWrite () {
    var boxLetter = document.querySelector(".letterContent")
    letterContentSplited = letterContent.split("")
    
    letterContentSplited.forEach((val, index) => {
        setTimeout(() => {
            boxLetter.innerHTML += val    
        }, durationWrite* index)
    })
}

window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".container").classList.add("active")
    }, 500)
})

var openBtn = document.querySelector(".openBtn")
openBtn.addEventListener("click", () => {
    document.querySelector(".cardValentine").classList.add("active")
    document.querySelector(".container").classList.add("close")
})

var cardValentine = document.querySelector(".cardValentine")

cardValentine.addEventListener("click", () => {
    cardValentine.classList.toggle("open")

    if(cardValentine.className.indexOf("open") != -1) {
        setTimeout(effectWrite, 500)
    } else {
        setTimeout(() => {
            document.querySelector(".letterContent").innerHTML = ""
        }, 1000)
    }
})
