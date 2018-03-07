const mongoose = require("mongoose");

const User = mongoose.model('User', {username: String, password: String});

const initDb = function () {
    const initData = [
        {username: "charoman@gmail.com", password: "adsfadfaasdasd@2"},
        {username: "avi.cohen@hotmail.com", password: "adsfKMMaasdasd@2"},
        {username: "roman.cha@version.com", password: "adsNJdfaasdasd@2"},
        {username: "levi.mor@gmail.com", password: "adsfadf%^dasd@2"}
    ];
    User.remove({}).then(function () {
        initData.forEach(function (user) {
            User.create(user);
        });
    });
};

module.exports = {
    initDb: initDb,
    User: User
};