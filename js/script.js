document.getElementById('block1').addEventListener('click', function(event) {
    event.preventDefault();
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById('main-content').innerHTML = xhr.responseText;
        }
    };
    xhr.open('GET', 'content/report-1/task1.html', true);
    xhr.send();
});

document.getElementById('block2').addEventListener('click', function(event) {
    event.preventDefault();
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById('main-content').innerHTML = xhr.responseText;
        }
    };
    xhr.open('GET', 'content/report-1/task2.html', true);
    xhr.send();
});

document.getElementById('block3').addEventListener('click', function(event) {
    event.preventDefault();
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById('main-content').innerHTML = xhr.responseText;
        }
    };
    xhr.open('GET', 'content/report-1/task3.html', true);
    xhr.send();
});

document.getElementById('block4').addEventListener('click', function(event) {
    event.preventDefault();
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById('main-content').innerHTML = xhr.responseText;
        }
    };
    xhr.open('GET', 'content/report-1/task4.html', true);
    xhr.send();
});

document.getElementById('block5').addEventListener('click', function(event) {
    event.preventDefault();
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById('main-content').innerHTML = xhr.responseText;
        }
    };
    xhr.open('GET', 'content/report-1/task5.html', true);
    xhr.send();
});
document.getElementById('block6').addEventListener('click', function(event) {
    event.preventDefault();
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById('main-content').innerHTML = xhr.responseText;
        }
    };
    xhr.open('GET', 'content/report-1/task6.html', true);
    xhr.send();
});

document.getElementById('block7').addEventListener('click', function(event) {
    event.preventDefault();
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById('main-content').innerHTML = xhr.responseText;
        }
    };
    xhr.open('GET', 'content/report-1/task7.html', true);
    xhr.send();
});