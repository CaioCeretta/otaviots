# Resumo do que o webpack faz #
## At its core, webpack is a static module bundler for modern JavaScript applications. When webpack processes your application, it internally builds a dependency graph from one or more entry points and then combines every module your project needs into one or more bundles, which are static assets to serve your content from.


# Sem o webpack nós poderiamos simplesmente compilar o arquivo e executar, ele funciona normalmente com node, mandando para a pasta dist
# para front end, nós não queremos vários arquivos dessa maneira, por isso usamos um bundler

# Precisamos adicionar o ts-loader webpack e o webpack.cli

# Após isso, croa-se um arquivo webpack.config.js na raiz do projeto e nesse curso eu fui no site do webpack e peguei a configuração da seção de typescript
# eu mantive o mesmo arquivo, apenas coloquei um "mode" que nesse caso foi o de development para o webpack ser mais rápido e não minificar o projeto, também foi alterado o output
# onde antes era apenas a pasta dist, agora é no dist/assets/js
# também foi adicionado devtool: 'source-map' para mapear os arquivos javascript gerados pelo webpack para o arquivo typescript, assim quando debugar o codigo no navegador
## irá mostrar a linha do arquivo que gerou determinado erro

# Feito isso, precisamos alterar o tsconfig para bater com a configuração do webpack, deixando o outdir com o mesmo valor do webpack config
