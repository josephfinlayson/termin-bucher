const { Config } = require('@foal/core');


module.exports = {
  type: "postgres",
  password: Config.get2('database.password', "string"),
  ssl: true,
  rejectUnauthorized: false,
  host: Config.get2('database.host'),
  port: Config.get2('database.port'),
  username: Config.get2('database.user'),
  database: Config.get2('database.database', 'string'),
  dropSchema: Config.get2('database.dropSchema', 'boolean', false),
  entities: ["build/app/**/*.entity.js"],
  migrations: ["build/migrations/*.js"],
  cli: {
    migrationsDir: "src/migrations"
  },
  synchronize: Config.get2('database.synchronize', 'boolean', false)
}
