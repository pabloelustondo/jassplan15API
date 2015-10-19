var JassSubject = require("../model/JassSubject");
var DataService = require("../data/index");
var SubjectsController = (function () {
    function SubjectsController() {
    }
    SubjectsController.prototype.init = function (app) {
        var dataService = new DataService();
        app.get("/api/subjects", function (req, res) {
            dataService.getSubjects(function (err, subjects) {
                if (err) {
                    res.send(400, err);
                }
                else {
                    res.set("Content-Type", "application/json");
                    res.send(subjects);
                }
            });
        });
        app.post("/api/subjects/:id", function (req, res) {
            var subject = new JassSubject(req.params.id, req.body);
            dataService.addSubject(subject, function (err, subjects) {
                if (err) {
                    res.send(400, err);
                }
                else {
                    res.set("Content-Type", "application/json");
                    res.send(subjects);
                }
            });
        });
        app.put("/api/subjects/:id", function (req, res) {
            var subject = new JassSubject(req.params.id, req.body);
            dataService.addSubject(subject, function (err, subjects) {
                if (err) {
                    res.send(400, err);
                }
                else {
                    res.set("Content-Type", "application/json");
                    res.send(subjects);
                }
            });
        });
    };
    return SubjectsController;
})();
module.exports = SubjectsController;
