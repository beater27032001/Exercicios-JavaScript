function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if(fano.value.lenght == 0 || Number(fano.value) > ano){
        window.alert('[ERROR] Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'hbebe.png')
            }else if( idade < 21){
                //jovem
                img.setAttribute('src', 'hjovem.png')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', 'hadulto.png')
            }else{
                //idoso
                img.setAttribute('src', 'hidoso.png')
            }
        }else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'mbebe.png')
            }else if( idade < 21){
                //jovem
                img.setAttribute('src', 'mjovem.png')
            }else if(idade < 50){
                //adulta
                img.setAttribute('src', 'madulta.png')
            }else{
                //idosa
                img.setAttribute('src', 'midosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Dectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}