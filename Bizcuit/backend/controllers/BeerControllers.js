const pool = require('../db/connection');

exports.CehckCreate = async function (req, res) {
  const data = req.body;
  pool.connect();
  const sqlstr = `INSERT INTO beer (id ,uid, brand, name, style, hop, yeast, malts, ibu, alcohol, blg) VALUES (${data.id},'${data.uid}','${data.brand}','${data.name}','${data.style}','${data.hop}','${data.yeast}','${data.malts}','${data.ibu}','${data.alcohol}','${data.blg}') ON CONFLICT (id) DO UPDATE SET randomcount = beer.randomcount + 1`;
  await pool.query(sqlstr, (err, result) => {
    if (!err) {
      res.send({ message: `Create Berr Success`, status: 'success' });
    } else {
      res.send({ message: err.message, status: 'error' });
    }
  });
};

exports.getById = async function (req, res) {
  pool.connect();
  await pool.query(
    `select * from beer where id=${req.query.id} `,
    (err, result) => {
      if (!err) {
        res.send(result.rows.pop());
      } else {
        res.send('error');
      }
    }
  );
};
