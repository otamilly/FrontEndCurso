export default function ehMaiorDeIdade(campo) {
    const txtDATA = new Date(campo.value);
    if (!validaIdade(txtDATA)){
        campo.setCustomValidity('O usuário não é maior de Idade');
    }
    
}

function validaIdade(txtDATA){
    const txtDATAAtual = new Date();
    const txtDATAMais18 = new Date(txtDATA.getUTCFullYear() +18, txtDATA.getUTCMonth(), txtDATA.getUTCDate());
    return txtDATAAtual >= txtDATAMais18;
} 

