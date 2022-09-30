
function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12){
        // bom dia
        img.src = 'manha.png'
        document.body.style.background = '#e4b492'
    } else if (hora >= 12 && hora <= 18){
        // boa tarde e78344
        img.src = 'tarde.png'
        document.body.style.background = '#e78344'
    }else {
        // boa noite
        img.src = 'noite.png'
        document.body.style.background = '#8d73ab'
    }
}


