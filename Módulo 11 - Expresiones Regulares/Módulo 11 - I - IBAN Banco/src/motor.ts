import { isValidIBAN } from "ibantools";
import { PATTERN_IBAN, BANCOS } from "./constantes";
import { IBAN } from "./model";

export const compruebaFormato = (iban: string): boolean => {
    const regex = PATTERN_IBAN;

    return regex.test(iban);
}

export const validaFormato = (iban: string): boolean => {
    const validaIBAN =  isValidIBAN(iban);

    return validaIBAN;
}

export const extraeDatosIban = (iban: string): IBAN => {
    const extraccion = PATTERN_IBAN.exec(iban);

    if (extraccion) {
        const { entidad, sucursal, digitoControl, numeroCuenta } = extraccion.groups as any;
        const IBAN: IBAN = {
            banco: entidad,
            sucursal: sucursal,
            cControl: digitoControl,
            cuenta: numeroCuenta,
            nombreBanco: bancoCorrespondienteEntidad(entidad),
        };

        return IBAN;
    } else {
        const IBAN: IBAN = {
            banco: "-",
            sucursal: "-",
            cControl: "-",
            cuenta: "-",
            nombreBanco: "-",
        };

        return IBAN;
    }
}

export const bancoCorrespondienteEntidad = (banco: string): string => {
    let entidad = banco;
    let nombreEntidad = "";

    BANCOS.forEach((banco) => {
        banco.codigo === entidad ? nombreEntidad = banco.nombre : null;
    });

    return nombreEntidad;
}
