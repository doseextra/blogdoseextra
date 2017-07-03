---
title: Produção de Vídeos No Linux - Parte 1
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
image: //i.imgur.com/drtwXJE.jpg
ImagePost:
description: Comece a aprender a editar vídeos no Linux com ferramentas gratuitas e de fácil instalação e configuração. Seja um profissional do audiovisual com Linux.
date: 2017-05-01
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

Todo iniciante na carreira do audiovisual sempre se pergunta qual plataforma abraçar, quais softwares se especializar ou por onde começar. Muitos, incluindo este que escreve, começaram em plataformas proprietárias e restritivas, como o <a href="https://pt.wikipedia.org/wiki/MacOS" target="_blank" rel="noopener noreferrer">macOS da Apple</a>, ou em estações recheadas de softwares piratas no <a href="https://pt.wikipedia.org/wiki/Microsoft_Windows" target="_blank" rel="noopener noreferrer">Microsoft Windows</a>. Essa é uma realidade comum nesse mercado emergente e que ainda não é totalmente regulamentado, construído em volta de alguns preceitos conservadores, que tentam definir padrões de trabalho com base em "softwares" e não em tarefas.

Por muito tempo, muitos produtores associavam uma boa produção, com softwares caros e com marcas consagradas. Não que softwares como <a href="https://pt.wikipedia.org/wiki/Final_Cut_Pro" target="_blank" rel="noopener noreferrer">Final Cut Pro</a>, <a href="http://www.avid.com/media-composer" target="_blank" rel="noopener noreferrer">Avid Media Composer</a> ou <a href="http://www.vegascreativesoftware.com/br/vegas-pro/" target="_blank" rel="noopener noreferrer">Vegas Pro</a> não sejam softwares importantes e que não possam ser utilizados como um workstation de vídeo, porém eles não são as únicas alternativas, pelo contrário, são apenas algumas das tantas opções existentes e profissionais. Hoje, o profissional que foca apenas em uma dessas plataformas está apenas deixando-se levar pelo comodismo e não acompanhando o mercado, sempre em evolução.
<h3 style="text-align: center;">E no Linux?</h3>
Quando comecei a usar GNU/Linux, lá por 2006, as coisas eram diferentes e poucos softwares eram portados ou desenvolvidos com foco em produção de video. Claro, alguns estúdios maiores, possuíam algumas ferramentas desenvolvidas exclusivamente para uso interno, como é o caso da <a href="http://www.diolinux.com.br/2015/03/renderman-linux-blender-free.html" target="_blank" rel="noopener noreferrer">Pixar</a>, que abandonou o <a href="https://pt.wikipedia.org/wiki/NEXTSTEP" target="_blank" rel="noopener noreferrer">NeXTStep</a>, depois o Mac OS, para trabalhar com soluções de renderização em servidores Linux. O primeiro software popular, foi o <a href="http://cinelerra.org/" target="_blank" rel="noopener noreferrer">Cinelerra</a>, recheado de recursos, era praticamente a única opção para quem se aventurasse no sistema de <a href="https://github.com/torvalds" target="_blank" rel="noopener noreferrer">Linus Torvalds</a>. Muito tempo de passou, o Cinelerra foi praticamente descontinuado e muitas opções surgiram, especialmente focadas em grandes produções "hollywoodianas", mas que aos poucos foram adentrando no universo característico de pequenas produtoras, com nomes como <a href="https://kdenlive.org/" target="_blank" rel="noopener noreferrer">Kdenlive</a>(Open Source), <a href="https://www.lwks.com/" target="_blank" rel="noopener noreferrer">Lightworks</a>(proprietário), DaVinci Resolve(Proprietário), <a href="https://natron.fr/" target="_blank" rel="noopener noreferrer">Natron</a>(Open Source),<a href="https://www.blackmagicdesign.com/products/fusion" target="_blank" rel="noopener noreferrer"> BlackMagic Fusion 8</a>, dentre outros que estão surgindo ou sendo portados.
<p style="text-align: center;"><strong>Editores populares</strong></p>

<div class="owl-carousel owl-slider">
<img src="//i.imgur.com/JISpqIS.jpg" alt="Editor de vídeos Kdenlive" />
<img src="//i.imgur.com/ctZqSuB.jpg" alt="Blackmagic Fusion 8" />
<img src="//i.imgur.com/UE8PaMk.jpg" alt="Blackmagic DaVinci Resolve" />
<img src="//i.imgur.com/wLFU2Kw.jpg" alt="Editor de vídeo Natron" />
</div>
<div class="owl-carousel owl-slider"></div>
<div class="owl-carousel owl-slider"></div>
<div class="owl-carousel owl-slider"></div>
<div class="owl-carousel owl-slider"></div>
<strong><em>Este é o primeiro artigo de uma série semanal, sobre produção de vídeo em Linux. Os próximos serão mais focados nos processos de edição, incluindo exemplos e materiais de apoio</em>.</strong>
