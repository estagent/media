import Preference from '@revgaming/preference';

const options = {
  toggled: 'sound-toggled',
};

/**
 * @returns {boolean}
 */
export const isMuted = () => Preference.get('muted') === true;
export const mute = (flag = true) => Preference.set('muted', flag);
export const toggleMute = () => {
  mute(!isMuted());
  window.dispatchEvent(new CustomEvent(options.toggled, {
    isMuted: isMuted,
  }));
};
