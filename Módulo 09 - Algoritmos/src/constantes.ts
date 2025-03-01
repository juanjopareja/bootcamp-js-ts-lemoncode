export type TIPO_IVA = 
    | 'general'
    | 'reducido'
    | 'superreducidoA'
    | 'superreducidoB'
    | 'superreducidoC'
    | 'sinIva';

export const CANTIDAD_IVA = {
    general: 0.21,
    reducido: 0.10,
    superreducidoA: 0.05,
    superreducidoB: 0.04,
    superreducidoC: 0.00,
    sinIva: 0.00,
}