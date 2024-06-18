const { app } = require('./server.js');
const { connect } = require('./utils/database.js');

app.listen(3000, () => {
    connect();
    console.log("Server running on http://localhost:3000");
});