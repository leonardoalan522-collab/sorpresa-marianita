# 🎉 ¡Feliz Cumpleaños, Marianita! 🎂

## Una experiencia interactiva y responsiva para celebrar tu día especial 💕

### 🎯 Características Principales

✨ **15 Pantallas Interactivas** con temática tech/programación  
🎵 **Música de fondo** que se inicia automáticamente  
📸 **Fotos personalizadas** en 9 pantallas  
🎬 **Video final** con mensaje especial  
💫 **Animaciones fluidas** y efectos visuales  
📱 **100% Responsivo** - Funciona perfectamente en teléfono  
❤️ **Efecto de corazones** al presionar botones  

### 📖 Pantallas Incluidas

1. **Inicio** - Bienvenida y botón para iniciar música
2. **El Sobre** - Carta animada que se abre al hacer clic
3. **Repositorio** - Metáfora de relación = código
4. **Base de Datos** - Almacenamiento de recuerdos
5. **Seguridad** - Encriptación del amor
6. **Cache de Recuerdos** - Momentos cacheados
7. **API de Amor** - Endpoints del corazón
8. **Deploy de Sueños** - Status online del amor
9. **Backup del Corazón** - Redundancia sentimental
10. **Código del Amor** - Binario (sin fotos, solo CSS/HTML)
11. **Matriz de Sentimientos** - Lluvia de emojis (sin fotos)
12. **Pulso del Corazón** - Gráfico animado (sin fotos)
13. **Galaxia de Momentos** - Estrellas flotantes (sin fotos)
14. **Galería** - Collage de fotos
15. **Final** - Video + mensaje especial

### 📂 Estructura de Archivos

```
sorpresa-marianita/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── assets/
│   ├── cancion.mp3
│   ├── video_final.mp4
│   └── fotos/
│       ├── foto1.png (Pantalla 2)
│       ├── foto2.png (Pantalla 3)
│       ├── foto3.png (Pantalla 4)
│       ├── foto4.png (Pantalla 5)
│       ├── foto5.png (Pantalla 6)
│       ├── foto6.png (Pantalla 7)
│       ├── foto7.png (Pantalla 8)
│       ├── foto8.png (Pantalla 9)
│       └── foto9.png (Pantalla 14)
└── README.md
```

### 🚀 Cómo Usar

1. **Clona o descarga el repositorio**
   ```bash
   git clone https://github.com/leonardoalan522-collab/sorpresa-marianita.git
   ```

2. **Agrega tus archivos multimedia** en la carpeta `assets/`
   - Coloca `cancion.mp3` en `assets/`
   - Coloca `video_final.mp4` en `assets/`
   - Coloca tus fotos (foto1.png a foto9.png) en `assets/fotos/`

3. **Abre el archivo en tu navegador**
   ```bash
   # En tu navegador
   file:///ruta/a/sorpresa-marianita/index.html
   ```

   O usa un servidor local:
   ```bash
   python -m http.server 8000
   # Luego abre: http://localhost:8000
   ```

4. **¡Comparte con tu persona especial!** 💕

### 🎮 Controles

- **Botones**: Haz clic para avanzar entre pantallas
- **Flecha derecha**: Siguiente pantalla (en PC)
- **Flecha izquierda**: Pantalla anterior (en PC)
- **Swipe izquierda**: Siguiente pantalla (en móvil)
- **Swipe derecha**: Pantalla anterior (en móvil)
- **Clic en sobre**: Abre/cierra la carta animada

### 🎨 Personalización

#### Cambiar colores
Edita en `css/styles.css`:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

#### Cambiar textos
Edita directamente en `index.html` las etiquetas `<p>` y `<h2>`

#### Cambiar emojis
Reemplaza los emojis en el HTML por los que prefieras

### 📱 Compatibilidad

✅ Chrome/Chromium  
✅ Firefox  
✅ Safari  
✅ Edge  
✅ Navegadores móviles (iOS Safari, Chrome mobile)  

### 🎵 Notas sobre Audio

- La música se inicia al hacer clic en "Empezar el recorrido"
- En algunos navegadores (especialmente en iOS), puede requerir interacción del usuario
- Asegúrate de que el archivo `cancion.mp3` está en la carpeta `assets/`

### 💻 Requisitos

- Navegador web moderno
- Conexión a internet (para ver las fotos y video si están alojadas online)

### 🔧 Características Técnicas

- **CSS Grid y Flexbox** para responsive design
- **CSS Animations** para efectos suaves
- **Vanilla JavaScript** (sin dependencias)
- **HTML5 Multimedia** para audio y video
- **LocalStorage** listo para guardar preferencias

### 🐛 Solución de Problemas

**Las fotos no se muestran:**
- Verifica que estén en `assets/fotos/` con nombres foto1.png, foto2.png, etc.
- Asegúrate de usar un servidor local, no archivo local

**La música no suena:**
- Verifica que `cancion.mp3` está en `assets/`
- Intenta hacer clic primero en la pantalla
- Revisa la consola del navegador (F12) para errores

**El video no se reproduce:**
- Verifica que `video_final.mp4` está en `assets/`
- Intenta con un servidor local

### 📞 Soporte

Si tienes problemas, verifica:
1. Rutas de archivos correctas
2. Permisos de lectura en carpetas
3. Servidor local activado (no abrir desde archivo local para multimedia)

---

**Hecho con ❤️ para hacer especial tu cumpleaños** 🎂✨
