const weddingDate = new Date("2027-01-01T00:00:00");

function updateCountdown(){

    const now = new Date();

    const diff = weddingDate - now;

    if(diff <= 0){
        document.getElementById("timer").innerHTML =
        "Hôm nay là ngày cưới!";
        return;
    }

    const days =
        Math.floor(diff/(1000*60*60*24));

    const hours =
        Math.floor(diff%(1000*60*60*24)/(1000*60*60));

    const minutes =
        Math.floor(diff%(1000*60*60)/(1000*60));

    const seconds =
        Math.floor(diff%(1000*60)/1000);

    document.getElementById("timer").innerHTML =
        `${days} ngày ${hours} giờ ${minutes} phút ${seconds} giây`;
}

setInterval(updateCountdown,1000);

updateCountdown();