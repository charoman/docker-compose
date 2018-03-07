const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.get("/", function (req, res) {
    res.json({
        users: [
            {
                username: "romanc",
                password: "adsfadfasd@2"
            },
            {
                username: "romaasdfasnajsdkfnsd",
                password: "adsfadfaasdasd@2"
            }
        ]
    });
});

app.listen(8080);