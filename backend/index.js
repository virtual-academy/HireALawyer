const express = require('express')
const app = express();
const router = require('./router/router');
const cors = require('cors')
const PORT = 4000;
require('./configrarions/db');
app.use(cors());
app.use(express.json());

app.use("/api/v1", router);
app.listen(PORT, ()=>{
    console.log("Server is Live on http://localhost:"+PORT)
});