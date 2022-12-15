class Display {
    constructor(primerV, segundoV) {
        this.primerV = primerV;
        this.segundoV = segundoV;
        this.calculadora = new CalculadoraFun();
        this.tipoOperacion = undefined;
        this.primerVal = '';
        this.segundoVal = '';
        this.signos = { sumar: '+', restar: '-', multiplicar: '*', dividir: '/',}
    }

    agregarNumero(numero) {
        if (numero === '.' && this.segundoVal.includes('.')) {
            return
        }
        this.segundoVal = this.segundoVal.toString() + numero.toString();
        this.imprimirValores();
    }

    imprimirValores() {
        this.primerV.textContent = `${this.primerVal} ${this.signos[this.tipoOperacion] || ''}`;
        this.segundoV.textContent = this.segundoVal;
    }

    borrarCaracter(){
        this.segundoVal = this.segundoVal.toString().slice(0,-1);
        this.imprimirValores();
    }

    borrarTodo(){
        this.segundoVal = '';
        this.primerVal = '';
        this.tipoOperacion = undefined;
        this.imprimirValores();
    }

    calcular(){
        const primerVal = parseFloat(this.primerVal);
        const segundoVal = parseFloat(this.segundoVal);

        if(isNaN(primerVal) || isNaN(segundoVal)){
            return
        }else{
            this.segundoVal = this.calculadora[this.tipoOperacion](primerVal,segundoVal);
        }
    }

    computar(tipo){
        this.tipoOperacion !== 'igual' && this.calcular();
        this.tipoOperacion = tipo;
        this.primerVal = this.segundoVal || this.primerVal;
        this.segundoVal = '';
        this.imprimirValores();
    }
}