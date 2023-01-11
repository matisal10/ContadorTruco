import { Contador } from "./contador.js"

const modal = document.querySelector('dialog')
// const partidaEnMemoria = JSON.parse(localStorage.getItem("truco")) || 0
const p1Nombre = "Nosotros"
const p2Nombre = "Ellos"

const p1 = new Contador(p1Nombre, document.getElementById('jugador1Container'))
const p2 = new Contador(p2Nombre, document.getElementById('jugador2Container'))

document.getElementById('reset').addEventListener("click", () => {
    modal.showModal();
})

document.getElementById('aceptar').addEventListener("click", () => {
    p1.reset()
    p2.reset()
    modal.close();
})

document.getElementById('volver').addEventListener("click", () => {
    modal.close();
})

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        const partidaAGuardar = {
            [p1.nombre]: [p1.numero],
            [p2.nombre]: [p2.numero]
        }
        localStorage.setItem('truco', JSON.stringify(partidaAGuardar))
    })
})


