# Dialog

Como descrito na documentação, esse aplicativo tem como objetivo avaliar meus conhecimentos em front-end desenvolvendo um Dialog em `React` utlizando alguma biblioteca de estilização. Nesse caso, como sugerido foi utilizado o `styled-components`.

Nas seções a seguir vou apresentar os `scripts` para instalar e rodar a aplicação, bem como os testes automatizados, além de descrever os principais componentes desenvolvidos e como funcionam.

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

## Descrição de uso

### Hooks

- `useEscapeKey`: Hook customizado para adicionar um evento `callback` quando a tecla `Escape` é pressionada. 

- `useOverlayClick`: Hook customizado para adicionar um evento `callback` quando a parte overlay de um componente é clicado. Nesse caso, além do `callback` possui um parâmetro boleano `isCallbackAllowed` se permite a execução do mesmo ou não quando clicado.

### Componentes

Para essa aplicação e demonstrar o funcionamento de um dialog foi desenvolvido uma página principal que dá acesso ao dialog em si.

#### `App`


É a página principal, que possui apenas um botão com o texto "Abrir Dialog" que abre o componente `Dialog`. O mesmo está localizado em `src/components/App`.

O componente foi estilizado usando `styled-components` e possui um body, e como componentes filhos o botão e o componente `Dialog` seguindo o critério estabelecido pela documentação. Dentro do Dialog o conteúdo que vai ser exibido no componente, podendo ser um texto ou mesmo um outro componente.

#### `Dialog`

Quando o botão "Abrir Dialog" é clicado, o Dialog é aberto. Assim, possui uma camada overlay que que sobrepõe toda a camada do componente App, e possui a camada de conteúdo. Então o componente pode ser fechado clicando no ícone, ou pressionado Esc e se caso `closeOnOverlayClick` for habilitado, o `Dialog` pode ser fechado ao cliclar na camada overlay.
 Esse componente está localizado em `src/components/Dialog`.

Como definido na documentação, esse componente possui as props `title`, `isOpen`, `onClose`,`closeOnOverlayClick` e `children`. Possui também a implementação dos dois hooks `useEscapeKey` e `useOverlayClick` passando o evento `onClose` do `Dialog` para fechar o componente quando houver a ação de ESC ou ao clicar no overlay do componente. Em espefífico no `useOverlayClick` também é passado o `closeOnOverlayClick` para definir se o `Dialog` vai ser fechado se o overlay for clicado ou não.

Também foi utilizado `styled-components` para o `Dialog`, possuindo um `div` overlay que é a parte escura do componente, seguindo de container que é a parte de conteúdo do componente. O container possui o header e o conteúdo. No header tem o `title` que não é obrigatório e o ícone de fechar que foi utilizado o `React-Icons`.

No conteúdo `DialogContent` possui a propriedade `children` que recebe o conteúdo da página pai que também não é obrigatório.

Para finalizar, o componente é renderizado apenas se `isOpen` for `true` ou o componente não retorna nada.