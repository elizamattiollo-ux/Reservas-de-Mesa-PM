async function buscarFrase() {
    try {
        const resposta = await fetch(
            "https://api.chucknorris.io/jokes/random"
        );
        const dados = await resposta.json();
        document.getElementById("frase").innerText = dados.value;
    } catch (erro) {
        document.getElementById("frase").innerText =
            "Erro ao buscar frase.";
    }
}

async function buscarCep() {
    const cep = document.getElementById("cep").value.replace(/\D/g, "");
    const endereco = document.getElementById("endereco");

    if (cep.length !== 8) {
        endereco.innerText = "Digite um CEP válido com 8 números.";
        return;
    }

    try {
        const resposta = await fetch(
            `https://viacep.com.br/ws/${cep}/json/`
        );
        const dados = await resposta.json();

        if (dados.erro) {
            endereco.innerText = "CEP não encontrado.";
            return;
        }

        endereco.innerText =
            `${dados.logradouro || "Logradouro não informado"}, ` +
            `${dados.bairro || "Bairro não informado"}, ` +
            `${dados.localidade} - ${dados.uf}`;
    } catch (erro) {
        endereco.innerText = "Erro ao buscar CEP.";
    }
}