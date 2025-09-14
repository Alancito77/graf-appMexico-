        // Referencias a los elementos
        const greenSlider = document.getElementById('greenSlider');
        const redSlider = document.getElementById('redSlider');
        const greenValue = document.getElementById('greenValue');
        const redValue = document.getElementById('redValue');
        const franjaVerde = document.getElementById('franjaVerde');
        const franjaRoja = document.getElementById('franjaRoja');

        // Función para convertir a hexadecimal
        function toHex(value) {
            const hex = parseInt(value).toString(16).toUpperCase();
            return hex.length === 1 ? '0' + hex : hex;
        }

        // Función para actualizar el color verde
        function updateGreen() {
            const greenIntensity = greenSlider.value;
            const greenColor = `rgb(0, ${greenIntensity}, 34)`; // Mantenemos algo de azul para el tono verde
            const greenHex = `#00${toHex(greenIntensity)}22`;
            
            franjaVerde.style.backgroundColor = greenColor;
            greenValue.textContent = greenHex;
            greenValue.style.backgroundColor = greenColor;
            greenValue.style.color = greenIntensity > 128 ? '#ffffff' : '#000000';
        }

        // Función para actualizar el color rojo
        function updateRed() {
            const redIntensity = redSlider.value;
            // Crear rojo puro donde solo el componente rojo cambia
            const redColor = `rgb(${redIntensity}, 0, 0)`;
            const redHex = `#${toHex(redIntensity)}0000`;
            
            franjaRoja.style.backgroundColor = redColor;
            redValue.textContent = redHex;
            redValue.style.backgroundColor = redColor;
            redValue.style.color = redIntensity > 128 ? '#ffffff' : '#000000';
        }

        // Event listeners para los sliders
        greenSlider.addEventListener('input', updateGreen);
        redSlider.addEventListener('input', updateRed);

        // Inicializar colores
        updateGreen();
        updateRed();

        // Efecto de hover mejorado para las franjas
        document.querySelectorAll('.franja').forEach(franja => {
            franja.addEventListener('mouseenter', function() {
                this.style.transform = 'scaleY(1.05)';
                this.style.zIndex = '10';
            });
            
            franja.addEventListener('mouseleave', function() {
                this.style.transform = 'scaleY(1)';
                this.style.zIndex = '1';
            });
        });