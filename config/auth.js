module.exports = {
    ensureAuthenticated : function(req,res,next){
        if(req.isAuthenticated()){
            next();
        }
        else{
            //should redirect to signin
            res.send({'msg':'request is not authenticated'});
        }
    }
}