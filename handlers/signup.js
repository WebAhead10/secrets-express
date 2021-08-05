const db = require("../database/connect");
function get(req, res) {
    console.log("hi");
    res.send("hi");
    
}
function SET(req, res) {
    const data = req.body;
    
    
}

module.exports=({SET, get});