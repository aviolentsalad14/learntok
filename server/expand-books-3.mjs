import fs from 'fs'

const data = JSON.parse(fs.readFileSync('src/data/cards.json', 'utf-8'))

const fullSummaries = {
  86: {
    bullets: [
      "The Mind Like Water principle: your mind should react to tasks as water reacts to a stimulus - completely, appropriately, and then return to calm",
      "Capture everything: get every commitment, task, and idea out of your head and into a trusted external system (lists, apps, tools) - your brain is for thinking, not storing",
      "The rule: if it takes under 2 minutes, do it immediately - don't defer small tasks that are faster to complete than to delegate or schedule",
      "Full engagement vs empty promises: everything must be either acted on, delegated, or put into a tracking system - no open loops (unresolved commitments)",
      "Decide the NEXT ACTION for everything - 'next physical action' is the key to making projects move forward",
      "Organize by context: group tasks by where/with what you'll do them (calls, errands, at computer, errands) for efficiency",
      "Weekly review: take a block of time weekly to empty your inbox, review your lists, clear your head, and update priorities",
      "The goal is to be 'in the zone' - a trusted system outside your head gives you the clarity and mental space to focus on the present"
    ]
  },
  87: {
    bullets: [
      "Three 'Great Untruths' have spread through modern culture and education: 1) What doesn't kill you makes you weaker (vs stronger), 2) Always trust your feelings (vs question them), 3) Life is a battle between good and bad people (vs good/evil in everyone)",
      "The untruth of frailness: exposing kids to safe challenges builds resilience; over-protection (safetyism) makes them fragile",
      "The untruth of emotional reasoning: your feelings are not always accurate guides - learning to question them builds emotional maturity",
      "The untruth of us-vs-them: demonizing those with different views destroys healthy debate and relationships - almost everyone sees themselves as the good guy",
      "Safetyism: the belief that you must be protected from anything that makes you uncomfortable - this has replaced resilience with avoidance",
      "Cognitive Behavioral Therapy (CBT) is the antidote: challenge irrational thoughts rather than avoiding triggering situations",
      "The evidence: college students increasingly report anxiety and depression linked to smartphone use, social media, and overprotective parenting",
      "Building antifragility (mental toughness): prepare children - and yourself - for life's challenges by facing reasonable adversity and developing coping skills"
    ]
  },
  88: {
    bullets: [
      "Your brain is terrible at predicting what will make you happy - humans are systematically wrong about the impact of future events on their well-being",
      "Winning the lottery won't make you permanently happier - within ~1 year, lottery winners return to their baseline happiness level (and sometimes lower)",
      "Paralysis won't make you permanently miserable - people who lose the ability to walk often return to near-baseline happiness within a year (much faster than expected)",
      "The psychological immune system: you unconsciously rationalize and reframe events to protect your happiness - it's powerful but invisible, so you don't anticipate its effect",
      "Impact bias: you overestimate the intensity AND duration of emotions from both good and bad events - the future won't feel as good or bad as you think",
      "Make big decisions wisely: because your predictions are faulty, commit to things that are internally consistent (values you hold) and reversible when possible",
      "Emotion is a lens, not reality: your current mood colors how you imagine the future - a bad mood makes future suffering seem worse than it will be",
      "Truly enduring happiness comes mostly from stable factors (relationships, meaningful work, health) - not from single dramatic events"
    ]
  },
  89: {
    bullets: [
      "Humans are NOT rational decision-makers - we make the same mistakes repeatedly, and systematically (hence 'predictably' irrational)",
      "The power of FREE: free is dangerously powerful - people grab free stuff even when it's a worse deal (e.g., free shipping beats a better-priced item with shipping cost)",
      "The endowment effect: we overvalue what we own - once you own something, you value it more than an identical item you don't own",
      "Relative comparisons: we don't evaluate things in absolute terms but relative to anchors and comparisons (a $1 beer seems cheap at a resort, expensive at a discount store)",
      "Anchoring: the first number you see shapes all subsequent judgments - arbitrary anchors have real effects (e.g., a high initial price makes later prices seem reasonable)",
      "The decoy effect: adding an option that's clearly worse makes the middle option look better - companies use this to steer you to what they want",
      "Honesty and cheating: people cheat a little (not a lot) when given the chance, but reminding them of ethics (honor codes) reduces cheating dramatically",
      "Sleep, emotion, and scarcity distort decisions - when you're tired, emotional, or feeling poor, you make worse choices; build awareness and systems to compensate"
    ]
  },
  90: {
    bullets: [
      "Meetings are toxic and wasted time - most meetings are status updates that could be emails, and they derail deep work",
      "Workaholism is a waste - working 80 hours a week isn't noble, it's inefficient; the goal is smart work, not more hours",
      "Planning is guessing - long-term plans are fiction, especially for startups; adapt to reality instead of following a rigid blueprint",
      "Build half a product, not a half-assed product - cut non-essential features, but make what remains exceptional",
      "Say no by default - every 'yes' you say is a 'no' to something else; be selective and decline most requests",
      "You don't need a business plan, an office, or investors to start - you need to make something people want (a good product/services is the foundation)",
      "Ignore competition - focus on being better at what YOU do, not on what rivals are doing; competition is a distraction",
      "Interruption is the enemy of productivity - office culture, email alerts, and open doors destroy focused work; protect your concentration"
    ]
  },
  91: {
    bullets: [
      "Sleep is the single most effective thing you can do to reset your brain and body - more powerful than any drug or technique for restoring health",
      "Sleep serves multiple critical functions: boosts memory (consolidation), regulates emotions, clears brain toxins, and strengthens the immune system",
      "The glymphatic system: during deep sleep, your brain flushes out metabolic waste, including beta-amyloid (the protein linked to Alzheimer's)",
      "Sleep below 6 hours is dangerous: it increases your risk of cancer, Alzheimer's, heart disease, stroke, and diabetes - chronic short sleep is deeply harmful",
      "The sleep debt is real: you can't 'make up' lost sleep on weekends - chronic sleep loss accumulates and damages your body",
      "Caffeine and alcohol disrupt sleep quality: caffeine blocks the sleep chemical adenosine; alcohol fragments sleep even if you fall asleep faster",
      "Your circadian rhythm is regulated by light - morning sunlight (timed exposure) and darkness at night are the strongest signals for proper sleep",
      "Recommended sleep: 7-9 hours for adults; regularity matters as much as quantity, so keep a consistent schedule"
    ]
  },
  92: {
    bullets: [
      "Cancer is not one disease - it's hundreds of distinct diseases, each with different genetic drivers and behaviors (this is why one 'cure' is impossible)",
      "Cancer arises from mutations in genes that control cell growth and division - it's fundamentally a disease of the genome (damaged DNA)",
      "The war on cancer was declared in 1971 ('War on Cancer' Act) but progress was slow - we've spent decades fighting it with poison (chemo), knives (surgery), and radiation",
      "Chemotherapy kills rapidly dividing cells - but it also harms healthy cells (hair, gut, immune), which is why it has such brutal side effects",
      "Targeted therapies and immunotherapies are the game changers: they attack specific cancer mutations or harness the immune system (checkpoint inhibitors) against tumors",
      "Cancer is a story of hubris and hope - breakthroughs came from understanding genetics, not just brute-force drugs",
      "Prevention matters: many cancers are linked to preventable factors (smoking, alcohol, obesity, HPV, hepatitis) - lifestyle choices reduce risk",
      "Screening saves lives: catching cancer early (mammograms, colonoscopy, HPV tests) dramatically improves survival because early-stage cancer is treatable"
    ]
  },
  93: {
    bullets: [
      "String theory proposes that the fundamental building blocks of the universe are not point particles but tiny, vibrating one-dimensional 'strings'",
      "Different vibration patterns of strings produce different particles - like how different notes on a guitar string produce different sounds (a particle's properties come from its vibration)",
      "The theory elegantly unifies quantum mechanics and general relativity - it's the leading candidate for a 'theory of everything'",
      "It predicts extra dimensions: 10 or 11 dimensions (not our familiar 4), most of which are 'curled up' at a microscopic scale we can't detect",
      "Many possible 'vacua' (configurations of the theory) exist - the 'landscape problem' means string theory may predict too many possible universes, making it hard to test",
      "Supersymmetry, a key prediction of string theory, has NOT been found at the LHC - this has cast doubt on testable versions of the theory",
      "The theory is mathematically elegant but remains unproven - there's currently no experimental evidence directly confirming strings exist",
      "Even if unproven, string theory has generated deep insights into quantum gravity, black holes, and the nature of spacetime"
    ]
  },
  94: {
    bullets: [
      "The cosmos is all that is or ever was or ever will be - Carl Sagan's famous opening frames our place in a vast universe",
      "We are a way for the cosmos to know itself - human consciousness is the universe observing itself",
      "Every atom in your body was forged in a star - the carbon, oxygen, calcium, and iron in your body were synthesized in stellar interiors and supernovae, billions of years ago",
      "The universe is unimaginably vast - about 100 billion galaxies, each containing 100-400 billion stars (roughly 10^22 stars total)",
      "Scale gives perspective: from the cosmic perspective, our problems seem small, our differences trivial, and our connection to each other profound",
      "Cosmic time is deep: the universe is 13.8 billion years old, and human civilization is a tiny fraction of a blink in that timeline",
      "Sagan's 'Pale Blue Dot' perspective: Earth is a mote of dust in a sunbeam - yet it's everything we've ever known, so we must cherish it",
      "The universe is beautiful and worth exploring - Sagan's core message is one of wonder, humility, and the value of science"
    ]
  },
  95: {
    bullets: [
      "Science doesn't progress by smoothly accumulating facts - it progresses through revolutionary 'paradigm shifts'",
      "A paradigm is the framework of assumptions, methods, and beliefs within which scientists work (e.g., Ptolemaic geocentric model, Newtonian physics)",
      "Normal science: scientists work within a paradigm, solving puzzles and confirming the existing framework without questioning its foundations",
      "Anomalies pile up: over time, observations that don't fit the paradigm accumulate, creating a growing sense of crisis",
      "Paradigm shift: during crisis, a new framework emerges (Copernicus, Darwin, Einstein) that reinterprets everything more simply or completely",
      "New paradigms are often 'incommensurable' with old ones - they define terms and questions differently, making the two worldviews hard to directly compare",
      "Science is shaped by social and psychological factors too - scientists are influenced by community norms and resist paradigm changes (old guard vs young Turks)",
      "The takeaway: what we 'know' is provisional - today's truth is a paradigm that could be replaced by a better one tomorrow"
    ]
  },
  96: {
    bullets: [
      "No one succeeds alone - outliers are shaped by extraordinary opportunity and cultural legacy as much as talent and effort",
      "The 10,000-hour rule: true expertise in almost any field requires roughly 10,000 hours of deliberate practice (Malcolm Gladwell's famous claim)",
      "Opportunity matters enormously: Bill Gates got 10,000 hours of programming because his elite school had a computer terminal in 1968 - a rare opportunity of time and place",
      "Timing and birth year matter: being born at the right time (e.g., 1955 for the PC revolution, 1830s for industrialization wealth) gives an outsized advantage",
      "The Beatles practiced 8+ hours a day in Hamburg clubs before their breakthrough - the 10,000 hours came before the genius was apparent",
      "Cultural legacy: some cultures (like Asian 'rice paddy' cultures) value sustained effort, giving an advantage in math and persistence",
      "The 10,000-hour rule is an oversimplification - deliberate (focused, uncomfortable) practice matters more than just hours, and natural talent also plays a role",
      "The lesson: look at your environment and opportunities, not just your own effort - success is a combination of preparation, opportunity, and timing"
    ]
  },
  97: {
    bullets: [
      "A Black Swan is an event that is: rare (an outlier), has a massive impact, and seems predictable only in hindsight (you'll find people who 'knew it was coming')",
      "Examples: 9/11, the 2008 financial crisis, the rise of the internet, the COVID-19 pandemic - all were (at the time) unpredictable, high-impact events",
      "Most of history's biggest changes come from Black Swans, not from slow gradual trends - major progress is driven by rare catastrophic or transformative events",
      "The problem of hindsight: after a Black Swan occurs, people construct a narrative that makes it seem inevitable - this is dangerous because it destroys genuine prediction",
      "We're bad at predicting the future - especially the rare events that matter most - so stop pretending you can forecast; build robustness instead",
      "The 'gray swan' concept (from later work): events that are predictable in their category but not their timing (a catastrophic earthquake, market crash)",
      "Strategies: be antifragile - keep cash reserves, diversify, and position yourself to benefit from volatility rather than being destroyed by it",
      "Don't confuse expertise in a field with expertise in prediction - experts are often WORSE at predicting Black Swans because they're overconfident in their models"
    ]
  },
  98: {
    bullets: [
      "The Innovator's Dilemma: successful companies fail not because they do things wrong, but because they do everything right - while a disruptive technology emerges",
      "The trap of listening to customers: great companies optimize for their best customers, who don't want disruptive new technologies yet - so they ignore them",
      "Disruptive technology starts small, cheap, and 'good enough' for an underserved niche - it's initially ignored because it's less capable in ways that matter to mainstream customers",
      "Original disruption example: the personal computer (simple, cheap) disrupted the mainframe/minicomputer industry (which had ignored PCs as toys)",
      "Later examples: digital cameras disrupted film; smartphones disrupted feature phones; streaming disrupted physical media",
      "By the time the disruptive technology is good enough for mainstream customers, the incumbents have lost the market (they couldn't easily compete with lower cost structures)",
      "The dilemma: investing in the disruptive technology undermines your current profitable business model - so rational managers resist it, to their own detriment",
      "The lesson for companies: separate the disruptive business from the mainstream one, and be willing to cannibalize your own products before a competitor does"
    ]
  },
  99: {
    bullets: [
      "Why did Europeans conquer the Americas, and not Native Americans conquer Europe? - Not because of racial superiority but because of geography and the environment",
      "The east-west axis of Eurasia: crops and domesticated animals spread easily along similar climates (east-west), giving Eurasians a huge head start over Africa and the Americas (north-south)",
      "Farming → surplus → to cities → writing, technology, armies, and disease - food production is the foundation of civilization",
      "Domesticated animals (cows, horses, pigs, sheep) provided meat, milk, labor, and - crucially - immunity to livestock-borne diseases",
      "Disease was the killer: Europeans brought smallpox and other diseases to which Native Americans had no immunity, killing up to 95% of the population - disease, not weapons, won the conquest",
      "Geographic head start: Eurasia had more domesticable crops and animals (wheat, barley, cattle, horses) than the Americas (which had corn, but few domesticable mammals)",
      "Technological advantage: guns, steel swords, ships, and horses - all products of a longer agricultural and technological head start",
      "The takeaway: it's geography and environmental factors, NOT innate intelligence or 'genes,' that explain the shape of human societies and history"
    ]
  },
  100: {
    bullets: [
      "Homo sapiens conquered the world through three revolutions: the Cognitive Revolution (~70k years ago), Agricultural Revolution (~12k years ago), and Scientific Revolution (~500 years ago)",
      "The Cognitive Revolution: humans gained the ability to speak about things that DON'T exist (fiction, myth) - this allowed flexible, large-scale cooperation among strangers",
      "Shared fictions are the key: nations, money, companies, religions, and human rights are all 'imagined orders' - ideas that exist only because we collectively believe in them",
      "The Agricultural Revolution: a 'fraud' for many - it led to denser populations and 'civilization' but also to harder lives, inequality, and disease (hunter-gatherers had more leisure)",
      "History is the story of ever-larger imagined orders - from tribes to empires to global networks, cooperation scales as our shared fictions grow",
      "The Scientific Revolution: humanity admitted its ignorance and invested in discovery - science (admitting we don't know + testing) unleashed unprecedented progress",
      "We're the only animal that cooperates flexibly in large numbers - chimps cooperate in small troops, but only humans can organize millions around a shared belief (a nation, a corporation, a religion)",
      "The power of stories: whoever tells the best story shapes society, because humans are the storytelling animal (money is just a story we all agree on)"
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
console.log('Expanded', updated, 'cards (batch 3)')
