// Update with your config settings.


const { RDS_PORT, RDS_HOSTNAME, RDS_USERNAME, RDS_PASSWORD, RDS_DB_NAME } = process.env;

module.exports = {

  development: {
    client: "sqlite3",
    connection: {
      filename: "./dev.sqlite3"
    },
    useNullAsDefault: true
  },

  production: {
    client: "postgresql",
    connection: {
      host: RDS_HOSTNAME,
      port: RDS_PORT,
      user: RDS_USERNAME,
      password: RDS_PASSWORD,
      database: RDS_DB_NAME
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  }

};
