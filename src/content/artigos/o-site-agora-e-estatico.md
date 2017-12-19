---
title: "O Blog agora é estático"
author: Regis
authorName: Regis Tomkiel
authorImg: /img/author/Chefe-Apache-768x768.jpg
authorGp: https://plus.google.com/+RegisTomkiel
authorFacebook: https://www.facebook.com/registomkiel
authorInstagram: https://instagram.com/registomkiel
authorTwitter: https://twitter.com/tomtomkiel
authorLinkedin: https://www.linkedin.com/in/regis-tomkiel/
authorEmail: regis@doseextra.com
authorDescription: Sócio Fundador da Dose Extra Multimídia, produtor audiovisual, desenvolvedor web, podcaster, escritor e quando sobra tempo, coleciona videogames e filmes independentes.
type: post
id: revista
image: https://i.imgur.com/TTVL6yv.png
ImagePost: https://i.imgur.com/pa7Q7DJ.png
description: Migramos do Wordpress! Agora o blog é gerado com o Hugo e GitHub!
date: 2017-06-30
categories:
  - Artigos
  - Tutoriais
tags:
  - Html
  - Hugo
  - GO
  - Wordpress
  - Web
  - Web estática
  - Blog
---


Sempre defendi o Wordpress e o uso de um CMS amigável, pois não é todo mundo que tem conhecimento suficiente para se aventurar em alternativas mais complexas. Eu mesmo, uso o Wordpress em vários projetos importantes e ainda acredito que ele é uma das ferramentas mais completas da atualidade, mas...
### Desempenho
Não é novidade para ninguém que o Wordpress é um pequeno monstrinho em consumo de recursos, principalmente quando mal configurado. Para ter o CMS funcionando, precisamos de um servidor Apache ou Ngnix, PHP e MySQL. Tudo isso rodando junto pode ser o pesadelo de muita empresa de hospedagem.
Atualmente contamos com servidores da Digital Ocean para nossos sites e para alguns clientes. Mesmo com configurações bem melhores que a da grande maioria das hospedagens brasileiras, não é difícil gerar um gargalo, desde que não se faça as configurações adequadas. Uma VPS de US$10,00 não é o recomendado para ter todos os serviços em conjunto.
Grande parte das configurações que realizei, dizem respeito ao uso de cache, automatização de scripts e o uso de CDNs. O site que é acessado em seu navegador, é um “snapshot” do site original, quero dizer, é uma versão estática do conteúdo e não algo em tempo real. Meio que o site já é todo em HTML, não é mesmo?
### Mudanças
Após muito estudo sobre melhorias em nossos serviços, constatamos que não é possível sair simplesmente gastando mais dinheiro, é preciso otimizar o que já temos. Assim sendo, decidimos, dentre outras coisas, migrar um dos servidores para FreeBSD e realizar configurações de desempenho nele. Todos nossos servidores são Linux e explicarei melhor em outro post os motivos da mudança.
Aproveitando o ocorrido, me propus a estudar formas de melhorar nossos sites e também, de quebra, estudar algo inteiramente novo. Umas das primeiras opções, foi utilizar o Hugo para gerar as páginas estáticas ainda localmente e diminuindo a necessidade de banco de dados, por exemplo.
### Hugo
Conheci o <a href="//gohugo.io" target="_blank">Hugo</a> através do portal <a href="//tableless.com.br/site-tableless-estatico/" target="_blank">Tablesses</a>, que também fez a mudança no site, abandonando o Wordpress e a necessidade de vários servidores para manter a estrutura. Com base no depoimento do <a href="//tableless.com.br/author/diego-eis/" target="_blank">Diego Eis</a>, fiquei tentado à conhecer melhor este tal de Hugo.
Ele não é um CMS, não precisa de MySQL, PHP e não possui algumas “features” como editor gráfico e login de usuários. Na verdade, ele é projetado para ser usado localmente, em conjunto com um editor de texto qualquer. Por esses motivos, ele me pareceu bastante estranho no começo...
Me surpreendi com a facilidade e simplicidade. O Hugo é escrito em GO e sua sintaxe é praticamente inglês falado, de tão simples. Em uma semana já tinha um site totalmente migrado para a plataforma.
Futuramente quero escrever artigos e tutoriais de uso, também quero demonstrar a migração de sites para a plataforma.
### Mais Open Source
Se antes, manter um site em Wordpress no GitHub era praticamente impossível, com o Hugo não. Nossos projetos estão migrando para lá e ficarão disponíveis para uso e estudo. É muito fácil manter um site por lá...
### Agora nosso blog é aberto
Você pode nos ajudar e se tornar um autor, já que agora é muito mais fácil submeter um artigo. Basta saber utilizar minimamente o GitHub e ter vontade de compartilhar conhecimento. :)
Sem o uso de CMS, não é necessário login e todo o gerenciamento de conteúdo é pelo repositório no GitHub por <i>pull requests</i>.
### Para o futuro
Estamos cada vez mais focados em criar conteúdo relevante e com isso, planejamos artigos e tutoriais para os próximos dias, incluindo, mais matérias sobre desenvolvimento de sites, Wordpress e Hugo.
<blockquote>Criar e compartilhar conteúdo é o que nos move!</blockquote>
