---
title: O que é o Ubuntu Snap?
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
image: //i.imgur.com/av9fjGb.jpg
ImagePost: //i.imgur.com/BGbjxrU.jpg
description: Você sabe o que são os pacotes Snaps? E sabe como eles funcionan no Linux?
date: 2017-07-01
categories:
  - Artigo
  - Tutoriais
  - Web
  - Software Livre
tags:
  - css
  - html
  - hugo
  - web
  - html5
  - desenvolvimento de sites
---

Uma das coisas mais bacanas do GNU/Linux é a liberdade de escolhas. É algo que não existe em nenhuma outra plataforma e que permite maior controle sobre o que está acontecendo. Eu mesmo não me vejo utilizando outro *SO*.  
O problema é referente à instalação de programas e a falta de padrão. Hoje os arquivos *.deb* e *.rpm* são predominantes e adotados até pela *Google* na disponibilização de seus programas. Quem não segue esses padrões precisava se virar nos 30 para conseguir instalar os programas.  
### A solução seria adotar os arquivos .deb e .rpm?

**Não exatamente!**    

O Linux e suas bibliotecas estão em constante atualização e nem todas distribuições se preocupam em manter a compatibilidade com programas mais velhos e o que vemos, na maioria das vezes, é um grande quebra-cabeças quando um programa não é atualizado ou é descontinuado. Aí, nada de instalar aquele programa velhinho, mas que ainda funcionaria perfeitamente.  

Pensando em resolver isso, muitas iniciativas foram projetas, como o *Appimage*, o *Fltapack* e o *Snappy*. A diferença, é que aqui os pacotes são oferecidos com suas bibliotecas e assim, funcionam independentemente da versão do sistema ou do sistema. A ideia é ter pacotes universais, que podem ser instalados em todos os sistemas sem alterações ou adaptações.  

Para melhorar a explicação, imagine os arquivos um arquivo *.zip*. Esse arquivo é o nosso programa. No formato .deb teríamos apenas o programa em si dentro desse arquivo e precisaríamos de mais pacotes para que ele funcione corretamente. Agora imagine que todos esses pacotes fossem reempacotados em outro .zip e assim, gerando apenas um arquivo.  
Claro que isso aumenta o tamanho do pacote, mas ao mesmo tempo garante o funcionamento do programa em qualquer sistema e em qualquer versão.   
Legal, né?

### O Snap
O snap é a tecnologia adotada pela Canonical para ser utilizada em seu ecossistema, como *Desktop Ubuntu*, Servidores e Internet das Coisas. Como a implementação é de código aberto, não demorou muito para estar disponível em outras distribuições, como o *Gentoo*.  
O *Ubuntu 16.04* já vem com o snappy por padrão e para instalar um programa com ele é simples, como pode ser visto na instalação do [Hugo](# "Como instalar o Hugo").  

``$ sudo snap install hugo``

Pronto, o software acabou de ser instalado e já pode ser utilizado normalmente. Para instalar em outras distribuições usamos o mesmo comando e por consequência, teremos o mesmo software, garantindo 100% de compatibilidade.

Veja como [instalar no Gentoo](# "Como instalar snaps no Gentoo"), seguindo esse mesmo princípio.
