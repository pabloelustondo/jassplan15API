/// <reference path="../Scripts/typings/mongodb/mongodb.d.ts" />
var SeedData = require('./SeedData');
var database = require('./database');
var Data = (function () {
    function Data() {
        var initialSubjects = (new SeedData).initialSubjects();
        this.seedDatabase(initialSubjects);
    }
    Data.prototype.getSubjects = function (next) {
        database.getDB(function (err, db) {
            if (err) {
                next(err, null);
            }
            else {
                db.subjects.find().toArray(function (err, results) {
                    next(null, results);
                });
            }
            ;
        });
    };
    Data.prototype.addSubject = function (subject, next) {
        database.getDB(function (err, db) {
            if (err) {
                next(err, null);
            }
            else {
                db.subjects.insert(subject, function (err) {
                    if (err) {
                        console.log("failed to insert");
                    }
                    else {
                        db.subjects.find().toArray(function (err, results) {
                            if (err) {
                                console.log("failed to reload list");
                            }
                            else {
                                next(null, results);
                            }
                        });
                    }
                });
            }
            ;
        });
    };
    Data.prototype.updateSubject = function (subject, next) {
        database.getDB(function (err, db) {
            if (err) {
                next(err, null);
            }
            else {
                db.subjects.update(subject, function (err) {
                    if (err) {
                        console.log("failed to insert");
                    }
                    else {
                        db.subjects.find().toArray(function (err, results) {
                            if (err) {
                                console.log("failed to reload list");
                            }
                            else {
                                next(null, results);
                            }
                        });
                    }
                });
            }
            ;
        });
    };
    Data.prototype.seedDatabase = function (initialSubjects) {
        database.getDB(function (err, db) {
            if (err) {
                console.log("error");
            }
            else {
                db.subjects.count(function (err, count) {
                    if (err) {
                        console.log("error");
                    }
                    else {
                        if (count == 0) {
                            console.log("seeding the database");
                            initialSubjects.forEach(function (item) {
                                db.subjects.insert(item, function (err) {
                                    if (err)
                                        console.log("failed to insert");
                                });
                            });
                            console.log("seed finished");
                        }
                    }
                });
            }
        });
    };
    return Data;
})();
module.exports = Data;
