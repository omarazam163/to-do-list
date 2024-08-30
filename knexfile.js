// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './todo.dp3'
    }
  },
  migrations:
  {
    directory: "./migrations"
  },
  seeds:
  {
    directory: "./seeds"
  },
  useNullAsDefault: true,
};
