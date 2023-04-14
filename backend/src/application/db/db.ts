import knex from "knex";
import config from '../../../knexfile'

export const db = knex(config.development)

const create = async () => {
    // await db.schema
    //     .createTable('users', table => {
    //         table.increments('id');
    //         table.string('user_name');
    //     })
    // await db('person')
    // .insert({email: 'Slaughterhouse Five', first_name: 'add', last_name: 'add'})
    // .returning('id')
}
