console.log('Custom Baserow script file loaded')

window.__baserow.hook('app:mounted', () => {
  console.log('Baserow app mounted')

  const removeLabels = () => {
    const labels = document.querySelectorAll('.logo__label')
    console.log('Found .logo__label elements:', labels.length)
    labels.forEach((el) => el.remove())
  }

  removeLabels()

  const observer = new MutationObserver(() => {
    console.log('DOM changed, checking for logo labels again')
    removeLabels()
  })

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  })

  console.log('MutationObserver attached')
})
