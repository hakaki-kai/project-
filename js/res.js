document.querySelector('.test-result').innerHTML = localStorage?.getItem('type');
let answer = localStorage?.getItem('type') //sangvinic

if (answer === 'sangvinic'){
    document.querySelector('.test-result').innerHTML = '<p,asassadasdasdasd<>'
}