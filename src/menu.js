const menuPage = () => {
    const contentLoader = document.getElementById('content');
    contentLoader.innerHTML = "";
    const imgContainer = document.createElement('div');
    imgContainer.innerHTML = "<img src=food.jpg>";
    contentLoader.appendChild(imgContainer);
}

export { menuPage };