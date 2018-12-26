var acc = document.getElementsByClassName('accordion__question');
var arrow = document.getElementsByClassName('accordion__arrow');
var i;
// querySelector 

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener('click', function() {
    var panel = this.nextElementSibling;
    if (panel.style.display === 'block') {
      panel.style.display = 'none';
    } else {
      panel.style.display = 'block';
    }
  });
}

var toggle = document.getElementsByClassName('header__toggle')[0];
toggle.onclick = function() {
  var icon = document.getElementsByClassName('header__toggle-icon')[0];
  var nav = document.querySelector('.nav');
  icon.classList.toggle('header__toggle-icon_active');
  if (nav.style.display === 'flex') {
    nav.style.display = 'none';
  } else {
    nav.style.display = 'flex';
  }
};
