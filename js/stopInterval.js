export function stopInterval(id, elems) {
  clearInterval(id)
  clearMarkUp(elems)
}

function clearMarkUp(arr) {
  return arr.forEach(element => {
    element.textContent = '00'
  })
}
