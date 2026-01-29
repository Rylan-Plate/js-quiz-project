document.getElementById("q").style.display = "none"
document.getElementById("a1").style.display = "none"
document.getElementById("a2").style.display = "none"
document.getElementById("a3").style.display = "none"
document.getElementById("a4").style.display = "none"

document.getElementById("startBtn").addEventListener("click", () => {
    document.getElementById("q").style.display = ""
    document.getElementById("a1").style.display = ""
    document.getElementById("a2").style.display = ""
    document.getElementById("a3").style.display = ""
    document.getElementById("a4").style.display = ""
    document.getElementById("startBtn").style.display = "none"
})