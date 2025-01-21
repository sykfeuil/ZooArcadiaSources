
function sanitizeHTML(text) {
    const tempHTML = document.createElement('div');
    tempHTML.textContent = text;
    return tempHTML.innerHTML;
}