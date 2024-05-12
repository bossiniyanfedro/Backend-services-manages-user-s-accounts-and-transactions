// Transaction Controller

const prisma = require('../prisma');

async function sendTransaction(request, reply) {
  try {
    const { amount, currency, toAddress } = request.body;
    const transaction = await prisma.transaction.create({
      data: {
        amount,
        currency,
        toAddress,
        status: 'pending' // Assuming status is initially pending
      }
    });
    // Simulate transaction processing
    setTimeout(async () => {
      await prisma.transaction.update({
        where: { id: transaction.id },
        data: { status: 'completed' }
      });
      // Update account statements here
    }, 30000); // 30 seconds
    reply.send({ message: 'Transaction sent successfully' });
  } catch (error) {
    console.error(error);
    reply.status(500).send({ error: 'Internal Server Error' });
  }
}

async function withdrawTransaction(request, reply) {
  try {
    // Implement logic to withdraw transaction
    // You'll need to interact with Prisma to perform the withdrawal and update account statements
  } catch (error) {
    console.error(error);
    reply.status(500).send({ error: 'Internal Server Error' });
  }
}

module.exports = { sendTransaction, withdrawTransaction };
