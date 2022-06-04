import mysql from 'mysql2/promise';
import { config } from '../config/config.js';

export const connect = async () => {
    return await mysql.createConnection(config);
};
