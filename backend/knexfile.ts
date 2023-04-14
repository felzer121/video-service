import type { Knex } from "knex";

// Update with your config settings.

const config: { [key: string]: Knex.Config } = {
  development: {
    client: "postgresql",
    connection: {
      host: '127.0.0.1',
      port: 5432,
      database: 'fastify',
      user: 'postgres',
      password: '1234'
    }
  },

  staging: {
    client: "postgresql",
    connection: {
      host: '127.0.0.1',
      port: 5432,
      database: 'fastify',
      user: 'postgres',
      password: '1234'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  },

  production: {
    client: "postgresql",
    connection: {
      host: '127.0.0.1',
      port: 5432,
      database: 'fastify',
      user: 'postgres',
      password: '1234'
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

export default config;
