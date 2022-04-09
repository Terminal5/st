const text_1 = 'SUBJECT: Pietre Johnson';
const text_2 = 'AFFILIATION: Civil Protection';
const text_3 = 'STATUS: Subject is hired, waiting further completion.';
const text = [text_1, text_2, text_3];
const typingText = document.getElementById('typing-text');
var i = 0,
    b = 0,
    j;
const typeInHault = 500;
const typeOutHault = 5000;
const typeInSpeed = 35;
const typeOutSpeed = 35;

var displaycomplete = false;
const typein = () => {
    if (!displaycomplete && i < text[b].length) {
        typingText.innerHTML += text[b][i];
        i++;
    } else if (i === text[b].length) {
        i = 0;
        displaycomplete = true;
        j = text[b].length;
        driver();
        return undefined;
    }
    const timein = setTimeout(typein, typeInSpeed);
};

const typeout = () => {
    if (j > 0) {
        typingText.innerHTML = typingText.innerHTML.slice(0, --j);
        const timeout = setTimeout(typeout, typeOutSpeed);
    } else if (j == 0) {
        displaycomplete = false;
        driver();
        if (b === 4) {
            b = 0;
        } else {
            b++;
        }
        return undefined;
    }
};
function driver() {
    if (typingText.innerHTML.length === 0) {
        setTimeout(typein, typeInSpeed);
    } else if (displaycomplete) {
        setTimeout(typeout, typeOutHault);
    }
    return undefined;
}
const id = setTimeout(driver, typeInHault);