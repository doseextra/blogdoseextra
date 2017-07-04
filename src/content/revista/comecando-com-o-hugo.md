---
title: Começando com o Hugo
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
description: Saiba como instalar e começar um projeto no gerenciador de sites Hugo. Gere sites estáticos facilmente.
date: 2017-07-01
categories:
  - Artigo
  - Tutoriais
  - Web
tags:
  - css
  - html
  - hugo
  - web
  - html5
  - desenvolvimento de sites
  
---
### Nosso primeiro site com o Hugo
O objetivo desse artigo é demonstrar os primeiros passos na criação de um site no Hugo, portanto, não espere nada muito avançado, pois o foco é para quem nunca viu ele funcionando.  

### Instalação
Iremos abordar a instalação em sistemas GNU/Linux, mais precisamente, usando pacotes Snaps no Gentoo Linux. É um método muito fácil e que ajuda a manter o Hugo sempre atualizado e funcionando sem qualquer configuração adicional.  
Para saber como instalar snaps no Gentoo, [acesse aqui](# "como instalar snaps no Gentoo").  
**Bom, vamos ao processo!**  

#### 1° - Acessando o terminal
Para realizar a instalação, abra o aplicativo de terminal, neste caso estou usando o Gnome Shell e o programa padrão, o gnome-terminal ou simplesmente “terminal”.

Com ele aberto, digite o seguinte comando:  
``sudo snap install hugo``  

Aguarde o término da instalação e verifique a versão do Hugo:  
``hugo -v``  

Com a instalação bem sucedida, é hora de começar o site.

#### 2° - Criando seu primeiro site
Crie uma pasta chamada Sites na home:  
``mkdir $HOME/Sites``

Acesse a pasta:  
``cd $HOME/Sites``  

Crie o primeiro projeto:
``hugo new site meu-primeiro-projeto``  

Abra a pasta $HOME/Sites em seu editor de texto preferido, como o Gedit ou Atom, por exemplo.

Neste primeiro momento, vamos realizar só as configurações necessárias para o site ser minimamente acessado. Portanto, o próximo passo é procurar e baixar um template para ser utilizado. Acesse [este link](# "baixar o tema crap") ou utilize o git.  
``git clone https://github.com/thomasheller/crab.git``  

Para o tema funcionar, mova a pasta “crab” para o diretório ``$HOME/Sites/meu-primeiro-projeto/themes/``, assim:  
``$ mv crap $HOME/Sites/meu-primeiro-projeto/themes/``  

Para testar o site, acesse a pasta raiz de seu projeto:  
``$ cd $HOME/Sites/meu-primeiro-projeto``  

Com o editor de texto, abra o arquivo config.toml e digite a seguinte linha:  
``theme = “crab”``  

Novamente no terminal, digite e aperte o enter:  
``$ hugo server``  

Abra o navegador e acesse o endereço <http://localhos:1313> e seu site vai estar funcionando e nem precisa de Apache instalado na máquina.  

#### 3° - Personalizando e configurando
Agora, com seu editor de código preferido, abra o arquivo *config.toml*. É nele que as principais configurações serão feitas, como a definição da URL base do site, definição do tema escolhido, título, dentre muitas outras.  
Para começar é importante ler a documentação do Hugo e seguir a sequência de artigos do blog. O próximo será sobre as principais configurações do site, não perca.
