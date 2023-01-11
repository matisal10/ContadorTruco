export class Contador {
    numero = 0;
    nombre;
    cuentaElement;
    containerElement;

    constructor(nombre, containerElement, cuentaIni = 0) {
        this.nombre = nombre
        this.numero = cuentaIni;
        this.containerElement = containerElement
        containerElement.querySelector('.agregar').addEventListener("click", () => this.agregar())
        containerElement.querySelector('.restar').addEventListener("click", () => this.restar())
        this.cuentaElement = containerElement.querySelector('.cuenta')
        // this.actualizarCuenta()
    }


    agregar(cantidad = 1) {
        this.numero += cantidad;
        this.actualizarCuenta()
    }

    restar(cantidad = 1) {
        this.numero = Math.max(0, this.numero - cantidad);
        this.actualizarCuenta()
    }

    reset() {
        this.numero = 0
        this.actualizarCuenta()
    }

    actualizarCuenta() {
        let grupoActual
        const gruposActuales = this.containerElement.querySelectorAll('.grupo')
        const separadorActuales = this.containerElement.querySelectorAll('.separador')
        if (gruposActuales.length >= 1) {
            gruposActuales.forEach((grupo) => this.cuentaElement.removeChild(grupo));
            separadorActuales.forEach((separador) => this.cuentaElement.removeChild(separador));
        }
        for (let i = 0; i < this.numero; i++) {
            if (i % 5 === 0) {
                grupoActual = document.createElement('div');
                grupoActual.classList.add('grupo')
                if (i % 15 === 0 && i !== 0) {
                    const separador = document.createElement('div');
                    separador.classList.add('separador')
                    this.cuentaElement.appendChild(separador)
                }
                this.cuentaElement.appendChild(grupoActual)
            }
            const nuevoFosforo = document.createElement("img");
            nuevoFosforo.src = "img/fosforo3.png"
            nuevoFosforo.classList.add('fosforo' + (i % 5))
            grupoActual.appendChild(nuevoFosforo)

        }
    }
}