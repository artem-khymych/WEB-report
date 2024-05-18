    function swapContent() {
    var input1 = document.getElementById('input1').value;
    var input2 = document.getElementById('input2').value;
    document.getElementById('input1').value = input2;
    document.getElementById('input2').value = input1;
}

    // TASK 4
    var squareSize = 150;
    function decreaseSize() {
    if (squareSize > 15) {
    squareSize -= 15;
    document.getElementById('square').style.width = squareSize + 'px';
    document.getElementById('square').style.height = squareSize + 'px';
}
}

    function increaseSize() {
    squareSize += 15;
    document.getElementById('square').style.width = squareSize + 'px';
    document.getElementById('square').style.height = squareSize + 'px';
}

    // TASK 6
    function duplicateItems() {
    var list = document.getElementById('list').getElementsByTagName('li');
    for (var i = 0; i < list.length; i++) {
    var currentValue = parseInt(list[i].innerText);
    var newValue = currentValue * 2;
    list[i].innerText = newValue;
}
}

    function sumCats(){
    const categoriesList = document.querySelectorAll('#categories .item');


    const categoriesCount = categoriesList.length;
    console.log(`Кількість категорій: ${categoriesCount}`);


    categoriesList.forEach(category => {

    const categoryTitle = category.querySelector('h2').textContent;

    const categoryItems = category.querySelectorAll('ul li');
    // Підрахунок кількості елементів у категорії
    const itemsCount = categoryItems.length;
    // Виведення результату у консоль
    console.log(`Категорія: ${categoryTitle}, Кількість елементів: ${itemsCount}`);
});
}

    // TASK 8
    document.querySelector('.login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Заборона перезавантаження сторінки після відправки форми

    // Отримання значень полів форми
    const emailValue = this.elements.email.value.trim();
    const passwordValue = this.elements.password.value.trim();

    // Перевірка на заповненість полів
    if (!emailValue || !passwordValue) {
    alert('All form fields must be filled in');
    return; // Зупинка подальшої обробки, якщо є незаповнені поля
}

    // Створення об'єкта з введеними даними
    const formData = {
    email: emailValue,
    password: passwordValue
};

    // Виведення об'єкта з даними у консоль
    console.log(formData);

    // Очищення значень полів форми
    this.reset();
});

    //TASK 9
    function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

    // Отримуємо кнопку та елемент span з текстом кольору
    const changeColorButton = document.querySelector('.change-color');
    const colorSpan = document.querySelector('.color');

    // Додаємо обробник події на клік по кнопці
    changeColorButton.addEventListener('click', function() {
    // Генеруємо випадковий hex-колір
    const randomColor = getRandomHexColor();

    // Змінюємо колір фону елемента <body> через інлайн-стиль
    document.body.style.backgroundColor = randomColor;
    // Задаємо текстовий вміст span.color на сторінці згідно зі згенерованим кольором
    colorSpan.textContent = randomColor;
});

    // TASK 10
    // Функція для генерування випадкового hex-кольору
    function getRandomHexColor() {
        return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

    // Отримуємо елементи з DOM
    const input = document.querySelector('input[type="number"]');
    const createButton = document.querySelector('button[data-create]');
    const destroyButton = document.querySelector('button[data-destroy]');
    const boxesContainer = document.querySelector('#boxes');

    // Функція для створення колекції елементів
    function createBoxes(amount) {
    // Очищення попередньої колекції, якщо вона існує
    boxesContainer.innerHTML = '';

    // Створення нової колекції
    let size = 30;
    for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = size + 'px';
    box.style.height = size + 'px';
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.appendChild(box);
    size += 10;
}
}

    // Обробники подій для кнопок
    createButton.addEventListener('click', function() {
    const amount = parseInt(input.value);
    if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = ''; // Очищення значення в інпуті
} else {
    alert('Please enter a number between 1 and 100.');
}
});

    destroyButton.addEventListener('click', function() {
    boxesContainer.innerHTML = ''; // Очищення колекції елементів
});

