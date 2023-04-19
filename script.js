const frm = document.querySelector("form")
const res = document.querySelector("pre")

frm.addEventListener("submit", (e) => {
    const numero = Number(frm.inputNumber.value)
    let resposta = ""
    
    for(let i = 1; i <= 10; i++){
        //resposta = resposta + numero + "x" + i + " = " + (numero*i) + "\n"
        resposta = `${resposta} ${numero} x ${i} = ${numero * i} \n`
    }
    res.innerText = resposta

    e.preventDefault()
})