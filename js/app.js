const toggleOpenBtn = document.getElementById('opened');
const linksPage = document.getElementById('links-page');

toggleOpenBtn.addEventListener('click', function(){
    linksPage.classList.toggle('toggle-open');
})

const toggleCloseBtn = document.getElementById('closed');

toggleCloseBtn.addEventListener('click', function(){
    linksPage.classList.toggle('toggle-close')
})

