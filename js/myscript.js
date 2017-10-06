
let consulta = window.matchMedia('(max-width: 500px)'),
    video = window.matchMedia('(max-width: 800px)'),
    burguerBottom = document.getElementById('burguer-bottom'),
    menu = document.getElementById('menu');

    function toggleMenu() {
        menu.classList.toggle('active');
    }

    function showMenu() {
        menu.classList.add('active');
    }

    function hideMenu() {
        menu.classList.remove('active');
    }

    function mediaQueries(consulta) {
        if (consulta.matches) {
            console.log('se cumplio la condicion');
            burguerBottom.addEventListener('touchstart', toggleMenu);
        }
        else {
            console.log('no se cumplio la condicion');
            burguerBottom.removeEventListener('touchstart', toggleMenu);
        }
    }

    function videoResponsive (video) {
        let videoInvie = document.getElementById('videoInvie');

        if (video.matches) {
            videoInvie.innerHTML = '<a href="https://www.youtube.com/watch?v=R1dW8M4EqYY" target="_blank">Ver Video Invie</a>';
        }
        else {
            videoInvie.innerHTML = '<iframe class="video-responsive-src" width="560" height="315" src="https://www.youtube.com/embed/R1dW8M4EqYY" frameborder="0" allowfullscreen></iframe>';
        }
    }

    mediaQueries(consulta);
    consulta.addListener(mediaQueries);

    videoResponsive(video);
    video.addListener(videoResponsive);

    // be lazy loading
    let bLazy = new Blazy({
        selector: 'img'
    });

    // gestos
    let $body = document.body,
        gestos = new Hammer($body);
        gestos.on('swipeleft', hideMenu);
        gestos.on('swiperight', showMenu);