import JassSubject = require("../model/JassSubject");
import express = require('express');
import DataService = require("../data/index");

class SubjectsController {
    init(app: any): any{
        var dataService = new DataService();
        app.get("/api/subjects", function (req, res) {


            dataService.getSubjects(function (err, subjects) {
                if (err) {
                    res.send(400, err);
                } else { 
                res.set("Content-Type", "application/json");
                    res.send(subjects)
                }
            });

        });
        app.post("/api/subjects/:id", function (req, res) {
            var subject: JassSubject = new JassSubject(req.params.id, req.body);
            dataService.addSubject(subject, function (err, subjects) {
                if (err) {
                    res.send(400, err);
                } else {
                    res.set("Content-Type", "application/json");
                    res.send(subjects)
                }
            });
        });
        app.put("/api/subjects/:id", function (req, res) {
            var subject: JassSubject = new JassSubject(req.params.id, req.body);
            dataService.addSubject(subject, function (err, subjects) {
                if (err) {
                    res.send(400, err);
                } else {
                    res.set("Content-Type", "application/json");
                    res.send(subjects)
                }
            });
        });
    }
}

export = SubjectsController;