// Variables globales
let pantallaActual = 1;
const totalPantallas = 15;
const musica = document.getElementById('musica');

// Inicializar pantalla
document.addEventListener('DOMContentLoaded', function() {
    cambiarPantalla(1);
});

// Cambiar entre pantallas
function cambiarPantalla(numeroPantalla) {
    // Ocultar pantalla actual
    const pantallaActualEl = document.getElementById(`screen${pantallaActual}`);
    if (pantallaActualEl) {
        pantallaActualEl.classList.remove('active');
    }

    // Mostrar nueva pantalla
    pantallaActual = numeroPantalla;
    const pantallaNueva = document.getElementById(`screen${pantallaActual}`);
    if (pantallaNueva) {
        pantallaNueva.classList.add('active');
    }

    // Abrir sobre en pantalla 2
    if (pantallaActual === 2) {
        setTimeout(() => {
            const envelope = document.getElementById('envelope');
            if (envelope) {
                envelope.querySelector('.envelope-front').classList.add('open');
            }
        }, 500);
    }
}

// Iniciar música
function iniciarMusica() {
    if (musica) {
        musica.play().catch(error => {
            console.log('Autoplay bloqueado. Se reproducirá al interactuar.');
        });
    }
}

// Efecto de corazones flotantes
function efectoCorazones(event) {
    const button = event.target;
    const rect = button.getBoundingClientRect();
    const startX = rect.left + rect.width / 2;
    const startY = rect.top + rect.height / 2;

    const corazones = ['❤️', '💕', '💖', '💗', '💝'];
    
    for (let i = 0; i < 8; i++) {
        const corazon = document.createElement('div');
        corazon.className = 'heart';
        corazon.textContent = corazones[Math.floor(Math.random() * corazones.length)];
        
        const tx = (Math.random() - 0.5) * 200;
        const ty = Math.random() * 150 + 100;
        
        corazon.style.left = startX + 'px';
        corazon.style.top = startY + 'px';
        corazon.style.setProperty('--tx', tx + 'px');
        
        document.body.appendChild(corazon);
        
        // Eliminar después de animación
        setTimeout(() => corazon.remove(), 2000);
    }
}

// Permitir clic en el sobre para abrirlo
document.addEventListener('DOMContentLoaded', function() {
    const envelopeElement = document.getElementById('envelope');
    if (envelopeElement) {
        envelopeElement.addEventListener('click', function() {
            this.querySelector('.envelope-front').classList.toggle('open');
        });
    }
});

// Navegación por teclado (opcional)
document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowRight' && pantallaActual < totalPantallas) {
        cambiarPantalla(pantallaActual + 1);
    } else if (event.key === 'ArrowLeft' && pantallaActual > 1) {
        cambiarPantalla(pantallaActual - 1);
    }
});

// Detectar scroll/swipe para cambiar pantalla
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
}, false);

document.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
}, false);

function handleSwipe() {
    if (touchStartX - touchEndX > 50) {
        // Swipe left - siguiente pantalla
        if (pantallaActual < totalPantallas) {
            const btn = document.querySelector('.btn-next');
            if (btn) efectoCorazones({target: btn});
            cambiarPantalla(pantallaActual + 1);
        }
    }
    if (touchEndX - touchStartX > 50) {
        // Swipe right - pantalla anterior
        if (pantallaActual > 1) {
            cambiarPantalla(pantallaActual - 1);
        }
    }
}