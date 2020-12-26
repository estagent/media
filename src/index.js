import Preference from '@revgaming/preference';

const options = {
  toggled: 'sound-toggled',
};

/**
 * @returns {boolean}
 */
const isMuted = () => Preference.get('muted') === true;
const mute = (flag = true) => Preference.set('muted', flag);
const toggleMute = () => {
  mute(!isMuted());
  const eventAwesome = new CustomEvent(options.toggled, {
    isMuted: isMuted,
    detail: {text: () => textarea.value},
  });
};

export default function() {
  return {
    isMuted: isMuted,
    toggleMute: toggleMute,
    mute: mute,
  };
}
