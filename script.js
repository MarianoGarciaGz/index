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
            // Do something useful with the value here or assign it to a global variable
        }
    }
}

// Configura la limitación de FPS deseada
const targetFPS = 10 // Por ejemplo, 30 FPS en lugar de 60
const frameTime = 1000 / targetFPS

let lastFrameTime = 0
let animationId

function animate(currentTime) {
    animationId = requestAnimationFrame(animate)

    // Calcula el tiempo transcurrido
    const deltaTime = currentTime - lastFrameTime

    // Solo renderiza si ha pasado suficiente tiempo
    if (deltaTime >= frameTime) {
        // Actualiza el tiempo del último frame
        // Ajusta para evitar acumulación de error
        lastFrameTime = currentTime - (deltaTime % frameTime)

        // Aquí va tu código de animación
        updateAnimation()
        renderScene()
    }
}

// Inicia la animación
animationId = requestAnimationFrame(animate)

// Para detener la animación si es necesario
function stopAnimation() {
    cancelAnimationFrame(animationId)
}
