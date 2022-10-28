const app = require('./app');
const port = process.env.PORT || 3000;
const db = require('./db');

if (process.env.SEED) {
  db.seed()
    .then((artists) => {
      console.log(`${Object.keys(artists).length} artists seeded!`);
    })
    .catch((ex) => {
      throw Error(ex);
    });
}

app.listen(port, () => console.log(`listening on port ${port}`));
