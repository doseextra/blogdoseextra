---
title: O que são as meta tags?
author: Regis
authorName: Regis Tomkiel
authorImg: /img/author/Chefe-Apache-768x768.jpg
authorGp: //plus.google.com/+RegisTomkiel
authorFacebook: //www.facebook.com/registomkiel
authorInstagram: //instagram.com/registomkiel
authorTwitter: //twitter.com/tomtomkiel
authorLinkedin: //www.linkedin.com/in/regis-tomkiel/
authorEmail: regis@doseextra.com
authorDescription: Sócio Fundador da Dose Extra Multimídia, produtor audiovisual, desenvolvedor web, podcaster, escritor e quando sobra tempo, coleciona videogames e filmes independentes.
type: post
id: revista
image: //i.imgur.com/OQYkDcO.jpg
ImagePost: //i.imgur.com/nqvsCyQ.jpg
date: 2017-07-06
description: Saiba para que servem as Meta Tags e como elas podem te ajudar com SEO.
categories:
  - Dicas
  - Artigo
  - Desenvolvimento Web
  - Tutorial
  - SEO
tags:
  - comunicação
  - html
  - metatags
  - meta tags
  - web
  - Facebook
  - tags
  - SEO
---

### Informações de um site
Um site possui basicamente dois tipos de informação quando acessado no navegador. O primeiro grupo, trata-se do conteúdo em primeiro plano legível para as pessoas, ou seja, tudo visível contido na página. Alguns exemplos, podem ser:  

 * [Texto de um artigo](# "Como escrever um bom artigo de blog")
 * [Imagem em destaque](# "Definindo uma imagem de destaque em uma postagem")
 * [Links de compartilhamento](# "Facilite o compartilhamento de seu conteúdo")
 * [Informações do autor](# "Diga ao público quem escreveu a postagem")
 * [Publicidade](# "Usando o AdSense da forma correta")

O outro grupo é composto pelas informações de segundo plano, que não são relevantes ao usuário, mas aos robôs dos sites de buscas e ao navegador, por exemplo. Hoje vamos falar de tipo de informações em especifico. As Meta Tags.  
### O que são as Meta Tags de um site?
Bom, já vimos que um site não é apenas artigos e imagens. De nada adianta um artigo bem escrito, se ninguém ler, certo? Para que seus artigos alcacem mais pessoas, são necessárias algumas informações que dizem aos buscadores o que realmente tem no site. O objetivo é facilitar a indexação de seu conteúdo.  
Os buscadores estão ficando muito mais inteligentes e levando em consideração, principalmente a qualidade do conteúdo. Algumas *tags* como a *keywords*, que consiste em adicionar palavras chaves relacionadas ao texto, agora são irrelevantes para o Google. No seu lugar, se é que podemos falar assim, é analisada a ocorrência de palavras no texto.  
Se algumas *tags* estão se tornando obsoletas, outras continuam muito importantes, como a *meta tag* *title* ou a *description*. Como logicamente observado, elas possuem as informações de título de uma página, assim como a descrição dela, respectivamente. Outras *meta tags* importantes, são as **open graph** do Facebook, que garantem uma melhor integração com a rede social e o que vai ser compartilhado.
**Um exemplo de meta tags open graph:**  
``...``  
``<title>O que são Meta Tags? - Dose Extra Blog</title>``  
``<meta name="description" content="Saiba para que servem as Meta Tags e como elas podem te ajudar com SEO. " />``  
``<!-- Meta Tags Open Graph -->``  
``<meta property="og:title" content="O que são Meta Tags? - Dose Extra Blog"/>``  
``<meta property="og:type" content="post" />``  
``<meta property="og:description" content="" />``  
``<meta property="og:url" content="https://blog.doseextra.com/o-que-sao-metatags/" />``  
``<meta property="og:image" content="img/exemplo.jpg" />``  
``<meta property="og:author" content="https://facebook.com/registomkiel" />``  
``<meta property="og:locale" content="pt_BR" />``  
``...``  

Esse é um exemplo do uso das tags **open graph**. Vamos ver o que algumas significam:  

``<meta property="og:title" content="O que são Meta Tags? - Dose Extra Blog" />``  
Ela garante que ao compartilhar o post no Facebook, será exatamente este o título do compartilhamento e não apenas "Dose Extra Blog". Pessoas interessadas em *Meta Tags* jamais saberiam do que se trata o texto.  

``<meta property="og:type" content="post" />``  
Diz que se trata de uma postagem do site e não uma página estática, como "Sobre", por exemplo.  

``<meta property="og:description" content="Saiba para que servem as Meta Tags e como elas podem te ajudar com SEO. " />``  
Assim como a *og:title*, força o Facebook a utilizar esta descrição do conteúdo.  

``<meta property="og:url" content="https://blog.doseextra.com/o-que-sao-metatags/" />``  
Em caso de redirecionamento, esta tag ajuda a dizer qual é a verdadeira URL do conteúdo.  

``<meta property="og:image" content="img/exemplo.jpg" />``  
Nem sempre a imagem definida como imagem em destaque vai aparecer no Facebook, para resolver isso, podemos utilizar a tag *og:image* e dizer qual é a imagem que desejamos usar no compartilhamento.   
***Apenas fique atento às exigências de formato e dimensões do Facebook***.

``<meta property="og:author" content="https://facebook.com/registomkiel" />``  
Aqui nós dizemos quem é o autor da postagem, podendo ser perfil ou página.  

``<meta property="og:locale" content="pt_BR" />``  
Dizemos qual o local de nosso conteúdo, ajudando ao Facebook filtrar quem pode se interessar pelo conteúdo.  

Outras opções de **tags** podem ser verificadas na [documentação oficial](http://ogp.me/ "Documentação Open Graph").

### Meta Tags comuns
As Meta Tags mais comuns podem ser verificadas no exemplo a seguir:  

``...``  
``<meta http-equiv="content-language" content="pt-br">``  
``<title>O que são Meta Tags? - Dose Extra Blog</title>``  
``<meta name="description" content="Saiba para que servem as Meta Tags e como elas podem te ajudar com SEO. " />``  
``<meta name="author" content="Regis Tomkiel">``  
``<meta name="reply-to" content="contato@doseextra.com">``  

``<meta name="keywords" content="sites, web, desenvolvimento, html, design">``  
``<meta name="generator" content="Hugo 0.24">``  

``<link rel="shortcut icon" href="http://localhost:1313//img/site/favicon.ico">``  
``...``    

#### Um pouco mais sobre cada tag:
``<meta http-equiv="content-language" content="pt-br">``  
Definimos a localização de nosso conteúdo, como *pt_BR* para um público falante do português do Brasil e *pt_PT* para Portugal.  

``<title>O que são Meta Tags? - Dose Extra Blog</title>``  
O título da página, assim como explicado no *open graph*.  

``<meta name="description" content="Saiba para que servem as Meta Tags e como elas podem te ajudar com SEO. " />``  
A descrição do conteúdo da postagem de forma reduzida e objetiva.  

``<meta name="author" content="Regis Tomkiel">``  
Pode ser utilizada para informar o nome do autor do texto, mas é pouco relevante e utilizada.  

``<meta name="reply-to" content="contato@doseextra.com">``  
O e-mail de contato para envio de mensagens. Nunca emplaco e é pouco utilizada.  

``<meta name="keywords" content="sites, web, desenvolvimento, html, design">``  
Aqui vão as *keywords*, que são algumas palavras referentes ao conteúdo. Perdeu praticamente toda a importância nas buscas.  

``<meta name="generator" content="Hugo 0.24">``  
Informações sobre o gerador ou CMS do site. Em caso de CMS com banco de dados e conteúdo dinamico, não é legal expor a informação, já que pode ser utilizada em casos de tentativas de invasão. Como no nosso caso, trata-se de um site estático, naturalmente mais seguro, além de etarmos divulgando o [Hugo](https://gohugo.io/ "Conheça o Hugo"). :)    

``<link rel="shortcut icon" href="http://localhost:1313//img/site/favicon.ico">``  
É aqui que definimos o *ícone* do site.  

### Considerações finais
Espero que o artigo tenha sido útil e que os padrões Web sejam cada vez mais desmistificados. É possível estudar mais acompanhando nossas postagens ou seguindo os links a seguir:  

* [WC3](//www.w3.org/ "World Wide Web Consortium")
* [Facebook Open graph](//developers.facebook.com/docs/sharing/opengraph "Página do Facebook Open graph")
* [Google Webmaster Blog](//webmasters.googleblog.com/2009/09/google-does-not-use-keywords-meta-tag.html "Google does not use the keywords meta tag in web ranking")
