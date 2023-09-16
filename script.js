//your JS code here. If required.
const div = document.createElement('div')
  div.id = 'browser-info'
div.innerHTML = `You are using ${navigator.appName} ${navigator.appVersion}version`
document.body.appendChild(div)