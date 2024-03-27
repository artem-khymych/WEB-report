let lab_num = 'report-1';

document.addEventListener('click', function(event) {
    if (event.target.id.slice(0,5) === 'block') {
        event.preventDefault();
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                document.getElementById('main-content').innerHTML = xhr.responseText;
            }
        };
        console.log(event.target.id.replace("block",''))
        xhr.open('GET', `content/${lab_num}/task${event.target.id.replace("block",'')}.html`, true);
        xhr.send();
    }
});

document.addEventListener('click', function(event) {
    if (event.target.id === 'button-lab-1') {
        lab_num ='report-1';
        console.log(event.target.id)
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                document.getElementById('sidebar-main').innerHTML = xhr.responseText;
            }
        };
        xhr.open('GET', `content/${lab_num}/page.html`, true);
        xhr.send();
    }
});
// ЛАБА 2
document.addEventListener('click', function(event) {
    if (event.target.id.slice(0,-1) === 'button-lab-') {
        lab_num=`report-${event.target.id.slice(-1)}`;
        event.preventDefault();
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                document.getElementById('sidebar-main').innerHTML = xhr.responseText;
            }
        };
        xhr.open('GET', `content/${lab_num}/page.html`, true);
        xhr.send();
    }
});