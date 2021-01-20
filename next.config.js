require('dotenv').config();

console.log(`GITHUB_PAGES： ${process.env.GITHUB_PAGES}`)

module.exports = {
  assetPrefix: process.env.GITHUB_PAGES ? '/frontComponent' : '',
};
