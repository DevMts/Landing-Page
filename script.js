// write your JavaScript here

class Hamburguer {
    constructor() {
        this.btnMenu = document.querySelector('.btnMenu')
        this.btn = document.querySelector('.menuHamburguer')
        this.menu = document.querySelector('.menu')
        this.elipse = document.querySelector('.elipse')
        this.headerMain = document.querySelector('.headerMain')
    }
    init() {
        this.btnMenu.addEventListener('click', () => {
            this.btn.classList.toggle('ativo')
            this.menu.classList.toggle('off')
            this.elipse.classList.toggle('index')
            this.headerMain.classList.toggle('none')

        }
        )
    }
}

const hamburguer = new Hamburguer()
hamburguer.init()

class FAQ {
    constructor() {
        this.cardsFaq = document.querySelectorAll('.cardFaq'); // Seleciona todos os cards
    }

    Init() {
        if (this.cardsFaq.length > 0) {
            this.cardsFaq.forEach((card) => {
                const description = card.querySelector('.descriptionFaq'); 
                const icon = card.querySelector('.iconFaq'); 
                if (description && icon) {
                    card.addEventListener('click', () => {
                        description.classList.toggle('open');
                        this.btn(description, icon);
                    });
                } else {
                    console.error('Erro: Um ou mais elementos não foram encontrados no card.');
                }
            });
        } else {
            console.error('Erro: Nenhum card FAQ foi encontrado no DOM.');
        }
    }

    btn(description, icon) {
        if (description.classList.contains('open')) {
            icon.innerHTML = '<i class="fa-solid fa-minus"></i>';
        } else {
            icon.innerHTML = '<i class="fa-solid fa-plus"></i>';
        }
    }
}

// Instancia a classe e inicializa
const faqInstance = new FAQ();
faqInstance.Init();
