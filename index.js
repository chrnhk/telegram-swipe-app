const express = require('express');
const app = express();
const path = require('path');

// Настраиваем сервер
app.use(express.static('public')); // Папка для статических файлов (HTML, CSS, JS)

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Запуск сервера
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
