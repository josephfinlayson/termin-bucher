import knex from 'knex'

const {RDS_PORT, RDS_HOSTNAME, RDS_USERNAME, RDS_PASSWORD, RDS_DB_NAME} = process.env

export default knex({
  client: 'pg',
  connection: {
    host: RDS_HOSTNAME,
    port: RDS_PORT,
    user: RDS_USERNAME,
    password: RDS_PASSWORD,
    database: RDS_DB_NAME
  }
});

