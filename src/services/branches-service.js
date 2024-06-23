const prisma = require("../model/prisma");

const branchesService = {};

branchesService.getAllBranches = () => prisma.branches.findMany();

branchesService.findLocation = (id) =>
  prisma.branches.findFirst({
    where: {
      branchId: id,
    },
  });

module.exports = branchesService;
