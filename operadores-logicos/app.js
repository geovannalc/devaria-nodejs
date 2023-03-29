const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('Esse programa vai checar se você é maior de 18 anos e tem habilitação para saber se vc pode entrar no kart');
console.log('Além da suas verificações, precisamos verificar se você está na lista de presença do horário');

readLine.question('Qual o ano do seu nascimento?' , ano => {
    if(ano > 2004){
        console.log('Você não tem 18 anos')
    }else{
        readLine.question('Você tem habilitação? (Sim/Não)' , temHabilitacao =>{
            if(!(temHabilitacao.toUpperCase() === "SIM")){
                console.log('Voce não tem habilitação para entrar no kart');
            }else{
                readLine.question("Qual o seu nome?" , nome =>{
                    switch(nome){
                        case 'Douglas' :
                            console.log('bem vindo ao kart Douglas');
                            break;
                        case 'Rafael' :
                            console.log('bem vindo ao kart Rafael');
                            break;
                        default:
                            console.log('seu nome não foi indentificado na lista de presença')
                    }
                });
            }
        })
    }
})