const bestsellers = require('./data/data.json');

exports.handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify(bestsellers),
  };
};
