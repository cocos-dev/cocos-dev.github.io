const input = document.getElementById('uploadAudio')
let preview = document.getElementsByClassName('preview')[0]
let retrieve = document.getElementsByClassName('retrieve')[0]

let clicktimes = 0

function validate() {
    if (input.value === "") {
        clicktimes++
        preview.style.color = "red"
        preview.innerHTML = (clicktimes >= 2) ? `Select a file! (${clicktimes})` : 'Select a file!'
        return
    }
    const fileSelected = input.files[0]
    preview.innerHTML = `File uploaded: ${fileSelected.name}`
    preview.style.color = "white"
    retrieve.innerHTML = "Generating retrieve link"

    /* const formData = new FormData();
    formData.append('audioFile', fileSelected);

    fetch('upload.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        document.getElementsByClassName('retrieve')[0].innerHTML = data;
    })
    .catch(error => {
        console.error('Error:', error);
    }); */

    const reader = new FileReader()

    console.log(reader.readAsDataURL(input.files[0]))
}