const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());

const quotes = [
  { id: 1, text: "La sencillez es la clave de la verdadera elegancia.", author: "Coco Chanel" },
  { id: 2, text: "El único modo de hacer un gran trabajo es amar lo que haces.", author: "Steve Jobs" },
  { id: 3, text: "La automatización y la CI/CD hacen la vida del desarrollador más fácil.", author: "Equipo Politécnico" }
];

app.get('/api/quotes', (req, res) => {
  res.json(quotes);
});

app.listen(PORT, () => {
  console.log(`Backend corriendo en puerto ${PORT}`);
});