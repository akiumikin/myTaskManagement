require('dotenv').config();

module.exports = {
  assetPrefix: process.env.LOCAL ? '' : '/frontComponent',
};
