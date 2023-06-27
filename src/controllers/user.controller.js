const db = require("../config/database");

exports.createUser = async (req, res) => {
  const { user_name, user_email, user_password } = req.body;
  const { rows } = await db.query(
    "INSERT INTO usuarios (user_name, user_email, user_password) VALUES ($1, $2, $3)",
    [user_name, user_email, user_password]
  );
  res.status(201).send({
    message: "Usuário adicionado com sucesso",
    body: {
      user: { user_name, user_email, user_password },
    },
  });
};

exports.listAllUsers = async (req, res) => {
  const response = await db.query("SELECT * FROM usuarios");
  res.status(200).send(response.rows);
};

exports.findUserById = async (req, res) => {
  const userId = parseInt(req.params.id);
  const response = await db.query("SELECT * FROM usuarios WHERE user_id=$1", [
    userId,
  ]);
  res.status(200).send(response.rows);
};

exports.updateUserById = async (req, res) => {
  const userId = parseInt(req.params.id);
  const { userName, userEmail, userPassword } = req.body;
  const response = await db.query(
    "UPDATE usuarios SET user_name=$1, user_email=$2, user_password=$3 WHERE user_id=$4",
    [(userName, userEmail, userPassword, userId)]
  );
  res.status(200).send({ message: "Atualizado com sucesso" });
};

exports.deleteUserById = async (req, res) => {
  const userId = parseInt(req.params.id);
  await db.query("DELETE FROM usuarios WHERE id_user=$1", [userId]);
  res.status(200).send({ message: "Deletado com sucesso" });
};
