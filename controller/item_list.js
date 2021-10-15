const Item = require('../model/item_list_model');

exports.add = (req,res) => {
    Item.add(
        {
            item_name: req.body.item_name,
            category: req.body.category
        },
        (err, message) => {
            if(err) return res.status(500).send({message: err.message});
            if(message) return res.status(200).send(message);
        }
    )
}

exports.view = (req, res) => {
    Item.view(
        (err, message) => {
            if(err) return res.status(500).send({message: err.message});
            if(message) return res.status(200).send(message);
        }
    )
}

exports.deleteItem = (req, res) => {
    Item.deleteItem(
        req.body.item_id,
        (err,message) => {
            if(err) return res.status(500).send({message: err.message});
            if(message) return res.status(200).send(message);
        }
    )
}

exports.EditItem = (req, res) => {
    Item.EditItem(
        res.send("edit")
        // req.body.item_id
    )
}

exports.AddmultipleItem = (req, res) => {
    console.log(req.body);
    var i;
    for(i in req.body) {
        res.send(i);
        console.log(i);
    }
}