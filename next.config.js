require('dotenv').config();

module.exports = {
  assetPrefix: process.env.NEXT_PUBLIC_LOCAL == 'true' ? '' : '/frontComponent',
};
