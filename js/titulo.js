if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", function () {
        loaded();
    });
} else if (document.attachEvent) {
    document.attachEvent("onreadystatechange", function () {
        loaded();
    });
}

function loaded() {

    setInterval(loop, 300);

}

var x = 0;

var titleText = ["|",

    "B",
    "Br",
    "Bru",
    "Brut",
    "Bruta",
    "Brutal",
    "Brutali",
    "Brutalit",
    "Brutality",
    "Brutality.d",
    "Brutality.de",
    "Brutality.dev",
    "Brutality.de",
    "Brutality.d",
    "Brutality.",
    "Brutalit",
    "Brutali",
    "Brutal",
    "Bruta",
    "Brut",
    "Bru",
    "Br",
    "B",
    " "
];


function loop() {
    document.getElementsByTagName("title")[0].innerHTML = titleText[x++ % titleText.length];
}
