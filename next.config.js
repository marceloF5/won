// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPwa = require('next-pwa')
const isProd = process.env.NODE_ENV === 'production'

module.exports = withPwa({
    pwa: {
        dest: 'public',
        disable: !isProd
    }
})
