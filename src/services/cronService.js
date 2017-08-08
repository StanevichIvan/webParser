import Cron from 'cron';

class CronService {

    constructor() {
      this.cron = Cron.CronJob;
      this.processes = [];
    }

    /**
     * Create cron process
     * @param config
     * @param {String} config.pattern
     * @param {function} config.handler
     * @param {function} config.callback
     * @param {boolean} config.start
     */
    createProcess(config) {

        let timePettern = config.pattern;
        let handler = config.handler;
        let callback = config.callback;
        let startImeddeatly = config.start;

        let cronProcess = new this.cron(timePettern, handler, callback, startImeddeatly, 'America/Los_Angeles');

        this.processes.push(cronProcess);
    }

    startAllJobs() {
        this.processes.forEach((item)=>{
            item.start();
        });
    }

    stopAllJobs() {
        this.processes.forEach((item)=>{
            item.stop();
        });
    }
}

export default  new CronService();
