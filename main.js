console.log("Welcome!")

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function screen_saver() {
    console.log("Screen saver init")

    // Find the canvas
    var c = document.getElementById("screen_saver");
    var ctx = c.getContext("2d");

    // Canvas width and height
    var scrw = c.clientWidth;
    var scrh = c.clientHeight;

    // Box width and height
    const w = 32;
    const h = 32;

    // Box x and y
    var x = 0;
    var y = 0;

    // Box x velocity and y velocity
    var xvel = 1;
    var yvel = 1;

    while (true) {
        // Update
        x += xvel;
        y += yvel;

        // Check and resolve collisions
        var resolves = 0
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
            // TODO: Add celebratory animation
            console.log("nice")
        }

        // Draw
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, scrw, scrh);
        ctx.fillStyle = "white";
        ctx.fillRect(x, y, w, h);
        ctx.fillStyle = "black";
        ctx.fillRect(x + 2, y + 2, w - 4, h - 4);
        await sleep(1000 / 60);
    }
}

screen_saver();
