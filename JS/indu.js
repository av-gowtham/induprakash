let loader = document.querySelector('#loading-container');
let curve = document.querySelector('.curve');
let header = document.querySelector('.header-text-wrap');
const cursorDiv = document.querySelector('.cursor');
const cursorDiv2 =document.querySelector('.inner-cursor');
const sliderLink = document.querySelectorAll('.slider a');
const sliderCheckbox = document.getElementById('slider-checkbox');
const openSlider = document.querySelector('.open-slide-bar');

setTimeout(() => {
  loader.style.top = "-120%";
  header.style.position = 'relative';
  header.style.top = "50px";  
}, 3400);

setTimeout(() => {
  enableScroll();
}, 4000)

function disableScroll() {
  window.onscroll = () => {
    window.scrollTo(0,0);
  };
}
disableScroll();

function enableScroll() {
  window,onscroll = () => {};
}

// function for displaying the selected projects
function showProject(n) {
  document.querySelector(`.project-${n}-des`).style.display = 'block';
  document.querySelector(`.project-${n}`).style.boxShadow = '0 0 40px #FCA311';
  document.querySelector(`.project-${n}`).style.transform = 'scale(1.1)';
  document.querySelector(`.project-${n}`).style.fontWeight = '500';
  document.querySelector(`.project-${n}`).style.borderColor = '#FAC311';
}
showProject(1)

// function for hiding the unselected projects
function hideProject(n) {
  document.querySelector(`.project-${n}-des`).style.display = 'none';
  document.querySelector(`.project-${n}`).style.boxShadow = '0 0 0 #FCA311';
  document.querySelector(`.project-${n}`).style.transform = 'scale(1)';
  document.querySelector(`.project-${n}`).style.fontWeight = '400';
  document.querySelector(`.project-${n}`).style.borderColor = '#E5E5E5';
}


// Navigation arrow display toggle
window.addEventListener('scroll', () => {
	const scrolled = window.scrollY;
  
  if(scrolled >= 120) {
    document.querySelector('.nav-upward-arrow svg').style.display = 'inline';
    openSlider.style.display = 'flex';
  }
  else {
    document.querySelector('.nav-upward-arrow svg').style.display = 'none';
    if(window.innerWidth < '651'){
      openSlider.style.display = 'flex';
    } else {
      openSlider.style.display = 'none';
    }
  }
});

setInterval(() => {
  if(window.innerWidth < '651'){
    openSlider.style.display = 'flex';
  }
}, 0)

// cursor following div
function cursor() {
  document.addEventListener('mousemove', (e)=> {
    cursorDiv.setAttribute('style', 'top:' + (e.pageY - 22.5) + 'px; left:' + (e.pageX - 22.5) + 'px;' );
    cursorDiv2.setAttribute('style', 'top:' + (e.pageY) + 'px; left:' + (e.pageX) + 'px;' );
  })
}
cursor();

//After clicking the links the slider will close
sliderLink.forEach(link => {
  link.addEventListener('click', () => {
    sliderCheckbox.checked = false;
  })
})

// Scroll to the top of the page on page refresh
window.addEventListener('beforeunload', function() {
  window.scrollTo(0, 0);
});

// Prevent the browser from restoring the scroll position
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}
