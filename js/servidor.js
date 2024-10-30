const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

// Middleware to serve static files (HTML, CSS, JS)
app.use(express.static('../'));

app.get('/movies', async (req, res) => {
  try {
    // Aqui chamaremos a API de filmes
    const response = await axios.get('URL_DA_API_JUSTWATCH');
    res.json(response.data);
  } catch (error) {
    res.status(500).send('Erro ao obter filmes');
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
