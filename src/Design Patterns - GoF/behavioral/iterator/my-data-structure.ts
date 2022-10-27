import { MyDefaultIterator } from './default-iterator';
import { IMyIteratorProtocol } from './my-iterator-protocol';

export class MyDataStructure {
  private _items: string[] = [];
  private iterator: IMyIteratorProtocol<string> = new MyDefaultIterator(this);

  addItem(...items: string[]): void {
    items.forEach((item) => this.items.push(item));
  }

  get items(): string[] {
    return this._items;
  }

  size(): number {
    return this.items.length;
  }

  changeIterator(iterator: IMyIteratorProtocol<string>): void {
    this.iterator = iterator;
  }

  [Symbol.iterator](): IMyIteratorProtocol<string> {
    return this.iterator;
  }

  resetIterator(): void {
    this.iterator.reset();
  }
}
