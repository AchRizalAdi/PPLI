module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '' : '/',
    productionSourceMap: false,
    chainWebpack: config => config.optimization.minimize(true)
}