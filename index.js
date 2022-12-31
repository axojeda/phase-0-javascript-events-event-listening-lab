const input = document.querySelector('#button')
function addingEventListener() {
    input.addEventListener('click', addingEventListener)
}
addingEventListener()