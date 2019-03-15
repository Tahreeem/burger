function disconnect() {
    connection.end();
    process.exit();
}



module.exports = {
    disconnect: disconnect
}; 