const { PrismaClient } = require("../../prisma/db2");
const prismaSecondDb = new PrismaClient();

module.exports = prismaSecondDb;
