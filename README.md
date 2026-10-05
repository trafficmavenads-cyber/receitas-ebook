# Receitinha do Dia — GitHub Pages

Landing page com o checkout https://pay.cakto.com.br/5vgsxj8_481234 conectado a todos os botões de compra.

## Publicar

1. Crie um repositório público no GitHub.
2. Extraia o ZIP e envie **os arquivos extraídos**, incluindo a pasta `assets`, para a raiz da branch `main`. O arquivo ZIP não deve ser enviado no lugar deles.
3. Em **Settings → Pages**, selecione **Deploy from a branch**, branch **main**, pasta **/(root)** e salve.
4. Aguarde a URL publicada que será apresentada pelo GitHub.

Não é necessário instalar nada ou compilar a página.

## Oferta

A página foi alinhada ao produto exibido no checkout enviado: **Receitinha do Dia**, com mais de 200 receitas de café da manhã sem glúten e sem açúcar, opções de preparo em menos de 10 minutos e garantia de 7 dias.

A identidade visual acompanha o laranja e o dourado da oferta. A página apresenta os cinco complementos do checkout: mais de 700 receitas, Bolos Fofinhos Sem Culpa, Rolinhos de Canela +30 Receitas, 102 Receitas Para AirFryer e Pães Perfeitos Sem Glúten. São adicionais opcionais, escolhidos separadamente na Cakto.

Por opção comercial, os valores ficam na página de compra. A landing não exibe preços, taxas nem uma soma do pedido. Os botões levam ao checkout sem selecionar complementos automaticamente.

As imagens desta página são as imagens da oferta no próprio checkout. A landing não processa pagamentos nem entrega o ebook; essas etapas ficam na plataforma de venda.

## Manutenção

Checkout e garantia ficam em `config.js`. Os textos ficam em `index.html` e a aparência em `styles.css`. Em celulares, o botão fixo de compra aparece ao sair da primeira seção e se recolhe quando o botão da oferta final entra na tela.

Parâmetros de campanha selecionados (`utm_*`, `src`, `sck`, `fbclid`, `gclid`, `ttclid`) são preservados no checkout sem substituir parâmetros já existentes.

## Meta Pixel

Pixel autorizado: `2288091765377968`. O código em `index.html` registra `PageView` e tem alternativa para navegadores sem JavaScript. Os botões de compra registram o evento personalizado `CheckoutClick`, sem impedir a navegação quando o pixel está bloqueado ou indisponível.

As compras aprovadas (`Purchase`) e o início efetivo do checkout (`InitiateCheckout`) devem ser registrados pela integração da Cakto com o mesmo ID, configurada no produto. A landing não dispara eventos de compra. Referência: https://ajuda.cakto.com.br/pt-br/articles/56-como-configurar-o-pixel-do-facebook-na-cakto

Para conferir localmente, execute `python -m http.server 8080` nesta pasta e abra `http://localhost:8080`.
