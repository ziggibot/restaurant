const titlePage = () => {
    const contentLoader = document.getElementById('content');
    contentLoader.innerHTML = "";
    const textContainer = document.createElement('p');
    textContainer.innerHTML = "Tolles Restaurant";
    contentLoader.appendChild(textContainer);
}

export { titlePage };