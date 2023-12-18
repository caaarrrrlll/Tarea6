// tarea6
const filas: number = 5;
const columnas: number = 5;

for (let i = 1; i <= filas; i++) {
  let fila: string = '';
  for (let j = 1; j <= columnas; j++) {
    const resultado: number = i * j;
    fila += `${resultado}\t`;
  }

  console.log(fila);
}
