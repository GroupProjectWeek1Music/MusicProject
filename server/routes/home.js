const express = require('express')
const router = express.Router()

router.get('/', function(req,res){
    axios
    .get('http://localhost:8080/home.html')
    .then(function(){
        res
            .status(200)
    })
    .catch(function(err){
        res
            .status(400)
    })

})

module.exports = router