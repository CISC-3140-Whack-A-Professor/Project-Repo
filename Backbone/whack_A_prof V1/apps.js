const score = document.querySelector(".score span");
const missed = document.querySelector(".missed span");
const comt = document.querySelector(".holescont");
const holes = document.querySelectorAll(".hole");
const playBtn = document.querySelector(".play");
const pauseBtn = document.querySelector(".pause");
const exitBtn = document.querySelector(".stop");
const cursor = document.querySelector(".cursor img");
var headshotaudio = new Audio('graphics_audio/assets_Dart.mp3');
var backgroundmusic = new Audio('graphics_audio/backgroundSound1.mp3');

var result = 0;
var missedscore = 0;
var result2 = 0;
var count = 0;


playBtn.addEventListener("click", () => {

    window.addEventListener("mousemove", (e) => {
        cursor.style.top = e.pageY + "px";
        cursor.style.left = e.pageX + "px";
        //holes.style.disabled = true;

        window.addEventListener("click", () => {
            cursor.style.animation = "hit 0.2s ease";
            setTimeout(() => {
                cursor.style.removeProperty("animation");
            }, 100);
        });
    });
    playBtn.disabled = true;
    exitBtn.disabled = false;
    pauseBtn.disabled = false;
    backgroundmusic.currentTime = 0;
    backgroundmusic.play();
    let hole;

    const startGame = setInterval(() => {

        let arrayNo = Math.floor(Math.random() * 5);
        hole = holes[arrayNo];

        let image = document.createElement("img");
        image.setAttribute("src", "graphics_audio/cartoonprofessor.png");
        image.setAttribute("class", "mole");
        image.setAttribute("data-id", "");
        hole.appendChild(image);

        setTimeout(() => {
            hole.removeChild(image);
        }, 800);
        count++;


        if (missedscore >= 10) {
            clearInterval(startGame);
            backgroundmusic.pause();
            backgroundmusic.currentTime = 0;
            alert(`GAME OVER!\nYour Score: ${result}\nMissed moles: ${missedscore}`);
            playBtn.disabled = false;
            exitBtn.disabled = true;
            pauseBtn.disabled = true;

            count = 0;
            result = 0;
            score.innerText = result;
            missed.innerText = count;
        }
        missedscore = count - result;
        missed.innerText = missedscore;
    }, 900);


    window.addEventListener("click", (e) => {
        e.preventDefault();
        if (e.target == hole) {
            backgroundmusic.pause();
            headshotaudio.pause();
            headshotaudio.currentTime = 0;
            headshotaudio.play();
            result++
            score.innerText = result;
            backgroundmusic.play();
        }
    });
    exitBtn.addEventListener("click", () => {
        clearInterval(startGame);
        backgroundmusic.pause();
        backgroundmusic.currentTime = 0;
        playBtn.disabled = false;
        exitBtn.disabled = true;
        pauseBtn.disabled = true;
        //alert(`GAME OVER!\nYour Score: ${result}\nMissed moles: ${missedscore}`);
        count = 0;
        result = 0;
        score.innerText = result;
        missed.innerText = count;

    });
    pauseBtn.addEventListener('click', () => {
        result2 = result;
        backgroundmusic.currentTime = 0;
        backgroundmusic.pause();
        clearInterval(startGame);
        playBtn.disabled = false;
        exitBtn.disabled = false;
        pauseBtn.disabled = true;
    });

});





