const argv = require('yargs')
    .options({
        address: {
            alias: 'description',
            desc: 'Enter the city address to get the weather',
            demand: true
        }
    })
    .help()
    .version()
    .argv;

module.exports = {
    argv
}