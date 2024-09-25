const jwt = require('jsonwebtoken');

const secretPhrase = 'newAtlantica2024'
const expireTime = '4h'

module.exports = {
    authMiddleware: function (req, res, next) {
        let token = req.query.token || req.headers.authorization;

        if(req.headers.authorization){
            token = token.split(' ').pop().trim();
        }

        if(!token) {
            return res.status(400).json({message: 'No token found.'});
        }

        try {
            const {data} = jwt.verify(token, secretPhrase, {maxAge: expireTime});
            req.user = data;
        } catch {
            console.log('Invalid Token!!');
            return res.status(400).json({message: 'Invalid Token!!'});
        }

        next();
    },

    signToken: function ({username, email, _id}) {
        const payload = {username, email, _id};

        return jwt.sign({data: payload}, secretPhrase, {expiresIn: expireTime});
    },
};