const cardBtn = document.querySelector('.card__btn')
const cardID = document.querySelector('#card__ID')
const cardText = document.querySelector('.card__advice-text-content')

cardBtn.addEventListener('click', () => {
    fetch('https://api.adviceslip.com/advice')
        .then(response => response.json())
        .then(data => {
            cardID.textContent = data.slip.id;
            cardText.textContent = data.slip.advice
        })
        .catch(error => alert('Something went wrong. Reload the page and try again'))
})
