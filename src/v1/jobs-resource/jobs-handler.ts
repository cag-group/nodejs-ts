import { Worker } from '../../worker';

export class JobsHandler {
  private worker: Worker;

  public configure(worker: Worker) {
    this.worker = worker;
  }

  public startJob() {
    return this.worker.startJob();
  }
}

