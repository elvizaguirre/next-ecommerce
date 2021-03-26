import { getConnection, createConnection } from 'typeorm';
import { Car, Order, Product, Transaction, User} from '../models';

export async function getOrCreateConnection() {
  try {
    const conn = getConnection();
    return conn;
  } catch (e) {
    return createConnection({
      type: "mysql",
      host: process.env.DB_HOST as string,
      port: parseInt(process.env.DB_PORT as string),
      username: process.env.DB_USER as string,
      password: process.env.DB_PASSWORD as string,
      database: process.env.DB_NAME as string,
      entities: [
        User,
        Car,
        Order,
        Product,
        Transaction
      ],
      synchronize: true,
      logging: false
    });
  }
}
