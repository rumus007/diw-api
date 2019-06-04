var jwt = require('jsonwebtoken');

function createToken(data, secretKey, expiry = false){
    var token;
    if(expiry){
        token = jwt.sign(data, secretKey, {
            expiresIn: '60'
        });
    }else{
        token = jwt.sign(data, secretKey);
    }
    return token;
}

module.exports = {
    createToken: createToken,
}