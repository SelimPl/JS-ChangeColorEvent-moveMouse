const h1 = document.querySelector("h1");
document.body.addEventListener("mousemove", (event) => {
    // console.log(event.clientX, event.clientY);
    // h1.textContent = `${event.pageX}, ${event.pageY}`
    const x = event.clientX;
    const y = event.clientY;
    const width = window.innerWidth;
    const height = window.innerHeight;
    h1.textContent = `${x}, ${y}`

    const red = x / width * 100;
    const blue = y / height * 100;
    const green = (x / width * 100) + (y / height * 100);


    document.body.style.backgroundColor = `rgb(${red}%, ${green}%, ${blue}%)`

    // document.body.style.backgroundColor = `rgb(${event.clientX/3},${event.clientY/2}, ${event.clientX/event.clientY *30})`;
    // // document.body.style.backgroundColor = "rgb(" + event.clientX / 3, +"," + event.clientY / 2 + ","
    // // 200)

})