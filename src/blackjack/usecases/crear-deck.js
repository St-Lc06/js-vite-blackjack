import _ from 'underscore';


/**
 * Crea un nuevo deck
 * @param {Array<String>} tiposDeCartas 
 * @param {Array<String>} tiposEspeciales 
 * @returns {Array<String>} retorna un nuevo deck
 */

export const crearDeck = (tiposDeCartas, tiposEspeciales) => {

    if (!tiposDeCartas || tiposDeCartas.length === 0)
        throw new Error('TiposDeCarta es obligatorio como un arreglo de string');
        if (!tiposEspeciales || tiposEspeciales.length === 0)
        throw new Error('TiposEspeciales es obligatorio como un arreglo de string');

    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCartas ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCartas ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    console.log( deck );
    return deck;
}