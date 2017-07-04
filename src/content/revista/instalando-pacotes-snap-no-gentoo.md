---
title: Instalando pacotes snap no Gentoo
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
description: Conheça o Hugo, o gerador de sites escrito em GO e de fácil aprendizado.
date: 2017-07-01
categories:
  - Artigo
  - Tutoriais
  - Linux
  - Software Livre
tags:
  - tecnologia
  - snap no gentoo
  - snappy
  - snap
  - hugo
  - gentoo
  - linux

---
Esta é uma dica super rápida e é para todos que utilizam a meta distribuição Gentoo, pois hoje vamos ver como instalar o gerenciador de pacotes snap da Canonical e de quebra, instalar nosso primeiro programa por ele.  
Não sabe o que é o snap? [Clique aqui](# "O que é snap?") e conheça.  

### Terminal  
Primeiramente vamos ao terminal para realizarmos as primeiras configurações.  

Com ele aberto, vamos adicionar o repositório do snappy, criando o seguinte arquivo com o editor nano:

``$ sudo nano -w /etc/portage/repos.conf/gentoo-snappy.conf``  

No arquivo, adicione as seguintes informações:  
``[gentoo-snappy]  
location = /usr/local/portage/gentoo-snappy  
sync-type = git  
sync-uri = https://github.com/zyga/gentoo-snappy.git  
priority = 50  
auto-sync = yes``  

Salve as alterações pressionando as teclas Ctrl e *“O”(Ctrl + O)* e depois *Enter*.  
Com o arquivo salvo, vamos digitar o seguinte:  
``$ sudo emaint sync --repo gentoo-snappy``  

Aguarde o término da ação, que não deve demorar muito e instale o primeiro pacote:  
``$ sudo emerge -av app-emulation/snapd``  

E depois habilite a inicialização do programa:  

``$ sudo systemctl enable --now snapd.service``  

Pronto! O gerenciador de pacotes está instalado e pronto para ser utilizado.  
Para testarmos, vamos instalar o Hugo, digitando o seguinte comando:  
``$ sudo snap install hugo``  

Se tudo ocorreu corretamente, você poderá chamar o Hugo com o comando hugo pelo terminal.  

Por hoje é isso, não perca nossas dicas curtindo nossa paǵina no [Facebook](# "Nos siga no Facebook") ou seguindo no [Twitter](# "Nos siga no Twitter").  
