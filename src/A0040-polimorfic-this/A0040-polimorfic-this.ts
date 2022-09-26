export class Calculator {
  constructor(public number: number) {}

  add(n: number): this {
    this.number += n;
    return this;
  }
  sub(n: number): this {
    this.number -= n;
    return this;
  }
  mul(n: number): this {
    this.number *= n;
    return this;
  }
  div(n: number): this {
    this.number /= n;
    return this;
  }
}

export class SubCalculator extends Calculator {
  pow(n: number): this {
    this.number **= n;
    return this;
  }
}

const calculator = new SubCalculator(10);

console.log(calculator.add(5).mul(2).div(2).pow(2));
//Essa chamada em cadeia só é possível pois está utilizando o valor do this

//Builder
export class RequestBuilder {
  private method: 'get' | 'post' | null = null;
  private url: string | null = null;

  setMethod(method: 'get' | 'post'): this {
    this.method = method;
    return this;
  }
  setUrl(url: string): this {
    this.url = url;
    return this;
  }
  send(): void {
    console.log(`Sending data via ${this.method} to ${this.url}`);
  }
}

const request = new RequestBuilder();
request.setUrl('http://google.com').setMethod('post').send();
