import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
        .createTable('users', function(t) {
            t.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'))
            t.string('name').notNullable()
            t.string('email').notNullable()
            t.string('password').notNullable()
            t.dateTime('createdAt').defaultTo(knex.fn.now())
            t.dateTime('updatedAt').defaultTo(knex.fn.now())
        })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('users');
}

