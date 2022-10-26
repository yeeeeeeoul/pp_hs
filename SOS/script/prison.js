let bodyElem = document.querySelector('body');
let prisonSection = document.querySelector('.section.section--type-media');
let fistCell = prisonSection.querySelector('#cell1');
let lastCell = prisonSection.querySelector('#cell4');

let done = false;

document.addEventListener('scroll', () => {
  if (prisonSection.getBoundingClientRect().top > 0) {
    if (bodyElem.classList.contains('lock')) bodyElem.classList.remove('lock');
    // fistCell.scrollIntoView({
    //   behavior: "smooth",
    // });
  } else if (!done && prisonSection.getBoundingClientRect().top < 0) {
    if (lastCell.getBoundingClientRect().top > 0) {
      prisonSection.scrollIntoView();
      if (!bodyElem.classList.contains('lock')) bodyElem.classList.add('lock');
    }
    // else if (lastCell.getBoundingClientRect().top <= 0) {
    //   if (bodyElem.classList.contains("lock"))
    //     bodyElem.classList.remove("lock");
    // }
  } else if (!!done) {
    if (lastCell.getBoundingClientRect().top > 0) {
      prisonSection.scrollIntoView();
      if (!bodyElem.classList.contains('lock')) bodyElem.classList.add('lock');
    }
    // else if (lastCell.getBoundingClientRect().top <= 0) {
    //   if (bodyElem.classList.contains("lock"))
    //     bodyElem.classList.remove("lock");
    // }
  }
});

document.querySelectorAll('.cell a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (evt) {
    evt.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
  });
});

let lockOff = () => {
  done = true;
  setTimeout(() => {
    if (bodyElem.classList.contains('lock')) bodyElem.classList.remove('lock');
  }, 500);
};

document.getElementById('lastBtn').addEventListener('click', lockOff);
