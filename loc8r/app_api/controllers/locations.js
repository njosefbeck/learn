var mongoose = require('mongoose');
var Loc = mongoose.model('Location');

var sendJSONResponse = function(res, status, content) {
  res.status(status);
  res.json(content);
}

module.exports.locationsListByDistance = function (req, res) {
  sendJsonResponse(res, 200, {"status": "success"});
};

module.exports.locationsCreate = function (req, res) {

};

module.exports.locationsReadOne = function (req, res) {
  if (req.params && req.params.locationid) {
    Loc
    .findById(req.params.locationid)
    .exec(function(err, location) {
      if (!location) {
        sendJSONResponse(res, 404, {
          "message": "locationid not found"
        });
        return;
      }

      if (err) {
        sendJSONResponse(res, 404, err);
        return;
      }

      sendJSONResponse(res, 200, location);
    });
  } else {
    sendJSONResponse(res, 404, {
      "message": "No locationid in request"
    });
  }
};

module.exports.locationsUpdateOne = function (req, res) {
  
};

module.exports.locationsDeleteOne = function (req, res) {
  
};