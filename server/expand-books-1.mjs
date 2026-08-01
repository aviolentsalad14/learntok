import fs from 'fs'

const data = JSON.parse(fs.readFileSync('src/data/cards.json', 'utf-8'))

// Expand each book card's bullets to full comprehensive key points
const fullSummaries = {
  1: {
    title: "The 80/20 Principle",
    bullets: [
      "80% of consequences flow from 20% of causes - this imbalance is the universal pattern across business, economics, and life",
      "Examples: 80% of a company's profits come from 20% of its customers; 80% of your frustration comes from 20% of causes; 80% of results come from 20% of effort",
      "The 80/20 principle is not a law but an observation that reappears constantly - it reveals deep imbalance in nearly every system",
      "Most 'efficiency' effort is wasted on the 80% that produces only 20% of results - you should focus on the vital few inputs that generate most outcomes",
      "Identify your highest-leverage 20%: the few clients, products, habits, or activities that drive most of your success, and protect them",
      "Time management shifts: most time wasted is in the unproductive 80% - delegate, eliminate, or automate lower-value work to free up the vital 20%",
      "Apply it to everything: investments (a few assets drive returns), relationships (a few people mean the most), health (a few habits matter most)",
      "The goal is not to do things faster, but to do fewer, higher-impact things - strategic neglect of the low-20% is the core skill"
    ]
  },
  5: {
    title: "The 4-Hour Workweek - Lifestyle Design",
    bullets: [
      "Retirement is a worst-case-scenario insurance plan, not a meaningful goal - design your life for success NOW instead of deferring happiness",
      "The 'New Rich' (NR) define themselves by time and mobility, not money and stuff - they earn more while working less and moving freely",
      "DEAL framework: Definition (define what you want with concrete numbers), Elimination (kill time-wasters), Automation (outsource/automate income), Liberation (disconnect from the office)",
      "Elimination: apply the Pareto principle, use Parkinson's Law (set tight deadlines), and batch low-value tasks - most 'work' is a waste",
      "Automation: build a product that earns while you sleep - use virtual assistants (outsourcing at low cost) for repetitive personal and business tasks",
      "Remove yourself from the equation: systems, not effort, should generate income - set up autopilot income streams",
      "Liberation: negotiate remote work, mini-retirements throughout your career (not one at 65), and test-drive locations before committing",
      "The goal: earn $X per month with Y hours of work from anywhere - a target of financial freedom that funds a lifestyle, not an empire"
    ]
  },
  9: {
    title: "Atomic Habits - 1% Better Every Day",
    bullets: [
      "Habits are the compound interest of self-improvement - a 1% daily improvement compounds to 37x over a year; 1% daily decline leads to near-zero",
      "You don't rise to your goals, you fall to your systems - focus on the process and systems, not outcomes",
      "Identity-based habits: the most powerful change comes from changing your identity ('I am a reader') not just your goals ('I want to read 20 books')",
      "The Habit Loop: cue (trigger) → craving (motivation) → response (action) → reward (benefit) - master each stage",
      "The Four Laws of Behavior Change: Make it OBVIOUS (cue), ATTRACTIVE (craving), EASY (response), SATISFYING (reward)",
      "Invert them to break bad habits: make it invisible, unattractive, difficult, and unsatisfying",
      "Habit stacking: pair a new habit with an existing one ('After I pour my coffee, I will write one sentence')",
      "The 2-minute rule: make the start of any habit take under 2 minutes so you begin it, then momentum carries you forward"
    ]
  },
  13: {
    title: "Rich Dad Poor Dad - Assets vs Liabilities",
    bullets: [
      "The rich buy assets; the poor and middle class buy liabilities they THINK are assets - this single distinction is the core of wealth building",
      "Assets: things that put money in your pocket (dividend stocks, rental property, businesses, royalties); Liabilities: things that take money out (mortgage, car payments, credit card debt)",
      "Your house is usually a liability, not an asset - it takes money out every month instead of putting money in",
      "Financial literacy is the most important skill you're never taught in school - understanding how money works is a superpower",
      "The rich don't work for money - they make money work for them through investments and ownership, not labor",
      "Build your asset column until the passive income it generates covers your expenses - then you're financially free",
      "Mindset shift: instead of 'I can't afford it' (which closes the mind), ask 'How can I afford it?' (which opens it to possibilities)",
      "Use debt wisely: leverage other people's money to buy income-generating assets, rather than using debt for consumption"
    ]
  },
  17: {
    title: "Thinking, Fast and Slow",
    bullets: [
      "You have two thinking systems: System 1 (fast, automatic, intuitive, emotional) and System 2 (slow, deliberate, logical, effortful)",
      "System 1 runs your life most of the time - it's efficient but prone to systematic biases; System 2 is lazy and often accepts System 1's output without checking",
      "Anchoring effect: you over-rely on the first number you see when making decisions (e.g., a high list price makes subsequent prices seem reasonable)",
      "Availability heuristic: you overestimate the likelihood of events that are memorable or recent (plane crashes, lottery wins) even when they're rare",
      "Loss aversion: losses hurt about twice as much as equivalent gains feel good - this drives risk-averse behavior",
      "Confirmation bias: you seek and believe information that confirms what you already believe, ignoring contradictory evidence",
      "Overconfidence: people are systematically overconfident in their judgments, predictions, and knowledge",
      "Knowing when to slow down and engage System 2 is wisdom - recognize the situations (big decisions, emotional moments) when fast thinking will mislead you"
    ]
  },
  21: {
    title: "Digital Minimalism",
    bullets: [
      "Digital minimalism is a philosophy of technology use: spend your time and attention on a small number of carefully chosen activities that strongly serve your values",
      "You start by deliberately missing out - remove the apps and tools that don't serve your core values even if you're afraid of missing something",
      "The digital attention economy is engineered to keep you hooked - social media, news feeds, and apps are designed, not neutral; your attention is the product",
      "Solitude deprivation: constant connection to a digital device destroys your ability to think independently - you need regular time with just your own thoughts",
      "Don't just detox and reinstall everything - do a 30-day digital declutter: remove optional technology, then reintroduce only what genuinely adds value",
      "Spend your free time on high-value leisure: deep hobbies, physical exercise, face-to-face socializing, and creative projects rather than passive consumption",
      "Attention is a superpower in a distraction-addicted world - the ability to focus for long periods is increasingly rare and valuable",
      "The phone itself isn't the enemy - the problem is thoughtless, compulsive use; intentionality is the fix"
    ]
  },
  25: {
    title: "Freakonomics - Incentives Rule the World",
    bullets: [
      "Incentives are the root of all human behavior - people respond to incentives (economic, social, and moral) even when they don't realize it",
      "Conventional wisdom is often wrong - question assumptions; the world is full of hidden, counterintuitive truths",
      "Sumo wrestlers cheat - even in the 'honorable' sport of sumo, wrestlers who have secured their rank have been caught throwing matches for mutual benefit",
      "Real estate agents don't sell your house for the best price - they sell it quickly (for a smaller commission advantage to themselves) because the marginal gain isn't worth their effort",
      "The Ku Klux Klan was destroyed not by police but by a children's comic book that revealed their secret rituals and coded language, exposing their mystery",
      "Abortion legalization in the 1970s may explain the 1990s crime drop - unwanted children (statistically more likely to become criminals) were never born",
      "Information asymmetry: people with information exploit those without it (e.g., car mechanics, used-car salesmen, mortgage brokers)",
      "Follow the incentives and you'll understand human behavior - but be careful: incentives can be perverse, leading people to unintended actions"
    ]
  },
  29: {
    title: "Meditations - Memento Mori",
    bullets: [
      "Marcus Aurelius wrote his meditations as private notes to himself - a handbook for living with virtue, clarity, and tranquility as a Roman emperor",
      "Memento mori - 'remember you will die' - not as morbidness but as a compass that strips away the trivial and forces you to focus on what matters",
      "The dichotomy of control: focus only on what you can control (your judgments, actions, reactions) and be indifferent to what you can't (others' opinions, wealth, health, reputation)",
      "You have power over your mind, not outside events - realize this and you will find strength; nothing can harm you unless you let it",
      "The obstacle is the way: what stands in the way becomes the way - turn obstacles into opportunities for virtue and growth",
      "Live in the present moment - the past is gone, the future is uncertain; the only time you have is now, so don't waste it",
      "Practice negative visualization: premeditate on losses (death, change, loss of possessions) to appreciate what you have and reduce fear",
      "Character over reputation: be a good person regardless of what others think - your inner virtue is the only thing you fully control"
    ]
  },
  33: {
    title: "Never Split the Difference",
    bullets: [
      "Negotiation is not about logic or winning arguments - it's about understanding emotions, fears, and the other side's deepest needs",
      "Splitting the difference is a coward's move that leaves both sides unhappy - aim for a real deal that satisfies both parties' core interests",
      "Mirroring: repeat the last 2-3 words of what the other person says - this builds rapport without sounding robotic",
      "Labeled emotions: name the other side's feelings ('It sounds like you're worried about the timeline') to defuse them and build trust",
      "Calibrated questions: use open-ended questions starting with 'How' and 'What' ('How am I supposed to do that?') to make the other side solve your problems",
      "Get to 'No' - people feel safer and more in control when they can say no; don't push for a yes early (a false yes is worse than an honest no)",
      "The Accusation Audit: list every negative thing they could say about you and address it first - this neutralizes their ammunition",
      "Silence is powerful: after asking a key question or making a statement, shut up and let them fill the silence - whoever talks first loses ground"
    ]
  },
  37: {
    title: "The Fifth Discipline - Systems Thinking",
    bullets: [
      "The Fifth Discipline is systems thinking - seeing the whole system of interconnected parts rather than isolated events",
      "Most problems are symptoms of deeper system dynamics - fixing the symptom without understanding the system creates worse problems later",
      "Feedback loops (both reinforcing and balancing) drive behavior in every system - find the loops, don't just react to events",
      "The Beer Game: a classic simulation showing how small disruptions cascade through a supply chain, causing wild swings - because each player optimizes locally instead of seeing the whole system",
      "Common traps: fixing symptoms (treating the visible problem, not the root cause), shifting the burden (short-term fixes that make long-term worse), and the tragedy of the commons",
      "Leverage points: small, well-placed changes in a system can produce large, lasting results - find where the system is most responsive",
      "Team learning and shared vision matter: a team of smart individuals still fails without a shared mental model and aligned purpose",
      "Personal mastery (continuous improvement) + mental models (examining assumptions) + shared vision + team learning + systems thinking = the learning organization"
    ]
  },
  45: {
    title: "How to Win Friends - The Shortcut",
    bullets: [
      "A person's name is the sweetest sound in any language - use it; remembering and using names makes people feel valued",
      "Become genuinely interested in other people - talk about what they want, and show them how to get it; people are interested in themselves first",
      "The fastest way to influence anyone is to make them feel important - do it sincerely; people crave appreciation and recognition",
      "Don't criticize, condemn, or complain - criticism rarely changes people and always creates resentment; understand instead of attacking",
      "Smile - a genuine smile says 'I like you, you make me happy' (it also affects how you feel about yourself)",
      "Be a good listener - encourage others to talk about themselves; ask questions they'll enjoy answering",
      "Make the other person feel that the idea is theirs - people defend ideas they own; let them take credit",
      "Dramatize your point and challenge them - appeal to noble motives, praise every improvement even the smallest, and arouse a keen desire in them to succeed"
    ]
  },
  49: {
    title: "Zero to One - Monopoly is Good",
    bullets: [
      "Progress comes in two directions: horizontal (1 to n - copying what works, globalization) and vertical (0 to 1 - creating something new, technology)",
      "Unlike in finance, a company's future value depends on creating a monopoly - competition destroys profits, monopoly creates them",
      "Contrary to popular belief, competition is not healthy - it's stressful, destructive, and a sign of a lack of original thinking; 'competition is for losers'",
      "Every great business is a monopoly in disguise - it does something so uniquely well that no one else can compete (Google for search, Apple for premium devices)",
      "The best companies create entirely new categories (0 to 1) rather than copy existing ones (1 to n) - find the unexpected, the unserved niche",
      "Characteristics of a great monopoly: proprietary technology (10x better), network effects (more users = more value), economies of scale, and a strong brand",
      "Technology companies must start small and own a tiny niche, then expand - don't go after the whole market at once",
      "The future is not predetermined - it's created by bold vision; the most important question to ask: what important truth do very few people agree with you on?"
    ]
  },
}

let updated = 0
for (const card of data) {
  if (fullSummaries[card.id]) {
    card.bullets = fullSummaries[card.id].bullets
    card.title = fullSummaries[card.id].title || card.title
    updated++
  }
}

fs.writeFileSync('src/data/cards.json', JSON.stringify(data, null, 2), 'utf-8')
console.log('Expanded', updated, 'book cards to full summaries')
