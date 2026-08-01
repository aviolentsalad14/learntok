import fs from 'fs'

const data = JSON.parse(fs.readFileSync('src/data/cards.json', 'utf-8'))

const fullSummaries = {
  51: {
    bullets: [
      "Flow is the state of complete absorption in an activity where you lose track of time and self - it's the most enjoyable experience a person can have",
      "Happiness is not passive leisure but flow - recharging with TV is not happiness; deep engagement in a challenging activity IS the optimal experience",
      "Flow happens when the challenge level matches your skill level - if a task is too hard you get anxious, too easy you get bored; the sweet spot creates flow",
      "Characteristics of flow: intense concentration, clear goals, immediate feedback, action merges with awareness, loss of self-consciousness, and the activity is intrinsically rewarding",
      "You can engineer flow: set clear goals, focus on one thing, choose meaningful challenges, and design your environment to reduce distractions",
      "The autotelic personality: some people (autotelic) are naturally good at creating flow experiences - they seek challenge for its own sake and are less dependent on external rewards",
      "Flow is not just for work - you can find it in sports, art, conversation, and hobbies; seek it across all domains of life",
      "The paradox of control: flow involves a loss of ego and self, yet it makes you feel more in control - merging with the activity brings mastery"
    ]
  },
  55: {
    bullets: [
      "Deep work is professional activity performed in a state of distraction-free concentration that pushes your cognitive capabilities to their limit",
      "Deep work is becoming increasingly valuable AND increasingly rare - in a world of constant distraction, the ability to focus deeply is a superpower",
      "Three benefits: it creates new value and improves your skill, it's hard to replicate (rare value), and it's fulfilling (meaningful work)",
      "Shallow work (email, meetings, social media) feels productive but creates little value - much of what fills your day is busywork",
      "Schedule deep work blocks: plan your day around focused sessions (jedi-like discipline) and treat them as non-negotiable",
      "Embrace boredom - train your brain to focus for long periods by resisting the urge to grab your phone during idle moments",
      "Quit or drastically reduce social media - it's engineered to fragment your attention and prevent deep focus",
      "The 4-hour rule: most people can sustain about 4 hours of deep work per day - prioritize the most important task during your peak focus window"
    ]
  },
  59: {
    bullets: [
      "Nudge theory: small changes in how choices are presented can dramatically change behavior - without forbidding any options or changing incentives",
      "The choice architect designs the environment in which people make decisions - even the default option is a choice that someone designed",
      "Defaults are incredibly powerful: opt-out organ donation (everyone donates unless they opt out) has far higher participation than opt-in",
      "Libertarian paternalism: preserve people's freedom to choose while steering them toward better decisions - nudge, don't mandate",
      "Real-world examples: placing fruit at eye level in cafeterias increases fruit consumption; making a 401k the default dramatically boosts retirement savings",
      "Humans have predictable biases (loss aversion, present bias, status quo bias) that nudges can counteract - structure choices to work with, not against, human nature",
      "Nudges work best when they're transparent and reversible - hiding information or making decisions by manipulation is ethically problematic",
      "The power of inertia: most people stick with the default choice, so choose defaults carefully (for both good and ill)"
    ]
  },
  63: {
    bullets: [
      "The Hero's Journey (monomyth) is the universal pattern underlying most great stories across all cultures and times - first described by Joseph Campbell",
      "Structure: a hero leaves their ordinary world, crosses a threshold into a special world of adventure, faces trials, wins a victory, and returns transformed",
      "Stage 1 (Departure): the call to adventure, refusing the call, meeting a mentor (like Obi-Wan or Gandalf)",
      "Stage 2 (Initiation): crossing the threshold, facing trials and tests, meeting allies and enemies, approaching the inmost cave, enduring the ordeal, and seizing the reward",
      "Stage 3 (Return): the road back, resurrection (final test), and return with the elixir (a gift or wisdom to share)",
      "From Star Wars to Harry Potter to The Lord of the Rings - all follow this same pattern, which is why they resonate so deeply",
      "The hero's journey is not just about stories - it reflects real life: everyone faces a call to change, trials, and a return with wisdom",
      "The monomyth works because it mirrors the human psychological experience of growth, challenge, transformation, and integration"
    ]
  },
  67: {
    bullets: [
      "Good-to-great companies achieve sustained excellence for 15+ years - the study compared them against similar companies that didn't make the leap",
      "Level-5 leadership: the best leaders are humble (self-effacing, modest) yet fiercely ambitious for the company, not themselves",
      "First who, then what: get the right people on the bus (and the wrong people off) before deciding where to drive it - people are the key asset",
      "The Stockdale Paradox: retain faith that you will prevail in the end, AND confront the brutal facts of your current reality at the same time",
      "The Hedgehog Concept: great companies focus on one thing they can be the best in the world at (intersection of passion, economic engine, and what you can be best at)",
      "The Flywheel: results come from consistent, relentless pressure in one direction - no single dramatic move, but the accumulated effect of turning the flywheel",
      "The Doom Loop: failed companies jump from fad to fad, changing strategy constantly instead of building momentum on a single focus",
      "Technology accelerators: use technology as an accelerator of momentum, not a creator of it - it amplifies what you already do well"
    ]
  },
  71: {
    bullets: [
      "Emotional intelligence (EQ) matters more than IQ for success - it's a better predictor of professional and personal outcomes than raw intelligence",
      "IQ gets you hired; EQ gets you promoted - technical skill is the entry ticket, but emotional and social skill drive advancement",
      "The 5 components: self-awareness, self-regulation, motivation, empathy, and social skill - all can be learned and improved",
      "Self-awareness: recognizing your own emotions and their impact on others - the foundation of EQ",
      "Self-regulation: managing your emotions, thinking before acting, and adapting to changing circumstances",
      "The most effective leaders aren't the smartest in the room - they're the most attuned to the room, reading and responding to the emotional climate",
      "Empathy: understanding others' perspectives and feelings - essential for teamwork, leadership, and relationships",
      "Social skill: the ability to build rapport, manage relationships, persuade, and lead - EQ is the 'engine' of social competence"
    ]
  },
  75: {
    bullets: [
      "Every habit follows a neurological loop: cue (trigger) → routine (action) → reward (benefit) - this is the habit loop that wires behavior",
      "The cue signals your brain to go into automatic mode - it can be a time, place, emotional state, or preceding action",
      "The routine is the behavior itself - the physical, mental, or emotional action you take",
      "The reward is what your brain gets - it's why the habit persists; dopamine reinforces the loop",
      "To change a habit: keep the same cue and reward, but change the routine - this is the golden rule of habit change",
      "Example: stress (cue) → overeat (routine) → comfort (reward) becomes stress (cue) → walk (routine) → comfort (reward)",
      "Habits are powerful because they offload decision-making - most of your daily choices are actually habits running automatically",
      "The habit loop explains everything from addictions to productivity - master the loop and you master your behavior"
    ]
  },
  79: {
    bullets: [
      "Some things benefit from shocks and volatility - they get STRONGER from stress, not just survive it - these are 'antifragile'",
      "Fragile things break under stress (a glass). Robust things resist stress (a rock). Antifragile things GAIN from stress (the immune system, muscles, startups)",
      "The opposite of fragility isn't robustness - it's antifragility: profiting from disorder and uncertainty rather than just surviving it",
      "Biological examples: your immune system, bones, and muscles all get stronger from stress - hormesis (what doesn't kill you makes you stronger)",
      "The economy: entrepreneurs and small businesses are antifragile - uncertainty and volatility create opportunity for the agile",
      "The barbell strategy: invest most in ultra-safe assets and a little in ultra-risky ones - avoiding the middle that's fragile to shocks (this protects against Black Swans)",
      "Optionality: keep options open so you can benefit from positive randomness (asymmetric upside)",
      "To thrive in a chaotic world, build antifragility into your career, finances, and character - don't just survive uncertainty, profit from it"
    ]
  },
  83: {
    bullets: [
      "Compound interest is the eighth wonder of the world - the interest on your interest grows exponentially over time",
      "Invest early: $10,000 invested at 8% annual return becomes $100,000 in 30 years without adding a cent - time is the most powerful factor",
      "The earlier you start, the more dramatic the compounding - starting 10 years earlier can MORE than double your end result (the cost of waiting is huge)",
      "Consistency beats timing: regular contributions (even small) compound better than trying to time the market",
      "The stock market has returned ~7% after inflation over the last century - long-term, patient investors are rewarded",
      "Patience is the key - the magic of compounding only reveals itself over decades; most people quit before the exponential curve kicks in",
      "Reinvest returns: the moment you withdraw or spend the gains, you break the compounding cycle",
      "Compound interest applies to more than money - knowledge, skills, relationships, and fitness all compound when you invest consistently"
    ]
  },
}

let updated = 0
for (const card of data) {
  if (fullSummaries[card.id]) {
    card.bullets = fullSummaries[card.id].bullets
    updated++
  }
}

fs.writeFileSync('src/data/cards.json', JSON.stringify(data, null, 2), 'utf-8')
console.log('Expanded', updated, 'cards (batch 2)')
