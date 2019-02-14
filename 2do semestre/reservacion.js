export default class Reservacion {
    huesped(nombre, tipoHabitacion, fechaLlegada, fechaSalida){
        this._nombre = nombre;
        this._tipo = tipo; 
        this._fechaLlegada = fechaLlegada;
        this._fechaSalida = fechaSalida;
    }

    get nombre(){
        return this._nombre;
    }

    get tipo(){
        return this._tipo;
    }

    get fechaLlegada(){
        return this.fechaLlegada;
    }

    get fechaSalida(){
        return this.fechaSalida;
    }

    set fechaLlegada(fechaLlegada){
        this._fechaLlegada = fechaLlegada;
    }

    set fechaSalida(fechaSalida){
        this._fechaSalida = fechaSalida;
    }

    imprimir(){
        console.log(`Nombre: ${this._nombre} Mes: ${this._tipo} Dia: ${this._fechaLlegada} Hora: ${this._fechaSalida}`);
    }

    getNoches(){
        let inicio = new Date(this._fechaLlegada).getTime();
        let final = new Date(this._fechaSalida).getTime();
        let diferencia = final - inicio;
        diferencia = (diferencia/(1000*60*60*24))-1;
        return `Noches: ${diferencia}`;
    }

    getDiasParaLlegada(){
        let inicio = new Date(this._fechaLlegada).getTime();
        let fechaActual = new Date();

        let año = fechaActual.getFullYear();
        let mes = fechaActual.getMonth()+1;
        let dia = fechaActual.getDate();

        fechaActual = new Date(`${año}-${mes}-${dia}`);
        fechaActual = fechaActual.getTime();
        
        let diferencia = inicio - fechaActual;

        diferencia = (diferencia/(1000*60*60*24))+.25;
        return `Dias Faltantes: ${diferencia}`;
    }
}