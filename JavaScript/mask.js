var cpf = document.getElementById('cpf');
var fone = document.getElementById('fone');
var cnpj = document.getElementById('cnpj');
var rg = document.getElementById('rg');
var cep = document.getElementById('cep');


document.addEventListener('DOMContentLoaded', function () {
    MascaraCpf();
    MascaraFone();
    MascaraCnpj();
    MascaraRg();
    MascaraCep();

});

function MascaraCpf() {
    var cpfmascara = IMask(cpf,
        {
            mask: '000.000.000-00'
        });
}

function MascaraFone() {
    var fonemascara = IMask(fone,
        {
            mask: '(00) 00000-0000'
        });
}

function MascaraCnpj() {
    var cnpjMask = IMask(cnpj, {
        mask: '00.000.000/0000-00'
    });
}

function MascaraRg() {
    var rgMask = IMask(rg, {
        mask: '00.000.000-0'
    });
}

function MascaraCep() {
    var cepMask = IMask(cep, {
        mask: '00000-000'
    });
}