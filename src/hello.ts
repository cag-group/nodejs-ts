export class Hello {
  run() {
    console.log(this.greeting('banan'));
  }

  greeting(name:string) {
    return `Hello, ${name}`;
  }

  square(number: number) {
    return number*number;
  }
}
