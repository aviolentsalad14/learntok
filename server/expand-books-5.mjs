import fs from 'fs'

const data = JSON.parse(fs.readFileSync('src/data/cards.json', 'utf-8'))

const fullSummaries = {
  41: {
    bullets: [
      "Six 'weapons of influence' drive human compliance: reciprocity, scarcity, authority, consistency, liking, and social proof - understand them to defend against them",
      "Reciprocity: people feel obligated to return favors/gifts - give first and others feel a pull to give back (even if the initial gift was unsolicited)",
      "Scarcity: things appear more valuable when they're limited or about to run out - 'limited time,' 'only 3 left' trigger fear of missing out",
      "Authority: people defer to perceived experts/authorities (titles, uniforms, credentials) - we trust authority often without questioning",
      "Consistency/commitment: once people commit to something (even small), they feel pressured to stay consistent with it - small 'yes' leads to bigger 'yes'",
      "Liking: we're more likely to say yes to people we like - similarity, compliments, and shared interests increase liking (and compliance)",
      "Social proof: in uncertain situations, we look to others to decide what's correct - 'everyone's doing it' is a powerful motivator",
      "Defense: recognize when these triggers are being (unfairly) used, and refuse compliance when the influence is disingenuous or against your interests"
    ]
  },
  116: {
    bullets: [
      "The best persuaders don't just deliver a great message - they create the right context BEFORE delivering it; the frame matters as much as the content",
      "Pre-suasion: what you present first changes how everything you present afterward is received - the initial frame sets the lens",
      "The opening move matters: showing an image, a symbol, or posing a question BEFORE your pitch primes the audience's mind (e.g., showing a fish makes people think about 'big' more than a bird)",
      "Attention anchoring: where people direct their attention first influences their later decisions (e.g., housing agents who show high-end homes first make the target home seem cheap)",
      "Environment cues: physical stimuli (images, smells, power symbols like a bill of authority) can pre-suade people before they even hear your argument",
      "Primes and the 'mere exposure' effect: prior exposure to related ideas makes them feel more familiar, true, and favorable later",
      "Segmentation and labeling: the way you frame a request ('would you be willing to help?') before asking increases agreement",
      "The lesson for persuaders: don't just focus on the message - carefully design the moment, environment, and initial cues that precede it"
    ]
  },
  117: {
    bullets: [
      "Wholehearted living is about engaging in your life from a place of worthiness - believing you are enough",
      "You are enough - not despite your imperfections but because of them; worthiness is inherent, not earned through achievement",
      "Cultivate authenticity - being real and vulnerable is the path to connection; showing up as your true self attracts genuine relationships",
      "Practice self-compassion - treat yourself with the kindness you show others; self-criticism and perfectionism are toxic",
      "Build resilience - recover from setbacks by staying connected and leaning into vulnerability rather than disconnecting",
      "Let go of perfectionism - it's a shield against failure that actually prevents growth and joy",
      "Let go of numbing - don't dull your feelings with food, alcohol, or busyness; feel fully to live fully",
      "Belonging doesn't require changing who you are - it requires being who you are; you belong when you stop trying to be someone you're not"
    ]
  },
  118: {
    bullets: [
      "HeLa cells - taken from Henrietta Lacks in 1951 without her knowledge or consent - became the first immortal human cell line",
      "Henrietta Lacks was a Black woman being treated for cervical cancer at Johns Hopkins who died in 1951 - her cells (HeLa) kept dividing, surviving outside the body",
      "HeLa cells became the workhorse of modern medicine: used to develop the polio vaccine, study cancer, map genes, clone cells, and develop COVID vaccines",
      "Trillions of HeLa cells exist today, grown from a tumor that killed one woman - they've been bought and sold, and shipped around the world",
      "Henrietta's family got nothing - for decades they didn't even know their mother's cells were being used commercially and scientifically",
      "The story raises profound ethics: who owns your body's cells? Should consent be required for research? Should commercial profits be shared?",
      "It's a story of medical progress AND racial injustice - Black patients were historically exploited in medical research (like the infamous Tuskegee syphilis study)",
      "The Lacks family's fight for recognition and consent helped change informed-consent practices in medicine and biomedical research"
    ]
  },
  119: {
    bullets: [
      "How you start your morning sets the tone for your entire day - those first minutes shape your mindset, mood, and productivity",
      "The SAVERS routine (from The Miracle Morning): Silence, Affirmations, Visualization, Exercise, Reading, Scribing (journaling)",
      "S — Silence: meditation, prayer, or quiet reflection to center yourself before the noise of the day",
      "A — Affirmations: repeat positive, specific statements about who you are and what you'll achieve (they reprogram your self-image)",
      "V — Visualization: vividly imagine achieving your goals and performing at your best - what it looks, feels, and sounds like",
      "E — Exercise: even 10-20 minutes boosts energy, mood, and brain function for the whole day",
      "R — Reading: read something inspiring, educational, or growth-oriented (not news) to feed your mind",
      "S — Scribing: journal your goals, gratitude, or thoughts - it clears your mind and sets intention. Win the morning, win the day"
    ]
  },
  120: {
    bullets: [
      "The key to a good life is not giving a f*ck about more things - it's giving a f*ck about fewer things, and only the ones that truly matter",
      "You can't be happy all the time - chasing constant happiness is a trap; embrace that pain, uncertainty, and struggle are part of a meaningful life",
      "Choose your struggles wisely: everyone struggles with something - the quality of your life depends on WHAT you choose to struggle for",
      "Who you are is defined by what you're willing to struggle for - your values are revealed by what you endure, not what you enjoy",
      "The 'feedback loop from hell': trying to control your thoughts/feelings makes them worse - accept negative emotions instead of fighting them",
      "Don't seek constant positivity - the 'toxic positivity' culture denies real pain; legitimate suffering is part of life",
      "Self-improvement isn't about being 'happy' - it's about taking responsibility and becoming a better person through facing challenges",
      "Take responsibility: you're responsible for your suffering (as well as your joy) - owning this gives you power to change"
    ]
  },
  121: {
    bullets: [
      "Nothing is original - every artist steals; the good ones steal well, the bad ones steal poorly",
      "Steal from your heroes: study the work of artists you admire, copy it, and through the process you'll discover your own voice",
      "Your style finds you through the work - you don't invent a style; it emerges as you produce, adapt, and internalize what you love",
      "Be boring (have a day job) so you can be creative on your own terms - financial stability frees you from creating for money alone",
      "Creativity is subtraction - constraints and limitations breed creativity, not bounds; editing is a creative act",
      "Cliché: 'find your style' - reality: your style emerges from doing the work, absorbing influences, and making things your own",
      "Keep a 'swipe file' of things you love - collect inspiration; your originality comes from combining influences in new ways",
      "Don't wait for permission or the perfect moment - start, ship, share; the work itself is the path"
    ]
  },
  122: {
    bullets: [
      "Vulnerability is not winning or losing - it's having the courage to show up and be seen when you can't control the outcome",
      "Vulnerability is the birthplace of connection, belonging, joy, courage, creativity, and love - you can't have real connection without it",
      "The critic on the sidelines doesn't matter - the sneering critic isn't the one taking risks; the person in the arena is",
      "The man/woman in the arena (from Teddy Roosevelt's speech, which Brené cites): whose face is marred by dust, sweat, and blood, who strives valiantly - that's where living happens",
      "You cannot selectively numb emotion - numbing the painful feelings (shame, fear, grief) also numbs the joyful ones (love, gratitude, joy)",
      "Shame needs three things to grow: secrecy, silence, and judgment - the antidote is empathy, telling your story, and breaking the silence",
      "Wholehearted people engage fully - they believe they're worthy of love and belonging, and they show up without armor",
      "Daring greatly means choosing courage over comfort - facing uncertainty, exposure, and risk for the sake of connection and growth"
    ]
  },
  123: {
    bullets: [
      "Manage your energy, not your time - time is finite, but energy (physical, emotional, mental, spiritual) is renewable if managed well",
      "The human body operates in ultradian rhythms - ~90-120 minute cycles; work in focused sprints and fully disengage between them",
      "Physical energy is the foundation - it comes from eating well, sleeping 7-8 hours, and exercising regularly; without it, everything else suffers",
      "Emotional energy comes from positive relationships, gratitude, and managing negative emotions - emotional recovery restores you",
      "Mental energy comes from focus and cognitive challenge - protect it by focusing on one thing at a time and resisting multitasking",
      "Spiritual energy comes from purpose and values - connecting your work to a meaningful 'why' is energizing and sustaining",
      "The energy-balance measure: what restores energy (breaks, meals, movement, connection) vs what drains it (stress, poor sleep, overwork)",
      "Think of energy like a battery - you must recharge regularly (sprint, recover, sprint, recover) or you'll burn out"
    ]
  },
  124: {
    bullets: [
      "Richard Feynman approached physics - and life - with relentless curiosity, playfulness, and joy; science was fun for him",
      "If you can't explain it simply, you don't understand it well enough - the Feynman technique: explain a concept plainly to reveal your gaps",
      "He refused to take anything on authority - he worked things out from first principles and demanded to understand, not just accept",
      "He was a polymath: he learned to pick locks, play samba drums, sketch, and crack safes at Los Alamos - curiosity extended beyond physics",
      "His joy in discovery is contagious - he described the 'pleasure of finding things out' as deeply rewarding in itself",
      "Finding a thing out is about being alert and noticing - wonder and observation are the roots of discovery",
      "He valued integrity and 'bullsh*t detection' - he was ruthless about honesty in science and questioned everything, including himself",
      "The lesson: approach life with childlike curiosity, and you'll keep discovering - and enjoying - forever"
    ]
  },
  125: {
    bullets: [
      "Effectiveness comes from character, not technique - the 7 habits are principles for building a character based on effectiveness",
      "Private victory before public victory - you must master yourself (habits 1-3) before you can effectively lead others (habits 4-6)",
      "Habit 1 - Be Proactive: between stimulus and response you have freedom to choose; focus on your circle of influence, not your circle of concern",
      "Habit 2 - Begin with the End in Mind: define your values and mission; mentally create what you want before you physically create it",
      "Habit 3 - Put First Things First: prioritize what's important (quadrant II: important but not urgent) over what's merely urgent",
      "Habit 4 - Think Win-Win: seek mutual benefit, not win-lose or lose-win; an abundance mentality assumes there's enough for everyone",
      "Habit 5 - Seek First to Understand, Then to Be Understood: practice empathic listening before giving your own opinion",
      "Habit 6 - Synergize: 1+1=3 - creative cooperation produces more than individuals alone. Habit 7 - Sharpen the Saw: continuously renew yourself (physical, mental, emotional, spiritual)"
    ]
  },
  126: {
    bullets: [
      "Why do some ideas survive and others die? The SUCCESs framework explains what makes ideas 'sticky' (memorable and influential)",
      "S — Simple: find the core of the idea; strip it to its essence ('a good idea is a simple idea' - Southwest 'the low-cost airline')",
      "U — Unexpected: grab attention by surprising people - break their expectations to make them curious",
      "C — Concrete: make ideas tangible and specific (not abstract) - 'a jelly donut a day' beats 'snack portion control'",
      "C — Credible: give believable proof (authority, statistics, vivid details, or a believable source)",
      "E — Emotional: make people care by appealing to their identity and self-interest - 'don't be a sucker, wear your seatbelt'",
      "S — Stories: drive action with stories (people remember stories and are moved by them to act)",
      "Urban legends stick because they hit all six dimensions - your ideas can stick too if you apply SUCCESs"
    ]
  },
  127: {
    bullets: [
      "Writing is hard because rewriting is hard - the secret of good writing is rewriting; your first draft is just the raw material",
      "The secret is to cut every word that doesn't do work - simplify, strip each sentence to its cleanest components",
      "Write for the reader, not yourself - the reader's needs and attention span (about 30 seconds) come first, not your ego",
      "The reader doesn't have to read - respect their time; if your writing is unclear, they'll simply stop",
      "Clarity over cleverness - clear writing is the goal; your style emerges from being clear, honest, and yourself",
      "Style is who you are - you can't fake style; be authentic and the writing will have natural voice",
      "Good writing comes from rewriting - writing is rewriting; the magic is in the editing (Zinsser's central teaching)",
      "Simplify, be clear, be yourself, and rewrite - the fundamentals of effective writing"
    ]
  },
  128: {
    bullets: [
      "The engine of self-justification is cognitive dissonance - the mental discomfort you feel when your actions conflict with your beliefs",
      "When we do something wrong, we change our beliefs to justify it rather than admit we were wrong - we create a story that makes us look innocent",
      "This is how good people do bad things - and convince themselves it was right; everyone sees themselves as the hero of their own story",
      "We all self-justify - it's a universal human tendency that protects our self-image at the cost of truth",
      "Memory distortion: we revise our memories to support our self-image - what 'really happened' becomes what we need it to have been",
      "The longer you hold a belief or defend a position, the harder it is to let go - self-justification compounds over time",
      "Consequences: bad relationships, bad decisions, failed projects, and harmful behaviors persist because we justify them instead of facing them",
      "Awareness is the only defense - recognizing when self-justification kicks in allows you to admit mistakes, learn, and change"
    ]
  },
  129: {
    bullets: [
      "All problems are interpersonal relationship problems - the source of suffering is how we relate to others",
      "The fear of being disliked traps you - need for approval, fear of judgment, and people-pleasing keep you from living freely",
      "Freedom is being disliked by other people - that's the price you pay for living your own life on your own terms",
      "The separation of tasks: distinguish YOUR task from others' tasks - you can't control others' reactions/feelings, only your own",
      "Do your own task: 'When I'm doing my task, I accept I can't control how others judge me' - worried about criticism? That's their task, not yours",
      "The courage to be disliked is the courage to be happy - choosing self-direction over approval is the path to fulfillment",
      "Adlerian psychology: people are not determined by the past (trauma) but choose their present behavior - you can change your life choices",
      "Stop seeking approval, separate your tasks, and have the courage to be disliked - and you'll be free to live authentically"
    ]
  },
  130: {
    bullets: [
      "Life is difficult - once you truly accept that, life becomes less difficult (the first truth of personal growth)",
      "Discipline is the toolset for solving life's problems - the four tools: delayed gratification, acceptance of responsibility, dedication to truth, and balancing",
      "Delayed gratification: endure pain now for greater pleasure/benefit later - prefer solving problems over avoiding them",
      "Acceptance of responsibility: problems are yours to solve - embrace responsibility rather than blaming others or external circumstances",
      "Dedication to truth: be honest (especially with yourself) - reality is the best guide, and self-deception is corrupting",
      "Balancing: discipline requires flexibility - knowing when to apply rules and when to adapt, and letting go when necessary",
      "Love is not a feeling - it's the choice to extend yourself for the spiritual growth of another; it's an action, a discipline, not an emotion",
      "Mental health is 'commitment to reality at all costs' - confronting reality, embracing responsibility, and growing through difficulty"
    ]
  },
  131: {
    bullets: [
      "Humans share 98.4% of our DNA with chimpanzees - we're the 'third chimpanzee' (after common chimps and bonobos)",
      "What makes us unique: language, art, agriculture, and the capacity for genocide and self-destruction - our big brains cut both ways",
      "The human lineage split from chimpanzees ~7 million years ago - we're far more similar to chimps than most people realize",
      "Our big brains let us dominate the planet - tool-making, complex society, and technology gave us unprecedented power over other species",
      "But our intelligence also enables destruction - weapons, environmental degradation, genocide; we're the only species that slaughters members of its own kind on a massive scale",
      "The paradox of humanity: the same traits that make us brilliant (intelligence, ambition) also make us dangerous",
      "We're destroying the very environment that sustains us - our species' 'success' is driving mass extinction and climate change",
      "Our future depends on which side of our nature wins - the capacity for cooperation and wisdom versus the capacity for destruction"
    ]
  },
  132: {
    bullets: [
      "Rule 1 - Stand up straight with your shoulders back: your posture signals (and shapes) your competence and courage; the humble who take responsibility fare best",
      "Rule 2 - Treat yourself like someone you're responsible for helping: care for your own well-being with the responsibility you'd show for a dependent",
      "Rule 3 - Make friends with people who want the best for you: surround yourself with people who support your growth, not those who drag you down",
      "Rule 4 - Compare yourself to who you were yesterday, not to who someone else is today: focus on your own progress",
      "The fundamental tension: order (predictability, structure) and chaos (novelty, uncertainty) - too much of either is destructive; you need balance",
      "Meaning comes from taking responsibility beyond yourself - having a purpose larger than your own needs gives life depth",
      "Facing chaos with courage: take on responsibility, confront the unknown, and grow through it rather than retreating",
      "The antidote to suffering: take on the burden of responsibility and live with integrity - 'pick up your cross and carry it; you'll be stronger for it'"
    ]
  },
  133: {
    bullets: [
      "At 36, neurosurgeon Paul Kalanithi was diagnosed with terminal lung cancer - this book is his memoir of facing death with honesty, love, and courage",
      "'The question is not whether we live or die - but how we choose to live while we're alive' - the central question of the book",
      "Science gives us knowledge; meaning comes from how we use it - Kalanithi was both a scientist (neurosurgeon) and a seeker of meaning",
      "Medicine and identity: he describes being both the doctor and the patient - the surreal experience of treating others while dying",
      "His last words (to his daughter): 'This is what it means to love: to be willing to be broken by another' - love as vulnerability and connection",
      "Facing mortality strips away the trivial - confronting death forces you to ask what truly matters",
      "Acceptance and grace: he meets death not with anger but with acceptance, gratitude, and a determination to live meaningfully to the end",
      "His legacy: a profound meditation on the human condition - that life's meaning is found in confronting its finitude with sincerity and love"
    ]
  },
  134: {
    bullets: [
      "Resistance is the enemy of creativity - the invisible force that keeps you from doing your work (fear, procrastination, self-doubt, distraction)",
      "Resistance manifests as: fear, self-sabotage, over-planning instead of doing, perfectionism, addiction, and any avoidance of the work",
      "The only way to beat Resistance is to sit down and do the work - there's no shortcut; the battle is won by showing up",
      "Professional vs amateur: professionals show up every day whether they feel like it or not; amateurs wait for inspiration (which never reliably arrives)",
      "'Turning pro' is the key - making a psychological commitment to your craft, treating it as serious work, and showing up consistently",
      "The professional takes a job on - they overcome self-doubt through discipline; Resistance weakens when you commit fully to the work",
      "Inspiration is overrated - the muse rewards those who show up; work, and inspiration comes (the reverse is much rarer)",
      "For the would-be artist/writer/creator: the war against Resistance is won daily, by sitting down and doing the work, no matter what"
    ]
  },
  135: {
    bullets: [
      "The only moment you ever have is now - the past is gone, the future isn't here; the present is all that exists",
      "Meditation isn't about escaping life - it's about being fully present in it; not an escape but a way of truly living",
      "Mindfulness is paying attention, on purpose, without judgment - to the present moment, as it is",
      "Stop rushing - rushing through life means missing it; slow down to actually be in your experience",
      "Wherever you go, there you are - you can't escape yourself by changing locations or circumstances; the change is internal",
      "The mind resists - when you sit still, your mind will churn and resist; that's the practice; keep returning to the present",
      "Enlightenment isn't a destination - it's showing up for your own life, being present in each ordinary moment",
      "The practice: sit, breathe, and be present for a few minutes daily - not to achieve something, but simply to inhabit your life more fully"
    ]
  },
}

let updated = 0
let fixed41 = false
for (const card of data) {
  if (fullSummaries[card.id]) {
    card.bullets = fullSummaries[card.id].bullets
    if (card.id === 41) fixed41 = true
    updated++
  }
}

fs.writeFileSync('src/data/cards.json', JSON.stringify(data, null, 2), 'utf-8')
console.log('Expanded', updated, 'cards (batch 5, incl card 41:', fixed41, ')')
