const frases1 = [
    "Você vai morrer, comece a rezar.",
    "Já pode criar outra ficha de personagem.",
    "Nem os deuses podem te salvar agora.",
    "Seu mestre está sorrindo. Isso não é bom.",
    "Parabéns, você falhou com excelência.",
    "Foi de arrasta pra cima.",
    "O inimigo nem precisava se esforçar.",
    "Já escolheu a música do seu funeral?",
    "Seu personagem virou desenvolvimento de narrativa.",
    "Não foi azar, foi incompetência mesmo."
];

const frases2 = [
    "Peça piedade para seu mestre agora.",
    "Era melhor nem ter rolado.",
    "Nem com bônus, hein?",
    "Sua estratégia era essa mesmo?",
    "Faltou pouco para a humilhação completa.",
    "Prepare-se para as consequências.",
    "O mestre vai precisar improvisar sua desgraça.",
    "Você decepcionou até os NPCs.",
    "O inimigo agradece pela colaboração.",
    "Tem certeza que colocou pontos nesse atributo?"
];

const frases3 = [
    "Foi bem, mas talvez não o suficiente...",
    "A esperança é a última que morre.",
    "Não foi horrível. Só foi ruim.",
    "Talvez algum modificador te salve.",
    "Ainda dá tempo de inventar uma desculpa.",
    "Confia no processo... eu acho.",
    "Sua coragem é maior que sua habilidade.",
    "Vai depender da boa vontade do mestre.",
    "Quase deu certo. Quase.",
    "Pelo menos não foi uma falha crítica."
];

const frases4 = [
    "Foi um bom teste, mas você pode melhorar.",
    "Nada mal, aventureiro.",
    "Surpreendentemente competente.",
    "Não foi incrível, mas funciona.",
    "O básico bem feito.",
    "Dessa vez você escapou.",
    "Passou na média.",
    "Não fez mais que sua obrigação.",
    "O suficiente para continuar vivo.",
    "Um sucesso sem muita emoção."
];

const frases5 = [
    "Olha só, temos um profissional aqui!",
    "Os deuses estão do seu lado.",
    "O mestre que lute.",
    "Quase perfeito, hein?",
    "Finalmente fez jus à sua ficha.",
    "Pode se gabar por cinco minutos.",
    "O inimigo começou a reconsiderar suas escolhas.",
    "Isso sim é um aventureiro de respeito.",
    "O treinamento finalmente serviu para alguma coisa.",
    "Seu personagem merece um aumento."
];

const frases6 = [
    "Tá chetando.",
    "O protagonista do RPG chegou.",
    "Seu mestre acaba de perder a paciência.",
    "Pode confessar, você subornou os deuses.",
    "A campanha agora gira ao seu redor.",
    "O mestre vai querer conferir esse dado.",
    "O roteiro não estava preparado para isso.",
    "Você desbloqueou a armadura de protagonista.",
    "Até o boss final ficou preocupado.",
    "O mestre vai aumentar a dificuldade só por sua causa."
];

const frasesLoading = [
    "Boa sorte, aventureiro!",
    "Que os deuses estejam ao seu lado.",
    "Que o mestre tenha piedade de você.",
    "O destino está sendo decidido...",
    "Ainda dá tempo de começar a rezar.",
    "Invocando os deuses da sorte...",
    "Preparado para as consequências?",
    "Entre a glória e a humilhação...",
    "Carregando seu possível desastre.",
    "Que a sorte seja maior que sua incompetência."
];

function RandomPhrase () {
    const number = Math.floor(Math.random() * 10);

    return number;
}

function Phrase({type}: {type: number}) {
    switch (type) {
        case 0:
            return frasesLoading[RandomPhrase()];
        case 1:
            return frases1[RandomPhrase()];
        case 2:
            return frases2[RandomPhrase()];
        case 3:
            return frases3[RandomPhrase()];
        case 4:
            return frases4[RandomPhrase()];
        case 5:
            return frases5[RandomPhrase()];
        case 6:
            return frases6[RandomPhrase()];
        default:
            return "Erro: Tipo de frase inválido.";
    }
}
    

    function ShowPhrase({loading, number}: {loading: boolean, number: number}) {
        return (
            <div>
                <p style={{ fontFamily: "Quicksand" }} className="text-white text-lg p-4 h-20 items-center flex text">
                {loading ? <Phrase type={0} /> : <Phrase type={number + 1} />}
                </p>
            </div>
        )
    }
    
export default ShowPhrase