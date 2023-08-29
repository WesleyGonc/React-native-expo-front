const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Pool } = require('pg'); 

const app = express();
app.use(cors());
app.use(bodyParser.json());

const pool = new Pool({
  user: '',
  host: '',
  database: '',
  password: '',
  port: '',
});

const SECRET_KEY = 'AINDA_NÃO_SEI';

app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const query = 'SELECT * FROM users WHERE username = $1';
    const { rows } = await pool.query(query, [username]);

    if (rows.length === 0) {
      return res.status(401).json({ message: 'Usuario ou senha errada' });
    }

    const passwordMatch = await bcrypt.compare(password, rows[0].password);

    if (!passwordMatch) {
      return res.status(401).json({ message: 'Usuario ou senha errada' });
    }

    const token = jwt.sign({ id: rows[0].id }, SECRET_KEY, { expiresIn: '1h' });

    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error' });
  }
});

app.post('/register', async (req, res) => {
  const { username, password, isTrainer, cpf, escolaridade, formacao, anosExperiencia } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const userResult = await pool.query('INSERT INTO users (username, password) VALUES ($1, $2) RETURNING id', [username, hashedPassword]);

    if (isTrainer) {
      const userId = userResult.rows[0].id;
      await pool.query('INSERT INTO trainers (user_id, cpf, escolaridade, formacao, anos_experiencia) VALUES ($1, $2, $3, $4, $5)', [userId, cpf, escolaridade, formacao, anosExperiencia]);
    }

    res.json({ message: 'Usuario registrado com sucesso' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error' });
  }
});

app.listen(5000, () => {
  console.log('Servidor aberto no port 5000');
});

