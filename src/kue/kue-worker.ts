import {
  Queue,
  createQueue
} from 'kue';

import { Worker } from '../worker';

export class KueWorker implements Worker {
  queue: Queue;

  /**
   * Initialize the BakeryRouter
   */
  constructor() {
    this.queue = createQueue({
      jobEvents: true,
      redis: {
        host: 'localhost'
      }
    });
  }


  startJob(): void {
    console.log('Stuff initialized!');
    this.queue.create('stuff', undefined).save();
    this.queue.process('stuff', 1, (job: any, done: () => void) => {
      console.log('Processing Stuff!');
      setTimeout(() => {
          console.log('Stuff done!');
          done();
        },
        10000
      );
    });
  }
}
