// Account Manager Service


const fastify = require('fastify')();
const prisma = require('./prisma');
const { createUser, loginUser, createPaymentAccount, getPaymentHistory } = require('./controllers/userController');

fastify.register(require('fastify-cors'));

// Routes
fastify.post('/register', createUser);
fastify.post('/login', loginUser);
fastify.post('/create-payment-account', createPaymentAccount);
fastify.get('/payment-history', getPaymentHistory);

const start = async () => {
  try {
    await fastify.listen(3000);
    console.log('Server listening on port 3000');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

start();
