interface FooOptions {
  bar: string;
}

export default class Foo {
  options: FooOptions;
  name: string;

  constructor(options: FooOptions) {
    this.options = options;
    this.name = 'Foo';
  }

  static dosometineStatic(): void {
    console.log(Foo.dosometineStatic);
  }

  dosomethingInstance(): void {
    console.log(this.dosomethingInstance);
  }
}
