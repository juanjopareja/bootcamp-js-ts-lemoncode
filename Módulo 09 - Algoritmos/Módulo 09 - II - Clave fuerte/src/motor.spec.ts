import { commonPasswords } from "./constantes";
import { ValidacionClave } from "./modelo";
import { 
    tieneMayusculasYMinusculas,
    tieneNumeros,
    tieneCaracteresEspeciales,
    tieneLongitudMinima,
    tieneNombreUsuario,
    tienePalabrasComunes,
    validarClave,
} from "./motor";

// Test para comprobar que la clave tiene mayúsculas y minúsculas
describe("tieneMayusculasYMinusculas", () => {
    it("debería devolver false y un mensaje de error si la clave no tiene mayúsculas y minúsculas", () => {
        // Arrange
        const contraseña = "clave";
        
        // Act
        const resultado = tieneMayusculasYMinusculas(contraseña);
        
        // Assert
        const expected: ValidacionClave = {
            esValida: false,
            error: "La clave debe de tener mayúsculas y minúsculas",
        };
        expect(resultado).toEqual(expected);
    });

    it("debería devolver false y un mensaje de error si la clave no tiene mayúsculas y minúsculas", () => {
        // Arrange
        const contraseña = "CLAVE";
        
        // Act
        const resultado = tieneMayusculasYMinusculas(contraseña);
        
        // Assert
        const expected: ValidacionClave = {
            esValida: false,
            error: "La clave debe de tener mayúsculas y minúsculas",
        };
        expect(resultado).toEqual(expected);
    });

    it("debería devolver true y ningún mensaje de error si la clave tiene mayúsculas y minúsculas", () => {
        // Arrange
        const contraseña = "Clave";
        
        // Act
        const resultado = tieneMayusculasYMinusculas(contraseña);
        
        // Assert
        const expected: ValidacionClave = {
            esValida: true,
            error: "",
        };
        expect(resultado).toEqual(expected);
    });
});

// Test para comprobar que la clave tiene números
describe("tieneNumeros", () => {
    it("debería devolver false y un mensaje de error si la clave no tiene números", () => {
        // Arrange
        const contraseña = "clave";
        
        // Act
        const resultado = tieneNumeros(contraseña);
        
        // Assert
        const expected: ValidacionClave = {
            esValida: false,
            error: "La clave debe de tener números",
        };
        expect(resultado).toEqual(expected);
    });

    it("debería devolver true y ningún mensaje de error si la clave tiene números", () => {
        // Arrange
        const contraseña = "clave123";
        
        // Act
        const resultado = tieneNumeros(contraseña);
        
        // Assert
        const expected: ValidacionClave = {
            esValida: true,
            error: "",
        };
        expect(resultado).toEqual(expected);
    });
});

// Test para comprobar que la clave tiene caracteres especiales
describe("tieneCaracteresEspeciales", () => {
    it("debería devolver false y un mensaje de error si la clave no tiene caracteres especiales", () => {
        // Arrange
        const contraseña = "clave";
        
        // Act
        const resultado = tieneCaracteresEspeciales(contraseña);
        
        // Assert
        const expected: ValidacionClave = {
            esValida: false,
            error: "La clave debe de tener caracteres especiales",
        };
        expect(resultado).toEqual(expected);
    });

    it("debería devolver true y ningún mensaje de error si la clave tiene caracteres especiales", () => {
        // Arrange
        const contraseña = "clave_?";
        
        // Act
        const resultado = tieneCaracteresEspeciales(contraseña);
        
        // Assert
        const expected: ValidacionClave = {
            esValida: true,
            error: "",
        };
        expect(resultado).toEqual(expected);
    });
});

// Test para comprobar que la clave tiene una longitud mínima
describe("tieneLongitudMinima", () => {
    it("debería devolver false y un mensaje de error si la clave tiene menos de 8 caracteres", () => {
        // Arrange
        const contraseña = "clave";
        
        // Act
        const resultado = tieneLongitudMinima(contraseña);
        
        // Assert
        const expected: ValidacionClave = {
            esValida: false,
            error: "La clave debe de tener una longitud mínima de 8 caracteres",
        };
        expect(resultado).toEqual(expected);
    });

    it("debería devolver true y ningún mensaje de error si la clave tiene 8 caracteres", () => {
        // Arrange
        const contraseña = "clave123";
        
        // Act
        const resultado = tieneLongitudMinima(contraseña);
        
        // Assert
        const expected: ValidacionClave = {
            esValida: true,
            error: "",
        };
        expect(resultado).toEqual(expected);
    });

    it("debería devolver true y ningún mensaje de error si la clave tiene más de 8 caracteres", () => {
        // Arrange
        const contraseña = "clave123456";
        
        // Act
        const resultado = tieneLongitudMinima(contraseña);
        
        // Assert
        const expected: ValidacionClave = {
            esValida: true,
            error: "",
        };
        expect(resultado).toEqual(expected);
    });
});

// Test para comprobar que la clave no contiene el nombre de usuario
describe("tieneNombreUsuario", () => {
    it("debería devolver false y un mensaje de error si la clave es igual al nombre de usuario", () => {
        // Arrange
        const nombre = "usuario";
        const contraseña = "usuario";
        
        // Act
        const resultado = tieneNombreUsuario(nombre, contraseña);
        
        // Assert
        const expected: ValidacionClave = {
            esValida: false,
            error: "La clave no debe contener el nombre del usuario",
        };
        expect(resultado).toEqual(expected);
    });

    it("debería devolver true y ningún mensaje de error si la clave no es igual al nombre de usuario", () => {
        // Arrange
        const nombre = "usuario";
        const contraseña = "clave123";
        
        // Act
        const resultado = tieneNombreUsuario(nombre, contraseña);
        
        // Assert
        const expected: ValidacionClave = {
            esValida: true,
            error: "",
        };
        expect(resultado).toEqual(expected);
    });
});

// Test para comprobar que la clave no contiene palabras comunes
describe("tienePalabrasComunes", () => {
    it("debería devolver false y un mensaje de error si la clave es igual a una palabra común", () => {
        // Arrange
        const contraseña = "football";
        
        // Act
        const resultado = tienePalabrasComunes(contraseña, commonPasswords);
        
        // Assert
        const expected: ValidacionClave = {
            esValida: false,
            error: "La clave no debe de contener palabras comunes",
        };
        expect(resultado).toEqual(expected);
    });

    it("debería devolver true y ningún mensaje de error si la clave no es igual a una palabra común", () => {
        // Arrange
        const contraseña = "baloncesto";
        
        // Act
        const resultado = tienePalabrasComunes(contraseña, commonPasswords);
        
        // Assert
        const expected: ValidacionClave = {
            esValida: true,
            error: "",
        };
        expect(resultado).toEqual(expected);
    });
});

// Test para comprobar que la clave es válida
describe("validarClave", () => {
    it("debería devolver true y un mensaje de aprobación", () => {
        // Arrange
        const nombre = "usuario";
        const contraseña = "Clave123!";
        
        // Act
        const resultado = validarClave(nombre, contraseña, commonPasswords);
        
        // Assert
        const expected: ValidacionClave = {
            esValida: true,
            error: "Formato de clave válido",
        };
        expect(resultado).toEqual(expected);
    });
});