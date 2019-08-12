module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./db/cart.sqlite3"
    },
    useNullAsDefault: true,
    migrations: { directory: "./db/migrations" }
  }
};
