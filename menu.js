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

