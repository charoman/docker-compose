angular.module("app", []).component("tableComponent", {
    templateUrl: "/table.html",
    bindings: {port: "<"},
    controller: ["$http", TableComponent]
});

function TableComponent($http) {
    this.$http = $http;
}

TableComponent.prototype.$onInit = function () {
    this.$http.get("http://" + location.hostname + ":" + this.port + "/").then(function (response) {
        this.data = response.data.users;
    }.bind(this));
};

angular.bootstrap(document.querySelector("#app"), ["app"]);