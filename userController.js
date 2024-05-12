// User Controller

const bcrypt = require('bcrypt');
const prisma = require('../prisma');

async function createUser(request, reply) {
  try {
    const { username, password } = request.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: {
        username,
        password: hashedPassword
      }
    });
    reply.send({ user });
  } catch (error) {
    console.error(error);
    reply.status(500).send({ error: 'Internal Server Error' });
  }
}

async function loginUser(request, reply) {
  try {
    const { username, password } = request.body;
    const user = await prisma.user.findUnique({
      where: {
        username
      }
    });
    if (!user) {
      return reply.status(404).send({ error: 'User not found' });
    }
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return reply.status(401).send({ error: 'Invalid password' });
    }
    reply.send({ message: 'Login successful' });
  } catch (error) {
    console.error(error);
    reply.status(500).send({ error: 'Internal Server Error' });
  }
}

async function createPaymentAccount(request, reply) {
  try {
    // Implement logic to create payment account
    // You'll need to interact with Prisma to create a new payment account for the logged-in user
  } catch (error) {
    console.error(error);
    reply.status(500).send({ error: 'Internal Server Error' });
  }
}

async function getPaymentHistory(request, reply) {
  try {
    // Implement logic to retrieve payment history
    // You'll need to interact with Prisma to fetch payment history for the logged-in user
  } catch (error) {
    console.error(error);
    reply.status(500).send({ error: 'Internal Server Error' });
  }
}

module.exports = { createUser, loginUser, createPaymentAccount, getPaymentHistory };
