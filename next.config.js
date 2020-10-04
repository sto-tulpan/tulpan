const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");

process.setMaxListeners(20);

module.exports = withPlugins([[optimizedImages]]);
