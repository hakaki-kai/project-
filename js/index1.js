let button = document.querySelector(`.continueu`)

button?.addEventListener(`click`, () => {
    let kA = 0;
    let kB = 0;
    let kC = 0;
    let kD = 0;
    let type;
    let raduoNode = document.querySelectorAll(`.form-check-input`)
    for (let i = 0; i < raduoNode.length; i++) {
        if (raduoNode[i].checked) {
            data = raduoNode[i].value
            if (data == `A`) {
                kA++
            } else if (data == `B`) {
                kB++
            } else if (data == `C`) {
                kC++
            } else {
                kD++
            }
        }
    }
    //функционал который определяет тип
    if (kA => kB && kA > kC && kA > kD) {
        type = `<p><b>Флегматики.</b> Вам следует быть быстрее и
        решительнее в решении вопросов, выполнении
        задач или поручений. Вам стоит постоянно
        торопить и подталкивать себя. Но если данный
        способ не помогает, то попробуйте отводить
        себе временные границы для выполнения
        определенной задачи. Например, при
        выполнении домашнего задания поставьте себе
        таймер на 1,2 или 3 часа.</p>`
    }
    if (kB => kA && kB > kC && kB > kD) {
        type = `<p><b>Меланхолики.</b> Для того, чтобы быть
        максимально продуктивным, вам нужно
        дозировать поступающую на вас нагрузку.
        Например, делайте домашнее задание по
        каждому предмету одно за другим, а не все
        предметы вместе.</p>`
    }
    if (kC > kA && kC > kB && kC > kD) {
        type = `<p><b>Холерики.</b>  Принимайте участия в деятельности,
        где предусмотрена работа в команде, а также в
        деятельности, где нужно проявить свои
        спортивные навыки и выплеснуть энергию. В
        мероприятиях и ситуациях, которые требуют
        показать ваши интеллектуальные способности,
        старайтесь контролировать свою энергию,
        будьте спокойны и не делайте поспешных
        решений на эмоциях. Также вам стоит развивать
        свою усидчивость (чтение книг, собирание
        пазлов)</p>`}
    if (kD > kA && kD > kB && kD > kC) {
    type = `<p><b>Сангвиники.</b> Для поддержания или повышения
                    до нужного для вас уровня успеваемости вам
                    следует как можно больше проявлять себя.
                    Примером служат дополнительные или
                    индивидуальные задания, заданные учителем. В
                    таких ситуациях вы можете проявить себя в
                    полной мере. Принимайте участие в различных
                    конкурсах, олимпиадах и других видах
                    интеллектуальной деятельности.</p>`
    }

    localStorage.setItem('type', type);
})

function MyFunction() {
    window.location.href = 'res.html';
}

const btn = document.querySelector('.dark-mode-btn');


// Проверка темной темы в system settings
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add('dark');
    btn.classList.add('dark-mode-btn--active');
}

// проверка темной темы в localStorage
if (localStorage.getItem('darkMode') === 'dark') {
    document.body.classList.add('dark');
    btn.classList.add('dark-mode-btn--active');
}else if (localStorage.getItem('darkMode') === 'light') {
    document.body.classList.remove('dark');
    btn.classList.remove('dark-mode-btn--active');
}

//включение/выключение темной темы по времени суток
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
    if (event.matches) {
        document.body.classList.add('dark');
        btn.classList.add('dark-mode-btn--active');
        localStorage.setItem('darkMode', 'dark');
    } else {
        document.body.classList.remove('dark');
        btn.classList.remove('dark-mode-btn--active');
        localStorage.setItem('darkMode', 'light');
    }
})

// включение/выключение темной темы
btn.onclick = function() {
    btn.classList.toggle('dark-mode-btn--active');
    const isDark = document.body.classList.toggle('dark');

    if (isDark) {
        localStorage.setItem('darkMode', 'dark');
    } else {
        localStorage.setItem('darkMode', 'light');
    }
}