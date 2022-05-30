var dropZone = document.getElementById('drop-zone');
var preview = document.getElementById('preview');
var fileInput = document.getElementById('file-input');

dropZone.addEventListener('dragover', function(e) {
    e.stopPropagation();
    e.preventDefault();
    this.style.background = '#e1e7f0';
}, false);

dropZone.addEventListener('dragleave', function(e) {
    e.stopPropagation();
    e.preventDefault();
    this.style.background = '#ffffff';
}, false);

fileInput.addEventListener('change', function () {
    dataGet(this.files[0]);
});

dropZone.addEventListener('drop', function(e) {
    e.stopPropagation();
    e.preventDefault();
    this.style.background = '#ffffff'; //背景色を白に戻す
    var files = e.dataTransfer.files; //ドロップしたファイルを取得
    if (files.length > 1) return alert('アップロードできるファイルは1つだけです。');
    fileInput.files = files; //inputのvalueをドラッグしたファイルに置き換える。
    dataGet(files[0]);
}, false);

// データとカラムの配置、プルダウンの作成
async function dataGet(file){
let text = await file.text();
document.getElementById('data').textContent = text;
let col = text.split("\n")[0]
document.getElementById('col').textContent = col;
select1 = document.getElementById("col1")
select2 = document.getElementById("col2")
col.split(",").forEach(e => {
    let tmp1 = document.createElement('option');
    let tmp2 = document.createElement('option');
    tmp1.value = e
    tmp1.textContent = e
    tmp2.value = e
    tmp2.textContent = e
    select1.appendChild(tmp1)
    select2.appendChild(tmp2)
});
}