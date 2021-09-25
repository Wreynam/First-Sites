var nomeConvidado = document.getElementById("convidadoName")    
var listaConvidados = document.getElementById("lista")

var convidado = JSON.parse(localStorage.getItem("testeConvidados")) || []
salvarConvidados = () =>{
    localStorage.setItem("testeConvidados", JSON.stringify(convidado))
}

preRender = () => {
    listaConvidados.innerHTML = ""
        for(const passar of convidado){
            
        var elConvidado = document.createElement("li")
        var elNome = document.createTextNode (passar)

        var excluirButon = document.createElement("a")
        var elExcluirTexto = document.createTextNode("Excluir");
        excluirButon.setAttribute("href", "#")
        excluirButon.appendChild(elExcluirTexto);

        excluirButon.onclick = () => {
            convidado = convidado.filter((item) =>{
            return item != passar
            salvarConvidados()
            })
            preRender()
        }
        elConvidado.appendChild(elNome)
        elConvidado.appendChild(excluirButon)
        listaConvidados.appendChild(elConvidado)
        salvarConvidados()
    }
}
preRender()

adicionar = () => {
    convidado.push(nomeConvidado.value)
    nomeConvidado.value = ""
    preRender()
}