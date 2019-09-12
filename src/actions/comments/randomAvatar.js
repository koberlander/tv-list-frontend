
  const avatars = [
    {
      name: 'cool doge',
      image: 'https://emojis.slackmojis.com/emojis/images/1520808873/3643/cool-doge.gif?1520808873'
    },
    {
      name: 'catty ping',
      image: 'https://emojis.slackmojis.com/emojis/images/1498862355/2559/cattyping.gif?1498862355'
    },
    {
      name: 'cowbell',
      image: 'https://emojis.slackmojis.com/emojis/images/1495219406/2284/more_cowbell.gif?1495219406'
    },
    {
      name: 'hypnotoad',
      image: 'https://emojis.slackmojis.com/emojis/images/1450319455/129/hypnotoad.gif?1450319455'
    },
  ]


export const randomAvatar = () => {
  const max = avatars.length;

  return avatars[Math.floor(Math.random() * max)].image

}
