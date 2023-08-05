

// TYPES


// Type básico:
type Numero = number;

// Type básico Objeto Literal:
type Persona1 = {
    nombre: string;
    edad: number;
}

// Type con union types:
type Nombre = string | null;

// Type con propiedades opcionales:
type Producto1 = {
    nombre: string;
    precio: number;
    descripcion?: string;
}

// Type para funciones:
type Comparador1 = {
    (a: number, b: number): boolean;
}

// Type para clases (class Types):
type Persona2 = {
    nombre: string;
    edad: number;
    saludar(): void;
}


