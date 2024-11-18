console.log('Work');

let mainLink = document.querySelectorAll('.mainLink'),
    infoBlock = document.querySelectorAll('.infoBlock'),
    plusButton = document.querySelectorAll('.plusButton'),
    minusButton = document.querySelectorAll('.minusButton');

mainLink.forEach(link => {
    link.addEventListener('click', function() {
        let needInfoBlock = link.parentElement.nextElementSibling;
        if(needInfoBlock.classList.contains('active')) {
            infoBlock.forEach(info => info.classList.remove('active'));
            minusButton.forEach(minus => minus.style.display = 'none');
            plusButton.forEach(plus => plus.style.display = 'block');
        } else {
            infoBlock.forEach(info => info.classList.remove('active'));
            needInfoBlock.classList.add('active');
            minusButton.forEach(minus => minus.style.display = 'none');
            plusButton.forEach(plus => plus.style.display = 'block');
            link.nextElementSibling.style.display = 'none';
            link.nextElementSibling.nextElementSibling.style.display = 'block';
        }
    })
})

plusButton.forEach(plus => {
    plus.addEventListener('click', function() {
        infoBlock.forEach(info => info.classList.remove('active'));
        minusButton.forEach(minus => minus.style.display = 'none');
        plusButton.forEach(plus => plus.style.display = 'block');
        let needInfoBlock = plus.parentElement.nextElementSibling;
        needInfoBlock.classList.add('active');
        plus.style.display = 'none';
        plus.nextElementSibling.style.display = 'block';
    })
})

minusButton.forEach(minus => {
    minus.addEventListener('click', function() {
        minus.style.display = 'none';
        minus.previousElementSibling.style.display = 'block';
        let needInfoBlock = minus.parentElement.nextElementSibling;
        needInfoBlock.classList.remove('active');
    })
})