

// INTERFACES

// Interface básica:
interface Persona {
  nombre: string;
  edad: number;
}

// Interface con propiedades opcionales:
interface Producto {
  nombre: string;
  precio: number;
  descripcion?: string;
}

// Interface para funciones:
interface Comparador {
  (a: number, b: number): boolean;
}

// Interface para clases (class interfaces):
interface Persona {
  nombre: string;
  edad: number;
  saludar(): void;
}


