function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.lengt == 0 || Number(fano.value) > ano) {
      window.alert(`[ERRO] Verifique os dados e tente novamente!`)
    } else {
      var fsex = document.getElementsByName("radsex")
      var idade = ano - Number(fano.value)
      //res.innerHTML = `Idade calculada: ${idade}`
      var gênero = ''
      var img = document.createElement("img")
      img.setAttribute('id', 'foto')
      if (fsex[0].checked) {
            gênero = 'Homem'

            if(idade >= 0 && idade < 5){
            //bebê
            img.setAttribute('src', 'bebem.png')

            }else if(idade > 5 && idade <= 17 ){
            //criança
            img.setAttribute('src', 'menino.png')

            }else if (idade > 18 && idade < 30){
            //jovem
            img.setAttribute('src', 'rapaz.png')

            }else if(idade > 30 && idade < 60){
            //homem
            img.setAttribute('src', 'homem.png')

            }else{
            //idoso
            img.setAttribute('src', 'velho.png')
            }
  
  
        }else if (fsex[1].checked) {
            gênero = 'Mulher'
    
            if(idade >= 0 && idade < 5){
            //bebê
            img.setAttribute('src', 'bebef.png')

            }else if(idade > 5 && idade <= 17){
            //criança
            img.setAttribute('src', 'menina.png')

            }else if(idade > 18 && idade <= 30){
            //jovem
            img.setAttribute('src', 'moca.png')

            }else if(idade > 30 && idade < 60){
            //mulher
            img.setAttribute('src', 'mulher.png')

            }else{
            //idosa
            img.setAttribute('src', 'velha.png')
        }
  
      }
      res.style.textAlign = 'center';
      res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
      res.appendChild(img)
    }
  }
  