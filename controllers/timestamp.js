var moment = require('moment');

module.exports.homePage = function(req, res, next) {
  res.render('index', { title: 'Timestamp microservice' });
};

module.exports.timeStamp = function(req, res, next) {
    var argv = req.params.time;
    var arr = argv.split(" ");
    if (arr.length === 1) {
        res.json(resJson(parseInt(argv), moment.unix(argv).format("MMMM DD, YYYY")));
    }
  
    if ((new Date(argv) !== "Invalid Date"
         && !isNaN(new Date(argv)))) {
        if (arr.length === 3) {
            res.json(resJson(new Date(argv) / 1000, argv.charAt(0).toUpperCase() + argv.substring(1).toLowerCase()));
        } else {
            res.json(resJson(null, null));
        }
    } else {
        res.json(resJson(null, null));
    }
};

function resJson(unix, natural) {
    return ({
      "unix" : unix,
      "natural" : natural
    });
};