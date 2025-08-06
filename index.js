const container = document.querySelector('body > div');
const fileDir = ['1-25', '26-50', '51-75', '76-100'];
const maxLength = 95;
let cnt = 1;

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const iframe = entry.target;
        if (entry.isIntersecting) {
            if (!iframe.src) {
                iframe.src = iframe.dataset.src;
                iframe.classList.add('loaded');
            }
        } else {
            iframe.removeAttribute('src');
            iframe.classList.remove('loaded');
        }
    });
});

const runTask = (task, condition) => {
    return new Promise(resolve => {
        requestIdleCallback(deadline => {
            while (deadline.timeRemaining() > 0 && condition()) {
                task();
            }
            if (condition()) {
                resolve(runTask(task, condition));
            } else {
                resolve();
            }
        });
    });
};

const addIframe = () => {
    const index = Math.floor((cnt - 1) / 25);
    const dataSrc = `${fileDir[index]}/${
        cnt + (cnt === 15 ? '_upload_file' : '')
    }/index.html`;

    const iframe = document.createElement('iframe');
    iframe.name = `${fileDir[index]}_${cnt}`;
    iframe.setAttribute('data-src', dataSrc);
    iframe.loading = 'lazy';

    const title = document.createElement('a');
    title.innerHTML = `Day ${cnt}`;
    title.className = 'title';
    title.href = dataSrc;
    title.target = '_blank';

    const reload = document.createElement('div');
    reload.innerHTML =
        '<svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>';
    reload.className = 'reload';
    reload.onclick = () => {
        iframe.src = dataSrc;
    };

    const data = document.createElement('div');
    data.className = 'data';
    data.appendChild(title);
    data.appendChild(reload);

    const div = document.createElement('div');
    div.className = 'item';
    div.appendChild(iframe);
    div.appendChild(data);

    container.appendChild(div);

    observer.observe(iframe);
    cnt++;
};

const canContinue = () => cnt <= maxLength;

runTask(addIframe, canContinue);
