let cardImg = document.getElementById('card-img');
let cardText = document.getElementById('card-text');
let cardContainer = document.getElementById('card-container')

fetch("https://lanciweb.github.io/demo/api/pictures/", { method: "GET" })
    .then(response => response.json())
    .then(data => {
        // Stampa l'intera risposta dell'API per esaminare la struttura
        console.log(data);
        for (let i=0; i < data.length ; i++){
            let {title, date, url} = data[i]
            // console.log(title, date, url)
            cardContainer.innerHTML += `
            <div class="card">
                <img src="/img/pin.svg" alt="" class="pin">
                <img id="card-img" src="${url}"" class="card-img-top" alt="montagna">
                <div class="card-body">
                  <div id="card-text" class="card-text">
                    <div>${title}</div>
                    <div>${date}</div>
                  </div>
                </div>
            </div>
            `
        }
    })
    .catch(error => {
        console.error("Errore nel recupero dei dati:", error);
    });
