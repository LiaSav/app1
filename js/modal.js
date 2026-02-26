const body = document.querySelector('.body'),
    buttonModal = body.querySelectorAll('.button-modal'),
    modal = body.querySelector('.modal'),
    modalClose = body.querySelector('.modal__close');

buttonModal.forEach((button) => {
    button.addEventListener('click', () => {
        modal.classList.add('modal_active');
        body.classList.add('body_modal-open');
    });
});

modalClose.addEventListener('click', () => {
    modal.classList.remove('modal_active');
    body.classList.remove('body_modal-open');
});

body.addEventListener('click', (e) => {
    if (e.target.classList.contains('overlay')) {
        modal.classList.remove('modal_active');
        body.classList.remove('body_modal-open');
    }
});