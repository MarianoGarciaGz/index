var wallpaperSettings = {
    fps: 60
}

window.wallpaperPropertyListener = {
    applyGeneralProperties: function (properties) {
        if (properties.fps) {
            wallpaperSettings.fps = properties.fps
        }
    }
}

// Conservamos el script original
window.wallpaperPropertyListener = {
    applyUserProperties: function (properties) {
        if (properties.customcolor) {
            // Convert the custom color to 0 - 255 range for CSS usage
            var customColor = properties.customcolor.value.split(' ')
            customColor = customColor.map(function (c) {
                return Math.ceil(c * 255)
            })
            var customColorAsCSS = 'rgb(' + customColor + ')'
            var backgroundElement = document.getElementById('background')
            backgroundElement.style.backgroundColor = customColorAsCSS
        }
    }
}

// Función para generar un número aleatorio entre min y max
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

// Función para generar un color aleatorio
function randomColor() {
    return `hsl(${random(-200, 50)}, ${random(70, 100)}%, ${random(40, 80)}%)`
}

// Crear círculos animados
const circlesContainer = document.getElementById('animated-circles')
const numberOfCircles = 5 // Número de círculos a crear

for (let i = 0; i < numberOfCircles; i++) {
    const circle = document.createElement('div')
    circle.classList.add('circle')

    // Tamaño aleatorio
    const size = random(200, 350)
    circle.style.width = `${size}px`
    circle.style.height = `${size}px`

    // Posición inicial aleatoria
    circle.style.left = `${random(-100, window.innerWidth - size + 100)}px`
    circle.style.top = `${random(-100, window.innerHeight - size + 100)}px`

    // Color aleatorio
    circle.style.backgroundColor = randomColor()

    // Valores aleatorios para la animación
    circle.style.setProperty('--x1', `${random(-500, 500)}px`)
    circle.style.setProperty('--y1', `${random(-500, 500)}px`)
    circle.style.setProperty('--x2', `${random(-700, 700)}px`)
    circle.style.setProperty('--y2', `${random(-700, 700)}px`)
    circle.style.setProperty('--x3', `${random(-500, 500)}px`)
    circle.style.setProperty('--y3', `${random(-500, 500)}px`)

    // Duración aleatoria de la animación
    circle.style.animationDuration = `${random(20, 40)}s`

    // Retardo aleatorio de la animación
    circle.style.animationDelay = `${random(0, 10)}s`

    circlesContainer.appendChild(circle)
}
