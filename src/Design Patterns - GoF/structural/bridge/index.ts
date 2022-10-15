/* Diferença entre abstração e implementação
Abstração é um código de alto nível que geralmente delega ações para outro objeto
Implementação é o código que realmente faz o trabalho

Bridge é um padrão de projeto estrutural que tem a intenção de desacoplar uma abstração da sua implementação
de modo que as duas possam variar e evoluir independentemente

Diferenças entre Bridge e Adapter (do livro da gof)

A diferença chave entre esses padrões está nas suas intenções... O padrão adapter faz as coisas funcionarem
APÓS elas terem sido projetadas; o Bridge faz funcionar ANTES que sejam projetadas

Use o padrão bridge quando:

  . Você souber que sua estrutura terá abstrações (códigos de alto nível) e implementações dessa abstração (detalhes) que
  possam varias de maneira independente
  . Você souber que o Adapter poderia ser aplicado naquela estrutura (você já conhece a estrutura)
  . Você quiser dividir uma classe que possa ter diversas variantes (como em produtos e suas variações de cores: CaneraAzul, AzulCaneta, CamisetaAzul, CamisetaVermelha, etc)
  . Se quiser trocar as implementações em tempo de execução, porém o javascript já faz isso por padrão


Lado Bom

. Desacola o código da abstração do código da implementação (SRP)
. Implementa o OCP ao permitir novas abstrações e/ou implementações para o código existente
. Tem as mesmas vantagens do Adapter

Lado ruim

. Aumenta a complexidade da aplicação quando implementado em locais incorretos
*/
