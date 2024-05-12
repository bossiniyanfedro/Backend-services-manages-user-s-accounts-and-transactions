generator client {
    provider = "prisma-client-js"
  }
  
  model User {
    id       Int      @id @default(autoincrement())
    username String   @unique
    password String
  }
  
  model PaymentAccount {
    id      Int      @id @default(autoincrement())
    userId  Int
    type    String
    // Define other fields as per your requirements
  }
  
  model PaymentHistory {
    id             Int      @id @default(autoincrement())
    paymentAccountId Int
    transactionId  Int
    // Define other fields as per your requirements
  }
  
  model Transaction {
    id           Int      @id @default(autoincrement())
    amount       Float
    currency     String
    toAddress    String
    status       String
    // Define other fields as per your requirements
  }
  