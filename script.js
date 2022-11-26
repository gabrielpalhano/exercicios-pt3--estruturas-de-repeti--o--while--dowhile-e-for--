function clicou() {
    var inid = document.getElementById('txtinicio')
    var fimd = document.getElementById('txtfim')
    var passod = document.getElementById('txtpasso')
    var res = document.querySelector('div#res')

        if (inid.value.length == 0 || fimd.value.length == 0) {
            window.alert('[ERRO] Verifique os dados e tente novamente!')
        } else if (passod.value.lenght == 0) {
            window.alert('O campo PASSO não foi preenchido, portanto será realizada a contagem normal de: 1 por vez!');
            res.innerHTML = 'Contando'
            var i = Number(inid.value);
            var f = Number(fimd.value);
            var p = Number(passod.value);
                for(let c = i; c <= f; c++) {
                    res.innerHTML = `${c}`
                }
        }
  


        
}