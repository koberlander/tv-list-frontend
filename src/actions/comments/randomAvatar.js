export const randomAvatar = () => {
  const avatars = [
    {
      id: 1,
      key: 'cool doge',
      text: 'cool doge',
      value: 'cool doge',
      image: { avatar: true, src: 'https://emojis.slackmojis.com/emojis/images/1520808873/3643/cool-doge.gif?1520808873' },
    },
    {
      id: 2,
      key: 'catty ping',
      text: 'catty ping',
      value: 'catty ping',
      image: { avatar: true, src: 'https://emojis.slackmojis.com/emojis/images/1498862355/2559/cattyping.gif?1498862355' },
    },
    {
      id: 3,
      key: 'cowbell',
      text: 'cowbell',
      value: 'cowbell',
      image: { avatar: true, src: 'https://emojis.slackmojis.com/emojis/images/1495219406/2284/more_cowbell.gif?1495219406' },
    },
    {
      id: 4,
      key: 'hypnotoad',
      text: 'hypnotoad',
      value: 'hypnotoad',
      image: { avatar: true, src: 'https://emojis.slackmojis.com/emojis/images/1450319455/129/hypnotoad.gif?1450319455' },
    },
  ]

  const min = avatars[id][0]
  const max = avatars[id][3]

  function getRandomAvatar(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


}
