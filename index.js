const express = require('express');
const cors = require('cors');
const mainFetch = require('./api/fetch');

const PORT = process.env.PORT ?? 8000;

const app = express();
app.use(cors());
app.listen(PORT, () => console.log(`listening on port ${PORT}`));

app.get('/todos', async (_, res) => {
  const response = await mainFetch();
  res.json(response);
});

app.get('/updateTodo', async (req, res) => {
  const config = {
    method: 'PATCH',
    url: `https://944ba3c5-94c3-4369-a9e6-a509d65912e2.mock.pstmn.io/patch/${req.query.id}`,
    data: {
      isComplete: true,
    },
  };
  const response = await mainFetch(config);
  res.json(response);
});
