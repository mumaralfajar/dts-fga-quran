function getAyah(callback) {
    let ayah = Math.floor(Math.random() * 6236) + 1

    fetch(`https://api.alquran.cloud/v1/ayah/${ayah}`)
        .then(response => response.json())
        .then(data => {
            let number = data["data"]["number"]
            let ayat = data["data"]["text"]
            let surah = data["data"]["surah"]["englishName"]
            let noAyah = data["data"]["numberInSurah"]
            let audioSrc = `https://cdn.islamic.network/quran/audio/128/ar.alafasy/${number}.mp3`;

            document.getElementById("but").innerHTML = `
                <label class="glass-label">Surah: ${surah}</label><label class="glass-label">Ayat: ${noAyah}</label>
                <br>
                <audio controls>
                    <source src="${audioSrc}" type="audio/mpeg">
                    Your browser does not support the audio element.
                </audio>
            `;
            document.getElementById("ayah").innerHTML = ayat;
            console.log(data["data"]["surah"]["englishName"])
            console.log(data["data"]["surah"]["number"])

        fetch(`https://api.alquran.cloud/v1/ayah/${number}/id.indonesian`)
            .then(response => response.json())
            .then(data => {
                document.getElementById("meaning").innerHTML = data["data"]["text"];
                console.log(data["data"]["text"])
            });
    });
    callback();
}

function masok() {
    $( "main" ).fadeIn(1500);
}

getBtn.addEventListener('click', function () {
    $( "main" ).fadeOut( "slow", function() {
        getAyah(masok);
    });
});

window.onload = function () {
    Particles.init({
        selector: '.background',
        color: '#EFEFBB',
        maxParticles: 300,

        // options for breakpoints
        responsive: [
            {
                breakpoint: 768,
                options: {
                    maxParticles: 200,
                    color: '#9aeee6',
                    connectParticles: false
                }
            }, {
                breakpoint: 425,
                options: {
                    maxParticles: 100,
                    connectParticles: false
                }
            }, {
                breakpoint: 320,
                options: {
                    maxParticles: 0
                }
            }
        ]
    })
};