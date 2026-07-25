import fs from 'fs'

const data = JSON.parse(fs.readFileSync('src/data/cards.json', 'utf-8'))

const bulletMap = {
  1: ["20% of inputs produce 80% of outputs", "Identify the vital few activities that drive real results", "Focus on high-leverage work; cut or delegate the rest"],
  4: ["People buy WHY you do it, not WHAT you do", "Start with purpose, then process, then product", "Great leaders communicate from the inside out"],
  5: ["Retirement is a worst-case insurance plan, not a goal", "Outsource, automate, and eliminate low-value work", "Design your ideal lifestyle NOW, not at 65"],
  9: ["1% improvement every day compounds to 37x better in a year", "Focus on systems, not goals", "Make good habits obvious, attractive, easy, and satisfying"],
  13: ["The rich buy assets; the poor buy liabilities they think are assets", "Build your asset column until it covers your expenses", "Financial education is more valuable than money itself"],
  17: ["System 1 is fast and intuitive; System 2 is slow and deliberate", "System 1 runs most of your life and is prone to biases", "Knowing when to slow down and engage System 2 is wisdom"],
  21: ["Spend time on a small number of carefully chosen activities", "Miss out on everything else intentionally", "Technology should serve your values, not distract from them"],
  25: ["Incentives are the root of all human behavior", "Conventional wisdom is often wrong — question assumptions", "Data reveals hidden patterns that explain the world"],
  29: ["Remember you will die — let that guide your choices", "Focus only on what you can control", "Strip away the trivial and live with purpose"],
  33: ["Splitting the difference is a coward's move in negotiation", "Use calibrated questions: 'How am I supposed to do that?'", "Mirroring builds rapport; listening is your strongest leverage"],
  37: ["Most problems are interconnected systems, not isolated events", "Fixing symptoms without understanding the system creates worse problems", "See the whole system before acting"],
  45: ["A person's name is the sweetest sound in any language", "Become genuinely interested in others", "Talk about what they want and show them how to get it"],
  49: ["Competition is for losers — monopolies are good", "The best companies create new categories (0 to 1)", "Copying existing ideas (1 to n) creates less value"],
  51: ["Flow is complete absorption in an activity", "Happiness is flow, not passive leisure", "Challenge must match skill for flow to occur"],
  55: ["Deep work is rare and increasingly valuable", "Schedule deep work blocks; eliminate shallow work", "Embrace boredom — concentration is a muscle"],
  59: ["Small changes in choice architecture dramatically change behavior", "Defaults are powerful — design them wisely", "Libertarian paternalism: preserve freedom while nudging good decisions"],
  63: ["Every story follows the hero's journey pattern", "The monomyth is universal across cultures", "Heroes leave home, face trials, and return transformed"],
  67: ["Focus on one thing you can be the best in the world at", "The Hedgehog Concept: passion + economics + excellence", "Great companies know one big thing, not many things"],
  71: ["EQ matters more than IQ for success", "Self-awareness is the foundation of emotional intelligence", "The best leaders are the most attuned to the room"],
  75: ["Every habit follows a cue-routine-reward loop", "Change habits by keeping the cue/reward but changing the routine", "Identify the cue and reward to hack any habit"],
  79: ["Some things get stronger from stress (antifragile)", "Don't just survive uncertainty — profit from it", "Antifragility is the opposite of fragility, not just robustness"],
  83: ["Compound interest is the eighth wonder of the world", "Start investing early — time is the most powerful factor", "The stock market returns ~7% after inflation over the long term"],
  86: ["Capture everything in a trusted system outside your head", "Clarify next actions for every item", "Review your system weekly to stay on top of everything"],
  87: ["What doesn't kill you doesn't always make you stronger", "Don't always trust your feelings", "Life isn't a battle between good and bad people"],
  88: ["Your brain is terrible at predicting what will make you happy", "You adapt to almost everything — good and bad", "The psychological immune system is powerful"],
  89: ["Humans make predictably irrational decisions", "Free is dangerously powerful — people overvalue free things", "We overvalue what we own (endowment effect)"],
  90: ["Meetings are toxic and planning is guessing", "Build half a product, not a half-assed product", "You don't need investors — make something people want"],
  91: ["Sleep is the most effective thing you can do for your brain", "Sleep below 6 hours increases cancer, Alzheimer's, and heart disease risk", "Sleep clears toxins, regulates emotions, and boosts memory"],
  92: ["Cancer is not one disease but hundreds with different genetic drivers", "Progress has been slow but targeted therapies are game-changing", "The war on cancer is a story of hubris, hope, and incremental progress"],
  93: ["Fundamental particles are tiny vibrating strings", "Different vibration patterns = different particles", "The theory requires 10-11 dimensions, most curled up and invisible"],
  94: ["We are a way for the cosmos to know itself", "Every atom in your body was forged in a star", "Scale gives perspective — our problems are small"],
  95: ["Science progresses through revolutions, not steady accumulation", "Paradigm shifts change how we see everything", "New paradigms are often incompatible with old ones"],
  96: ["True expertise requires ~10,000 hours of deliberate practice", "Opportunity and timing matter as much as effort", "No one succeeds alone — culture and context are everything"],
  97: ["Black Swans are rare, high-impact, and predictable only in hindsight", "Most big changes come from unpredictable events", "Build robustness to the unknown rather than trying to predict it"],
  98: ["Doing everything right can still make you fail", "Disruptive technologies start small and irrelevant", "Listen to non-customers, not just existing ones"],
  99: ["Geography, not genes, determines why some societies dominate", "East-West axis allowed crops and livestock to spread", "Domesticated animals gave immunity that conquered the Americas"],
  100: ["Three revolutions shaped humanity: cognitive, agricultural, scientific", "Shared fictions (money, nations, rights) enable large-scale cooperation", "We're the only animal that cooperates flexibly in large numbers"],
  101: ["What's the ONE thing you can do that makes everything else easier?", "Narrow your focus — extraordinary results come from narrowing", "Protect your focus time like a meeting with the CEO"],
  102: ["Overconfidence bias, confirmation bias, and recency bias fool you daily", "You see patterns in random noise", "Admitting you're biased is the first step"],
  103: ["The gene is the unit of heredity — a stretch of DNA coding for proteins", "CRISPR allows us to edit genes and cure diseases", "With this power comes ethical questions about designer babies"],
  104: ["We are survival machines for our genes", "Altruism helps relatives because they share your genes", "Memes are ideas that spread and evolve like genes"],
  105: ["Your attachment style determines relationship patterns", "Anxious and avoidant types attract each other (the trap)", "Understanding your style is the key to better relationships"],
  106: ["Less but better — do the right things, not all things", "If it's not a clear yes, it's a no", "Say no to almost everything"],
  107: ["Make habits so small they're ridiculous", "Celebrate after each tiny habit — emotion wires habits, not repetition", "Anchor new habits to existing ones"],
  108: ["Remarkable products are the only marketing that works", "Safe is risky — boring fails", "Be a purple cow worth noticing and sharing"],
  109: ["The rational rider thinks they're in control but the emotional elephant drives", "To change behavior, speak to the elephant (emotion), not just the rider", "Meditation, gratitude, and connections are proven paths to happiness"],
  110: ["Don't compete in red oceans — create blue oceans of uncontested space", "Value innovation = differentiation + low cost", "Make the competition irrelevant by creating a new category"],
  111: ["The present moment is all you ever have", "Suffering comes from identifying with the never-satisfied voice in your head", "Watch your thoughts without judgment — be present"],
  112: ["Every master follows: apprenticeship, creative-active, mastery", "Find your life's task — that childhood obsession that won't go away", "It takes ~20 years to achieve mastery"],
  113: ["Startups are experiments, not smaller versions of big companies", "Build-Measure-Learn is the engine of growth", "Stop building things nobody wants"],
  114: ["Spacetime curves around mass — that's gravity", "Black holes trap even light", "The universe had a beginning and will have an end"],
  115: ["Don't trust advice from someone without skin in the game", "People who take risks learn from reality", "Symmetry of risk is the foundation of fairness"],
  116: ["What you present first changes how everything else is received", "Pre-suade by setting the frame before delivering your message", "The best persuaders create the right context first"],
  117: ["You are enough — not despite your imperfections but because of them", "Cultivate authenticity, self-compassion, and resilience", "Belonging doesn't require you to change who you are"],
  118: ["HeLa cells were the first immortal human cell line", "Henrietta Lacks' cells transformed medicine without her consent", "A story of progress, injustice, and who owns your body"],
  119: ["How you start your morning sets the tone for your entire day", "The SAVERS routine: Silence, Affirmations, Visualization, Exercise, Reading, Scribing", "Win the morning, win the day"],
  120: ["The key to a good life is caring about fewer things", "You can't be happy all the time — pain is part of growth", "Who you are is defined by what you're willing to struggle for"],
  121: ["Nothing is original — every artist steals well", "Copy your heroes to find your own voice", "Creativity thrives on constraints"],
  122: ["Vulnerability is courage — showing up when you can't control the outcome", "The critic on the sidelines doesn't matter", "It's the person in the arena who dares greatly"],
  123: ["Manage energy, not time — work in 90-minute sprints", "Physical, emotional, mental, and spiritual energy all need management", "Fully disengage between sprints"],
  124: ["If you can't explain it simply, you don't understand it well enough", "Approach everything with relentless curiosity and playfulness", "Never take anything on authority alone"],
  125: ["Effectiveness comes from character, not technique", "Be proactive, begin with the end in mind, put first things first", "Seek to understand before being understood"],
  126: ["Simple, Unexpected, Concrete, Credible, Emotional, Stories", "Urban legends stick because they hit all six", "Your ideas can stick too"],
  127: ["Write for the reader, not yourself", "Cut every word that doesn't do work", "Good writing comes from rewriting"],
  128: ["We change our beliefs to justify our actions (cognitive dissonance)", "Good people do bad things and convince themselves it was right", "Awareness is the only defense against self-justification"],
  129: ["Freedom is being disliked by other people", "Separate your tasks from others' tasks", "The courage to be disliked is the courage to be happy"],
  130: ["Life is difficult — accept this and it becomes less difficult", "Discipline: delayed gratification, responsibility, truth, balance", "Love is the choice to extend yourself for another's growth"],
  131: ["We share 98.4% of our DNA with chimpanzees", "Language, art, agriculture, and genocide make us unique", "Our big brains let us dominate and destroy"],
  132: ["Stand up straight with your shoulders back", "Treat yourself like someone you're responsible for helping", "Meaning comes from taking responsibility beyond yourself"],
  133: ["The question is not whether we live or die — but how we choose to live", "Science gives knowledge; meaning comes from how we use it", "To love is to be willing to be broken by another"],
  134: ["Resistance is the enemy of creativity", "The only way to beat Resistance is to sit down and work", "Professionals show up every day; amateurs wait for inspiration"],
  135: ["The only moment you ever have is now", "Mindfulness is paying attention on purpose without judgment", "Enlightenment is showing up for your own life"],
}

let added = 0
for (const card of data) {
  if (bulletMap[card.id]) {
    card.bullets = bulletMap[card.id]
    added++
  }
}

fs.writeFileSync('src/data/cards.json', JSON.stringify(data, null, 2), 'utf-8')
console.log('Added bullets to', added, 'cards out of', data.length)
