import refs from './js/refs.js'
const { hours, minutes, seconds, startBtn, stopBtn } = refs

import { stopInterval } from './js/stopInterval.js'
import { insertValues } from './js/insertValues.js'

let intervalId = ''
let isStart = false
const elems = [seconds, minutes, hours]

function startTimer() {
  const startTime = Date.now()
  if (!isStart) {
    isStart = true
    intervalId = setInterval(() => {
      insertValues(Date.now() - startTime, elems)
    }, 1000)
  } else {
    console.log('timer is running')
    return
  }
}

startBtn.addEventListener('click', startTimer)

stopBtn.addEventListener('click', () => {
  stopInterval(intervalId, elems)
  isStart = false
})
