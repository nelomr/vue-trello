module.exports = {
    css: {
      loaderOptions: {
        scss: {
          additionalData: `@import "~@/assets/styles/_global.scss";`
        }
      }
    },
    publicPath: process.env.NODE_ENV === 'production'
      ? '/vue-trello/'
      : '/'
};