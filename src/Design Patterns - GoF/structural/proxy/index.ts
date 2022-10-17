/*
  Intenção Oficial:

  Proxy é um padrão de projeto que tema intenção de fornecer um substituo ou marcado de localização para outro objeto
  para controlar o acesso à este objeto

  Sobre o proxy:
  - Usa a composição, portanto tem a estrutura muito semelhante ao "Composite" e ao "Decorator" (as intenção são completamente diferentes)
  - Usa um objeto "proxy" que finge ser o objeto real
  - É usado para controle de acesso, logs, cache, lazy instantiation e lazy evaluation, distribuição de serviços e mais
  - Pode escolher como e quando repassar chamadas de métodos para o objeto real
  - Pode executar ações antes e depois das chamadas dos métodos do objeto real
  - Tem várias variações: proxy virtuial, proxy remoto, proxy de proteção, proxy inteligente...

  Variações de proxy

  . Proxy Virtual: controla o acesso a recursos que podem ser caros para criação ou utilização
  . Proxy Remoto: controla acesso a recursos que estão em servidores remotos
  . Proxy de Proteção: controla acesso a recursos que possam necessitar de autenticação/permissão
  . Proxy Inteligente: além de controlar o acesso ao objeto real, ele também executa tarefas
  adicionais para saber quando e como executar determinadas ações
 */

export interface Subject {
  request(): void;
}

export class RealSubject implements Subject {
  request(): void {
    console.log('Algo que meu objeto faz.');
  }
}

export class Proxy implements Subject {
  constructor(private subject: Subject) {}

  request(): void {
    console.log('Meu proxy faz algo');
    this.subject.request(); // Chamada ao objeto real
    console.log('Meu proxy pode fazer outra coisa');
  }
}

/* Aplicabilidade

  Use o padrão Proxy quando:

  . Você tem um objeto caro para ser criado e não quer permitir acesso direto a esse objeto (proxy virtual)
  . Você quer restringir acesso a partes da sua aplicação (proxy de proteção)
  . Você quer uma ligação entre o seu sistema e um sistema remoto (proxy remoto)
  . Você quer fazer cache de chamadas já realizadas (proxy inteligente ou proxy de cache)
  . Você quer interceptar quaisquer chamadas de metodos no objeto real por qualquer motivo (por exemplo, criar logs)

  Lado bom:

  - O código cliente nem precisa saber se está usando ou não usando um proxy (ele finge ser o objeto real)
  - Você pode adiocionar novoso Proxies sem mudar código já testado (OCP)
  - O Proxy funciona mesmo se o objeto real não operacional ou pronto para o uso
  - Você pode controlar o ciclo de vida de objetos reais dentro do proxy

  Lado ruim:

  - Coloca mais classes no sistema, ficando mais complexo

*/
