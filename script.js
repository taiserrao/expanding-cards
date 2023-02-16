const getPanels = document.querySelectorAll('.panel')
getPanels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClass()
        panel.classList.add('active')
    })
})

function removeActiveClass() {
   getPanels.forEach(panel => {
       panel.classList.remove('active')
   })
}