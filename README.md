# Portal CAMEC

Pacote pronto para publicação no GitHub Pages. O site funciona diretamente no navegador e não precisa de instalação, Node.js ou etapa de compilação.

## Como publicar

1. Crie um repositório no GitHub.
2. Envie os arquivos `index.html`, `.nojekyll` e `README.md` para a raiz do repositório.
3. No GitHub, abra **Settings**.
4. Entre em **Pages**.
5. Em **Build and deployment**, escolha **Deploy from a branch**.
6. Selecione a branch **main**, a pasta **/(root)** e clique em **Save**.
7. Aguarde alguns minutos até o GitHub exibir o endereço publicado.

## Estrutura

- `index.html`: site completo, incluindo estilos, painel, filtros e integração com o Firebase.
- `.nojekyll`: evita processamento desnecessário do GitHub Pages.
- `README.md`: instruções de publicação.

## Atenção à segurança

O portal continua conectado ao Firebase usado pelo site original. Antes de publicar para muitas pessoas, confirme se as regras do Firestore permitem somente os acessos necessários. A senha do painel é verificada no próprio navegador; portanto, ela não substitui uma autenticação segura configurada no servidor.
