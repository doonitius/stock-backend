const Record = require('../model/stock_record_model');
const Item = require('../model/item_list_model');

exports.add = (req, res) => {
    Record.add(
        {
            item_id: req.body.item_id,
            record_date: req.body.record_date,
            amount: req.body.amount
        },
        (err, message) => {
            if(err) return res.status(500).send({message: err.message});
            if(message){
                Item.addFromRecord(
                    req.body.item_id,
                    req.body.amount,
                    (err, message) => {
                        if(err) return res.status(500).send({message: err.message});
                        if(message) return res.status(200).send({message});
                    }
                )
            }
        }
    )

}

exports.view = (req, res) => {
    Record.view(
        (err, message) => {
            if(err) return res.status(500).send({message: err.message});
            if(message) return res.status(200).send(message);
        }
    )
}