$('#datepicker').datepicker({
    uiLibrary: 'bootstrap4',
    iconsLibrary: 'materialicons',
    format: 'dd-mm-yyyy'
})

function searchKeyPress(event) {
    if (event.keyCode == 13)
        onClickFind()
}
function onClickFind() {
    event.preventDefault()
    let username = document.getElementById('username').value
    window.location.pathname = '/sellers/'.concat(username)
}