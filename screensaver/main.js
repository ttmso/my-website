function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function screensaver() {
    // Find the canvas
    var c = document.getElementById("screensaver");
    var ctx = c.getContext("2d");

    // Canvas width and height
    var scrw = window.innerWidth;
    var scrh = window.innerHeight;
    c.width = scrw;
    c.height = scrh;

    // Box width and height
    const w = 128;
    const h = 128;

    // Box x and y
    var x = Math.floor(Math.random() * ((scrw - w) + 1));
    var y = Math.floor(Math.random() * ((scrh - h) + 1));

    // Box x velocity and y velocity
    var xvel = Math.random() > 0.5 ? 2 : -2;
    var yvel = Math.random() > 0.5 ? 2 : -2;

    // The update loop
    while (true) {
        scrw = window.innerWidth;
        scrh = window.innerHeight;
        c.width = scrw;
        c.height = scrh;

        // Update
        x += xvel;
        y += yvel;

        // Check and resolve collisions
        var resolves = 0;
        if (x < 0) {
            x = -x;
            xvel = -xvel;
            resolves++;
        }
        if (x > scrw - w) {
            x = -(x - (scrw - w)) + (scrw - w);
            xvel = -xvel;
            resolves++;
        }
        if (y < 0) {
            y = -y;
            yvel = -yvel;
            resolves++;
        }
        if (y > scrh - h) {
            y = -(y - (scrh - h)) + (scrh - h);
            yvel = -yvel;
            resolves++;
        }

        if (resolves > 1) {
            console.log("Nice!");
        }

        // Draw
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, scrw, scrh);
        ctx.fillStyle = "white";
        ctx.fillRect(x, y, w, h);
        ctx.fillStyle = "black";
        ctx.fillRect(x + 2, y + 2, w - 4, h - 4);
        await sleep(10);
    }
}

screensaver();