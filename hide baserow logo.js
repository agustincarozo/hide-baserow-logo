window.__baserow.hook('app:mounted', () => {
  const removeLabels = () => {
    document.querySelectorAll('.logo__label').forEach((el) => el.remove())
  }

  removeLabels()

  const observer = new MutationObserver(() => {
    removeLabels()
  })

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  })
})
