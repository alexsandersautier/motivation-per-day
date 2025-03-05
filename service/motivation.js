let dados = require('../data/data.js');

function retornarMensagemDoDia(dia) {
    return dados.frases[dia - 1];
}

exports.retornarMensagemDoDia = retornarMensagemDoDia;