// Array de URLs de canciones royalty-free (Creative Commons)
const cancionesAleatorias = [
  {
    nombre: '🎹 Piano Romántico',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'
  },
  {
    nombre: '💕 Ambient Love',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3'
  },
  {
    nombre: '✨ Soft Background',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3'
  },
  {
    nombre: '🎵 Peaceful Emotions',
    url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3'
  }
];

// Función para obtener canción aleatoria
function obtenerCancionAleatoria() {
  return cancionesAleatorias[Math.floor(Math.random() * cancionesAleatorias.length)];
}

// Función para inicializar música aleatoria
function inicializarMusicaAleatoria() {
  const musica = document.getElementById('musica');
  const cancion = obtenerCancionAleatoria();
  
  if (musica) {
    musica.src = cancion.url;
    console.log('🎵 Reproduciendo: ' + cancion.nombre);
  }
}

// Ejecutar al cargar la página
document.addEventListener('DOMContentLoaded', inicializarMusicaAleatoria);
