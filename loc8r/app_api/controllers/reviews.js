var mongoose = require('mongoose');
var Loc = require('../models/locations').model;

var sendJsonResponse = function(res, status, content) {
  res.status(status);
  res.json(content);
}

module.exports.reviewsCreate = function (req, res) {
  
};

module.exports.reviewsReadOne = function (req, res) {
  if (!req.params && req.params.locationid && req.params.reviewid) {
    return sendJsonResponse(res, 404, {
      "message": "Not found, locationid and reviewid are both required"
    });
  }

  Loc
    .findById(req.params.locationid)
    .select('name reviews')
    .exec(
      function(err, location) {
        var response, review, reviewArr;

        if (!location) {
          return sendJsonResponse(res, 404, { "message": "locationid not found" });
        }

        if (err) {
          return sendJsonResponse(res, 400, err);
        }

        if (!location.reviews) {
          return sendJsonResponse(res, 404, { "message": "No reviews found" });
        }

        review = location.reviews.id(req.params.reviewid);
        /*
        review = location.reviews[0];
        reviewArr = location.reviews.filter(function(value) {
          return value.id == req.params.reviewid;
        });
        */

        if (!review) {
          return sendJsonResponse(res, 404, { "message": "reviewid not found" });
        }

        response = {
          location: {
            name: location.name,
            id: req.params.locationid
          },
          review: review
        };
        sendJsonResponse(res, 200, location.reviews);

      }
    );

};

module.exports.reviewsUpdateOne = function (req, res) {
  
};

module.exports.reviewsDeleteOne = function (req, res) {
  
};