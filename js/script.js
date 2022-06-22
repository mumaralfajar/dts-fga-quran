const btn = document.getElementById('btn');

function getAyah(callback) {
    fetch("https://api.alquran.cloud/v1/ayah/random/ar")
        .then(response => response.json())
        .then(data => {
            let number = data["data"]["number"]
            let ayat = data["data"]["text"]
            let surah = data["data"]["surah"]["englishName"]
            let noAyah = data["data"]["numberInSurah"]
            str = `<label class="glass-label">Surah: ${surah}</label> <label class="glass-label">Ayat: ${noAyah}</label>`
            document.getElementById("but").innerHTML = str;
            document.getElementById("ayah").innerHTML = ayat;
            console.log(data["data"]["surah"]["englishName"])
            console.log(data["data"]["surah"]["number"])

        fetch(`https://api.alquran.cloud/v1/ayah/${number}/id.indonesian`)
            .then(response => response.json())
            .then(data => {
                let arti = data["data"]["text"]
                document.getElementById("meaning").innerHTML = arti;
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
                    color: '#48F2E3',
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