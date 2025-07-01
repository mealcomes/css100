const uploadButton = document.querySelector(".upload-button");
const dropzone = document.querySelector(".dropzone");
const span = document.querySelector("span.filename")
const img = document.querySelector("img.upload")
const input = document.querySelector("#upload-input");
const barLoading = document.querySelector(".bar-loading");
const syncing = document.querySelector("img.syncing");
const done = document.querySelector("img.done");

let filename = '';
let uploading = false;

dropzone.addEventListener('dragover', (e) => {
    e.preventDefault();
    e.stopPropagation();
    dropzone.classList.add('drag-over');
});
dropzone.addEventListener('dragenter', (e) => {
    e.preventDefault();
    e.stopPropagation();
    dropzone.classList.add('drag-over');
});
dropzone.addEventListener('dragend', (e) => {
    e.preventDefault();
    e.stopPropagation();
    dropzone.classList.remove('drag-over');
});
dropzone.addEventListener('dragleave', (e) => {
    e.preventDefault();
    e.stopPropagation();
    dropzone.classList.remove('drag-over');
});
dropzone.addEventListener('drop', (e) => {
    e.preventDefault();
    e.stopPropagation();
    const files = e.dataTransfer.files;
    filename = files[0].name;
    span.innerHTML = filename;
    span.title = filename;
    img.style.display = 'none';

    dropzone.classList.remove('drag-over');
});
input.addEventListener('change', (e) => {
    const files = input.files;
    filename = files[0].name;
    span.innerHTML = filename;
    span.title = filename;
    img.style.display = 'none';
});

uploadButton.addEventListener('click', () => {
    if (filename === '' || uploading) {
        return;
    }
    new Promise((res, _) => {
        uploading = true;
        uploadButton.innerHTML = 'Uploading...';
        barLoading.classList.add('active');
        syncing.classList.add('active');
        dropzone.classList.add('hide');
        setTimeout(() => {
            res();
        }, 3000);
    })
        .then(() => {
            uploadButton.classList.add('uploaded');
            uploadButton.innerHTML = 'Done';
            syncing.classList.remove('active');
            done.classList.add('active');
        })
})
