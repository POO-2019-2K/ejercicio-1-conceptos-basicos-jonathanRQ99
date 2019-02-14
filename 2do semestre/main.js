import Contacto from "./Contacto.js";

let c1 = new Contacto ("Juan Perez", "Operador", "312-456-2345", "juan.perez@gmail.com");

c1.imprimir();

console.log(c1.nombre);
console.log(c1.email);

c1.puesto = "Jefe de departamento";

console.log(c1.puesto);

let R1 = new Reservacion("Juan", "Tentativa", "2019-12-15", "2019-12-17");
console.log(R1.imprimir());

console.log(R1.getNoches());
console.log(R1.getDiasParaLlegada());

let M1 = new Movimiento("Juan", 31231879, 20000);
console.log(M1.depositar(15));
console.log(M1.retirar(20000));