export class Hello {
  run() {
    console.log(this.greeting('kakabanan'));
  }

  greeting(name:string) {
    return `Hello, ${name}`;
  }
}
