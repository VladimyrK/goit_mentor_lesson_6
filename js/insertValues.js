function createValues(time) {
  const d = Math.floor(time / (1000 * 60 * 60 * 24))
  const h = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const m = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))
  const s = Math.floor((time % (1000 * 60)) / 1000)

  return { s, m, h, d }
}

export function insertValues(deltaTime, arr) {
  let values = Object.values(createValues(deltaTime))
  for (let i = 0; i < arr.length; i++) {
    arr[i].textContent = String(values[i]).padStart(2, '0')
  }
}
