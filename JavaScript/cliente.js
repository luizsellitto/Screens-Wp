var cpf = document.getElementById('cpf');

document.addEventListener('DOMContentLoaded',function(){
    mascaracpf();
});

function mascaracpf(){
    var cpfmascara = Imask(cpf,{mask:'000.000.000-00'});
}


var fone = document.getElementById('fone');

document.addEventListener('DOMContentLoaded',function(){
    mascarafone();
});

function mascarafone(){
    var fonemascara = Imask(fone,{mask:'(00) 0000-0000'});
}

