


// FUNCIONES

// Declaración de función con tipado explícito:
function sumar(a: number, b: number): number {
  return a + b;
}

// Funciones flecha con retorno implícito (inferido por TypeScript):
const dividir = (a: number, b: number) => a / b;

// Funciones con parámetros opcionales:
function saludar(nombre: string, edad?: number): string {
  if (edad !== undefined) {
    return `Hola, mi nombre es ${nombre} y tengo ${edad} años.`;
  } else {
    return `Hola, mi nombre es ${nombre}.`;
  }
}

// Funciones con parámetros por defecto:
function saludar2(nombre: string, edad: number = 30): string {
  return `Hola, mi nombre es ${nombre} y tengo ${edad} años.`;
}



