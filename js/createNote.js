const icon =  document.querySelector('.note-create');
const notes =  document.querySelector('.notes-area');

icon.addEventListener('click', function (e) {
    notes.insertAdjacentHTML('afterbegin', `<input class="input" type="text">`);
});