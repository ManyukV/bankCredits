<?php
session_start();

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = htmlspecialchars($_POST['name']);
    $contact = htmlspecialchars($_POST['contact']);
    $creditDetails = htmlspecialchars($_POST['creditDetails']);

    // Сохраняем данные в сессию
    $_SESSION['applications'][] = [
        'name' => $name,
        'contact' => $contact,
        'creditDetails' => $creditDetails,
    ];

    // Возвращаем подтверждение
    echo json_encode(['status' => 'success', 'message' => 'Заявка успешно получена']);
    exit;
}

echo json_encode(['status' => 'error', 'message' => 'Неверный метод запроса']);
?>
