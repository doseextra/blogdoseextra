---
title: Produção de Vídeos No Linux – Parte 2
author: Regis Tomkiel
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
image: //i.imgur.com/QRQGKcY.jpg
ImagePost: //i.imgur.com/03WTY8E.jpg
description: Nesse segundo artigo da série Produção de Vídeos No Linux, descubra como instalar duas das ferramentas mais poderosas do mercado, o Kdenlive e o Natron.
date: 2017-05-09
categories:
  - Artigo
  - Tutoriais
  - Video
tags:
  - edição de vídeo
  - filmmaker
  - linux
  - edição no linux
  - Software Livre
  - Software Livre produção
  - Produção de vídeo no Linux
  - Videomaker
  - Kdenlive
  - DaVinci
  - BlackMagic Design
  - Blender
  - Natron
---
No último artigo descobrimos que é possível trabalhar com <a href="http://zine.doseextra.com/revista/producao-de-videos-no-linux-parte-1/" target="_blank" rel="noopener noreferrer">Produção de Vídeos No Linux</a> e hoje vamos falar sobre o ambiente de trabalho, configurações mínimas e a instalação de alguns softwares. Antes de mais nada, vale ressaltar que vamos elaborar um cenário de desktops de uso comum e não de <em>workstations </em>de alto desempenho, ou seja, estes artigos são pensados em quem está começando.

Para começar a produzir em Linux, primeiramente (e obviamente) é preciso instalar uma <em>distribuição </em>em seu computador. Hoje esse processo é muito simples, especialmente se a escolha for o Ubuntu. Basta baixar o arquivo, de preferência amd64, gravar em um pendrive usando o tutorial do site Diolinux, reiniciar o computador e seguir os procedimentos de instalação.

O processo é bem simples, como pode ser visto no <strong>vídeo</strong> a seguir:
<iframe src="https://www.youtube.com/embed/6GIAtOlXLQU" width="100%" height="440" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
<p style="text-align: center;">-
-
-</p>
Com o <strong>Sistema Operacional</strong> configurado, vamos instalar os primeiros softwares de edição, que no caso deste artigo, vão ser o <em>Kdenlive</em> e o <em>Natron</em>, ambos de código aberto e gratuitos.
Para instalar o <em>Kdenlive</em> existem várias alternativas, mas nós vamos utilizar a dos pacotes <em>snaps</em>, que é uma nova maneira bem simplificada de instalar programas no Linux.
Primeiramente, no menu de aplicativos digite "<em><strong>Terminal</strong></em>" e clique no ícone que vai aparecer:
<img class="size-full" src="//i.imgur.com/bibCbag.png" alt="Executando o terminal no Linux" width="100%" />
Terminal no linux

No <em>Terminal</em>, cole o seguinte comando e aperte a tecla <em>Enter</em>:
<strong>" sudo snap install --edge --force-dangerous --devmode kdenlive-dev</strong>
<img class="alignnone size-medium" src="//i.imgur.com/wiwkLn5.png" alt="Instalando Kdenlive no Linux" width="100%" />
Instalando o Kdenlive

Depois de instalado, o programa vai aparecer na lista de programas instalados:
<img class="aligncenter size-full" src="//i.imgur.com/3ySxD76.png" alt="Kdenlive já instalado no Linux" width="100%" />Executando o programa

Já o <strong>Natron</strong> é um pouquinho diferente, pois ainda não foram disponibilizados pacotes <em>snaps</em>, não que isso nos impeça de instalar e utilizar esse software de edição não linear de forma plena. Para instalar, basta ir no seguinte <a href="http://packages.deepin.com/deepin/pool/main/n/natron/">site</a>, baixar a versão correspondente ao seu Linux(amd64) e clicar duas vezes sobre o programa.
<img class="aligncenter size-full" src="//i.imgur.com/GkTWZBn.png" alt="Site para baixar o Natron .deb" width="100%" />Site para baixar o Natron em .deb

Será solicitada a senha do computador na hora da instalação, basta inserir e apertar a tecla <em>Enter. </em>
<img class="aligncenter size-full wp-image-195" src="//i.imgur.com/SxCGGfK.png" alt="Senha para instalação do Natron no Linux" width="100%" />Digite a sua senha para confirmar a instalação
Com os programas instalados, é hora de começar a trabalhar e descobrir todos os recursos dessas ferramentas para <em>filmmakers</em>, mas isso é tema para o próximo artigo, não perca.
Site Kdenlive: <a href="https://kdenlive.org/">https://kdenlive.org/</a>
Site Natron: <a href="https://natron.fr/">https://natron.fr/</a>
Site Ubuntu: <a href="https://www.ubuntu.com/" target="_blank">https://www.ubuntu.com/</a>
Site Diolinux: <a href="http://www.diolinux.com.br/" target="_blank">http://www.diolinux.com.br/</a>
Linux no Wikipedia: <a href="https://pt.wikipedia.org/wiki/Linux">https://pt.wikipedia.org/wiki/Linux</a>
