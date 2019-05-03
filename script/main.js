import '../style.scss'
import { horVer, leftRight, topBottom } from './config'
import Slider from './Slider'

let currentRadius = {
  [horVer[0]]: {
    [leftRight[0]]: {
      [topBottom[0]]: '0',
      [topBottom[1]]: '0'
    },
    [leftRight[1]]: {
      [topBottom[0]]: '0',
      [topBottom[1]]: '0'
    }
  },
  [horVer[1]]: {
    [leftRight[0]]: {
      [topBottom[0]]: '0',
      [topBottom[1]]: '0'
    },
    [leftRight[1]]: {
      [topBottom[0]]: '0',
      [topBottom[1]]: '0'
    }
  }
}
const boxEle = document.getElementsByClassName('box')[0]
const radiusInputEle = document.getElementsByName('radius')[0]
const widthInputEle = document.getElementsByName('width')[0]
const heightInputEle = document.getElementsByName('height')[0]
const modeButtonGroup = document.getElementsByClassName('mode')[0]
const hor = currentRadius[horVer[0]]
const vert = currentRadius[horVer[1]]

function registerSlider() {
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
      for (let k = 0; k < 2; k++) {
        let s = new Slider({
          horOrVert: horVer[i],
          leftOrRight: leftRight[j],
          topOrBottom: topBottom[k]
        })
        s.init(setBoxRadius)
      }
    }
  }
}

function setBoxRadius(position, val) {
  let radiusValue
  if (arguments.length === 2) {
    currentRadius[position[0]][position[1]][position[2]] = val
    radiusValue = `${hor.left.top} ${hor.right.top} ${hor.right.bottom} ${
      hor.left.bottom
    } / ${vert.left.top} ${vert.right.top} ${vert.right.bottom} ${
      vert.left.bottom
    }`
  } else {
    radiusValue = arguments[0]
  }

  boxEle.style.borderRadius = radiusValue
  radiusInputEle.value = radiusValue
}

function initInputEle() {
  radiusInputEle.value = window.getComputedStyle(boxEle, null).borderRadius
  widthInputEle.value = window.getComputedStyle(boxEle, null).width
  heightInputEle.value = window.getComputedStyle(boxEle, null).height

  radiusInputEle.addEventListener('input', e => {
    setBoxRadius(e.currentTarget.value)
  })

  widthInputEle.addEventListener('input', e => {
    boxEle.style.width = e.currentTarget.value
  })

  heightInputEle.addEventListener('input', e => {
    boxEle.style.height = e.currentTarget.value
  })
}

registerSlider()
initInputEle()
