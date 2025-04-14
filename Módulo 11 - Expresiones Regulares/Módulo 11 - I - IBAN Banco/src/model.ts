export interface IBAN {
    banco: string;
    sucursal: string;
    cControl: string;
    cuenta: string;
    nombreBanco: string;
}

export interface Bancos {
    codigo: string;
    nombre: string;
}