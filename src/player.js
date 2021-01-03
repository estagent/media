import {Howl, Howler} from 'howler'

let soundsPath = '/sounds/'

const jukebox = {}
const instances = {}

export const setPublicPath = path => (soundsPath = path)

const createSound = src =>
  new Howl({
    src: soundsPath.concat(src).concat('.ogg'),
  })

export const player = {
  play: (item, options = {}) => {
    const sound = jukebox[item] ?? createSound(item)
    if (options.loop === true) {
      sound.loop(true)
    }
    instances[item] = sound.play()
  },
  loop: (item, bool = true) => {
    const sound = jukebox[item]
    if (sound) sound.loop(bool)
  },
  load: (...items) => {
    items.forEach(item => {
      if (!jukebox[item]) jukebox[item] = createSound(item)
    })
  },
  stop: item => {
    const instance = instances[item]
    if (instance) Howler.stop(instance)
  },
  volume: value => {
    Howl.volume(value)
  },
}
