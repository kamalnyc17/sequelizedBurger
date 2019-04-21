var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the burgers
  app.get("/", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.burgers.findAll({}).then(function(dbburgers) {
        var hbsObject = {
            burger: dbburgers
        }
      res.render("index", hbsObject);
    });
  });

  // POST route for saving a new burger
  app.post("/api/burgers", function(req, res) {
    db.burgers.create({
        burger_name: req.body.name,
        devoured: req.body.devoured
    }).then(function(dbburgers) {
      res.json(dbburgers);
    });
  });

  // PUT route for updating burger's devouring status
  app.put("/api/burgers/:id", function(req, res) {
    db.burgers.update({
        devoured: true
      }, {
        where: {
          id: req.body.id
        }
      }).then(function(dbTodo) {
        res.json(dbTodo);
      });
    });
};