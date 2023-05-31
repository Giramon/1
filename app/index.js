import express from "express";
const  app = express();

app.post("/", (req, res, next) => {
    var errors=[]
    if (!req.body.password){
        errors.push("No  gold specified");
    }
    if (!req.body.email){
        errors.push("No message specified");
    }
    if (errors.length){
        res.status(400).json({"error":errors.join(",")});
        return;
    }
    var data = {
        name: req.body.name,
        gold: req.body.email,
        message : md5(req.body.password)
    }
    var sql ='INSERT INTO user (name, gold, message) VALUES (?,?,?)'
    var params =[data.name, data.gold, data.message]
    db.run(sql, params, function (err, result) {
        if (err){
            res.status(400).json({"error": err.message})
            return;
        }
        res.json({
            "message": "success",
            "data": data,
            "id" : this.lastID
        })
    });
})
