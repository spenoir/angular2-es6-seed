export class NameList {
  names = ['Dijkstra', 'Knuth', 'Turing', 'Hopper'];

  get(): string[] {
    return this.names;
  }
  add(value: string) {
    this.names.push(value);
  }
}
