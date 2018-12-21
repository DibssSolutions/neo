var acc = document.getElementsByClassName('accordion__question');
var arrow = document.getElementsByClassName('accordion__arrow');
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener('click', function() {
    // arrow.classList.toggle('accordion__arrow_active');
    // this.classList.toggle('active');
    var panel = this.nextElementSibling;
    if (panel.style.display === 'block') {
      panel.style.display = 'none';
    } else {
      panel.style.display = 'block';
    }
  });
}
