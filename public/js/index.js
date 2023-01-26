const btns = document.querySelectorAll('.listBtn');
const tabWrap = document.querySelector('.project-wrap');
const conts = document.querySelectorAll('.contents');

//btns를 누르면 실행해라 

tabWrap.addEventListener('click', (e) => {
  e.preventDefault();
  const id = e.target.dataset.id;
  if (id) {
    btns.forEach((btn) => {
      btn.classList.remove('active');
    })

    e.target.classList.add('active');


    conts.forEach((cont) => {
      cont.classList.remove('active');
    })
    const contId = document.getElementById(id);
    contId.classList.add('active');
  }
});


const hv = innerHeight;
const scrollButton = document.querySelector('#menuBtn');
const menuButton = document.querySelector('#menu');

function scrollMenu() {
  if (document.body.scrollTop > hv || document.documentElement.scrollTop > 300) {
    document.querySelector('#menuBtn').classList.add('active');
    document.querySelector('#menu').classList.add('active');
  } else {
    document.querySelector('#menu').classList.remove('active');
    document.querySelector('#menuBtn').classList.remove('active');
  }
}

window.onscroll = function () {
  scrollMenu()
};