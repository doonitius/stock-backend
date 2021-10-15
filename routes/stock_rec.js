const controller = require('../controller/stock_record');

module.exports = function(app) {
    app.post("/api/record/add", controller.add);
    app.get("/api/record/view", controller.view);
}