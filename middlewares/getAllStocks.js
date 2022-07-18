const fs = require('fs').promises;

const getAllStocks = async (_req, res) => {
  const stocks = await fs.readFile('./stocks.json');
  const parseStocks = JSON.parse(stocks);

  return res.status(200).json(parseStocks);
};

module.exports = getAllStocks;
