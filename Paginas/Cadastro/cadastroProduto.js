class Produto {
    constructor(codigo, nomeProduto, descricao, estoque, prcCusto, prcVenda) {
        this.codigo = codigo;
        this.nomeProduto = nomeProduto;
        this.descricao = descricao;
        this.estoque = estoque;
        this.prcCusto = prcCusto;
        this.prcVenda = prcVenda;
    }
    toString() {
        // Converte o objeto para uma string formatada
        return `Código: ${this.codigo}\nNome: ${this.nomeProduto}\nDescrição: ${this.descricao}\nEstoque: ${this.estoque}\nCusto: ${this.prcCusto}\nVenda: ${this.prcVenda}`;
    }
}


let produtos = []

const btn_cadastrar = document.getElementById("cadastrar")
btn_cadastrar.addEventListener("click",()=>{
    event.preventDefault();
    const codigo = document.getElementById("codigo").value
    const nomeProduto = document.getElementById("nomeProduto").value
    const descricao = document.getElementById("descricao").value
    const estoque = document.getElementById("estoque").value
    const prcCusto = document.getElementById("prcCusto").value
    const prcVenda = document.getElementById("prcVenda").value

    const pr1 = new Produto(codigo,nomeProduto,descricao,estoque,prcCusto,prcVenda)
    
    
    produtos.push(pr1)

    const res =document.getElementById("res")
    res.innerHTML=''
  produtos.forEach((el,i)=>{
      res.innerHTML+=`${i}${el}<br>`
      
    })
    //res.textContent += pr1.toString();
    
})