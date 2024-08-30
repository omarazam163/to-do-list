/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async knex=> {
    await knex.schema.createTable("todos",(tbl)=>{
        tbl.integer("id").notNullable();
        tbl.text("title",256).notNullable();
        tbl.text("discription",256).nullable();
        tbl.boolean("completed").notNullable();
        tbl.bigInteger("start").notNullable();
        tbl.bigInteger("end").nullable();
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async knex => {
  await knex.schema.dropTableIfExists("todos");
};
