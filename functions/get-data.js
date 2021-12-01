//import fetch from "node-fetch";
const bestsellers = require('./data/data.json');
exports.handler = async () => {
  /*const response = await fetch("http://localhost:1337/Articles")
    .then((res) => res.json())
    .catch((err) => console.error(err));*/

  return {
    statusCode: 200,
    body: JSON.stringify(bestsellers),
  };
};
