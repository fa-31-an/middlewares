const admins = ['Greta', 'Ada', 'Tim', 'Vim',]

module.exports = (req, res, next) => {

    if(admins.includes(req.query.admin)) {
        next();
    };

    return res.send('¿Qué mirás? Andá pa allá');

};