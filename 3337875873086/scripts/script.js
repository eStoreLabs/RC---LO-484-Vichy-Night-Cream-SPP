const accTab = document.querySelectorAll('.acc-tab');

for (let i = 0; i < accTab.length; i++) {
  accTab[i].addEventListener('click', function () {
    this.classList.add('active');
    let accTabContent = this.nextElementSibling;

    const hideContent = () => {
      accTabContent.style.maxHeight = null;
      this.classList.remove('active');
    };

    const showContent = () => {
      accTabContent.style.maxHeight = accTabContent.scrollHeight + 'px';
      this.classList.add('active');
    };

    if (accTabContent.style.maxHeight) {
      hideContent();
    } else {
      showContent();
    }
  });
}

const videoPlayerButton = document.querySelector('.es-video__play-button'),
  videoPlayer = document.getElementById('player');

videoPlayerButton.addEventListener('click', function () {
  document.getElementById('player').play();
  videoPlayerButton.style.display = 'none';
});

videoPlayer.addEventListener('ended', function () {
  videoPlayerButton.style.display = 'block';
});

const videoPlayerButtonDesktop = document.querySelector(
    '.es-video__play-button--desktop',
  ),
  videoPlayerDesktop = document.getElementById('player-desktop');

videoPlayerButtonDesktop.addEventListener('click', function () {
  document.getElementById('player-desktop').play();
  videoPlayerButtonDesktop.style.display = 'none';
});

videoPlayerDesktop.addEventListener('ended', function () {
  videoPlayerButtonDesktop.style.display = 'block';
});
