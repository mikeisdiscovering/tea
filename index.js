const { generateMnemonic } = require("@test-tea-mike");
const moment = require('moment');


function tea() {
  console.log("For tea");
  console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
  return generateMnemonic();
}

module.exports = tea;