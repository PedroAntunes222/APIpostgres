const db = require("../config/database");

exports.createUser = async (req, res) => {
  const { userName, userEmail, userPassword } = req.body;
  const { rows } = await db.query(
    "INSERT INTO user ( user_name, user_email, user_password ) VALUES ( ?, ?, ? )",
    [(userName, userEmail, userPassword)]
  );
  res.status(201).send({
    message: "Usuário adicionado com sucesso",
    body: {
      user: { userName, userEmail, userPassword },
    },
  });
};

exports.listAllUsers = async (req, res) => {
  console.log('alo');
  const response = await db.query("SELECT * FROM user");
  res.status(200).send(response.rows);
};

exports.findById = async (req, res) => {
  const userId = parseInt(req.params.id);
  const response = await db.query("SELECT * FROM user WHERE id=?", [userId]);
  res.status(200).send(response.rows);
};

exports.updateById = async (req, res) => {
  const userId = parseInt(req.params.id);
  const { userName, userEmail, userPassword } = req.body;
  const response = await db.query(
    "UPDATE user SET userName=?, userEmail=?, userPassword=? WHERE id=?",
    [(userName, userEmail, userPassword, userId)]
  );
  res.status(200).send({ message: "Atualizado com sucesso" });
};

exports.deleteById = async (req, res) => {
  const userId = parseInt(req.params.id);
  await db.query("DELETE FROM user WHERE id=?", [userId]);
  res.status(200).send({ message: "Deletado com sucesso" });
};
