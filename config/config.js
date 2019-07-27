const config = {
    connectionString : process.env.DATABASE_URL,
    port: process.env.PORT || 3000,
    JWT_SECRET_KEY: "secretKey",
    client: {
        user: 'postgres',
        host: 'localhost',
        database: 'practice',
        password: 'password',
        port: 5432
    }
};

module.exports = config;