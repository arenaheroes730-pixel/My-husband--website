function showPage(pageName) {

    document.querySelectorAll(".page").forEach(function(page) {
        page.classList.remove("active");
    });

    document.getElementById(pageName).classList.add("active");
}


function openGift(number) {

    let message = document.getElementById("giftMessage");

    if (number === 1) {

        message.innerHTML =
            "Tkluuuuu awlelelelee rasmalai chhiyeeee 🙂🎀 Chmpuuuu obsessed 🙂 Meko paani wali bhook lgrhii 🥲🎀 Mereee kjuktliii 💗🎀 Khajaungi tkluuu ko hummmmm 😋🎀💖 Mela babbuuu, loveuhhhhh 🫶🏻💗💖";

    }

    if (number === 2) {

        message.innerHTML =
            "Tysmmm mere life mei aane ke liyeee, khushi laane ke liyeee meree sunshineee 🌞💗 InshaAllah end nikaah pe krengeyy, ofcc hrmesha sathhhunn 😭🎀🫂🫂 Mini versions bnayengey sathhh, mere cutieepiee ke jaisheee 😭🎀💗";

    }

    if (number === 3) {

        message.innerHTML =
            "Mere besttt miyaajiii, meree sweetieee 🥹❤️ I lobuhhh ssooo muchhh meri jaannnn! I can't imagine my life without youuu. 🫶🏻💕 Lobuhhh youuu in every universeee, meree shmpuuuuuu! Uuuuuuuuummmmmwwwwaaaaahhhhh 😘💋❤️";

    }

    createHearts();
}


/* =========================
   GIFT FLOATING HEARTS
========================= */

function createHearts() {

    const hearts = ["❤️", "💕", "💗", "💖", "💞", "🎀", "✨", "🥹"];

    for (let i = 0; i < 12; i++) {

        let heart = document.createElement("span");

        heart.className = "floating-heart";

        heart.innerHTML =
            hearts[Math.floor(Math.random() * hearts.length)];

        heart.style.left =
            Math.random() * 100 + "vw";

        heart.style.animationDuration =
            (1.5 + Math.random() * 1.5) + "s";

        heart.style.fontSize =
            (18 + Math.random() * 20) + "px";

        document.body.appendChild(heart);

        setTimeout(function() {
            heart.remove();
        }, 3000);
    }
}


/* =========================
   VOICE SURPRISE
========================= */

function playVoice() {

    const voice = document.getElementById("myVoice");

    if (!voice) {
        console.log("Voice audio not found.");
        return;
    }

    voice.currentTime = 0;

    voice.play().then(function() {

        createVoiceHearts();

    }).catch(function(error) {

        console.log("Voice could not play:", error);

    });
}


/* =========================
   VOICE HEARTS
========================= */

function createVoiceHearts() {

    const hearts = ["❤️", "💕", "💗", "💖", "💞", "🎀", "✨", "🥹"];

    for (let i = 0; i < 15; i++) {

        let heart = document.createElement("span");

        heart.className = "floating-heart";

        heart.innerHTML =
            hearts[Math.floor(Math.random() * hearts.length)];

        heart.style.left =
            Math.random() * 100 + "vw";

        heart.style.bottom = "80px";

        heart.style.animationDuration =
            (1.5 + Math.random() * 1.5) + "s";

        heart.style.fontSize =
            (18 + Math.random() * 20) + "px";

        document.body.appendChild(heart);

        setTimeout(function() {
            heart.remove();
        }, 3000);
    }
}
function createHearts() {

    const hearts = ["❤️", "💕", "💗", "💖", "💞", "🎀", "✨", "🥹"];

    for (let i = 0; i < 12; i++) {

        let heart = document.createElement("span");

        heart.className = "floating-heart";

        heart.innerHTML =
            hearts[Math.floor(Math.random() * hearts.length)];

        heart.style.left =
            Math.random() * 100 + "vw";

        heart.style.animationDuration =
            (1.5 + Math.random() * 1.5) + "s";

        heart.style.fontSize =
            (18 + Math.random() * 20) + "px";

        document.body.appendChild(heart);

        setTimeout(function() {
            heart.remove();
        }, 3000);
    }
}


/* VOICE */

function playVoice() {

    const voice = document.getElementById("myVoice");

    if (!voice) {
        alert("Voice audio not found 😭");
        return;
    }

    voice.currentTime = 0;

    voice.play().then(function() {

        createVoiceHearts();

    }).catch(function(error) {

        console.log("Voice error:", error);
        alert("Voice couldn't play 😭");

    });
}


/* VOICE HEARTS */

function createVoiceHearts() {

    const hearts = ["❤️", "💕", "💗", "💖", "💞", "🎀", "✨", "🥹"];

    for (let i = 0; i < 15; i++) {

        let heart = document.createElement("span");

        heart.className = "floating-heart";

        heart.innerHTML =
            hearts[Math.floor(Math.random() * hearts.length)];

        heart.style.left =
            Math.random() * 100 + "vw";

        heart.style.bottom = "80px";

        heart.style.animationDuration =
            (1.5 + Math.random() * 1.5) + "s";

        heart.style.fontSize =
            (18 + Math.random() * 20) + "px";

        document.body.appendChild(heart);

        setTimeout(function() {
            heart.remove();
        }, 3000);
    }
}
function playVoice() {

    const voice = document.getElementById("myVoice");
    const button = document.getElementById("voiceButton");

    voice.currentTime = 0;

    button.classList.add("voice-playing");

    voice.play().then(function() {

        createVoiceHearts();

    }).catch(function(error) {

        console.log("Voice could not play:", error);

    });

    voice.onended = function() {
        button.classList.remove("voice-playing");
    };
}

