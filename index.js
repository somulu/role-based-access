const fs = require('fs');
const bodyParser = require('body-parser');
const jsonServer = require('json-server');
const jwt = require('jsonwebtoken');

const server = jsonServer.create();
const userdb = JSON.parse(fs.readFileSync('./db.json', 'utf-8'));

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(jsonServer.defaults());

const SECRET_KEY = '12345678';

const expiresIn = '1h';

function createToken(payload) {
  return jwt.sign(payload, SECRET_KEY, { expiresIn });
}

function isLoginAuthenticated({ email, password }) {
  return (
    userdb.users.findIndex(
      (user) => user.email === email && user.password === password
    ) !== -1
  );
}

server.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;
  let userType = userdb.users.filter(
    (user) => user.email === email && user.password === password
  );

  if (!isLoginAuthenticated({ email, password })) {
    res.status(401).json({ message: 'Incorrect Email or Password' });
    return;
  }
  const access_token = createToken({ email, password });

  res.status(200).json({ access_token, userType });
});

server.post('/api/ram', (req, res) => {
  const { title, desc } = req.body;
  fs.readFile('./db.json', (err, data) => {
    if (err) {
      const status = 401;
      const message = err;
      res.status(status).json({ status, message });
      return;
    }
    data = JSON.parse(data.toString());
    let last_item_id = data.ram_user[data.ram_user.length - 1].id;
    data.ram_user.push({ id: parseInt(last_item_id) + 1, title, desc });

    let writeData = fs.writeFile(
      './db.json',
      JSON.stringify(data),
      (err, result) => {
        if (err) {
          const status = 401;
          const message = err;
          res.status(status).json({ status, message });
          return;
        }
      }
    );
  });
  res.status(200).json({ Message: 'Task added successfully' });
});

server.post('/api/shyam', (req, res) => {
  const { title, desc } = req.body;
  fs.readFile('./db.json', (err, data) => {
    if (err) {
      const status = 401;
      const message = err;
      res.status(status).json({ status, message });
      return;
    }
    data = JSON.parse(data.toString());
    let last_item_id = data.shyam_user[data.shyam_user.length - 1].id;
    data.shyam_user.push({ id: parseInt(last_item_id) + 1, title, desc });

    let writeData = fs.writeFile(
      './db.json',
      JSON.stringify(data),
      (err, result) => {
        if (err) {
          const status = 401;
          const message = err;
          res.status(status).json({ status, message });
          return;
        }
      }
    );
  });
  res.status(200).json({ Message: 'Task added successfully' });
});

server.get('/api/shyam', (req, res) => {
  res.status(200).json(userdb.shyam_user);
});

server.get('/api/ram', (req, res) => {
  res.status(200).json(userdb.ram_user);
});

server.listen(5000, () => {
  console.log('Running fake api json serve');
});
