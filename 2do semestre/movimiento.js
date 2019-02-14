export default class Movimiento{
    constructor(nombre, telefono, saldo){
        this._nombre = nombre;
        this._telefono = telefono;
        this._saldo = saldo;
    }

    get telefono(){
        return this._telefono;
    }
        
    set telefono(telefono){
        this._telefono = telefono;
    }

    retirar(cantidad){
        this._saldo -= cantidad;
        if(cantidad > this._saldo){
            return "No es posible retirar esa cantidad"
        }else{
            return `Ahora su saldo es de: $${this._saldo}`;
        }
       
    }

    depositar(cantidad){
        this._saldo += cantidad;
        return `Ahora su saldo es de: $${this._saldo}`;
    }
}