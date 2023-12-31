
/**
 * 
 * @param {String} carta 
 * @returns {HTMLElement} img retornada
 */

export const crearCartaHTML = ( carta ) => {
    if( !carta ) throw Error('La carta es un argumento requerido');
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
    imgCarta.classList.add('carta');

    return imgCarta;
}