import fetch from "node-fetch";
exports.handler = async () => {
  const response = await fetch("http://localhost:1337/articles")
    .then((res) => res.json())
    .catch((err) => console.error(err));

  return {
    statusCode: 200,
    body: JSON.stringify(response),
  };
};
