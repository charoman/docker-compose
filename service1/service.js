const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.get("/", function (req, res) {
    res.json({
        users: [
            {
                username: "alex@hotmail.com",
                password: "adasd342sfadfasd@2"
            },
            {
                username: "dor@amdocs.com",
                password: "adsfadfaasdasd@2"
            }
        ]
    });
});

app.listen(8080);