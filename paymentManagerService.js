// Payment Manager Service


const fastify = require('fastify')();
const prisma = require('./prisma');
const { sendTransaction, withdrawTransaction } = require('./controllers/transactionController');

fastify.register(require('fastify-cors'));

// Routes
fastify.post('/send', sendTransaction);
fastify.post('/withdraw', withdrawTransaction);

const start = async () => {
  try {
    await fastify.listen(3001);
    console.log('Server listening on port 3001');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

start();
