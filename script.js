```javascript id="1l3mcc"
/* =========================
   COUNTDOWN
========================= */

const weddingDate =
new Date("2027-01-01T00:00:00").getTime();

function updateCountdown(){

    const now = new Date().getTime();

    const distance =
    weddingDate - now;

    if(distance < 0){

        document.getElementById("days").innerHTML = 0;
        document.getElementById("hours").innerHTML = 0;
        document.getElementById("minutes").innerHTML = 0;
        document.getElementById("seconds").innerHTML = 0;

        return;
    }

    const days =
    Math.floor(
    distance /
    (1000 * 60 * 60 * 24)
    );

    const hours =
    Math.floor(
    (
    distance %
    (1000 * 60 * 60 * 24)
    ) /
    (1000 * 60 * 60)
    );

    const minutes =
    Math.floor(
    (
    distance %
    (1000 * 60 * 60)
    ) /
    (1000 * 60)
    );

    const seconds =
    Math.floor(
    (
    distance %
    (1000 * 60)
    ) /
    1000
    );

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
}

updateCountdown();
setInterval(updateCountdown,1000);


/* =========================
   MUSIC
========================= */

const music =
document.getElementById("bgMusic");

const musicBtn =
document.getElementById("musicBtn");

let playing = false;

musicBtn.addEventListener("click",()=>{

    if(!playing){

        music.play();
        musicBtn.innerHTML = "❚❚";
        playing = true;

    }else{

        music.pause();
        musicBtn.innerHTML = "♪";
        playing = false;
    }

});


/* =========================
   FLOWER EFFECT
========================= */

function createPetal(){

    const petal =
    document.createElement("div");

    petal.classList.add("petal");

    petal.innerHTML = "✿";

    petal.style.left =
    Math.random()*100 + "vw";

    petal.style.fontSize =
    (10 + Math.random()*20) + "px";

    petal.style.color =
    "#d4af37";

    petal.style.animationDuration =
    (5 + Math.random()*8) + "s";

    document.body.appendChild(petal);

    setTimeout(()=>{
        petal.remove();
    },12000);

}

setInterval(createPetal,400);


/* =========================
   IMAGE POPUP
========================= */

const images =
document.querySelectorAll(
".gallery-grid img"
);

images.forEach(img=>{

    img.addEventListener("click",()=>{

        const overlay =
        document.createElement("div");

        overlay.style.position =
        "fixed";

        overlay.style.top = 0;
        overlay.style.left = 0;

        overlay.style.width =
        "100%";

        overlay.style.height =
        "100%";

        overlay.style.background =
        "rgba(0,0,0,.9)";

        overlay.style.display =
        "flex";

        overlay.style.justifyContent =
        "center";

        overlay.style.alignItems =
        "center";

        overlay.style.zIndex =
        "9999";

        const photo =
        document.createElement("img");

        photo.src = img.src;

        photo.style.maxWidth =
        "90%";

        photo.style.maxHeight =
        "90%";

        photo.style.borderRadius =
        "20px";

        overlay.appendChild(photo);

        overlay.onclick = ()=>{

            overlay.remove();

        }

        document.body.appendChild(
        overlay
        );

    });

});


/* =========================
   SCROLL ANIMATION
========================= */

const observer =
new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity = 1;

entry.target.style.transform =
"translateY(0)";

}

});

},

{
threshold:0.2
}

);

document
.querySelectorAll(
".event-card,.item,.gallery-grid img"
)

.forEach(el=>{

el.style.opacity = 0;

el.style.transform =
"translateY(40px)";

el.style.transition =
".8s";

observer.observe(el);

});
```
