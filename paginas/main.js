document.addEventListener('DOMContentLoaded', ()=>{

    const botaoMenuHamburguer = document.getElementById('botao-menu-mobile');
    const listaLinksNavegacao = document.getElementById('links-navegacao');

    if (botaoMenuHamburguer && listaLinksNavegacao){
        
        botaoMenuHamburguer.addEventListener('click', ()=>{
            listaLinksNavegacao.classList.toggle('active');
            
            const iconeBotaoMenu = botaoMenuHamburguer.querySelector('i');
            if (listaLinksNavegacao.classList.contains('active')){
                iconeBotaoMenu.classList.remove('fa-bars');
                iconeBotaoMenu.classList.add('fa-times');
            } else{
                iconeBotaoMenu.classList.remove('fa-times');
                iconeBotaoMenu.classList.add('fa-bars');
            }
        });
    }

    const todosOsLinksNavegacao = document.querySelectorAll('#links-navegacao a');

    todosOsLinksNavegacao.forEach(linkClicado =>{
        linkClicado.addEventListener('click', ()=>{
            if (listaLinksNavegacao.classList.contains('active')){
                listaLinksNavegacao.classList.remove('active');
                
                const iconeBotaoMenu = botaoMenuHamburguer.querySelector('i');
                iconeBotaoMenu.classList.remove('fa-times');
                iconeBotaoMenu.classList.add('fa-bars');
            }
        });
    });

    const secoesDaPagina = document.querySelectorAll('section, header');
    const linksMenuScrollSpy = document.querySelectorAll('.navbar #links-navegacao li a');

    window.addEventListener('scroll', ()=>{
        let idSecaoAtual = '';

        secoesDaPagina.forEach(secaoObservada =>{
            const topoDaSecao = secaoObservada.offsetTop;
            const alturaDaSecao = secaoObservada.clientHeight;
            
            if (window.pageYOffset >= (topoDaSecao - alturaDaSecao / 3)){
                idSecaoAtual = secaoObservada.getAttribute('id');
            }
        });

        linksMenuScrollSpy.forEach(linkDoMenu =>{
            linkDoMenu.classList.remove('active');
            if (linkDoMenu.getAttribute('href') === '#' + idSecaoAtual){
                linkDoMenu.classList.add('active');
            }
        });
    });

});