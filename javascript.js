 document.getElementById("login-form").addEventListener("submit", function(event) {
            event.preventDefault();
            var usuario = document.getElementById("usuario").value;
            var senha = document.getElementById("senha").value;
            
            if (usuario === "27/12/2024" && senha === "01/01/2025") {
                alert("Eu te amo meu amor");
                window.location.href = "PRESENTE 2 .html";
            } else {
                alert("AMORRRR LEMBRA DO DIA AMORRRR!!!!");
            }
        });


        
document.addEventListener("DOMContentLoaded", function() {
        function createHeart() {
            const heart = document.createElement("div");
            heart.classList.add("heart");
            heart.innerHTML = "❤️";
            heart.style.left = Math.random() * 100 + "vw"; // Posição horizontal aleatória
            heart.style.animationDuration = (Math.random() * 2 + 3) + "s"; // Duração entre 3 e 5s
            heart.style.fontSize = (Math.random() * 20 + 10) + "px"; // Tamanho aleatório
            
            document.getElementById("hearts-container").appendChild(heart);

            setTimeout(() => {
                heart.remove();
            }, 4000);
        }
        setInterval(createHeart, 300);
});
