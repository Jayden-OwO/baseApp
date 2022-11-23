// @ts-nocheck
import { makeAutoObservable } from 'mobx';
class WebHome {
  constructor() {
    this.testParams = 1;
    makeAutoObservable(this);
  }
  // mobx set list
  setTestParams(param) {
    this.testParams = param;
  }
}

export default WebHome;
