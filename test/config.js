module.exports = {
    host: process.env['WERCKER_RETHINKDB_HOST'] || "localhost",
    port: process.env['WERCKER_RETHINKDB_PORT'] || 28015,
    authKey: "",
    min: 2,
    bufferSize: 2,
    max: 5
}
