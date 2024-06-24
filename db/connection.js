import mysql from 'mysql2/promise';
export const connection = await mysql.createConnection({
    host: "roundhouse.proxy.rlwy.net",
    port: "54326",
    database: "railway",
    user:  "root",
    password:"gwfQjzsMmYQvIoznXvZXUjxNtJHpUKxZ"
})