---
title: "Produção de Vídeos No Linux – Parte 3"
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
image: //i.imgur.com/UTZz5il.jpg
ImagePost: //i.imgur.com/JSDYSJM.jpg
description: Seguindo nossa série de artigos sobre Produção de Vídeos no Linux, hoje vamos falar sobre os famigerados e problemáticos "codecs"! Codecs e ProRes no Linux.
date: 2017-06-07
categories:
  - Artigos
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
  - ffmpeg linux
  - prores linux
---
Se você perdeu os artigos anteriores, confira nos links a seguir:

<a href="//blog.doseextra.com/producao-de-videos-no-linux-parte-1/" target="_blank" rel="noopener noreferrer">Produção de Vídeos no Linux - Parte 1</a><br>
<a href="//blog.doseextra.com/producao-de-videos-no-linux-parte-2/" target="_blank" rel="noopener noreferrer">Produção de Vídeos no Linux - Parte 2</a>

Hoje o assunto é bem mais técnico e pouquíssimo abordado nos sites com listagem de programas para nosso amado GNU/Linux. Se você acompanhou os demais artigos, sabe que a plataforma <em>Open Source</em> conta com uma gama muito boa de softwares de edição, composição e correção de cor. Falta de programas não é mais desculpa para quem tem interesse em começar a "fazer vídeos" sem gastar com licenças caras ou bastante restritivas.
<h3>Sabemos que programas não é nossa preocupação, mas e os Codecs?</h3>
Os <em>codecs</em> ou "<em>decodificares</em>", são responsáveis pela tradução de um determinado arquivo multimídia, seja ele vídeo, imagem ou áudio, em informação legível num software de reprodução ou visualização. Simplificando, o funcionamento é similar ao trabalho de um tradutor em tempo real, que escuta o locutor em Inglês e conforme a conversa vai seguindo, sobrepõem em português. Assim todos no Brasil podem saber o que aquele entrevistado britânico está respondendo ao apresentador. Fácil, não?

Agora imagine que o locutor não fala com clareza suficiente, ou pior, tenta atrapalhar nosso tradutor. Certamente o resultado vai ser bem diferente do esperado e talvez as capacidades do profissional sejam questionadas também. É mais ou menos isso que acontece com alguns softwares.

Para reprodução de conteúdo, no caso do <em>Ubuntu</em>, basta apenas instalar o pacote <a href="http://www.diolinux.com.br/2016/04/7-coisas-para-fazer-depois-de-instalar-o-ubuntu-1604-lts.html" target="_blank" rel="noopener noreferrer">restricted-extras</a> e ser feliz. Todos seus filmes e músicas vão funcionar muito bem. Agora, no caso de edição, as coisas não são tão fáceis, principalmente se falarmos dos softwares proprietários e suas versões "grátis". É o caso do Davinci Resolve, que tem dificuldade em trabalhar diretamente com muitos formatos, inclusive o h.264, utilizado pelas <a href="https://www.tecmundo.com.br/infografico/8932-como-funcionam-as-cameras-digitais-compacta-e-dslr.htm" target="_blank" rel="noopener noreferrer">câmeras DSLR</a>.
<h3>Mas qual é o motivo?</h3>
Licenças é claro! Grande parte do custo de um software assim é para pagar os <em>royalties</em> de uso de tecnologias de terceiros e decodificadores de mídia. Tem ainda o desenvolvimento e distribuição, mas que, dependendo da estratégia de mercado, podem ser absorvidos na venda de hardware, por exemplo. Como a empresa precisa evitar problemas jurídicos, as versões gratuitas costumam ter algumas restrições.

Isso não impede o uso da ferramenta, apenas exigem algumas adequações ou a compra da licença completa. No caso da <a href="https://www.blackmagicdesign.com/br" target="_blank" rel="noopener noreferrer">BlackMagic</a>, suas soluções são surpreendentemente completas e contornar os problemas de codecs é muito fácil.
<h3>Produção de Vídeos no Linux e FFmpg</h3>
Sim, a solução é bem simples e traz consigo só pontos positivos. Deixa-me explicar melhor!
O codec h.264 é muito ruim e extremamente compactado. Ele é ótimo para a web, pois economiza muitos megas e isso é muito importante para <em>streamming</em> ou canais de vídeo, contudo, para edição ele significa que muitas informações foram perdidas. Esse é um problema muito grande ao usar as DSLR que somente suportam este formato, pois perde-se algumas informações.
O Davinci e o BlackMagic Fusion não importam estes formatos na versão para Linux. Talvez e versões futuras isso seja resolvido, mas não existe nenhum comentário sobre.

Para resolver isso vamos usar o FFmpg e a conversão para o maravilhoso <a href="https://pt.wikipedia.org/wiki/Apple_ProRes" target="_blank" rel="noopener noreferrer"><em>ProRes</em></a>.
Mesmo em tempos de OS X, eu já convertia os vídeos de DSLR para ProRes, usando um software especifico para isso. Com a conversão o arquivo fica gigante e permite, ao editar, trabalhar com uma gama de cores maiores.
<h3>"Um vídeo ruim sempre será um vídeo ruim"</h3>
Claro que não existem milagres, os vídeos não ganham informações que não existem no arquivo. Se o vídeo estiver em uma qualidade baixa e em péssimas condições de iluminação, ele não vai ter os mesmo benefícios de formatos <em>RAW</em> e se transformar no próximo filme do <a href="http://gq.globo.com/Cultura/noticia/2016/09/20-filmes-de-quentin-tarantino-que-voce-precisa-assistir.html" target="_blank" rel="noopener noreferrer">Tarantino</a>. O que acontece, é que ao descomprimir o vídeo, damos ao software de edição mais possibilidades para trabalhar com colorização e correções. É fácil perceber as diferenças com a utilização.
<h4>No Linux é muito fácil resolver isso!</h4>
O pacote FFmpeg é um verdadeiro canivete suíço e nos permite inúmeras possibilidades. Ele é muito popular e certamente haverá pacotes nativos em sua distribuição. Com o ffmpeg conseguimos converter para ProRes e muito mais.
Supondo que esteja usando o Ubuntu:

Para instalar:
<strong>sudo apt-get install ffmpeg</strong>

Convertendo para ProRes:
<strong>ffmpeg -i ARQUIVO_ORIGINAL.avi -c:v prores -profile:v 3 -c:a pcm_s16le ARQUIVO_FINAL.mov</strong>

Lembrando que -profile pode ser 0=‘proxy’, 1=‘lt’, 2=‘standard’, 3=‘hq’, correspondendo ao "perfil" de conversão.

O Arquivo final vai ser gerado na mesma pasta e estará pronto para ser importado e trabalhado. :)

Uma dica extra, é converter o vídeo para uma sequência de imagens em .png. Ótimo para extrair aquele quadro especifico!

<strong>ffmpeg -i video.mp4 image%d.png</strong>
