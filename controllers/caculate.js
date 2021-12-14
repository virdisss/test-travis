const calculatorService = require("../services/calculator.service");

exports.calculate = (req, res, next) => {
  const operation = req.query.operation;
  const { a, b } = req.body;
  if (operation === "sum") {
    return res.send({ result: calculatorService.sum(a, b) });
  }
  next({ statusCode: 404, message: "Unknown operation or not supported" });
};