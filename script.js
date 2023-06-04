document.addEventListener('DOMContentLoaded', function() {
    /*Lista de canais*/
    var sessions = [
      {
        title: 'Rede Globo MT',
        link: 'https://globoplay.globo.com/tv-globo/ao-vivo',
        image: 'img/globo.png',
        description: 'Site da Globo.com, precisa estar logado',
      },
      {
        title: 'SBT Serra Dourada',
        link: 'https://www.youtube.com/watch?v=_L130d1RK-w&ab_channel=TVSerraDouradaSBT',
        image: 'img/sbt.png',
        description: 'Canal do Youtube, SBT de MT',
      },
      {
        title: 'Rede Bandeirantes Brasil',
        link: 'https://www.band.uol.com.br/ao-vivo',
        image: 'img/band.png',
        description: 'Site da Band.com, precisa estar logado com o Google',
      },
    ];
  
    function exibirSessoes() {
      var globoSession = sessions[0];
      var sbtSession = sessions[1];
      var bandSession = sessions[2];
  
      var globoTitleElement = document.getElementById('globo-title');
      var globoImageElement = document.getElementById('globo-image');
      var globoDescriptionElement = document.getElementById('globo-description');
  
      var sbtTitleElement = document.querySelector('.category.cat1 .section-row .section:nth-child(2) h4');
      var sbtImageElement = document.querySelector('.category.cat1 .section-row .section:nth-child(2) img');
      var sbtDescriptionElement = document.querySelector('.category.cat1 .section-row .section:nth-child(2) p');
  
      var bandTitleElement = document.querySelector('.category.cat1 .section-row .section:nth-child(3) h4');
      var bandImageElement = document.querySelector('.category.cat1 .section-row .section:nth-child(3) img');
      var bandDescriptionElement = document.querySelector('.category.cat1 .section-row .section:nth-child(3) p');
  
      // Preenchendo os campos com os dados da sessão da Globo
      globoTitleElement.textContent = globoSession.title;
      globoImageElement.src = globoSession.image;
      globoDescriptionElement.textContent = globoSession.description;
  
      // Preenchendo os campos com os dados da sessão do SBT
      sbtTitleElement.textContent = sbtSession.title;
      sbtImageElement.src = sbtSession.image;
      sbtDescriptionElement.textContent = sbtSession.description;
  
      // Preenchendo os campos com os dados da sessão da Bandeirantes
      bandTitleElement.textContent = bandSession.title;
      bandImageElement.src = bandSession.image;
      bandDescriptionElement.textContent = bandSession.description;
    }
  
    exibirSessoes();
  });
  