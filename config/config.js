const config = {
    connectionString : "postgres://postgres:password@localhost/practice",
    port: 3000,
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