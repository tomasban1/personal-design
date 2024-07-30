export class Layout {
    constructor() {
        this.pagesData = [
            {
                pageText: 'Home',
            },
            {
                pageText: 'About',
            },
            {
                pageText: 'Services',
            },
            {
                pageText: 'Portfolio',
            },
            {
                pageText: 'Pricing',
            },
            {
                pageText: 'Blog',
            },
            {
                pageText: 'Pages',
            },
            {
                pageText: 'Contact us',
            },
        ];
        this.barsDom = document.querySelector('.bars');
        this.render();
    }

    header() {
        let navHTML = '';

        for (const link of this.pagesData) {
            navHTML += `<button class="link">${link.pageText}</button>`
        }
        return `
            <header>
                <div class="row">
                    <div class="col-12 header-items">
                        <img src="#" alt="logo">
                          <button id="mobile-exit" class="bars visible-sm-bars hidden-md">
                            <i class="fa fa-lg fa-align-justify" aria-hidden="true"></i>
                          </button>
                        <nav class="hidden visible-md-flex">
                            ${navHTML}
                        </nav>
                    </div>
                  
                </div>
            </header>`;

    }
    mobileNavEvent() {
        this.barsDom = document.querySelector('.bars');
        const mobileNavDom = document.getElementById('mobile');
        const mobileNavExitDOM = document.getElementById('mobileExitBtn')


        this.barsDom.addEventListener('click', () => {
            mobileNavDom.classList.remove('hidden')

        })

        mobileNavExitDOM.addEventListener('click', () => {
            mobileNavDom.classList.add('hidden')
        })


    }

    main() {
        let navHTML = '';

        for (const link of this.pagesData) {
            navHTML += `<button class="link-mobile">${link.pageText}</button>`
        }
        const HTML = `
              <main class="container">
                <section id="mobile" class="hidden">
                    <nav class="mobile-nav">${navHTML}</nav>
                    <button id="mobileExitBtn"><i class="fa fa-2x fa-times-circle"></i></button>
                </section>
                <section class="row">
                    <div class="intro col-12 col-lg-5 col-md-5 m-xxl-1 m-lg-0 main-title">
                        <h3>THIS IS ME</h3>
                        <h1 style="font-size: 40px">PHILIP GILBERT</h1>
                        <p>You will begin to realise why this exercise is called
                         the Dickens Pattern with reference to the ghost showing
                         Scrooge some different futures.</p>
                        
                    </div>
                    <div class="col-12 col-md-6 main-title">
                        <img src="../img/hero.webp" alt="">
                    </div>
                    
                </section>
                <section class="row">
                    <div class="col-lg-6 col-md-6 m-xxl-1 main-title">
                        <img src="../img/about.webp" alt="">
                    </div>
                    <div class="intro col-lg-5 col-md-5 main-title">
                        <h3>About me</h3>
                        <p style="font-size: 40px">Personal details</p>
                        <p>Here, I focus on a range of items and features that
                         we use in life without giving them a second thought. such 
                         as Coca Cola. Dolor sit amet, consectetur adipisicing elit, 
                         sed do eiusmod</p>

                    </div>
                </section>
                <section class="row">
                    <div class="intro col-xxl-4 m-xxl-4 main-title">
                        <p style="font-size: 35px">My ofered services</p>
                        <p style="width: 600px; text-align: center">At about this time of year, some months after New Year s
                        resolutions have been made and kept, or made and neglected.</p>
                    </div>
                </section>
                <section class="row">
                    <div class="m-md-1 col-md-4 col-xl-3 main-title">
                        <h2>Web design</h2>
                        <p>“It is not because things are difficult that we do not
                        dare; it is because we do not dare that they are difficult.”</p>
                    </div>
                    <div class="m-md-1 col-md-4 col-xl-3 main-title">
                        <h2>Web design</h2>
                        <p>“It is not because things are difficult that we do not
                        dare; it is because we do not dare that they are difficult.”</p>
                    </div>
                    <div class="m-md-1 col-md-4 col-xl-3 main-title">
                        <h2>Web design</h2>
                        <p>“It is not because things are difficult that we do not
                        dare; it is because we do not dare that they are difficult.”</p>
                    </div>
                    <div class="m-md-1 col-md-4 col-xl-3 main-title">
                        <h2>Web design</h2>
                        <p>“It is not because things are difficult that we do not
                        dare; it is because we do not dare that they are difficult.”</p>
                    </div>
                    <div class="m-md-1 col-md-4 col-xl-3 main-title">
                        <h2>Web design</h2>
                        <p>“It is not because things are difficult that we do not
                        dare; it is because we do not dare that they are difficult.”</p>
                    </div>
                    <div class="m-md-1 col-md-4 col-xl-3 main-title">
                        <h2>Web design</h2>
                        <p>“It is not because things are difficult that we do not
                        dare; it is because we do not dare that they are difficult.”</p>
                    </div>
                </section>
                <section class="row">
                    <div class="m-md-1 col-xl-2 col-md-4 col-sm-12">
                        <h2>2024</h2>
                        <p>Projects completed</p>
                    </div>
                    <div class="m-md-1 col-xl-2 col-md-4 col-sm-12">
                        <h2>2024</h2>
                        <p>Projects completed</p>
                    </div>
                    <div class="m-md-1 col-xl-2 col-md-4 col-sm-12">
                        <h2>2024</h2>
                        <p>Projects completed</p>
                    </div>
                    <div class="m-md-1 col-xl-2 col-md-4 col-sm-12">
                        <h2>2024</h2>
                        <p>Projects completed</p>
                    </div>
                    
                </section>
            </main>`;
        return HTML
    }

    footer() {
        const HTML = '<footer class="container">&copy; Copyright 2024</footer>';
        return HTML
    }

    render() {
        const DOM = document.getElementById('app');
        const HTML = this.header() + this.main() + this.footer();
        DOM.insertAdjacentHTML('beforeend', HTML)

        this.mobileNavEvent();
    }

}