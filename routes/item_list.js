const controller = require('../controller/item_list');

module.exports = function(app) {
    app.post("/api/item/add", controller.add);
    app.get("/api/item/view", controller.view);
    app.post("/api/item/deleteItem", controller.deleteItem);
    // app.put("/api/item/EditItem", controller.editItem);
    app.post("/api/item/addMulti", controller.AddmultipleItem);
};