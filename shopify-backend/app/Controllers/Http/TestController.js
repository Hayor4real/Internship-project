"use strict";

"use strict";

const Database = use("Database");

class TestController {
  async index({ response }) {
    try {
      // For MySQL or PostgreSQL
      const users = await Database.raw("SELECT 1+1 AS result");

      // For SQLite (to test if a table exists)
      // const users = await Database.table('users').select('*').limit(1)

      return response.status(200).json({
        message: "Database connection is working",
        result: users,
      });
    } catch (error) {
      console.error("Database connection error:", error);
      return response.status(500).json({
        message: "Database connection failed",
        error: error.message,
      });
    }
  }
}

module.exports = TestController;
