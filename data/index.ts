/// <reference path="../Scripts/typings/mongodb/mongodb.d.ts" />


import JassSubject = require("../model/JassSubject"); 

interface Database {
    getDB(any): any;
}

interface DatabaseInstance {
    db: any;
    subjects: MongoDbTypes.Collection;
}

import SeedData = require('./SeedData');
var database:Database = require('./database');




class Data {
    seedData: SeedData;

    constructor() {
        var initialSubjects = (new SeedData).initialSubjects();
        this.seedDatabase(initialSubjects);
    }

    getSubjects(next) {
        database.getDB(function (err, db:DatabaseInstance) {
            if (err) { next(err, null); }
            else {
                db.subjects.find().toArray(function (err, results) {
                    next(null, results);
                });
            };
        });
    }

    addSubject(subject:JassSubject, next) {
        database.getDB(function (err, db: DatabaseInstance) {
            if (err) { next(err, null); }
            else {
                db.subjects.insert(subject, function (err) {
                    if (err) { console.log("failed to insert"); }
                    else {
                        db.subjects.find().toArray(function (err, results) {
                            if (err) { console.log("failed to reload list"); }
                            else {
                                next(null, results);
                            }
                        });
                    }
                });
            };
        });
    }

    updateSubject(subject: JassSubject, next) {
        database.getDB(function (err, db: DatabaseInstance) {
            if (err) { next(err, null); }
            else {
                db.subjects.update(subject, function (err) {
                    if (err) { console.log("failed to insert"); }
                    else {
                        db.subjects.find().toArray(function (err, results) {
                            if (err) { console.log("failed to reload list"); }
                            else {
                                next(null, results);
                            }
                        });
                    }
                });
            };
        });
    }

    seedDatabase(initialSubjects: JassSubject[]) {
        database.getDB(function (err, db) {
            if (err) {
                console.log("error");
            } else {
                db.subjects.count(function (err, count) {
                    if (err) {
                        console.log("error");
                    } else {
                        if (count == 0) {
                            console.log("seeding the database");
                            initialSubjects.forEach(function (item) {
                                db.subjects.insert(item, function (err) {
                                    if (err) console.log("failed to insert");
                                });
                            });
                            console.log("seed finished");
                        }
                    }
                });
            }
        });
    }
}

export = Data;
