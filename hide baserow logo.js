;(function () {
  var styleId = 'hide-baserow-logo-label'

  if (document.getElementById(styleId)) {
    return
  }

  var style = document.createElement('style')
  style.id = styleId
  style.textContent = [
    '.logo__label {',
    '  display: none !important;',
    '  visibility: hidden !important;',
    '}',
  ].join('\n')

  document.head.appendChild(style)
})()
