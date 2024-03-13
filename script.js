const randomColour = function() {
    const hexCode = "0123456789ABCDEF";
    let colour = "#";
    for (let i = 0; i < 6; i++) {
        colour += hexCode[Math.floor(Math.random() * 16)];
    }
    return colour;
};

function changeColour() {
    const newColour = randomColour();
    document.querySelector('.rectangle-box').style.backgroundColor = newColour;
    document.querySelector('.color-code').textContent = newColour;
}

document.querySelector('.button').addEventListener('click', changeColour);
