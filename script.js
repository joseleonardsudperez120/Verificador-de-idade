function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var Fano = document.getElementById('txtano')
    var res= document.getElementById('res')
    if (Fano.value.length == 0 ||Number(Fano.value) > ano) {
        window.alert('verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade= ano - Number(Fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homen' 
            if (idade >=0 && idade < 10){
            img.setAttribute('src', 'bebe.png')
            } else if (idade < 22) {
                img.setAttribute('src', 'jovem.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'aduto.png')
            } else {
                img.setAttribute('src', 'velho.png') 
            }
    }
            else if (fsex[1].checked){
                genero ='Mulher'
                if (idade >=0 && idade < 10){
                    img.setAttribute('src', 'beba.png')
                    } else if (idade < 22) {
                        img.setAttribute('src', 'moça.png')
                    } else if (idade < 50) {
                        img.setAttribute('src', 'aduta.png')
                    } else {
                        img.setAttribute('src', 'velha.png')
                    }
            }
            img.style.height='300px'
            res.style.textAlign='center'
            res.innerHTML= `Detetamos que o genero é ${genero} e tem ${idade} anos`
            res.appendChild(img)
        }
}
