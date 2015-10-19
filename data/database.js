(function (database) {

    var mongodb = require("mongodb");
    var mongoUrl = "mongodb://localhost:27017/jassplan5";
    mongoUrl = "mongodb://JassPlanMongoLab:J3dZwB8qR3XO.Q6x.DO_MSeK8fUxxgk51OEYgQb2VJE-@ds034878.mongolab.com:34878/JassPlanMongoLab";
    var theDb = null;

    database.getDB = function (next) {
        if (!theDb) {
            mongodb.MongoClient.connect(mongoUrl, function (err, db) {
                if (err) {
                    next(err, null);
                } else {
                    theDb = {
                        db: db,
                        subjects: db.collection("subjects")
                    };
                    next(null, theDb);
                }
            });
        } else {
            next(null, theDb);
        }
    }


})(module.exports);

