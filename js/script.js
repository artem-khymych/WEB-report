document.getElementById('block1').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('main-content').innerHTML = '<h3>Вміст Блоку 1</h3><p>Це вміст Блоку 1.</p>';
});

document.getElementById('block2').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('main-content').innerHTML = '<h3>Вміст Блоку 2</h3><p>Це вміст Блоку 2.</p>';
});

document.getElementById('block3').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('main-content').innerHTML = '<h3>Вміст Блоку 3</h3><p>Це вміст Блоку 3.</p>';
    document.getElementById('additional-buttons').style.display = 'block';
});

document.getElementById('block4').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('main-content').innerHTML = '<h3>Вміст Блоку 4</h3><p>Це вміст Блоку 4.</p>';
    document.getElementById('additional-buttons').style.display = 'none';
});
