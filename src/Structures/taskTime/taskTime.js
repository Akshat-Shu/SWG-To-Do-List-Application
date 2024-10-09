class taskTime {
    constructor(startTime, endTime, completed) {
        if (!startTime || !endTime) return;
        this.startTime = new Date(startTime);
        this.completed = completed
        this.endTime = new Date(endTime);
    }
}

export default taskTime