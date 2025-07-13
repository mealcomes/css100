const bg = document.querySelector("body > div");

const addCell = () => {
    let cnt = 12;
    for (let i = 1; i <= 10; i++) {
        let ring = document.createElement('div');
        ring.className = `ring-${i}`;

        for (let j = 1; j <= cnt + i * 6; j++) {
            let ball = document.createElement('div');
            ball.className = `ball-${j}`;
            let fill = document.createElement('div');
            fill.className = `fill`;
            ball.appendChild(fill);
            ring.appendChild(ball);
        }
        bg.append(ring);
    }
}

addCell();