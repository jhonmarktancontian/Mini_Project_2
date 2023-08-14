const express = require("express");
const app = express();
const cors = require("cors");
const jwt = require("jsonwebtoken")

app.use(cors({
  origin: 'http://localhost:7000'
})
);
app.use(express.json());

const users = [
  {
    id: 1,
    email: "admin@test",
    password: "Welcome",
    isAdmin: true,
  },
  {
    id: 2,
    email: "staff@test",
    password: "Welcome",
    isAdmin: false,
  },
  {
    id: 3,
    email: "admin@email",
    password: 'admin',
    isAdmin: true,
  },
];

const generateAccessToken = (user) => {
  return jwt.sign({ email: user.email }, "secretKey", { expiresIn: "1000s" })
}

app.post('/api/client-signup', (req, res) => {

  const { FIRSTNAME, LASTNAME, EMAIL, PASSWORD } = req.body;


  const checkUser = users.some((user) => {
    return user.email === EMAIL
  })


  if (checkUser) {

    res.status(408).json({ success: false, message: 'Email already exist' });
  } else {
    const newUser = {
      id: users.length + 1,
      firstName: FIRSTNAME,
      lastName: LASTNAME,
      email: EMAIL,
      password: PASSWORD
    };
    users.push(newUser);
    res.json({ success: true, message: 'Sign-up successful' });
    console.log(users)
  }
})

app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find((user) => user.email === email && user.password === password);
  if (user) {
    accessToken = generateAccessToken(user);
    res.json({ success: true, message: 'Login successful', accessToken: accessToken, user });
  } else {
    res.status(401).json({ success: false, message: 'Incorrect email or password' });
  }
});

const verify = (req, res, next) => {
  const authHeader = req.headers.authorization;


  if (authHeader) {
    const token = authHeader.split(" ")[1];

    try {
      const user = jwt.verify(token, secretKey);
      req.user = user;
      next();
    } catch (error) {
      return res.status(403).json("Invalid token");
    }
  }
}


app.listen(7001, () => {
  console.log('Server is running on port 7001');
});
