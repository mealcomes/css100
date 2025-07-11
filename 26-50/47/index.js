const bg = document.querySelector("body > div");

let cnt = 1;
let css = "125,126,127,131,132,136,137,144,148,150,153,155,158,163,170,175,183,191,192,196,197,203,213,218,224,228,230,233,235,238,245,246,247,251,252,256,257";
let cssIndex = css.split(',').map(i => parseInt(i));

const runTask = (task, condition) => {
    requestIdleCallback((deadline) => {
        while (
            deadline.timeRemaining() > 0 &&
            condition()
        ) {
            task();
        }
        if (condition()) runTask(task, condition);
    })
}

const addCell = () => {
    let grid = document.createElement('div');
    grid.className = `grid`;

    let input = document.createElement('input');
    input.type = 'checkbox';
    input.id = `grid-${cnt}`;
    if (cssIndex.some((v, _) => v === cnt)) {
        input.checked = true;
    }

    let label = document.createElement('label');
    label.setAttribute('for', `grid-${cnt}`);
    label.className = 'tab';

    grid.append(input);
    grid.append(label);
    bg.append(grid);

    cnt++;
}

const canContinue = () => cnt <= 400;

runTask(addCell, canContinue);
