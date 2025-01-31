
let cardContainer = document.getElementById('card-container')
let overlay = document.getElementById('overlay');
let btn = document.getElementById('btn');
let imgOverlay = document.getElementById('img-overlay')

fetch("https://lanciweb.github.io/demo/api/pictures/", { method: "GET" })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        for (let i = 0; i < data.length; i++) {
            let { title, date, url } = data[i];
            cardContainer.innerHTML += `
            <div class="card">
                <img src="/img/pin.svg" alt="" class="pin">
                <img id="card-img" src="${url}" class="card-img-top" alt="montagna">
                <div class="card-body">
                  <div class="card-text">
                    <h3 class="card-title">${title}</h3>
                    <div class="card-date">${date}</div>
                  </div>
                </div>
            </div>
            `;
        }

        let cards = document.querySelectorAll('.card');

        cards.forEach(card => {
            card.addEventListener('click', function() {
                console.log(card);
                // Seleziona l'immagine all'interno della card cliccata
                let img = card.querySelector('.card-img-top');
                // Recupera il valore del 'src' (l'URL dell'immagine)
                let imgUrl = img.src;

                imgOverlay.src = imgUrl

                overlay.style.display = 'flex'
            });
        });
    })
    .catch(error => {
        console.error("Errore nel recupero dei dati:", error);
    });

btn.addEventListener('click', function() {
    overlay.style.display = 'none'
})
