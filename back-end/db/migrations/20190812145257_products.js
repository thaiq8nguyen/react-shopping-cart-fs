exports.up = function(knex, Promise) {
  return knex.schema.createTable("products", products => {
    products.increments();
    products.string("name", 128).notNullable();
    products
      .decimal("price")
      .defaultTo(0.0)
      .notNullable();
    products.string("image_url", 128);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("products");
};
