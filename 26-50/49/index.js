const bg = document.querySelector("body > div");

let cnt = 1;
let css = "125,126,127,131,132,136,137,144,148,150,153,155,158,163,170,175,183,191,192,196,197,203,213,218,224,228,230,233,235,238,245,246,247,251,252,256,257";
let cssIndex = css.split(',').map(i => parseInt(i));

const runTask = (task, condition) => {
    return new Promise((res, _) => {
        requestIdleCallback((deadline) => {
            while (
                deadline.timeRemaining() > 0 &&
                condition()
            ) {
                task();
            }
            if (condition()) runTask(task, condition);
            res();
        })
    });
}

const addCell = () => {
    let cell = document.createElement('div');
    cell.className = `trigger trigger-${cnt}`;

    bg.append(cell);

    cnt++;
}

const addBall = () => {
    let ball = document.createElement('div');
    ball.className = 'ball';
    bg.appendChild(ball);
}

const canContinue = () => cnt <= 400;

runTask(addCell, canContinue)
    .then(() => {
        addBall();
    })
    .catch(e => {
    });

