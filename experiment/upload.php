<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_FILES['audioFile'])) {
        $file = $_FILES['audioFile'];

        $uploadDir = 'uploads/';
        $uploadFile = $uploadDir . uniqid() . '_' . $file['name'];

        if (move_uploaded_file($file['tmp_name'], $uploadFile)) {
            echo 'File uploaded successfully.';
        } else {
            echo 'Error uploading file.';
        }
    } else {
        echo 'No file uploaded.';
    }
} else {
    echo 'Invalid request.';
}
?>
