module.exports = function(req ,res,next){
 //unauthorized(401)
//forbidden(403)
if(!req.user.isAdmin) return res.status(403).send('Access Denied');
next();
}
    
