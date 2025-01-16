export const playerEmojis = {
  'Anton Ovcharenko': '🐁👑',
  'Mykhailo Mukha': '🐹',
  'Ihor Mukha': '🪰',
  'Yevhen Kolodko': '🤡',
  'Rina': '🐿️',
  'Kyrylo R': '🧢',
  'Hema Vlasova': '🐉',
  'Ihor Strumetskyi': '💎'
};

export const addEmojiToName = (playerName) => {
  const emoji = playerEmojis[playerName] || '🐁';
  return `${playerName} ${emoji}`;
};
