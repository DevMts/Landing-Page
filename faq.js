class FAQ {
    constructor() {
        this.cardsFaq = document.querySelectorAll('.cardFaq'); // Seleciona todos os cards
    }

    Init() {
        if (this.cardsFaq.length > 0) {
            this.cardsFaq.forEach((card) => {
                const description = card.querySelector('.descriptionFaq'); // Busca a descrição dentro do card
                const icon = card.querySelector('.iconFaq'); // Busca o ícone dentro do card

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
        // Atualiza o ícone com base na classe
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
