var JassCondition;
(function (JassCondition) {
    JassCondition[JassCondition["Blue"] = 0] = "Blue";
    JassCondition[JassCondition["Green"] = 1] = "Green";
    JassCondition[JassCondition["White"] = 2] = "White";
    JassCondition[JassCondition["Yellow"] = 3] = "Yellow";
    JassCondition[JassCondition["Red"] = 4] = "Red";
})(JassCondition || (JassCondition = {}));
var JassStatus;
(function (JassStatus) {
    JassStatus[JassStatus["DoneDone"] = 0] = "DoneDone";
    JassStatus[JassStatus["Done"] = 1] = "Done";
    JassStatus[JassStatus["Asleep"] = 2] = "Asleep";
    JassStatus[JassStatus["Stared"] = 3] = "Stared";
    JassStatus[JassStatus["DoneBad"] = 4] = "DoneBad";
})(JassStatus || (JassStatus = {}));
var JassSubject = (function () {
    function JassSubject(id, config) {
        this._id = id;
        if (config != undefined && config != null) {
            this.name = config.name || this._id;
            this.userid = config.userId || 0;
            this.description = config.description || "";
            this.activity = config.currentActivity || "";
            this.note = config.notes || "";
            this.after = config.after || 9;
            this.updated = config.lastUpdate || Date.now;
            this.done = config.doneDate || Date.now;
            this.status = config.status || JassStatus.Asleep;
            this.condition = config.condition || JassCondition.White;
            this.parentid = config.parentId || null;
            this.points = config.estimatedPoints || 1;
        }
        return this;
    }
    return JassSubject;
})();
module.exports = JassSubject;
