export interface Project {
  title: string;
  type: string;
  description: string;
  tags: string[];
  links: { label: string; url: string }[];
  status?: string;
}

export const projects: Project[] = [
  {
    title: "8-Bit Demon Hunter",
    type: "Video Game",
    description:
      "A procedurally generated detective RPG. Explore towns, gather clues from NPCs (some lie), complete quests, and identify a hidden demon before confronting it in a multi-phase boss fight. Every run is different.",
    tags: ["TypeScript", "Vite", "Procedural Generation", "Browser Game"],
    links: [
      { label: "Play on itch.io", url: "https://xephoid.itch.io/8-bit-demon-hunter" },
      { label: "GitHub", url: "https://github.com/xephoid/8-bit-demon-hunter" },
    ],
  },
  {
    title: "Fractured Fist",
    type: "Card Game — Physical + Digital",
    description:
      "A 2-player deck-building fighting game. Players channel spirit energy to acquire technique cards and build a deck capable of defeating their opponent. Plays like Dominion with a martial arts theme. Includes a solo campaign mode with factions, XP progression, and world lore.",
    tags: ["TypeScript", "React", "Game Design", "Deck Builder"],
    links: [
      { label: "Play Online", url: "https://xephoid.github.io/fractured-fist" },
      { label: "GitHub", url: "https://github.com/xephoid/fractured-fist" },
    ],
  },
  {
    title: "Neural Net RTS Experiment",
    type: "Experimental Game / ML Research",
    description:
      "A real-time strategy game built to explore whether a neural network trained via genetic algorithm could learn to play. Two factions compete with gatherers, explorers, and soldiers. The AI starts random and evolves over generations, eventually learning to consistently beat a handcrafted rule-based opponent.",
    tags: ["JavaScript", "TensorFlow.js", "Genetic Algorithms", "Neural Networks"],
    links: [
      { label: "Play in Browser", url: "https://xephoid.github.io/rts" },
      { label: "GitHub", url: "https://github.com/xephoid/rts" },
    ],
  },
  {
    title: "Sweetlands Imperium",
    type: "Board Game — In Development",
    status: "working title",
    description:
      "A 4-player area control strategy game set in a candy-themed world. Asymmetric factions compete for the Candy Castle through diplomacy, taxation, combat, and cunning. Inspired by the depth of Twilight Imperium. 5 playtests completed including at a gaming convention.",
    tags: ["Game Design", "Physical Prototype", "Playtesting"],
    links: [
      { label: "Rules Doc", url: "https://docs.google.com/document/d/1MN7wkFRSfDh6MYEx9_-HqrBcW2vJJg2IY2kfUCZOr6I/edit" },
    ],
  },
];
