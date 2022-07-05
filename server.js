const app = require('./app');

require("dotenv").config()
const PORT = process.env.PORT;

// app.listen(9000, () => console.log("Listening on 9000"))
app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});