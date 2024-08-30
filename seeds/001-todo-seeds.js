/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('todos').truncate()
  await knex('todos').insert([
    {
      id:2324,
      title:"do home work",
      discription:null,
      completed:false,
      start: 121343,
      end:89890,
    }
  ]);
};
