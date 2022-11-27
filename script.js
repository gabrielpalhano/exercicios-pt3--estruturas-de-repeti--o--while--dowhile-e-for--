function clicou() {
    var inid = document.getElementById('txtinicio')
    var fimd = document.getElementById('txtfim')
    var passod = document.getElementById('txtpasso')
    var res = document.querySelector('div#res')

        if (inid.value.length == 0 || fimd.value.length == 0 || passod.value.length == 0) {
            res.innerHTML = 'Impossível contar!'
            window.alert('[ERRO] Verifique os dados e tente novamente!');
            
        } else {
            res.innerHTML = 'Contando:'
            var i = Number(inid.value);
            var f = Number(fimd.value);
            var p = Number(passod.value);

            if (p <= 0) {
                window.alert('Passo inválido! considerando passo igual a: 1.');
                p = 1;
            }

                if (i < f) {
                    for(let c = i; c <= f; c += p) {
                        res.innerHTML += ` ${c} \u{1F449}`
                    }
                } else {
                    for(let c = i; c >= f; c -= p) {
                        res.innerHTML += `${c} \u{1f449}`
                    } 
                }  res.innerHTML += `\u{1F3C1}`
        }      
}