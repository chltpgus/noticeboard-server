const express = require('express');
const app = express();
const PORT = process.env.PORT  //포트번호 저장

app.get('/', (req, res) => {
    res.json({
        success: true,
    });
});

app.listen(PORT);