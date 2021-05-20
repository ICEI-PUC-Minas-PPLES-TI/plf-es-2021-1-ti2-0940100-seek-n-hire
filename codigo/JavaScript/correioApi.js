
// NECESSARIO NODEJS
// DIGITAR NO CONSOLE ------ node codigo/JavaScript/correioApi.js


const {consultarCep} = require('correios-brasil');

let cep = '31525000';

consultarCep(cep).then((response) => {
    console.log(response)
})

