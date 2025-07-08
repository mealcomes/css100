const sky = document.querySelector("body > div > div");
let cnt = 1;

const runTask = (task, condition) => {
    requestIdleCallback((deadline) => {
        while (deadline.timeRemaining() > 0 && condition()) {
            task();
        }
        if (condition()) runTask();
    })
}

const addStar = () => {
    let star = document.createElement('div');
    star.className = `star star-${cnt}`;
    sky.append(star);
    cnt++;
}

const canContinue = () => cnt <= 300;

runTask(addStar, canContinue);
