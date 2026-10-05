# Receitinha do Dia — GitHub Pages

Landing page com o checkout https://pay.cakto.com.br/5vgsxj8_481234 conectado a todos os botões de compra.

## Publicar

1. Crie um repositório público no GitHub.
2. Extraia o ZIP e envie **os arquivos extraídos**, incluindo a pasta `assets`, para a raiz da branch `main`. O arquivo ZIP não deve ser enviado no lugar deles.
3. Em **Settings → Pages**, selecione **Deploy from a branch**, branch **main**, pasta **/(root)** e salve.
4. Aguarde a URL publicada que será apresentada pelo GitHub.

Não é necessário instalar nada ou compilar a página.

## Oferta

A página foi alinhada ao produto exibido no checkout enviado: **Receitinha do Dia**, R$37,00, com garantia de 7 dias. O checkout consultado em 05/10/2026 exibe também taxa de serviço de R$0,99, totalizando R$37,99 sem complementos.

O ZIP usado como referência era de CrioCaseira. A identidade do produto, as imagens e as condições foram adaptadas ao checkout indicado. Os cinco produtos adicionais da Cakto são cobrados separadamente e não foram anunciados como bônus gratuitos.

As imagens desta página são as imagens da oferta no próprio checkout. A landing não processa pagamentos nem entrega o ebook; essas etapas ficam na plataforma de venda.

## Manutenção

Checkout, preço principal e garantia ficam em `config.js`. Ao alterar preço ou taxa, revise também os valores exibidos em `index.html`. A aparência fica em `styles.css`.

Parâmetros de campanha selecionados (`utm_*`, `src`, `sck`, `fbclid`, `gclid`, `ttclid`) são preservados no checkout sem substituir parâmetros já existentes. Nenhum pixel de terceiros foi copiado.

Para conferir localmente, execute `python -m http.server 8080` nesta pasta e abra `http://localhost:8080`.
