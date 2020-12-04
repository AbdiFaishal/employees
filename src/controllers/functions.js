const reverse = require('../customFunctions/reverse');
const fibonacci = require('../customFunctions/fibonacci');
const combination = require('../customFunctions/combination');

exports.reverseFunction = async (req, res) => {
  try {
    const { character } = req.body;
    const result = await reverse(character);

    res.status(200).send({
      result,
    });
  } catch (err) {
    res.status(500).send({
      error: {
        message: err.message,
      },
    });
  }
};

exports.fibonacciFunction = async (req, res) => {
  try {
    const { n } = req.body;
    const result = await fibonacci(n);

    res.status(200).send({
      result,
    });
  } catch (err) {
    res.status(500).send({
      error: {
        message: err.message,
      },
    });
  }
};

exports.combinationFunction = async (req, res) => {
  try {
    const { n, r } = req.body;
    const result = await combination(parseInt(n), parseInt(r));

    res.status(200).send({
      result,
    });
  } catch (err) {
    res.status(500).send({
      error: {
        message: err.message,
      },
    });
  }
};
