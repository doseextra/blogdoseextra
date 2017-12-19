---
title: "GitHub para iniciantes"
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
image: https://i.imgur.com/P96FH2c.jpg
ImagePost: https://i.imgur.com/Zn2B9jq.jpg
date: 2017-10-09
description: Aprenda a utilizar e configurar o GitHub facilmente com um guia detalhado.
categories:
  - Wordpress
  - Software Livre
  - Desenvolvimento Web
tags:
  - css
  - html
  - wordpress
  - web
  - cms
  - desenvolvimento de sites
---

### O jeito fácil de começar com o GitHub

Todos desenvolvedores já precisaram organizar o seu código fonte. É uma parte importante do processo de desenvolvimento e sem a organização, imagine a loucura no momento de corrigir um ***bug*** ou a simples análise de alterações? Sem uma política de versionamento clara, muito trabalho pode ter sido jogado fora e horas desenvolvimento desperdiçadas.   
Não é algo que todos gostam de fazer, mas documentação e controle de versões é indispensável para um bom projeto, ainda mais quando lidamos com ambientes de colaboração, equipes distintas ou localização. Nesses cenários, um simples projeto pode se tornar uma verdadeira ***tragédia grega*** e acabar em desastre. Organização é fundamental.   
Se os mais conservadores ainda utilizam meios "próprios", atualmente existem ferramentas focadas na árdua tarefa de facilitar a nossa vida. A principal ferramenta, é o [git](https://github.com "Conheça o GitHub"), desenvolvido pelo criador do kernel [Linux](http://linux.org "Site Linux.org"), [Linus Torvalds](https://github.com/torvalds "GitHub do Linus Torvalds"). A ferramenta é de uso simplificado e adotada amplamente, inclusive no desenvolvimento do Sistema Operacional [Windows 10](http://www.diolinux.com.br/2017/05/microsoft-migra-codigo-windows-git.html "Microsoft migra código fonte do Windows para o Git").   

#### Git não é apenas o GitHub

Bom, acredito que muitos sabem que o [GitHub]() não é a única opção de repositório, mas é a mais conhecida e difundida. Muitos projetos Open Source são hospedados e versionados na plataforma. No caso de projetos de código aberto, o serviço funciona de forma gratuita, permitindo a adição de funções expecíficas na modalidade paga. Para a maioria dos usuários, a versão gratuita é mais do que suficiente.   
O GitHub utiliza o Git para manipulação dos repositórios e controle de versões. Mas esse uso não é exclusividade do GitHub e o Git independe da plataforma, sendo utilizado inclusive, para os mais aventureiros, de forma local e offline ou com qualquer outro meio desejado. Sendo assim, aprendendo o uso básico do GitHub vai funcionar como uma introdução ao Git de um modo geral.   

#### Começando

A primeira coisa a se fazer, é obviamente criar um usuario no GitHub acessando [este link](). Após isso, estamos aptos para se aventurar na infinidade de projetos de código, documentação, localização e o que mais a criatividade permitir. Como exemplo, utilizando um ambiente GNU/Linux, vamos instalar o Git no Fedora 26 e clonar um repositório com formatos editaveis de arquivos do GIMP.   

**Instalando**   
``sudo dnf install git``  

**Clonando nosso primeiro projeto**  
``git clone "https://github.com/tchelinuxorg/recursos-grafico.git``

Depois disso, temos a pasta ***recursos-graficos*** com todos os arquivos e códigos presentes no repositório.

!["Arquivos clonados do repositório "master""](//i.imgur.com/tTDjqHQ.jpg "Lista de arquivos clonados do repositório "master"")


#### Configurando nosso git
Agora que já temos os arquivos locais, já podemos editar e quem sabe submeter nosso primeiro commit, certo? Sim, mas antes precisamos configurar alguns detalhes.   
O primeiro é nosso .gitconfig, que deve conter pelo menos o usuário e e-mail da nossa conta. Para adicionar essas informações basta digitar o seguinte:   

**O usuário do GitHub:**  
``git config --global user.name SEU USUÁRIO AQUI``  

**O e-mail cadastrado:**
``git config --global user.email SEU E-MAIL AQUI``  

Essas alterações ficam gravadas no diretório /home/SEUUSUARIO/.gitconfig e podem ser visualizadas com o comando:   
 ``cat ~/.gitconfig``.   


#### Criando um fork do projeto
Bom, já sabemos como clonar, mas e como submeter as alterações realizadas?   
Quando se trata de projetos abertos, existem pelo menos duas opções de submissão de alterações. A mais simples é através de forks e a outra é fazendo parte da equipe do repositório.
Nesse primeiro artigo, vamos ver como criar um fork utilizando a interface do site GitHub:   

![ "Realizando um fork no GitHub" ](//i.imgur.com/Zq8JzoD.jpg "Realizando um fork no GitHub")

Quando criamos um fork, estamos copiando o estado de desenvolvimento de um projeto em um repositório novo, sob nosso usuário. E com o fork pronto, precisamos realizar o clone novamente, agora em uma nova pasta:
``git clone "https://github.com/seuusuario/recursos-graficos.git``  

Agora temos total liberdade de alterações do projeto em nosso repositório. Sabendo disso, vamos para o próximo passo e realizar nosso primeiro commit.   

#### Nosso primeiro commit

Digamos que realizamos alguma alteração no arquivo README.md, ou adicionamos um novo arquivo. Para informar o Git a nossa alteração, precisamos digitar o comando ***add*** da seguite forma:  
``git add -A``  

Uma vez completo, precisamos realizar o commit, informando nossas alterações, da seguinte forma:  
`` git commit -m "Alteração do arquivo README.md e adição de novo arquivo"``   

Para finalizar e enviar os arquivos para o servidor, basta finalizar com o seguinte comando:   
``git push``   

Será solicitado seu usuário e senha do GitHub.

#### O pull request

Agora que corrigimos o arquivo README.md, desejamos informar ao desenvolvedor esta correção. Para tal, utilizamos o recurso chamado de "Pull Request". Isso quer dizer que solicitamos ao administrador do repositório uma alteração de um arquivo do projeto inicial, cabendo à ele aceitar ou não nossa submissão.   
Para realizar nosso pull request, vamos utilizar novamente a interface web do GitHub:   

!["Realizando um "pull request" no GitHub"](//i.imgur.com/czz6ZKx.jpg "Realizando um "pull request" no GitHub")



#### Conclusões finais
Esse é só o começo e muitas outras opções estão disponiveis para a utilização do GitHub. No próximo artigo vamos abordar o conceito de ***branch***.   

Por hoje é isso, não deixe de acompanhar o nosso canal no [YouTube](https://www.youtube.com/channel/UC5Zz7kecrmtYZSKCS79_-Wg?view_as=subscriber "Canal "Tomkiel" no YouTube"). ;)
