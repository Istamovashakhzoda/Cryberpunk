let bubleArr = [];
document.addEventListener("mousemove", (e) => {
    let bubles = document.createElement("bubles"); 
    // лучше div ochingda bubbles degan class bering, bundan chiroyliroq ko'rindi code
    let x = e.pageX;
    let y = e.pageY;
    let size = Math.random() * 60;
    bubles.style.width = 1 + size + "px";
    bubles.style.height = 1 + size + "px";
    bubles.style.left = x - size / 2 + "px";
    bubles.style.top = y - size / 2 + "px";
    document.body.appendChild(bubles);
    setTimeout(function () {
        bubles.remove();
    }, 5000);
}); 