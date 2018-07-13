function cekAdmin (req,res,next){
let user = req.session.current_user
    if(user){
        next()
    }else{
        res
        .status(401)
    }
}

module.exports = cekAdmin