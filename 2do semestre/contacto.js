export default class Contacto {
    constructor(nombre, puesto, telefono, email){
    this._nombre = nombre.toUpperCase();
    this._puesto = puesto.toUpperCase();
    this._telefono = telefono;
    this._email = email;
    }
imprimir() {
console.log(`${this._nombre}, ${this._puesto}, ${this._telefono}, ${this._email}`);
}

get nombre() {
    return this._nombre;
}

get puesto() {
    return this._puesto;
}

set puesto(puesto) {
    this._puesto = puesto.toUpperCase();
}

set email(email){
this._email = email;
}

}