import Preference from '@revgaming/preference'
import {player, setPublicPath} from './player'

const options = {
  toggled: 'sound-toggled',
}

/**
 * @returns {boolean}
 */
export const isMuted = () => Preference.get('muted') === true
export const mute = (flag = true) => Preference.set('muted', flag)
export const toggleMute = () => {
  mute(!isMuted())
  window.dispatchEvent(
    new CustomEvent(options.toggled, {
      isMuted: isMuted,
    }),
  )
}

export {player}

export const bootMedia = options => {
  if (options.publicPath) setPublicPath(options.publicPath)
  return {
    isMuted: isMuted,
    mute: mute,
    toggleMute: toggleMute,
    setSoundPath: setPublicPath,
    getPlayer: () => player,
  }
}
