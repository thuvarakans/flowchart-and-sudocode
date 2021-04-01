window.onload = () => {
  'use strict';

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('https://github.com/thuvarakans/flowchart-and-sudocode/blob/master/SW.js');
  }
}
