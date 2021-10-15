const sql = require('./dbcon');

const Record = function(record){
    this.item_id = record.item_id;
    this.record_date = record.record_date;
    this.amount = record.amount;
}

Record.add = (newRecord, result) => {
    sql.query(`INSERT INTO stock_record SET ?`, newRecord, (err, res) => {
        if(err){
            result(err, null);
            return;
        }
        console.log("record success");
        result(null, {...newRecord});
    });
}

Record.view = (result) => {
    sql.query(`SELECT record_id, stock_record.item_id, item_name, record_date, amount 
                FROM stock_record, item_list
                WHERE item_list.item_id = stock_record.item_id`, (err, res) => {
        if(err){
            result(err, null);
            return;
        }
        result(null, res);
    })
}

module.exports = Record;