export function hoverGradient() {
    document.getElementById('grad').querySelectorAll('stop')[0].setAttribute('stop-color', 'blue');
    document.getElementById('grad').querySelectorAll('stop')[1].setAttribute('stop-color', 'purple');
  }
  
  export function resetGradient() {
    document.getElementById('grad').querySelectorAll('stop')[0].setAttribute('stop-color', 'purple');
    document.getElementById('grad').querySelectorAll('stop')[1].setAttribute('stop-color', 'blue');
  }
  