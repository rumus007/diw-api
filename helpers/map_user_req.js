var passwordHash = require('password-hash');

module.exports = function(user, userDetails){
    if(userDetails.name)
        user.name = userDetails.name;
    if(userDetails.username)
        user.username = userDetails.username
    if(userDetails.password)
        user.password = passwordHash.generate(userDetails.password);
    if(userDetails.email)
        user.email = userDetails.email;
    if(userDetails.role)
        user.role = userDetails.role


    return user;
}