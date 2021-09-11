import refs from './js/refs.js'
const { hours, minutes, seconds, startBtn, stopBtn } = refs

import { stopInterval } from './js/stopInterval.js'
import { insertValues } from './js/insertValues.js'

const elems = [seconds, minutes, hours]
let isStart = false

let intervalId = ''
function updateTime() {
  if (!isStart) {
    isStart = true
    intervalId = setInterval(callback, 1000)
    function callback() {
      insertValues(Date.now(), elems)
    }
  } else {
    console.log('allready started')
    return
  }
}

startBtn.addEventListener('click', updateTime)
stopBtn.addEventListener('click', () => {
  stopInterval(intervalId, elems)
  isStart = false
})
