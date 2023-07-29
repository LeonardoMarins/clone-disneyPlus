document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const question = document.querySelectorAll('[data-faq-question]');

    const heroSection = document.querySelector('.hero');
    const alturaHero = heroSection.clientHeight;

    window.addEventListener('scroll', function () {
        const posicaoAtual = window.scrollY;

        if(posicaoAtual < alturaHero) {
            ocultaElementosDoHeader();
        }else {
            exibeElementosDoHeader();
        }

    })

    //Secção de atrçoes, programação das abas
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function (botao) {
            const abaAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
            escondeTodasAbas();
            aba.classList.add('shows__list--is-active');
            removeBotaoAtivo();
            botao.target.classList.add('shows__tabs__button--is-active')
        })
    }

    //secao FAQ, accordion
    for (let i = 0; question.length > 0; i++) {
        question[i].addEventListener('click', openOrClosedQuestion);
    }
})

function ocultaElementosDoHeader() {
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden');
}


function exibeElementosDoHeader() {
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden');
}

function openOrClosedQuestion(element) {
    const classe = 'faq__questions__item--is-open'
    const parentElement = element.target.parentNode;

    parentElement.classList.toggle(classe)
}

function removeBotaoAtivo() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is-active');
    }
}

function escondeTodasAbas() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__list--is-active');
    }
}