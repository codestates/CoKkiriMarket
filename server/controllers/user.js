
module.exports = {
    logout: (req, res) => {
        res.status(200).send('GET: user/post')
    },
    
    login: (req, res) => {
        res.status(200).send('POST: user/post')
    },

    verification: (req, res) => {
        res.status(200).send('POST: user/verification')
    },
};
