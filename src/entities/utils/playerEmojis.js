export const playerEmojis = {
  'Mykhailo Mukha': '🐹',
  'Ihor Mukha': '🪰',
  'Yevhen Kolodko': '🤡',
  'Rina': '🐿️',
  'Kyrylo R': '🧢',
  'Hema Vlasova': '🐉🎠',
  'Vira K': '🦦',
  'Ihor Strumetskyi': '💎',
  'Kyrylo D': '🦉',
  'Anna': '🌿',
  'Artur Berestenko': '🌚',
  'Danylo Tkach': '👹',
  'Maria': '🦊',
  'Anton Martynenko': '🦐',
  'Nastya L': '🐈‍⬛',
  'Daniel Tsyporin': '🐆',
  'Pavlo M': '🥀',
  'Sasha': '🍄',
  'Ivan': '💢',
  'Valerii Bohdanov': '🕸',
  'Victoria Sh': '🫶',
  'Mariia B': '🐳'
};

export const addEmojiToName = (playerName) => {
  const emoji = playerEmojis[playerName] || '';
  return `${playerName} ${emoji}`;
};
