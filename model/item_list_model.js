const sql = require('./dbcon');

const Item = function(item){
    this.item_name = item.item_name;
    this.category = item.category;
    this.available_item = item.available_item;
};

Item.add = (newItem, result) => {
    sql.query(`INSERT INTO item_list SET ?`, newItem, (err, res) => {
        if(err){
            console.log("error: ", err);
            result(err, null);
            return;
        }
        console.log("add success")
        result(null, {...newItem});
    });
    
}

Item.view = (result) => {
    sql.query(`SELECT * FROM item_list`, (err, res) => {
        if(err){
            result(err, null);
            return;
        }
        result(null, res);
    })
}

Item.addFromRecord = (item_id, amount, result) => {
    sql.query(`UPDATE item_list SET available_item = available_item + '${amount}'
    WHERE item_id = '${item_id}'`, (err, res) => {
        if(err){
            result(err, null);
            return;
        }
        console.log(res);
        result(null, res);
    })
}

Item.deleteItem = (item_id, result) => {
    console.log(item_id);
    sql.query(`DELETE FROM item_list WHERE item_id = '${item_id}'`, (err,res) => {
        if(err){
            result(err, null);
        }
        console.log(res);
        result(null, res);
    })
}

Item.EditItem = (item_id, item_name,category, result) => {
    sql.query(`UPDATE item_list SET item_name = '${item_name}' ,category = '${category}
WHERE item_id = '${item_id}';`, (err, res) => {
    if(err) {
        result(err, null);
    }
    console.log(res);
    result(null,res);
})
}

module.exports = Item;