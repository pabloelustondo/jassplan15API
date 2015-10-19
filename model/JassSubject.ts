enum JassCondition { Blue, Green, White, Yellow, Red }
enum JassStatus { DoneDone, Done, Asleep, Stared, DoneBad }


class JassSubject {

    constructor(id: string, config: any) {
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

    _id: string;
    userid: number;
    name: string;
    description: string;
    activity: string;
    note: string;
    before: number;
    after: number;
    updated: Date;
    created: Date;
    done: Date;
    status: JassStatus;
    condition: JassCondition;
    parentid: string;
    points: number;
}

export = JassSubject;