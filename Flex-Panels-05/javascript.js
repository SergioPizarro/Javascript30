
const panels = document.querySelectorAll('.panel');

function toggleOpen() {
  this.classList.toggle('open');
}

function toggleActive(e) {

  this.classList.toggle('open-active');

}


panels.forEach(panel => panel.addEventListener('mouseover', toggleOpen));
panels.forEach(panel => panel.addEventListener('mouseout', toggleOpen));

panels.forEach(panel => panel.addEventListener('mouseover', toggleActive));
panels.forEach(panel => panel.addEventListener('mouseout', toggleActive));
