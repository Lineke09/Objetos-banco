let banco = {
    conta: 0002,
    saldo: 300,
    valorsolicitado: 21,
    tipodeconta: 'poupança',
    agencia: 'itau',
    buscarsaldo: function () {
        return banco.saldo;
    },
    deposito: function(){
        banco.saldo = banco.saldo + banco.valorsolicitado;


    },
    saque: function (){
        banco.saldo = banco.saldo - banco.valorsolicitado;

    };
    numerodaconta: function () {
        return banco.conta
    }

};



console.log(banco)
