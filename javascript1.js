document.addEventListener("DOMContentLoaded", function() {
    function toggleMedia(index) {
        var event = document.querySelectorAll('.event')[index]; // Seleciona o evento clicado
        var mediaContainer = event.querySelector('.event-images'); // Contêiner de mídia (imagens/vídeos)
        
        // Verifica se o evento já está visível e alterna
        let isVisible = mediaContainer.style.display === 'block';
        
        // Oculta todas as imagens e vídeos
        document.querySelectorAll('.event-images').forEach(container => {
            container.style.display = 'none'; // Esconde todas as mídias
        });

        // Exibe ou esconde a mídia do evento atual
        mediaContainer.style.display = isVisible ? 'none' : 'block'; // Alterna visibilidade do evento clicado
    }

    window.toggleMedia = toggleMedia;

    // 🌸 Animação de corações flutuando
    function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️";
        heart.style.left = Math.random() * 100 + "vw"; 
        heart.style.animationDuration = (Math.random() * 2 + 3) + "s"; 
        heart.style.fontSize = (Math.random() * 20 + 10) + "px"; 
        
        document.getElementById("hearts-container").appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 4000);
    }

    setInterval(createHeart, 300);

    // 🌟 Permitir rolagem horizontal no celular (toque e mouse)
    document.querySelectorAll('.event-images').forEach(container => {
        let isDown = false;
        let startX;
        let scrollLeft;

        container.addEventListener('mousedown', (e) => {
            isDown = true;
            startX = e.pageX - container.offsetLeft;
            scrollLeft = container.scrollLeft;
        });

        container.addEventListener('mouseleave', () => {
            isDown = false;
        });

        container.addEventListener('mouseup', () => {
            isDown = false;
        });

        container.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - container.offsetLeft;
            const walk = (x - startX) * 2; 
            container.scrollLeft = scrollLeft - walk;
        });

        // Toque no celular
        let touchStartX = 0;
        let touchScrollLeft = 0;

        container.addEventListener('touchstart', (e) => {
            touchStartX = e.touches[0].pageX;
            touchScrollLeft = container.scrollLeft;
        });

        container.addEventListener('touchmove', (e) => {
            const touchMoveX = e.touches[0].pageX;
            const moveAmount = touchStartX - touchMoveX;
            container.scrollLeft = touchScrollLeft + moveAmount * 2;
        });
    });
});
