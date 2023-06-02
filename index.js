import express from "express";
import db from './app/database/database.js';

const app = express();

app.post("/", (req, res, next) => {
    const errors=[]
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

    const data = {
        name: req.body.name,
        gold: req.body.email,
        price : req.body.price,
    }
    const sql ='INSERT INTO user (name, gold, price) VALUES (?,?,?)'
    const params =[data.name, data.gold, data.price]
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


app.get("/getAllRecord", reg, res) {
    
}

const port = 7657;

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
  