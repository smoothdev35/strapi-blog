import fetch from "node-fetch";
exports.handler = async () => {
  const response = await fetch("https://infinite-chamber-69232.herokuapp.com/articles")
    .then((res) => res.json())
    .catch((err) => console.error(err));

  return {
    statusCode: 200,
    body: JSON.stringify(response),
  };
};
