var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
})

var app2 = new Vue({
    el: '#app-2',
    data: {
        message: 'You loaded this page on ' + new Date().toLocaleString()
    }
})

const button = document.querySelector('#button');
const tooltip = document.querySelector('#tooltip');

Popper.createPopper(button, tooltip);

Popper.createPopper(button, tooltip, {
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, 8],
        },
      },
    ],
  });

  function show() {
    tooltip.setAttribute('data-show', '');
  }
  
  function hide() {
    tooltip.removeAttribute('data-show');
  }
  
  const showEvents = ['mouseenter', 'focus'];
  const hideEvents = ['mouseleave', 'blur'];
  
  showEvents.forEach(event => {
    button.addEventListener(event, show);
  });
  
  hideEvents.forEach(event => {
    button.addEventListener(event, hide);
  });