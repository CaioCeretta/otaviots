export interface IMyIteratorProtocol<T> extends Iterator<T> {
  reset(): void;
}
