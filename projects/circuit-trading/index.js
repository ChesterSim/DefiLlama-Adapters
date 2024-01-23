const axios = require("axios");

async function fetch() {
  // code for calculating tvl: https://github.com/Circuit-Trade/circuit-ui/blob/master/src/app/api/tvl/route.ts
  const res = await axios.get("https://app.circuit.trade/api/tvl");
  return res.data;
}

module.exports = {
  timetravel: false,
  methodology: "Fetch total value locked from API",
  fetch,
};
