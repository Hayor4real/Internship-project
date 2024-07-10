"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ProductsSchema extends Schema {
  up() {
    this.create("products", (table) => {
      table.increments();
      table.string("title", 255).notNullable();
      table.decimal("price", 12, 2).notNullable();
      table.integer("stock_quantity").notNullable();
      table.text("description").notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("products");
  }
}

module.exports = ProductsSchema;
