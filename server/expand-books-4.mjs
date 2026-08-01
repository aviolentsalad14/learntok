import fs from 'fs'

const data = JSON.parse(fs.readFileSync('src/data/cards.json', 'utf-8'))

const fullSummaries = {
  101: {
    bullets: [
      "The ONE Thing: ask 'what's the ONE thing I can do such that by doing it everything else will be easier or unnecessary?' - focus everything on that",
      "Extraordinary results come from narrowing your focus, not widening it - the domino effect: hit the most important domino and it knocks down the rest",
      "Multitasking is a lie - the brain can't truly focus on two things at once; switching between tasks degrades quality and efficiency",
      "The focusing question: always ask 'What's the ONE thing right now?' - narrow it by time (this week, today, this hour)",
      "Willpower is a limited resource that depletes - do your most important work FIRST when your willpower is at its peak (usually the morning)",
      "Protect your focus time: schedule your ONE thing like a non-negotiable meeting with the CEO and guard it fiercely",
      "The 80/20 lens: on your biggest goal, find the 20% that produces 80% of progress, then narrow further to the ONE thing within that",
      "Balance is a myth - great achievements require leaning into imbalance: go all-in on the priority and let other things temporarily slip"
    ]
  },
  102: {
    bullets: [
      "You are systematically delusional - your brain is wired with dozens of cognitive biases that distort your perception and judgment",
      "Overconfidence bias: you overestimate your own abilities, knowledge, and accuracy - most people rate themselves above average at almost everything",
      "Confirmation bias: you seek out and believe information that confirms what you already believe, while ignoring contradictory evidence",
      "The clustering illusion: you see patterns in random noise (believing a random streak is meaningful, seeing faces in clouds)",
      "Recency bias: you over-weight recent events and assume they'll continue (a crash feels permanent, a hot streak feels like it'll last)",
      "Sunk cost fallacy: you keep investing in a failing venture (time, money, effort) because you've already invested, instead of cutting losses",
      "The Halo effect: one positive trait (attractiveness, success in one area) colors your whole judgment of a person",
      "The first step to clearer thinking: admit you're biased - awareness of these patterns is the only real defense"
    ]
  },
  103: {
    bullets: [
      "The gene is the fundamental unit of heredity - a stretch of DNA that codes for proteins, passed from parent to offspring",
      "DNA is the molecule of inheritance - it carries the instructions for building and running every living thing",
      "The Human Genome Project mapped all ~20,000 genes in the human genome (2003) - a complete blueprint of human heredity",
      "Mutations cause genetic diseases (cystic fibrosis, sickle-cell, Huntington's) - and also drive evolution and cancer",
      "CRISPR is the revolutionary gene-editing tool - it allows scientists to cut, edit, and correct DNA with precision",
      "Gene therapy is now curing diseases once thought untreatable - for example, CRISPR-based treatments for sickle-cell disease and beta-thalassemia",
      "The power to edit genes brings profound ethical questions: should we edit embryos? Choose our children's traits (height, intelligence)? Create 'designer babies'?",
      "Genes interact with environment - most traits (including complex ones like intelligence and temperament) come from genes + environment, not genes alone"
    ]
  },
  104: {
    bullets: [
      "We are survival machines - 'robot vehicles blindly programmed to preserve the selfish molecules known as genes' (Dawkins' central thesis)",
      "The gene is the unit of natural selection - evolution acts on genes, not organisms or species; a gene's 'goal' is to copy itself",
      "Selfish genes: genes act in their own self-interest (maximizing copies of themselves), even at the expense of the individual organism",
      "Altruism exists for genetic reasons - helping kin (relatives who share your genes) increases copies of your genes, which is why parents sacrifice for children",
      "The gene's-eye view explains animal behavior: worker bees die for the colony, birds warn of predators, us sacrificing for family - all serve gene replication",
      "Meme theory: ideas ('memes') spread and evolve like genes - a catchy tune, a fashion, a belief replicates from mind to mind, subject to selection",
      "This doesn't mean we're robots - we have the power to rebel against our selfish genes through culture, reason, and free will",
      "The gene's-eye view transformed evolutionary biology - it's a lens for understanding behavior and the origin of cooperation"
    ]
  },
  105: {
    bullets: [
      "Your attachment style - anxious, avoidant, or secure - is formed in early childhood and determines how you behave in adult romantic relationships",
      "Secure attachment: you're comfortable with intimacy and independence - you trust, communicate, and seek closeness without fear; ~50% of people are secure",
      "Anxious attachment: you crave closeness, fear abandonment, need constant reassurance, and worry about your partner's feelings (fearful of being left)",
      "Avoidant attachment: you value independence above all, feel suffocated by closeness, dismiss emotions, and pull away when intimacy grows",
      "The anxious-avoidant trap: anxious and avoidant types attract each other (each triggers the other's fears) - this toxic dynamic is common",
      "You can change your attachment style - understanding your patterns and working with a partner (or therapy) can shift you toward secure attachment",
      "Attachment drives relationship behaviors: how you handle conflict, distance, jealousy, and commitment all trace back to attachment style",
      "The secure base: healthy relationships provide a 'secure base' from which you explore the world, knowing you have a safe place to return"
    ]
  },
  106: {
    bullets: [
      "Essentialism is not about how to get more things done - it's about how to get the RIGHT things done; less but better",
      "If it's not a clear 'yes,' it's a 'no' - use a strict filter; a mediocre 'maybe' to many things dilutes your focus on what matters",
      "Trade-offs are real - you can't have it all, and trying to means achieving nothing well; choosing means intentionally sacrificing",
      "The essentialist does the right thing at the right time in the right way - not everything they could possibly do",
      "Escape your to-do list - say no to almost everything; protect your time and energy for the vital few by refusing the trivial many",
      "Essentialism is a discipline you practice, not a one-time decision - it's a system for continuous prioritization",
      "The killer question: 'If I could only do ONE thing, what would it be?' - use it to cut through noise",
      "Say no gracefully but firmly - you can't be generous with your time; be clear about your priorities without guilt"
    ]
  },
  107: {
    bullets: [
      "Make habits so small they're ridiculous - floss one tooth, do one pushup, write one sentence; the tininess removes all resistance",
      "Small is the key: a behavior that takes too much effort won't stick; shrink it until it's trivially easy to start",
      "Celebrate after every tiny habit - emotion creates habit, not repetition; a post-behavior celebration wires the behavior into your brain",
      "Anchor new habits to existing ones: 'After I [existing habit], I will [new habit]' - the anchor makes it automatic (e.g., after coffee, meditate 1 minute)",
      "Behavior = Motivation + Ability + Prompt - to make a behavior happen, design all three: increase motivation, make it easy, and set a reliable trigger",
      "The tiny-habits method works for both adding good habits and stopping bad ones - to stop a bad habit, make it hard and remove the prompt",
      "Don't rely on motivation - design your environment so the good behavior is easy and the bad behavior is hard",
      "Gradually increase: once the tiny habit is stable, expand it (one minute → two minutes → ten minutes) without breaking the routine"
    ]
  },
  108: {
    bullets: [
      "The old marketing model is dead - create a product, advertise it, sell it; that worked when choices were few, but now everything is boring and invisible",
      "In a world of too many choices, remarkable products are the only marketing that works - if you're not remarkable, you're invisible",
      "Be a 'purple cow' - something worth noticing, talking about, sharing, and remarking on; ordinary (brown cows) get ignored",
      "Safe is risky - playing it safe guarantees you'll be ignored in a crowded market; risk and remarkability go hand in hand",
      "Boring fails - if your product barely differs from the rest, it won't get attention or word of mouth; it will quietly fail",
      "The Purple Cow mindset: design products (and content) for the early adopters who talk, not the mass market who ignore",
      "Remarkability is the goal - would someone tell a friend about this? If not, you don't have a purple cow, you have a brown cow",
      "If your product isn't remarkable, start over - don't polish a boring product; change the product itself to be worth talking about"
    ]
  },
  109: {
    bullets: [
      "Happiness is not something you find - it's something you create through your actions, relationships, and mindset",
      "The mind is divided: the rational RIDER and the emotional ELEPHANT - the rider (logic) thinks he's in control, but the elephant (emotion) usually goes where it wants",
      "To change behavior, address the elephant, not just the rider - logic alone rarely changes minds/behavior; you must engage emotion and make change feel good",
      "The happiness hypothesis from ancient wisdom: virtue, gratitude, meditation, and strong relationships reliably increase happiness",
      "The meaning of life connection: happiness comes from meaning, which comes from connecting to something bigger than yourself (work, purpose, relationships)",
      "Modern psychology confirms: gratitude exercises, acts of kindness, and social connection measurably boost well-being",
      "Happiness comes from within (your interpretation) AND without (your circumstances) - the truth is a both/and: genes, circumstances, AND your choices all matter",
      "Meditation works - it trains the mind, reduces suffering, and increases happiness; you're not just born with a happiness 'set point' you can change"
    ]
  },
  110: {
    bullets: [
      "Don't compete in a bloody 'red ocean' of rivals - instead create a 'blue ocean' of uncontested market space where you have no competition",
      "Red oceans = existing, crowded markets where companies fight for market share in bloody competition (profit margins shrink)",
      "Blue oceans = new, uncontested markets where demand is created rather than fought over (Cirque du Soleil combined circus + theater to create a new category)",
      "The key: VALUE INNOVATION - simultaneously pursue differentiation (be unique) AND low cost (be efficient), not one or the other",
      "Make the competition irrelevant - by creating a category that didn't exist, you don't out-compete rivals, you make them moot",
      "Cirque du Soleil example: they removed animals and star performers (cost cuts) while adding theater, story, and art (differentiation) - a new market",
      "Examples of blue oceans: Netflix (streaming vs Blockbuster), the iPod/iTunes (legal digital music), Southwest (low-cost no-frills flights)",
      "Strategy tools: the 'strategy canvas' and 'eliminate-reduce-raise-create' framework help you find blue oceans"
    ]
  },
  111: {
    bullets: [
      "The present moment is all you ever have - the past is a memory, the future is an illusion; all that exists is now",
      "You are not your thoughts - the constant voice in your head (judging, worrying, wanting) is not you; identifying with it causes suffering",
      "Psychological suffering comes from over-identifying with the mind - regrets (past) and anxieties (future) are mind-created, not real problems of the now",
      "The pain-body: accumulated emotional pain from the past that reactivates and hijacks you - observe it without judgment to dissolve it",
      "Watch your thoughts without judgment - become an observer of your mind; this creates a gap between thought and reaction (peace)",
      "Acceptance of the present: what is, is - resist reality and you suffer; accept the present moment and even 'negative' situations lose their grip",
      "Ego identification: the ego defines itself through roles, possessions, and achievements - letting go of ego identification frees you",
      "Enlightenment is a simple shift in awareness: a moment of being fully present, quieting the mind, and experiencing the now directly"
    ]
  },
  112: {
    bullets: [
      "Every master follows the same path: apprenticeship (learning the rules) → creative-active (breaking the rules) → mastery (transcending the rules)",
      "Apprenticeship (phase 1): learn the fundamentals, the tools, and the accumulated knowledge of your field - absorb the rules before you break them",
      "The creative-active phase (2): once you know the rules, break them - experiment, find your unique voice, and innovate within the discipline",
      "Mastery (phase 3): you transcend the rules entirely - you operate with such deep understanding that your craft becomes instinctive and original",
      "It takes ~20 years to achieve true mastery - path takes roughly two decades of sustained, focused practice (not 10,000 hours but a lifetime commitment)",
      "Find your life's task: that childhood curiosity, obsession, or fascination that never left you - your unique calling is the seed of mastery",
      "Combine deep practice (focused, uncomfortable skill-building) with social intelligence (mentors, networks, and understanding people)",
      "Mastery is both skill AND self-mastery - you must master yourself (emotions, discipline, focus) to master your craft"
    ]
  },
  113: {
    bullets: [
      "Startups aren't smaller versions of big companies - they're experiments operating on a 'build-measure-learn' loop, uncertain about what customers want",
      "A startup is a temporary organization designed to find a repeatable, scalable business model - it's a search for the right model, not a miniature corporation",
      "The Minimum Viable Product (MVP): build the simplest version that lets you TEST your hypothesis with real customers - launch fast, learn from real feedback",
      "The Build-Measure-Learn loop is the engine of growth: build a hypothesis-testing product, measure customer response with real metrics, learn, and iterate",
      "Validated learning: the only success metric that matters is learning what customers actually want (not vanity metrics like page views)",
      "Pivot or persevere: based on learning, you either stick with your model (persevere) or change a major component (pivot) - don't stubbornly persist with a failing model",
      "Stop building things nobody wants - most startup failure comes from building something in isolation that no one actually wants",
      "Continuous deployment and fast iteration: the goal is to reduce the time between ideas and validated learning - speed of learning is the competitive advantage"
    ]
  },
  114: {
    bullets: [
      "Spacetime is curved by mass and energy - that's gravity (general relativity); massive objects like stars and planets warp the fabric of spacetime around them",
      "Black holes: regions where gravity is so intense that nothing, not even light, can escape - they form when massive stars collapse",
      "The universe began ~13.8 billion years ago in a Big Bang - an infinitely hot, dense point that expanded (space itself expanded, not matter moving into empty space)",
      "Expansion is still happening: galaxies are moving apart, and distant galaxies are receding faster (measured by redshift)",
      "The universe will likely end in 'heat death' - maximum entropy where all usable energy is spent, stars burn out, and temperatures equalize (a cold, dark universe)",
      "Hawking radiation: black holes aren't completely black - quantum effects cause them to emit radiation and slowly evaporate over inconceivably long times",
      "Time had a beginning (the Big Bang) and the universe has a boundary in time - but empty space with no matter could be stable forever",
      "The ultimate questions: does the universe have a beginning in time? Does it have boundaries? Confronting these reveals both the power and limits of our theories"
    ]
  },
  115: {
    bullets: [
      "Don't trust advice from someone who doesn't have skin in the game - if they're not risking anything (reputation, money, consequences), their opinion is cheap",
      "People who take risks learn from reality - they get feedback from consequences; people without skin in the game learn only from theory (which is often wrong)",
      "The asymmetry problem: when someone can gain but not lose (or lose but not harm others), the system is broken - they have no incentive to be right",
      "Symmetry of risk is the foundation of fairness - those who benefit from a decision should also bear the risk/consequences of it",
      "In business, finance, and politics: rule-makers and advisors who don't share the downside give dangerous advice (e.g., bureaucrats who can't lose their own money)",
      "'Skin in the game' is about ethical behavior - it's the principle of not preaching what you don't practice, and not benefiting from outcomes you didn't earn",
      "Antifragility connection: people with skin in the game learn, adapt, and get stronger; safe opinions make people weak and disconnected from reality",
      "The practice: seek advice only from those who've risked what they're advising on, and be willing to put your own skin in the game"
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
console.log('Expanded', updated, 'cards (batch 4)')
