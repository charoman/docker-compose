const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.get("/", function (req, res) {
    res.json({
        users: [
            {
                username: "adfasdfad",
                password: "adsfadfa3423452sd@2"
            },
            {
                username: "adfasdfad",
                password: "adsfadfa3423452sd@2"
            },
            {
                username: "roaasdfajsdkfnsd",
                password: "adsfadfaasdasd@2"
            }
        ]
    });
});

app.listen(8080);