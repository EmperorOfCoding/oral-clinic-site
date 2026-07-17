# Google Search Console Verification

## Objetivo

Permitir que o domínio `oralclinic.com.br` seja verificado no Google Search Console pelo método de tag HTML.

## Alteração

Adicionar a meta tag de verificação fornecida pela Vexaris ao `<head>` do `index.html`, junto aos metadados principais de SEO. O processo de pré-renderização deve preservar a tag no `dist/index.html`.

## Validação

1. Executar o build de produção.
2. Confirmar a presença de uma única meta tag `google-site-verification` no HTML gerado.
3. Confirmar que o build termina sem erros.

## Fora do escopo

A verificação da propriedade e a solicitação de indexação dentro do painel do Google Search Console continuam sendo ações posteriores ao deploy.
