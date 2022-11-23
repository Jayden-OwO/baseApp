// @ts-nocheck
import { makeAutoObservable } from 'mobx';
class WebHome {
  constructor() {
    // 0-Live，1-ALL, 2-Finished, 3-Scheduled
    this.testParams = 1;

    makeAutoObservable(this);
  }

  // mobx set list
  setTestParams(param) {
    this.testParams = param;
  }
}

export default WebHome;
