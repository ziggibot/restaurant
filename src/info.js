const infoPage = () => {
    const contentLoader = document.getElementById('content');
    contentLoader.innerHTML = "";
    const textContainer = document.createElement('p');
    textContainer.innerHTML = "Hier finden Sie uns";
    contentLoader.appendChild(textContainer);
}

export { infoPage };