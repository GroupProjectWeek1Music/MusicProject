function cekToken(){
    alert("welcome to Musicalyrics")

    if(localStorage.getItem("fbToken") || localStorage.getItem("regToken")  ){
        alert("lanjutt !")
    }else{
        alert("gw kick yahh !")
        window.location.replace("/index.html")
    }
}