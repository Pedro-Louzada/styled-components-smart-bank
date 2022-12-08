import {
    fundoClaro,
    textoDoFundoClaro,
    conteudoClaro,
    fundoEscuro,
    textoFundoEscuro,
    conteudoEscuro
} from "./variaveis";

export const temaClaro = {
    body: fundoClaro,
    inside: conteudoClaro,
    text: textoDoFundoClaro,
    filter: ''
};

export const temaEscuro = {
    body: fundoEscuro,
    inside: conteudoEscuro,
    text: textoFundoEscuro,
    filter: 'invert(100%)'
};
