export const playerEmojis = {
  'Mykhailo Mukha': '🐹',
  'Ihor Mukha': '🪰',
  'Yevhen Kolodko': '🤡',
  'Rina': '🐿️',
  'Kyrylo R': '🧢',
  'Hema Vlasova': '🐉🎠',
  'Vira K': '🦦',
  'Ihor Strumetskyi': '💎'
};

export const addEmojiToName = (playerName) => {
  const emoji = playerEmojis[playerName] || '';
  return `${playerName} ${emoji}`;
};
