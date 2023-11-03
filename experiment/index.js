const input = document.getElementById('uploadAudio')
let preview = document.getElementsByClassName('preview')[0]

function validate() {
    if (input.value === "") {
        preview.style.color = "red"
        preview.innerHTML = "Select a file and try again!"
    } 
}