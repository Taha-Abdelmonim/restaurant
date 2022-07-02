module.exports = {
  chainWebpack: (config) => {
    config.module.rules.delete("eslint");
  },
};
// eslint-disable-next-line
/* eslint-disable */
