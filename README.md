# Dialog

Como descrito na documentação, esse aplicativo tem como objetivo avaliar meus conhecimentos em front-end desenvolvendo um Dialog em `React` utlizando alguma biblioteca de estilização. Nesse caso, como sugerido foi utilizado o `styled-components`.

Nas seções a seguir vou apresentar os `scripts` para instalar e rodar a aplicação, bem como os testes automatizados, além de descrever os principais componentes desenvolvidos e seus funcionamentos. 

## Scripts disponíveis

No diretório raiz, os seguintes comandos podem ser rodados:

### `npm install`

Instala todas as dependências da aplicação. Para seu desenvolvimento foi utilizado a versão `12.18.2` do `node` e a versão `6.14.6` do `npm`. 

### `npm start`

Roda a aplicação em modo de desenvolvimento através da URL [http://localhost:3000](http://localhost:3000) podendo ser aberto pelo browser.

### `npm run test`

Inicia os testes de modo interativo, por default roda todos os testes, ou pode seguir as instruções para rodar apenas um arquivo específico. Nesse caso, escolha a opção `p`, digite o nome do arquivo e selecione, deste modo será possível ver a lista de testes que passaram e falharam com a descrição do teste.

Nesse app possuem dois arquivos de teste:
- `src/components/App/test/App.test.tsx`: que possuem testes relacionados a integração entre a página pricipal e o Dialog.
- `src/components/Dialog/test/Dialog.test.tsx`: que possuem testes relacionados a testes de funcionalidade do componente Dialog de acordo com suas propriedades.

### `npm run test:coverage`

Inicia os testes e nesse caso considera a cobertura de testes na aplicação, exibe todos os arquivos e sua cobetura em testes.

### `npm run build` e `npm run eject`

São comando para buildar e ejetar o build para publicação, foi deixado como padrão, caso seja necessário já que o intuito não é publicar.