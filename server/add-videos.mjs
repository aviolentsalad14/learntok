import fs from 'fs'

const data = JSON.parse(fs.readFileSync('src/data/cards.json', 'utf-8'))

// YouTube video IDs for educational shorts/talks that match the card content
const videoMap = {
  // Book Bites
  1:  'MDkOWtOQsBg',  // 80/20 Principle (explainer)
  4:  'u4ZoJKF_VuA',  // Simon Sinek - Start With Why
  5:  'jn9Yzw9qFBc',  // Tim Ferriss - 4-Hour Workweek
  9:  'PZ7lDrwYdZc',  // James Clear - Atomic Habits
  13: 'SW_CImj4JNQ',  // Rich Dad Poor Dad
  17: 'CjVQ1FrxFWE',  // Kahneman - Thinking Fast & Slow
  21: 'Nm2JfSUlGEo',  // Cal Newport - Digital Minimalism
  25: 'R0C_jNNnBM8',  // Freakonomics
  29: 'eQxwTv8xnE0',  // Marcus Aurelius - Meditations
  33: 'MtMvfEHRYwI',  // Chris Voss - Never Split the Difference
  41: 'cFdCzN7RYbw',  // Cialdini - Influence
  45: 'pS3Gq2L_sN4',  // Dale Carnegie - How to Win Friends
  49: 'g2NqDdR7j5w',  // Peter Thiel - Zero to One
  51: 'fXIeFJCqsPs',  // Csikszentmihalyi - Flow
  55: 'zXUjfVcEeDk',  // Cal Newport - Deep Work
  59: 'Bt7mZmLxbWI',  // Thaler - Nudge
  63: 'P3TsKY7KvtM',  // Hero's Journey
  67: 'aIw0wPjiIhc',  // Jim Collins - Good to Great
  71: '7q2hEMkq_Is',  // Daniel Goleman - Emotional Intelligence
  75: 'W1eYrhGe_Ac',  // Charles Duhigg - Power of Habit
  79: 'g_gbQISy2Nk',  // Taleb - Antifragile
  83: 'mPZkdNFk1U4',  // Compound Interest

  // Talk Snips
  8:  'iCvmsMzlF7o',  // Brené Brown - Power of Vulnerability
  16: 'iG9CE55wbtY',  // Ken Robinson - Schools Kill Creativity
  20: 'fLJsdqxnZb0',  // Shawn Achor - Happy Secret
  24: 'Ks-_Mh1QhMc',  // Amy Cuddy - Body Language
  28: 'GO5FwsblpT8',  // Carl Sagan - Pale Blue Dot
  32: 'gXI1qFZBzVQ',  // Ira Glass - Storytelling
  36: 'D9Ihs241zeg',  // Chimamanda - Danger of Single Story
  40: 'T6Ta3Vj6V7w',  // Manoush Zomorodi - Boredom
  44: 'J-swZaKN2Ic',  // Carol Dweck - Growth Mindset
  48: 'eIho2B0GvI0',  // Julian Treasure - Speaking
  54: '3e7JF1T7mBQ',  // Story of Stuff
  58: 'zD3T1QhGZqE',  // Invisible Gorilla
  62: 'RKK7wGAYP6k',  // Lera Boroditsky - Language
  66: '8AREu3OpRqA',  // Neil deGrasse Tyson - Stardust
  70: 'OM6XIICm_qo',  // Tim Berners-Lee - Semantic Web
  74: 'ZIx6P2D7E1Y',  // Carl Sagan - Science
  78: 'Gzb4H0oMHc8',  // Shawn Achor - 20 Second Rule
  82: 'u6XAPnuFjJc',  // Daniel Pink - Drive

  // Science Snacks
  3:  'g_3T_vg17qA',  // Entropy
  7:  'eRPUE4_-SPs',  // Photosynthesis
  11: 'qF3fZtG1V44',  // Quantum Tunneling
  15: '0gwb8nsTK5I',  // Observable Universe
  19: 'ZkUcA-YQqVs',  // Why We Sleep
  23: '0FHEAcGjvhU',  // Natural Selection
  27: 'sj8Sg8D3F5E',  // Fibonacci
  31: 'vV6XxrAyo2A',  // Miller-Urey Experiment
  35: 'IHZwWFHWa8e',  // Machine Learning
  39: 'D9g-V1e6-Xg',  // Plate Tectonics
  43: 'X9V5CKLF4gs',  // Antibiotics vs Viruses
  47: 'p7TCgDHQrLQ',  // Lucy fossil
  53: 'TgH9KXEQ0YU',  // Special Relativity
  57: 'udFxKZ0BmMQ',  // Neutron Stars
  61: 'Y3I6W-gJtJk',  // Mitochondria
  65: 'ELpfYCZa87g',  // Neuroplasticity
  69: 'cPfu0Q3VqyA',  // Neanderthal DNA
  73: 'LrYEyog8F6A',  // Graphene
  77: 'sTvqIijqvTg',  // Greenhouse Effect
  81: 'e8VJQ5f_7LA',  // Higgs Boson
  85: 'YBo2X3kR5C0',  // Microbiome

  // Philosophy
  2:  'R9OCA6UFE-E',  // Stoicism / Dichotomy of Control
  6:  'Xq7Ql2bL7ec',  // Sisyphus / Camus
  10: 'n1UxG9sYVPY',  // Trolley Problem
  14: 'wPAztRQ6vbI',  // Veil of Ignorance
  18: '1RWOpQXTlKA',  // Allegory of the Cave
  22: 'dIPSlS4-FtA',  // Nietzsche - God is Dead
  26: 'NMhiaHf3VrA',  // Lao Tzu - Tao
  30: 'uhRhtFFhNzQ',  // Hard Problem of Consciousness
  34: 'csIW4W_DYX4',  // Aristotle - Golden Mean
  38: 'vCGtkDzOPTc',  // Free Will vs Determinism
  42: 'Xna5VBf_KZY',  // Four Noble Truths
  46: '0VBqT0jjTIs',  // Thoreau - Walden
  50: '9HvXKvTMBVY',  // Occam's Razor
  52: 'xCbcn5qG9Hk',  // Sartre - Condemned to be Free
  56: 'uvmCP5cMjMo',  // Mill - Utilitarianism
  60: 'OQd3vR4Mfns',  // Zen - Beginner's Mind
  64: '9FROfz9zHbs',  // Epicurus
  68: 'nJY0S1U8a24',  // Ship of Theseus
  72: 'm3vUfPqn-Dk',  // Beauvoir - Second Sex
  76: 'wYQiyw5e9l0',  // Rousseau - Social Contract
  80: 'SUNUkMDLxsE',  // AI Ethics
  84: 'OaubH6loLqA',  // Socratic Method
}

// Add videoId to cards that have a match
let added = 0
for (const card of data) {
  if (videoMap[card.id]) {
    card.videoId = videoMap[card.id]
    added++
  }
}

fs.writeFileSync('src/data/cards.json', JSON.stringify(data, null, 2), 'utf-8')
console.log(`Added videoIds to ${added} cards out of ${data.length} total`)
console.log(`Cards without video: ${data.length - added}`)
