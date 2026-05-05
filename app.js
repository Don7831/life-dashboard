// ============================================================
// LIFE DASHBOARD v1.1
// All six v1.1 improvements applied
// ============================================================

// ---------- SVG ICONS (v1.2) ----------

const ICONS = {
  // Category icons (filled bg, white stroke for cat-card-icon)
  spiritual: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M5 9l7-7 7 7"/></svg>',
  family: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s-7-4.5-7-10a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 5.5-7 10-7 10"/></svg>',
  physical: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6.5 6.5l11 11M3 3l3 3M21 21l-3-3M18 18l4-4M2 6l4-4"/></svg>',
  mental: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a5 5 0 0 0-5 5v1a5 5 0 0 0-2 4 5 5 0 0 0 5 5h1v3h2v-3h1a5 5 0 0 0 5-5 5 5 0 0 0-2-4V7a5 5 0 0 0-5-5z"/></svg>',
  podcast: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="3" width="6" height="12" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3M9 21h6"/></svg>',
  
  // Sub-category icons
  sunrise: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M17 18a5 5 0 0 0-10 0M12 2v6M5.6 9.6L7 11M3 18h2M19 18h2M16.6 11l1.4-1.4M22 18h-2"/></svg>',
  moon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>',
  music: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>',
  bed: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M2 18v-7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v7M2 14h20M5 9V6"/></svg>',
  flame: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>',
  heart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.5-1.5 3-3.2 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.8 0-3 .5-4.5 2-1.5-1.5-2.7-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4 3 5.5l7 7z"/></svg>',
  calendar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>',
  star: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
  user: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
  users: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  yoga: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="5" r="2"/><path d="M12 7v4M9 11l-2 7M15 11l2 7M9 14l-3 1M15 14l3 1"/></svg>',
  dumbbell: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M6.5 6.5l11 11M21 21l-1-1M3 3l1 1M18 22l4-4M2 6l4-4M7 17l-5 5M22 7l-5-5M11 13l2-2"/></svg>',
  thermometer: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"/></svg>',
  pill: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="9" width="18" height="6" rx="3" transform="rotate(-45 12 12)"/><path d="M8.5 8.5l7 7"/></svg>',
  apple: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4a4 4 0 0 0-4 4c-2 0-4 2-4 5 0 4 3 9 7 9 1 0 1.5-.5 2.5-.5s1.5.5 2.5.5c4 0 7-5 7-9 0-3-2-5-4-5a4 4 0 0 0-7 0"/><path d="M12 4c0-1 1-3 3-3"/></svg>',
  scale: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>',
  paw: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="9" r="2"/><circle cx="10" cy="5" r="2"/><circle cx="14" cy="5" r="2"/><circle cx="18" cy="9" r="2"/><path d="M8 15a4 4 0 0 1 8 0c0 3-2 5-4 5s-4-2-4-5z"/></svg>',
  leaf: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 4 13c0-2 1-7 8-10 0 4 0 7-2 9s-3 4-3 6c0 1 0 2 1 2"/><path d="M2 21c0-3 2-6 5-9"/></svg>',
  briefcase: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>',
  coffee: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/></svg>',
  shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
  mic: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3M9 21h6"/></svg>',
  edit: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18 2l4 4-12 12H6v-4z"/></svg>',
  share: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4"/></svg>',
  inbox: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-6l-2 3h-4l-2-3H2"/><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/></svg>',
  bulb: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18h6M10 22h4"/><path d="M12 2a7 7 0 0 0-4 12.7c1 .8 1.5 1.7 1.5 2.8h5c0-1.1.5-2 1.5-2.8A7 7 0 0 0 12 2z"/></svg>',
  empty: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01"/></svg>'
};

// Map sub-category IDs to icon names
const SUB_ICONS = {
  morning_devotion: "sunrise", evening_devotion: "moon", worship: "music", sabbath: "leaf", fasting: "shield",
  checkin_mel: "heart", weekly_mel: "users", date_night: "calendar", brother: "user",
  morning_stretch: "yoga", evening_stretch: "yoga", gym: "dumbbell", sauna: "thermometer",
  sleep: "bed", diet: "apple", body_metrics: "scale", hugo_family: "paw", hugo_yours: "paw", medication: "pill",
  decompression: "leaf", grace_time: "leaf", left_work: "briefcase", took_breaks: "coffee", oh_adjustments: "shield",
  episodes_published: "mic", production_work: "edit", promotion: "share", listener_engagement: "inbox", idea_capture: "bulb"
};

function svgIcon(name) {
  return ICONS[name] || ICONS.empty;
}

// ---------- 90-DAY READING PLAN (v1.4) ----------
// Sequenced walk through Scripture: Gospels, Psalms, Pauline Epistles, key OT
// Each day = passage + reflection question + prayer prompt

const READING_PLAN = [
  // Days 1-15: Matthew (key chapters)
  { passage: "Matthew 1", reflection: "Why does the gospel begin with a genealogy? What does it tell us about God's faithfulness across generations?", prayer: "Father, thank you that you keep your promises across centuries. Help me trust that you are working in my own family line." },
  { passage: "Matthew 3", reflection: "John the Baptist demanded fruit of repentance, not just words. Where in your life is there a gap between what you say and what you do?", prayer: "Lord, expose where I'm performing rather than turning. Make my repentance honest." },
  { passage: "Matthew 5:1-12", reflection: "The Beatitudes describe the citizens of God's kingdom. Which one feels furthest from your current life?", prayer: "King Jesus, conform me to your kingdom values, even where they cut across what I want." },
  { passage: "Matthew 5:13-20", reflection: "Salt and light are useless when hidden. How might Christ be calling you to be more visibly his today?", prayer: "Father, give me courage to live distinctly. Don't let me hide your light." },
  { passage: "Matthew 6:5-15", reflection: "Jesus teaches us how to pray. Which line of the Lord's Prayer do you most need to mean today?", prayer: "Use your own words from Matthew 6 today, slowly, line by line." },
  { passage: "Matthew 6:25-34", reflection: "Anxiety and faith cannot occupy the same throne. What are you anxious about that you need to hand to the Father?", prayer: "Father, you know what I need. I lay down my anxiety and seek first your kingdom." },
  { passage: "Matthew 7:13-29", reflection: "Two ways, two trees, two foundations. Which is your life actually built on, when tested?", prayer: "Lord, build my life on your words, not my preferences. Make me a doer, not just a hearer." },
  { passage: "Matthew 11:28-30", reflection: "Jesus offers rest to the weary. What burden are you carrying that he never asked you to carry?", prayer: "Jesus, I come weary. Take what's not mine to bear. Teach me your gentleness." },
  { passage: "Matthew 16:13-26", reflection: "Peter confesses and Peter rebukes Jesus. What does it cost to take up your cross today?", prayer: "Lord, I would rather save my life than lose it. Teach me the better way." },
  { passage: "Matthew 18:21-35", reflection: "Forgiveness from the heart, not just the lips. Who do you need to forgive today?", prayer: "Father, you have forgiven me an unpayable debt. Soften my heart toward those who owe me less." },
  { passage: "Matthew 22:34-40", reflection: "All the Law hangs on two commands. Where is your love misordered?", prayer: "Lord, order my loves. You first, then neighbour, then self." },
  { passage: "Matthew 25:31-46", reflection: "The King is found in the least. Who have you walked past this week?", prayer: "Jesus, give me eyes to see you in the hungry, the stranger, the prisoner. Move me to act." },
  { passage: "Matthew 26:36-46", reflection: "Jesus prayed in agony. What does it mean to pray 'not my will, but yours' today?", prayer: "Father, where I want my way, give me grace to want yours more." },
  { passage: "Matthew 27:45-54", reflection: "The Son was forsaken so you would not be. Sit with that for a moment.", prayer: "Jesus, thank you. There is nothing you would not give for me." },
  { passage: "Matthew 28:16-20", reflection: "The Great Commission is for all of life, not just missionaries. How does your work today disciple someone?", prayer: "Lord, you are with me always. Help me make disciples in the ordinary." },
  
  // Days 16-30: Mark, Luke, John highlights
  { passage: "Mark 1:35-39", reflection: "Even Jesus needed solitude with the Father. Where is your secret place?", prayer: "Father, draw me away to be alone with you. I cannot pour out what I have not received." },
  { passage: "Mark 8:34-38", reflection: "What does cross-bearing actually look like in your week?", prayer: "Lord, I'd rather have ease. Make me willing to lose for your sake." },
  { passage: "Mark 10:17-31", reflection: "What do you cling to that Jesus is asking you to release?", prayer: "Jesus, you looked at the rich young ruler and loved him. Look at me. Show me what holds me." },
  { passage: "Luke 4:16-30", reflection: "Jesus declared his mission. What is your mission as a follower of his?", prayer: "Spirit of the Lord, anoint me too. Send me into the work you've prepared." },
  { passage: "Luke 10:38-42", reflection: "Are you Mary or Martha right now? What is the 'one thing' for you today?", prayer: "Father, I am anxious about many things. Anchor me in the one needful thing." },
  { passage: "Luke 15:11-32", reflection: "Are you the prodigal, the elder brother, or the father in this season?", prayer: "Father, run to me as I come home. Soften my elder brother heart toward those who return." },
  { passage: "Luke 18:9-14", reflection: "Pharisee or tax collector? Which prayer does your heart actually pray?", prayer: "Lord, have mercy on me, a sinner." },
  { passage: "Luke 22:39-46", reflection: "Jesus prayed more earnestly under pressure. Do you?", prayer: "Father, when I am pressed, drive me to my knees, not to despair." },
  { passage: "John 1:1-18", reflection: "The Word became flesh. What does it mean that God came near?", prayer: "Jesus, you are full of grace and truth. Let me behold your glory today." },
  { passage: "John 3:1-21", reflection: "Are you trying to reform yourself or be born again?", prayer: "Spirit, do in me what I cannot. Bring new life where I am dead." },
  { passage: "John 4:1-26", reflection: "Jesus offers living water. What well are you drinking from that leaves you thirsty?", prayer: "Jesus, give me the water that becomes a spring inside me. I'm tired of empty wells." },
  { passage: "John 6:35-51", reflection: "Christ is the bread of life. What are you trying to feed your soul with that won't satisfy?", prayer: "Lord, you alone fill the soul. I come to you hungry." },
  { passage: "John 10:1-18", reflection: "The Good Shepherd lays down his life. How does this change how you face fear today?", prayer: "Shepherd, I am your sheep. I hear your voice. Lead me." },
  { passage: "John 14:1-14", reflection: "Jesus prepares a place. What does this mean for your worries about the future?", prayer: "Father, my future is in your hands. I trust the way, the truth, and the life." },
  { passage: "John 17:13-26", reflection: "Jesus prayed for you in this passage. Sit with that.", prayer: "Jesus, you prayed for me. I am loved by the Father as you are loved. Help me believe this." },
  
  // Days 31-50: Psalms (key passages)
  { passage: "Psalm 1", reflection: "What are you rooted in today? What's nourishing you?", prayer: "Father, root me in your word. Let my life bear fruit in season." },
  { passage: "Psalm 8", reflection: "When you consider creation, what does it tell you about God's character?", prayer: "Majestic Lord, your name is great in all the earth. Tune my heart to your glory." },
  { passage: "Psalm 19", reflection: "Creation declares and Scripture instructs. Which speaks louder in your week?", prayer: "Let the words of my mouth and meditation of my heart be acceptable to you, my Rock and Redeemer." },
  { passage: "Psalm 23", reflection: "Which line of this psalm do you need most today?", prayer: "Pray Psalm 23 slowly, line by line, in your own voice." },
  { passage: "Psalm 27", reflection: "What is the 'one thing' you most desire from the Lord?", prayer: "Father, one thing have I asked. Let me dwell in your house and behold your beauty." },
  { passage: "Psalm 32", reflection: "Confessed sin brings restoration. What have you been hiding?", prayer: "Lord, I acknowledge my sin to you. Cover me. Surround me with songs of deliverance." },
  { passage: "Psalm 34", reflection: "The Lord is near to the brokenhearted. Where is your heart broken right now?", prayer: "Father, taste and see has been my prayer. Be near me today." },
  { passage: "Psalm 42", reflection: "Why are you cast down? Speak to your soul as the psalmist does.", prayer: "Hope in God; for I shall again praise him, my salvation and my God." },
  { passage: "Psalm 46", reflection: "God is our refuge and strength. What earthly refuge are you trusting more than him?", prayer: "Be still, and know that I am God. Father, I let go and rest in you." },
  { passage: "Psalm 51", reflection: "David's prayer of repentance. What sin needs this kind of honest prayer from you?", prayer: "Pray Psalm 51 in your own words, slowly." },
  { passage: "Psalm 63", reflection: "When did you last say 'my soul thirsts for you' and mean it?", prayer: "Father, earnestly I seek you. My soul thirsts. My flesh faints. Satisfy me with yourself." },
  { passage: "Psalm 73", reflection: "Asaph's wrestling with the prosperity of the wicked. Where do you envy what God has not given you?", prayer: "Lord, until I went into the sanctuary, I did not see clearly. Reorient me." },
  { passage: "Psalm 90", reflection: "Teach us to number our days. How are you spending the days you have?", prayer: "Father, establish the work of my hands today. Let me live wisely." },
  { passage: "Psalm 91", reflection: "He who dwells in the shelter of the Most High. What does dwelling there look like for you today?", prayer: "Father, you are my refuge. Under your wings I take shelter." },
  { passage: "Psalm 100", reflection: "Enter his gates with thanksgiving. List three things you can thank him for right now.", prayer: "Father, I enter your gates with thanksgiving. You are good. Your love endures forever." },
  { passage: "Psalm 103", reflection: "Bless the Lord, O my soul. What has the Lord done for you that you've forgotten?", prayer: "Bless the Lord, O my soul, and forget not all his benefits." },
  { passage: "Psalm 119:9-16", reflection: "How does a young man keep his way pure? By guarding it according to your word.", prayer: "Lord, hide your word in my heart, that I might not sin against you." },
  { passage: "Psalm 121", reflection: "From where does your help come? Are you looking up?", prayer: "My help comes from the Lord, who made heaven and earth. He will keep me." },
  { passage: "Psalm 130", reflection: "Out of the depths I cry. What depths are you crying from today?", prayer: "Lord, I wait for you. My soul waits, and in your word I hope." },
  { passage: "Psalm 139", reflection: "Search me, O God. What do you not want him to find?", prayer: "Search me, O God, and know my heart. Lead me in the way everlasting." },
  
  // Days 51-70: Romans, Galatians, Ephesians, Philippians (Pauline)
  { passage: "Romans 1:16-17", reflection: "Are you ashamed of the gospel? In what setting?", prayer: "Father, embolden me. The gospel is power. Help me trust it more than I trust appearances." },
  { passage: "Romans 3:21-26", reflection: "Justification by faith alone. Where are you slipping back into earning?", prayer: "Lord, I receive what I cannot earn. Thank you for the righteousness of Christ given to me." },
  { passage: "Romans 5:1-11", reflection: "Suffering produces endurance, character, hope. Where is suffering doing this work in you?", prayer: "Father, I won't waste this suffering. Form me through it." },
  { passage: "Romans 6:1-14", reflection: "Dead to sin, alive to God. What sin still feels alive in you?", prayer: "Lord, I am dead to sin. Help me reckon it so. Make me alive to you in the moment of temptation." },
  { passage: "Romans 8:1-11", reflection: "No condemnation for those in Christ. What condemnation are you still listening to?", prayer: "Father, silence the voice of accusation. The Spirit testifies that I am yours." },
  { passage: "Romans 8:18-30", reflection: "All things work together for good. Even this thing?", prayer: "Father, I trust your sovereignty over what I cannot understand. Conform me to the image of your Son." },
  { passage: "Romans 8:31-39", reflection: "Nothing can separate us from the love of God in Christ. Speak this over your fears.", prayer: "Father, neither death nor life nor anything will separate me from your love. Help me believe this when fear comes." },
  { passage: "Romans 12:1-2", reflection: "Be transformed by the renewing of your mind. What pattern of the world is shaping you?", prayer: "Lord, renew my mind. Don't let me be conformed to a world that is passing away." },
  { passage: "Galatians 2:20", reflection: "Christ lives in me. How does this change today?", prayer: "Jesus, you live in me. Make this real, not theoretical, in my actions today." },
  { passage: "Galatians 5:16-26", reflection: "Walk by the Spirit. Which fruit is most missing in your life right now?", prayer: "Spirit, produce in me what I cannot manufacture. Especially [name the fruit]." },
  { passage: "Ephesians 1:3-14", reflection: "You are chosen, redeemed, sealed. Sit with each gift.", prayer: "Father, thank you for choosing me before the foundation of the world. Let this anchor my identity today." },
  { passage: "Ephesians 2:1-10", reflection: "Saved by grace through faith, for good works prepared for you. What good work is in front of you today?", prayer: "Father, you prepared works for me to walk in. Help me see them and walk." },
  { passage: "Ephesians 4:17-32", reflection: "Put off, put on. What old self pattern do you need to put off today?", prayer: "Lord, I put off the old self. Clothe me with the new self created after your likeness." },
  { passage: "Ephesians 6:10-20", reflection: "Stand firm. Which piece of the armour do you need most today?", prayer: "Father, gird me with truth. Cover me with righteousness. Make my feet ready. Help me take up faith, salvation, and the Word." },
  { passage: "Philippians 2:1-11", reflection: "Have the mind of Christ. Where do you need to humble yourself today?", prayer: "Jesus, you who were equal with God humbled yourself. Make me like you in this." },
  { passage: "Philippians 3:7-14", reflection: "Counted as loss for the surpassing worth of knowing Christ. What's still on your gain side?", prayer: "Father, help me count it loss. Press me on toward the goal." },
  { passage: "Philippians 4:4-9", reflection: "Rejoice. Pray. Think on what is true. Which of these are you neglecting?", prayer: "Father, the peace that surpasses understanding guard my heart and mind in Christ Jesus." },
  { passage: "Colossians 3:1-17", reflection: "Set your mind on things above. Where are your thoughts living right now?", prayer: "Lord, raise my mind. Whatever I do, in word or deed, do all in the name of the Lord Jesus." },
  { passage: "1 Thessalonians 5:12-24", reflection: "Rejoice always, pray without ceasing, give thanks in all circumstances. Pick one to practise today.", prayer: "Father, sanctify me completely. Keep me blameless until the coming of our Lord." },
  { passage: "2 Timothy 1:7", reflection: "Not a spirit of fear but of power, love, and a sound mind. What fear is whispering today?", prayer: "Father, I reject the spirit of fear. Give me power, love, and a sound mind." },
  
  // Days 71-90: Key OT + final NT (Hebrews, James, 1 Peter, 1 John)
  { passage: "Genesis 1:26-31", reflection: "Made in God's image, and very good. How does this shape how you see yourself today?", prayer: "Father, you made me in your image. Help me live in that dignity, not the lies of shame." },
  { passage: "Genesis 3", reflection: "The fall happened the same way it still happens. Where is the serpent whispering 'did God really say'?", prayer: "Father, I'm not innocent. But you provided a covering then, and a covering now in Christ. Cover me." },
  { passage: "Exodus 20:1-17", reflection: "The Ten Commandments. Which one is the Spirit pressing on you?", prayer: "Lord, your law is good. Show me where I have broken it, and show me where Christ kept it for me." },
  { passage: "Deuteronomy 6:4-9", reflection: "Love the Lord with all your heart, soul, might. Where is the divided heart?", prayer: "Lord our God, the Lord is one. Unite my heart to fear your name." },
  { passage: "1 Samuel 16:1-13", reflection: "Man looks at the outward, the Lord looks at the heart. What does your heart actually look like to him today?", prayer: "Search my heart, O God. Make it wholly yours." },
  { passage: "Isaiah 6:1-8", reflection: "Holy, holy, holy. When did you last tremble before God's holiness?", prayer: "Father, I am undone in your presence. Cleanse me. Send me." },
  { passage: "Isaiah 40:28-31", reflection: "They who wait for the Lord shall renew their strength. Are you waiting, or running on fumes?", prayer: "Father, I wait on you. Renew my strength like the eagle." },
  { passage: "Isaiah 53", reflection: "He bore our griefs. He carried our sorrows. By his wounds we are healed.", prayer: "Jesus, the chastisement that brought my peace was upon you. Thank you." },
  { passage: "Isaiah 55:1-11", reflection: "Come, everyone who thirsts. Why do you spend money on what does not satisfy?", prayer: "Father, your word does not return empty. Speak to me. Satisfy me." },
  { passage: "Jeremiah 29:11-13", reflection: "Plans for welfare, for a future and a hope. Even now, in this season?", prayer: "Father, you know your plans for me. Help me seek you with all my heart." },
  { passage: "Lamentations 3:19-26", reflection: "His mercies are new every morning. What old failure are you carrying that he has already forgiven?", prayer: "Great is your faithfulness, Lord. The Lord is my portion; therefore I will hope in him." },
  { passage: "Hebrews 4:12-16", reflection: "Approach the throne of grace with confidence. What keeps you from approaching today?", prayer: "Father, I draw near with confidence, not because of my record but because of Christ's. Find me mercy and grace." },
  { passage: "Hebrews 11:1-16", reflection: "Faith looks forward to a city. Where is your treasure actually invested?", prayer: "Father, increase my faith. Help me live as a pilgrim, not a settler in this world." },
  { passage: "Hebrews 12:1-14", reflection: "Looking to Jesus, the founder and perfecter. What weight do you need to lay aside?", prayer: "Jesus, I look to you. Help me run with endurance the race set before me." },
  { passage: "James 1:2-8", reflection: "Trials produce steadfastness. What trial is the Father using to mature you right now?", prayer: "Father, give me wisdom that does not doubt. Let steadfastness have its full effect in me." },
  { passage: "James 1:19-27", reflection: "Be a doer of the word, not a hearer only. What heard truth have you not yet done?", prayer: "Lord, don't let me deceive myself. Make me a doer." },
  { passage: "1 Peter 1:3-9", reflection: "A living hope through the resurrection. Does your hope feel alive or dim today?", prayer: "Father, even though I do not see Christ, I love him. Fill me with joy inexpressible." },
  { passage: "1 Peter 5:6-11", reflection: "Cast your anxieties on him. What anxiety are you still gripping?", prayer: "Father, I cast it on you. The roaring lion is real, but you are stronger. Restore me." },
  { passage: "1 John 1:5-10", reflection: "Walking in the light means honest confession. What needs confessing right now?", prayer: "Father, I confess. Cleanse me. The blood of Jesus is enough." },
  { passage: "Revelation 21:1-7", reflection: "He will wipe every tear. He is making all things new. How does this end change today?", prayer: "Come, Lord Jesus. Until then, give me strength to live as one whose home is yet to come." }
];

function getPlanDayIndex() {
  const start = new Date(state.readingPlanStartDate || todayStr());
  const today = new Date(todayStr());
  const diffDays = Math.floor((today - start) / 86400000);
  return ((diffDays % READING_PLAN.length) + READING_PLAN.length) % READING_PLAN.length;
}

function getTodayPrompt() {
  return READING_PLAN[getPlanDayIndex()];
}

// ---------- DATA MODEL ----------

const CATEGORIES = {
  spiritual: {
    name: "Spiritual Life", color: "#412227", colorVar: "--c-spiritual", softVar: "--c-spiritual-soft",
    subs: [
      { id: "morning_devotion", name: "Morning Devotion", target: "Daily, 15 min Scripture + prayer", freq: "daily" },
      { id: "evening_devotion", name: "Evening Devotion", target: "Daily, long Mon-Thu/Sat, short Fri/Sun", freq: "daily" },
      { id: "worship", name: "Worship", target: "2x weekly", freq: "weekly", weeklyTarget: 2 },
      { id: "sabbath", name: "Sabbath", target: "1x monthly, full off-day", freq: "monthly", monthlyTarget: 1 },
      { id: "fasting", name: "Fasting", target: "1x quarterly, Daniel + social media", freq: "quarterly", quarterlyTarget: 1 }
    ]
  },
  family: {
    name: "Family & Relationships", color: "#055f43", colorVar: "--c-family", softVar: "--c-family-soft",
    subs: [
      { id: "checkin_mel", name: "Daily check-in with Melanie", target: "15-20 min undistracted", freq: "daily" },
      { id: "weekly_mel", name: "Weekly meaningful activity", target: "1x weekly with Mel", freq: "weekly", weeklyTarget: 1 },
      { id: "date_night", name: "Monthly date night", target: "1x monthly, no phones", freq: "monthly", monthlyTarget: 1 },
      { id: "brother", name: "Brother contact", target: "1x monthly", freq: "monthly", monthlyTarget: 1 }
    ]
  },
  physical: {
    name: "Physical Health", color: "#7d3a10", colorVar: "--c-physical", softVar: "--c-physical-soft",
    subs: [
      { id: "morning_stretch", name: "Morning stretch", target: "Daily, 20 min", freq: "daily" },
      { id: "evening_stretch", name: "Evening stretch", target: "Daily, 20 min", freq: "daily" },
      { id: "gym", name: "Gym", target: "4x weekly, full session in Gym tab", freq: "weekly", weeklyTarget: 4, externalLog: "gym" },
      { id: "sauna", name: "Sauna", target: "1x weekly, recovery", freq: "weekly", weeklyTarget: 1 },
      { id: "sleep", name: "Sleep", target: "Daily, 6-8 hrs", freq: "daily" },
      { id: "diet", name: "Diet", target: "Daily, calorie/nutrient log", freq: "daily" },
      { id: "body_metrics", name: "Body measurements", target: "Daily morning scale", freq: "daily" },
      { id: "hugo_family", name: "Hugo walks (family)", target: "Daily, total walks", freq: "daily" },
      { id: "hugo_yours", name: "Your walk with Hugo", target: "Daily 11pm walk", freq: "daily" },
      { id: "medication", name: "Medication", target: "Daily, 10-11am", freq: "daily" }
    ]
  },
  mental: {
    name: "Mental & Emotional", color: "#697585", colorVar: "--c-mental", softVar: "--c-mental-soft",
    subs: [
      { id: "decompression", name: "Daily decompression", target: "Daily, one protective act", freq: "daily" },
      { id: "grace_time", name: "Grace time taken", target: "Daily, no productive output", freq: "daily" },
      { id: "left_work", name: "Left work at work", target: "Work days only", freq: "workday" },
      { id: "took_breaks", name: "Took breaks at work", target: "Work days only", freq: "workday" },
      { id: "oh_adjustments", name: "OH adjustments honoured", target: "Weekly check", freq: "weekly", weeklyTarget: 1 }
    ]
  },
  podcast: {
    name: "Christian Motivation Station", color: "#6b705c", colorVar: "--c-podcast", softVar: "--c-podcast-soft",
    subs: [
      { id: "episodes_published", name: "Episodes published", target: "2 per month, 8min+ floor", freq: "monthly", monthlyTarget: 2 },
      { id: "production_work", name: "Weekly production work", target: "1x weekly", freq: "weekly", weeklyTarget: 1 },
      { id: "promotion", name: "Promotion", target: "1 social post per episode", freq: "weekly", weeklyTarget: 1 },
      { id: "listener_engagement", name: "Listener engagement", target: "Weekly inbox check", freq: "weekly", weeklyTarget: 1 },
      { id: "idea_capture", name: "Idea capture", target: "Weekly minimum", freq: "weekly", weeklyTarget: 1 }
    ]
  }
};

const ADHD_DIMENSIONS = [
  { id: "exec_function", name: "Executive Function", desc: "Plan vs complete, initiation paralysis, hyperfocus past usefulness" },
  { id: "working_memory", name: "Working Memory", desc: "Forgot something important, external systems success" },
  { id: "emotional_reg", name: "Emotional Regulation", desc: "Disproportionate reaction, recovery time, rumination" },
  { id: "rejection_sens", name: "Rejection Sensitivity", desc: "Assumed someone was upset, took feedback too hard" },
  { id: "impulse_control", name: "Impulse Control", desc: "Unplanned purchase/hobby/commitment, impulsive eating" },
  { id: "sensory_tol", name: "Sensory Tolerance", desc: "Overload occurred, recovery adequacy" },
  { id: "sustained_attn", name: "Sustained Attention", desc: "Could focus on demand, did meds help" }
];

const STATUSES = [
  { id: "complete", label: "Complete", className: "complete" },
  { id: "hard_day", label: "Hard day", className: "partial", requireReason: true },
  { id: "came_up", label: "Came up", className: "partial", requireReason: true },
  { id: "chose_not", label: "Chose not", className: "partial", requireReason: true },
  { id: "missed", label: "Missed", className: "missed" }
];

const BIBLE_BOOKS = [
  { name: "Genesis", abbrev: "Gen", chapters: 50, testament: "OT" }, { name: "Exodus", abbrev: "Exod", chapters: 40, testament: "OT" },
  { name: "Leviticus", abbrev: "Lev", chapters: 27, testament: "OT" }, { name: "Numbers", abbrev: "Num", chapters: 36, testament: "OT" },
  { name: "Deuteronomy", abbrev: "Deut", chapters: 34, testament: "OT" }, { name: "Joshua", abbrev: "Josh", chapters: 24, testament: "OT" },
  { name: "Judges", abbrev: "Judg", chapters: 21, testament: "OT" }, { name: "Ruth", abbrev: "Ruth", chapters: 4, testament: "OT" },
  { name: "1 Samuel", abbrev: "1 Sam", chapters: 31, testament: "OT" }, { name: "2 Samuel", abbrev: "2 Sam", chapters: 24, testament: "OT" },
  { name: "1 Kings", abbrev: "1 Kgs", chapters: 22, testament: "OT" }, { name: "2 Kings", abbrev: "2 Kgs", chapters: 25, testament: "OT" },
  { name: "1 Chronicles", abbrev: "1 Chr", chapters: 29, testament: "OT" }, { name: "2 Chronicles", abbrev: "2 Chr", chapters: 36, testament: "OT" },
  { name: "Ezra", abbrev: "Ezra", chapters: 10, testament: "OT" }, { name: "Nehemiah", abbrev: "Neh", chapters: 13, testament: "OT" },
  { name: "Esther", abbrev: "Esth", chapters: 10, testament: "OT" }, { name: "Job", abbrev: "Job", chapters: 42, testament: "OT" },
  { name: "Psalms", abbrev: "Ps", chapters: 150, testament: "OT" }, { name: "Proverbs", abbrev: "Prov", chapters: 31, testament: "OT" },
  { name: "Ecclesiastes", abbrev: "Eccl", chapters: 12, testament: "OT" }, { name: "Song of Solomon", abbrev: "Song", chapters: 8, testament: "OT" },
  { name: "Isaiah", abbrev: "Isa", chapters: 66, testament: "OT" }, { name: "Jeremiah", abbrev: "Jer", chapters: 52, testament: "OT" },
  { name: "Lamentations", abbrev: "Lam", chapters: 5, testament: "OT" }, { name: "Ezekiel", abbrev: "Ezek", chapters: 48, testament: "OT" },
  { name: "Daniel", abbrev: "Dan", chapters: 12, testament: "OT" }, { name: "Hosea", abbrev: "Hos", chapters: 14, testament: "OT" },
  { name: "Joel", abbrev: "Joel", chapters: 3, testament: "OT" }, { name: "Amos", abbrev: "Amos", chapters: 9, testament: "OT" },
  { name: "Obadiah", abbrev: "Obad", chapters: 1, testament: "OT" }, { name: "Jonah", abbrev: "Jonah", chapters: 4, testament: "OT" },
  { name: "Micah", abbrev: "Mic", chapters: 7, testament: "OT" }, { name: "Nahum", abbrev: "Nah", chapters: 3, testament: "OT" },
  { name: "Habakkuk", abbrev: "Hab", chapters: 3, testament: "OT" }, { name: "Zephaniah", abbrev: "Zeph", chapters: 3, testament: "OT" },
  { name: "Haggai", abbrev: "Hag", chapters: 2, testament: "OT" }, { name: "Zechariah", abbrev: "Zech", chapters: 14, testament: "OT" },
  { name: "Malachi", abbrev: "Mal", chapters: 4, testament: "OT" },
  { name: "Matthew", abbrev: "Matt", chapters: 28, testament: "NT" }, { name: "Mark", abbrev: "Mark", chapters: 16, testament: "NT" },
  { name: "Luke", abbrev: "Luke", chapters: 24, testament: "NT" }, { name: "John", abbrev: "John", chapters: 21, testament: "NT" },
  { name: "Acts", abbrev: "Acts", chapters: 28, testament: "NT" }, { name: "Romans", abbrev: "Rom", chapters: 16, testament: "NT" },
  { name: "1 Corinthians", abbrev: "1 Cor", chapters: 16, testament: "NT" }, { name: "2 Corinthians", abbrev: "2 Cor", chapters: 13, testament: "NT" },
  { name: "Galatians", abbrev: "Gal", chapters: 6, testament: "NT" }, { name: "Ephesians", abbrev: "Eph", chapters: 6, testament: "NT" },
  { name: "Philippians", abbrev: "Phil", chapters: 4, testament: "NT" }, { name: "Colossians", abbrev: "Col", chapters: 4, testament: "NT" },
  { name: "1 Thessalonians", abbrev: "1 Thess", chapters: 5, testament: "NT" }, { name: "2 Thessalonians", abbrev: "2 Thess", chapters: 3, testament: "NT" },
  { name: "1 Timothy", abbrev: "1 Tim", chapters: 6, testament: "NT" }, { name: "2 Timothy", abbrev: "2 Tim", chapters: 4, testament: "NT" },
  { name: "Titus", abbrev: "Titus", chapters: 3, testament: "NT" }, { name: "Philemon", abbrev: "Phlm", chapters: 1, testament: "NT" },
  { name: "Hebrews", abbrev: "Heb", chapters: 13, testament: "NT" }, { name: "James", abbrev: "Jas", chapters: 5, testament: "NT" },
  { name: "1 Peter", abbrev: "1 Pet", chapters: 5, testament: "NT" }, { name: "2 Peter", abbrev: "2 Pet", chapters: 3, testament: "NT" },
  { name: "1 John", abbrev: "1 John", chapters: 5, testament: "NT" }, { name: "2 John", abbrev: "2 John", chapters: 1, testament: "NT" },
  { name: "3 John", abbrev: "3 John", chapters: 1, testament: "NT" }, { name: "Jude", abbrev: "Jude", chapters: 1, testament: "NT" },
  { name: "Revelation", abbrev: "Rev", chapters: 22, testament: "NT" }
];

const GYM_EXERCISES = {
  Top: {
    Chest: ["Bench press", "Incline dumbbell press", "Cable fly", "Push-up", "Chest dip"],
    Back: ["Deadlift", "Lat pulldown", "Bent-over row", "Pull-up", "Cable row", "Face pull"],
    Shoulders: ["Overhead press", "Lateral raise", "Front raise", "Rear delt fly", "Arnold press"],
    Biceps: ["Barbell curl", "Dumbbell curl", "Hammer curl", "Cable curl", "Preacher curl"],
    Triceps: ["Tricep dip", "Cable pushdown", "Skull crusher", "Overhead extension", "Close-grip bench"],
    Core: ["Plank", "Hanging leg raise", "Cable crunch", "Russian twist", "Ab wheel"]
  },
  Bottom: {
    Quads: ["Squat", "Front squat", "Leg press", "Lunge", "Bulgarian split squat", "Leg extension"],
    Hamstrings: ["Romanian deadlift", "Leg curl", "Good morning", "Glute-ham raise"],
    Glutes: ["Hip thrust", "Glute bridge", "Cable kickback", "Step-up"],
    Calves: ["Standing calf raise", "Seated calf raise", "Donkey calf raise"],
    Core: ["Plank", "Hanging leg raise", "Cable crunch", "Russian twist", "Ab wheel"]
  }
};

// ---------- STORAGE ----------

const STORAGE_KEY = "lifedash_v1";

function loadData() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const data = JSON.parse(raw);
      // Migrate v1 to v1.1: add new fields if missing
      if (!data.weeklyOccurrences) data.weeklyOccurrences = {};
      if (!data.gratitude) data.gratitude = {};
      if (!data.theology) data.theology = [];
      if (!data.prayer) data.prayer = [];
      if (!data.bibleNotes) data.bibleNotes = {};
      // Migrate to v1.4
      if (!data.todayDirection) data.todayDirection = {}; // { "2026-05-04": { focus: [...], focusDone: [false, false] } }
      if (!data.guidedFlow) data.guidedFlow = {}; // { "2026-05-04": { reflectionAnswer: "", prayed: false, completed: false } }
      if (!data.lowDayMode) data.lowDayMode = false;
      if (!data.readingPlanStartDate) data.readingPlanStartDate = todayStr();
      return data;
    }
  } catch (e) { console.error(e); }
  return {
    logs: {}, bible: { firstPass: {}, totalReads: {} }, appointments: [],
    podcastIdeas: [], journals: {}, moods: {}, adhdSigns: {},
    gymSessions: {}, bodyMetrics: {}, sleepMetrics: {}, dietLogs: {},
    weeklyOccurrences: {},
    gratitude: {},
    theology: [],
    prayer: [],
    bibleNotes: {},
    todayDirection: {},
    guidedFlow: {},
    lowDayMode: false,
    readingPlanStartDate: todayStr()
  };
}

function saveData() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
  catch (e) { console.error("Save failed:", e); showToast("Save failed"); }
}

let state = loadData();
let currentView = "radar";
let zoomCategory = null;
let logDate = todayStr();
let chartInstance = null;
let gymSession = null;
let gymTabState = { dayType: "Top", currentSession: null };

// ---------- UTILS ----------

function todayStr() { return new Date().toISOString().slice(0, 10); }
function fmtDate(d) {
  const dt = new Date(d);
  return dt.toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "short" });
}
function fmtDateLong(d) {
  const dt = new Date(d);
  return dt.toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long", year: "numeric" });
}
function fmtDateShort(d) {
  const dt = new Date(d);
  return dt.toLocaleDateString("en-GB", { day: "numeric", month: "short" });
}
function isoWeek(d) {
  const date = new Date(d);
  date.setHours(0, 0, 0, 0);
  date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
  const week1 = new Date(date.getFullYear(), 0, 4);
  return date.getFullYear() + "-W" + String(1 + Math.round(((date - week1) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7)).padStart(2, "0");
}
function monthKey(d) { return (d || todayStr()).slice(0, 7); }
function quarterKey(d) {
  const dt = new Date(d || todayStr());
  return `${dt.getFullYear()}-Q${Math.floor(dt.getMonth() / 3) + 1}`;
}
function getLog(subId, date) { return state.logs[`${subId}_${date}`]; }
function setLog(subId, date, status, reason) {
  state.logs[`${subId}_${date}`] = { status, reason: reason || "", ts: Date.now() };
  saveData();
}
function clearLog(subId, date) { delete state.logs[`${subId}_${date}`]; saveData(); }

// ---------- WEEKLY OCCURRENCE TRACKING (NEW IN v1.1) ----------
// Fix for Point 4: weekly/monthly/quarterly sub-categories track individual occurrences

function getOccurrences(subId, periodKey) {
  return state.weeklyOccurrences[`${subId}_${periodKey}`] || [];
}

function addOccurrence(subId, sub, date) {
  const periodKey = getPeriodKey(sub.freq, date);
  const key = `${subId}_${periodKey}`;
  state.weeklyOccurrences[key] = state.weeklyOccurrences[key] || [];
  state.weeklyOccurrences[key].push({ date, ts: Date.now() });
  saveData();
  // Also mark today's log as complete for this sub if target met
  const target = sub.weeklyTarget || sub.monthlyTarget || sub.quarterlyTarget || 1;
  if (state.weeklyOccurrences[key].length >= target) {
    // The PERIOD has been completed, mark today's log complete for scoring
    setLog(subId, date, "complete", `Target met for ${periodKey}`);
  }
}

function removeLastOccurrence(subId, sub, date) {
  const periodKey = getPeriodKey(sub.freq, date);
  const key = `${subId}_${periodKey}`;
  if (state.weeklyOccurrences[key] && state.weeklyOccurrences[key].length > 0) {
    state.weeklyOccurrences[key].pop();
    if (state.weeklyOccurrences[key].length === 0) delete state.weeklyOccurrences[key];
    saveData();
    // Re-check if target still met for any day this period
    // For simplicity, just clear today's complete log if this sub had it
    const log = getLog(subId, date);
    if (log && log.reason && log.reason.includes("Target met")) clearLog(subId, date);
  }
}

function getPeriodKey(freq, date) {
  if (freq === "weekly") return isoWeek(date);
  if (freq === "monthly") return monthKey(date);
  if (freq === "quarterly") return quarterKey(date);
  return date;
}

// ---------- DOM HELPER ----------

function el(tag, attrs, ...kids) {
  const e = document.createElement(tag);
  if (attrs) for (const k in attrs) {
    if (k === "style") e.style.cssText = attrs[k];
    else if (k.startsWith("on")) e.addEventListener(k.slice(2).toLowerCase(), attrs[k]);
    else if (k === "class") e.className = attrs[k];
    else if (k === "html") e.innerHTML = attrs[k];
    else e.setAttribute(k, attrs[k]);
  }
  kids.flat().forEach(k => {
    if (k == null) return;
    e.appendChild(typeof k === "string" || typeof k === "number" ? document.createTextNode(k) : k);
  });
  return e;
}

function showToast(msg) {
  const root = document.getElementById("toast-root");
  root.innerHTML = "";
  const toast = el("div", { class: "toast" }, msg);
  root.appendChild(toast);
  setTimeout(() => { if (root.contains(toast)) root.removeChild(toast); }, 2200);
}

// ---------- MODAL ----------

function openModal(content) {
  const root = document.getElementById("modal-root");
  const backdrop = el("div", { class: "modal-backdrop", onClick: (e) => { if (e.target === backdrop) closeModal(); } });
  const modal = el("div", { class: "modal" });
  modal.appendChild(content);
  backdrop.appendChild(modal);
  root.appendChild(backdrop);
  document.body.style.overflow = "hidden";
}
function closeModal() {
  document.getElementById("modal-root").innerHTML = "";
  document.body.style.overflow = "";
}
function modalHeader(title) {
  const h = el("div", { class: "modal-header" });
  h.appendChild(el("h3", { style: "margin: 0; font-size: 19px; font-weight: 700; letter-spacing: -0.02em;" }, title));
  h.appendChild(el("button", { class: "modal-close", onClick: () => closeModal() }, "×"));
  return h;
}

// ---------- SCORING (FIX FOR POINT 1: REAL-TIME) ----------

function scoreSubcategory(catKey, sub) {
  const startOfYear = new Date(new Date().getFullYear(), 0, 1);
  const now = new Date();
  const daysSoFar = Math.floor((now - startOfYear) / 86400000) + 1;

  if (sub.freq === "daily" || sub.freq === "workday") {
    let due = 0, completed = 0;
    for (let i = 0; i < daysSoFar; i++) {
      const d = new Date(startOfYear);
      d.setDate(d.getDate() + i);
      const ds = d.toISOString().slice(0, 10);
      due++;
      const log = getLog(sub.id, ds);
      if (log && log.status === "complete") completed++;
    }
    return { pace: due ? Math.round(completed / due * 100) : 0, completed, due, unit: "days" };
  }

  // Weekly/monthly/quarterly: use occurrences
  if (sub.freq === "weekly") {
    const target = sub.weeklyTarget || 1;
    const weeksMap = {};
    for (let i = 0; i < daysSoFar; i++) {
      const d = new Date(startOfYear);
      d.setDate(d.getDate() + i);
      const wk = isoWeek(d.toISOString().slice(0, 10));
      weeksMap[wk] = true;
    }
    const totalWeeks = Object.keys(weeksMap).length;
    let completedWeeks = 0;
    Object.keys(weeksMap).forEach(wk => {
      const occ = state.weeklyOccurrences[`${sub.id}_${wk}`] || [];
      if (occ.length >= target) completedWeeks++;
    });
    return { pace: totalWeeks ? Math.round(completedWeeks / totalWeeks * 100) : 0, completed: completedWeeks, due: totalWeeks, unit: "weeks" };
  }

  if (sub.freq === "monthly") {
    const target = sub.monthlyTarget || 1;
    const monthsMap = {};
    for (let i = 0; i < daysSoFar; i++) {
      const d = new Date(startOfYear);
      d.setDate(d.getDate() + i);
      monthsMap[monthKey(d.toISOString().slice(0, 10))] = true;
    }
    const totalMonths = Object.keys(monthsMap).length;
    let completedMonths = 0;
    Object.keys(monthsMap).forEach(mk => {
      const occ = state.weeklyOccurrences[`${sub.id}_${mk}`] || [];
      if (occ.length >= target) completedMonths++;
    });
    return { pace: totalMonths ? Math.round(completedMonths / totalMonths * 100) : 0, completed: completedMonths, due: totalMonths, unit: "months" };
  }

  if (sub.freq === "quarterly") {
    const target = sub.quarterlyTarget || 1;
    const quartersMap = {};
    for (let i = 0; i < daysSoFar; i++) {
      const d = new Date(startOfYear);
      d.setDate(d.getDate() + i);
      quartersMap[quarterKey(d.toISOString().slice(0, 10))] = true;
    }
    const totalQuarters = Object.keys(quartersMap).length;
    let completedQuarters = 0;
    Object.keys(quartersMap).forEach(qk => {
      const occ = state.weeklyOccurrences[`${sub.id}_${qk}`] || [];
      if (occ.length >= target) completedQuarters++;
    });
    return { pace: totalQuarters ? Math.round(completedQuarters / totalQuarters * 100) : 0, completed: completedQuarters, due: totalQuarters, unit: "quarters" };
  }
  return { pace: 0, completed: 0, due: 0, unit: "days" };
}

function scoreCategory(catKey) {
  const cat = CATEGORIES[catKey];
  const subScores = cat.subs.map(s => scoreSubcategory(catKey, s).pace);
  return subScores.length ? Math.round(subScores.reduce((a, b) => a + b, 0) / subScores.length) : 0;
}

// ---------- VIEW SWITCHING ----------

function setActiveTab(view) {
  currentView = view;
  document.querySelectorAll(".nav-btn").forEach(t => t.classList.toggle("active", t.dataset.view === view));
  ["radar", "log", "spiritual", "gym", "journal", "appointments", "data"].forEach(v => {
    const elm = document.getElementById("view-" + v);
    if (elm) elm.style.display = (v === view) ? "block" : "none";
  });
  if (view === "radar") renderRadar();
  if (view === "log") renderLog();
  if (view === "spiritual") renderSpiritual();
  if (view === "gym") renderGym();
  if (view === "journal") renderJournal();
  if (view === "appointments") renderAppointments();
  if (view === "data") renderData();
}

// ---------- TIME-OF-DAY GREETING ----------

function timeGreeting() {
  const h = new Date().getHours();
  if (h < 12) return "Good morning";
  if (h < 18) return "Good afternoon";
  return "Good evening";
}

// ---------- RADAR VIEW ----------

function renderRadar() {
  const root = document.getElementById("view-radar");
  root.innerHTML = "";
  
  // LOW-DAY MODE: simplified UI
  if (state.lowDayMode) {
    renderLowDayMode(root);
    return;
  }
  
  const catKeys = Object.keys(CATEGORIES);
  const scores = catKeys.map(k => scoreCategory(k));
  const overallAvg = Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);

  // ===== TODAY DIRECTION (NEW IN v1.4) =====
  renderTodayDirection(root);
  
  // ===== QUICK LOG (NEW IN v1.4) =====
  renderQuickLog(root);

  // ===== AT-A-GLANCE STATS =====
  const statsCard = el("div", { class: "surface" });
  statsCard.appendChild(el("p", { class: "eyebrow" }, "At a glance"));
  const grid = el("div", { class: "grid-3" });
  grid.appendChild(metricCard("Pace", overallAvg + "%"));
  grid.appendChild(metricCard("Days logged", Object.keys(state.logs).length.toString()));
  grid.appendChild(metricCard("Bible", computeBibleCompletion() + "%"));
  statsCard.appendChild(grid);
  root.appendChild(statsCard);

  // RADAR CHART
  const chartCard = el("div", { class: "surface" });
  chartCard.appendChild(el("p", { class: "eyebrow" }, "Five categories"));
  const wrap = el("div", { style: "position: relative; width: 100%; height: 320px; margin: 0 -8px;" });
  const canvas = el("canvas", { id: "radarCanvas", role: "img", "aria-label": "Radar chart" });
  wrap.appendChild(canvas);
  chartCard.appendChild(wrap);
  root.appendChild(chartCard);

  // PREMIUM CATEGORY CARDS
  catKeys.forEach((k, idx) => {
    const cat = CATEGORIES[k];
    const score = scores[idx];
    const card = el("div", {
      class: "cat-card",
      onClick: () => { zoomCategory = (zoomCategory === k) ? null : k; renderRadar(); }
    });
    
    const head = el("div", { class: "cat-card-head" });
    
    const info = el("div", { class: "cat-card-info" });
    const nameEl = el("p", { class: "cat-card-name" });
    nameEl.appendChild(el("span", { class: "cat-dot", style: `background: ${cat.color};` }));
    nameEl.appendChild(document.createTextNode(cat.name));
    info.appendChild(nameEl);
    info.appendChild(el("p", { class: "cat-card-meta" }, `${cat.subs.length} sub-categor${cat.subs.length !== 1 ? "ies" : "y"}`));
    head.appendChild(info);
    
    head.appendChild(el("span", { class: "cat-card-score" }, score + "%"));
    card.appendChild(head);

    const bar = el("div", { class: "bar-bg" });
    bar.appendChild(el("div", { class: "bar-fill" }));
    bar.querySelector(".bar-fill").style.width = score + "%";
    card.appendChild(bar);

    if (zoomCategory === k) {
      const expanded = el("div", { class: "cat-expanded" });
      cat.subs.forEach(sub => {
        const ss = scoreSubcategory(k, sub);
        const row = el("div", { class: "list-row" });
        const lwrap = el("div", { style: "flex: 1; min-width: 0;" });
        lwrap.appendChild(el("p", { class: "subcat-name" }, sub.name));
        lwrap.appendChild(el("p", { class: "subcat-target" }, sub.target));
        row.appendChild(lwrap);
        const right = el("div", { style: "text-align: right; min-width: 80px;" });
        right.appendChild(el("p", { style: "margin: 0; font-weight: 700; font-size: 16px; letter-spacing: -0.025em; font-feature-settings: 'tnum' on;" }, ss.pace + "%"));
        right.appendChild(el("p", { class: "tiny", style: "margin: 0;" }, `${ss.completed}/${ss.due} ${ss.unit}`));
        row.appendChild(right);
        expanded.appendChild(row);
      });
      card.appendChild(expanded);
    }
    root.appendChild(card);
  });
  
  // ===== LOW-DAY TOGGLE =====
  const lowDayCard = el("div", { class: "surface", style: "text-align: center;" });
  lowDayCard.appendChild(el("p", { class: "subtle", style: "margin-bottom: 10px; font-size: 12px;" }, "Having a hard day?"));
  lowDayCard.appendChild(el("button", { class: "btn btn-sm", onClick: () => { state.lowDayMode = true; saveData(); renderRadar(); showToast("Low-day mode on. Just the essentials."); } }, "Switch to softer day"));
  root.appendChild(lowDayCard);

  // Build chart with premium styling
  setTimeout(() => {
    if (chartInstance) { try { chartInstance.destroy(); } catch (e) {} chartInstance = null; }
    const c = document.getElementById("radarCanvas");
    if (!c || typeof Chart === "undefined") return;
    const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    const ctx2d = c.getContext("2d");
    const gradient = ctx2d.createRadialGradient(c.width / 2, c.height / 2, 0, c.width / 2, c.height / 2, c.width / 2);
    gradient.addColorStop(0, isDark ? "rgba(14, 136, 98, 0.35)" : "rgba(5, 95, 67, 0.20)");
    gradient.addColorStop(1, isDark ? "rgba(14, 136, 98, 0.05)" : "rgba(5, 95, 67, 0.04)");
    
    chartInstance = new Chart(c, {
      type: "radar",
      data: {
        labels: catKeys.map(k => {
          const n = CATEGORIES[k].name;
          if (n === "Christian Motivation Station") return "Podcast";
          if (n === "Family & Relationships") return "Family";
          if (n === "Mental & Emotional") return "Mental";
          return n.split(" ")[0];
        }),
        datasets: [{
          label: "Pace",
          data: scores,
          backgroundColor: gradient,
          borderColor: isDark ? "#0E8862" : "#055f43",
          borderWidth: 2,
          pointBackgroundColor: catKeys.map(k => CATEGORIES[k].color),
          pointBorderColor: isDark ? "#18181A" : "#FFFFFF",
          pointBorderWidth: 2,
          pointRadius: 5,
          pointHoverRadius: 8,
          tension: 0.05
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: { duration: 700, easing: "easeOutCubic" },
        scales: {
          r: {
            beginAtZero: true, max: 100,
            ticks: {
              stepSize: 25, font: { size: 10, weight: 600, family: "Inter" },
              color: isDark ? "#545452" : "#B8B8B2",
              backdropColor: "transparent"
            },
            pointLabels: { font: { size: 12, weight: 700, family: "Inter" }, color: isDark ? "#C4C4C0" : "#4A4A48" },
            grid: { color: isDark ? "rgba(255,255,255,0.05)" : "rgba(10,10,11,0.05)" },
            angleLines: { color: isDark ? "rgba(255,255,255,0.05)" : "rgba(10,10,11,0.05)" }
          }
        },
        plugins: { legend: { display: false } }
      }
    });
  }, 50);
}

function metricCard(label, value) {
  const c = el("div", { class: "metric" });
  c.appendChild(el("p", { class: "metric-label" }, label));
  c.appendChild(el("p", { class: "metric-value" }, value));
  return c;
}

// ============================================
// TODAY DIRECTION (v1.4)
// ============================================

function renderTodayDirection(root) {
  const today = todayStr();
  state.todayDirection[today] = state.todayDirection[today] || { focus: [], focusDone: [] };
  const direction = state.todayDirection[today];
  const prompt = getTodayPrompt();
  const flow = state.guidedFlow[today] || {};
  
  const card = el("div", { class: "today-card" });
  card.appendChild(el("p", { class: "today-card-eyebrow" }, "Today · " + fmtDate(today)));
  card.appendChild(el("p", { class: "today-card-headline" }, timeGreeting() + ", Don"));
  
  // Focus list
  const focusEyebrow = el("p", { class: "eyebrow", style: "margin: 14px 0 8px; display: flex; align-items: center; justify-content: space-between;" });
  focusEyebrow.appendChild(document.createTextNode("Focus today"));
  focusEyebrow.appendChild(el("button", {
    class: "btn-ghost",
    style: "padding: 2px 10px; font-size: 11px; text-transform: none; letter-spacing: 0;",
    onClick: () => openFocusEditModal(today)
  }, direction.focus.length ? "Edit" : "+ Add"));
  card.appendChild(focusEyebrow);
  
  const focusList = el("div", { class: "focus-list" });
  if (direction.focus.length === 0) {
    focusList.appendChild(el("div", { class: "focus-empty" }, "Tap + Add to set up to 2 things you want to do today."));
  } else {
    direction.focus.forEach((item, i) => {
      const done = direction.focusDone[i];
      const focusEl = el("div", {
        class: "focus-item" + (done ? " done" : ""),
        onClick: () => {
          direction.focusDone[i] = !direction.focusDone[i];
          saveData();
          renderRadar();
        }
      });
      focusEl.appendChild(el("div", { class: "focus-checkbox" }));
      focusEl.appendChild(el("div", { class: "focus-text" }, item));
      focusList.appendChild(focusEl);
    });
  }
  card.appendChild(focusList);
  
  // Spiritual prompt
  card.appendChild(el("p", { class: "eyebrow", style: "margin: 22px 0 0;" }, "Spiritual Prompt · Day " + (getPlanDayIndex() + 1)));
  
  const sb = el("div", { class: "scripture-block" });
  sb.appendChild(el("p", { class: "scripture-passage" }, prompt.passage));
  sb.appendChild(el("p", { class: "reflection-q" }, prompt.reflection));
  card.appendChild(sb);
  
  const actions = el("div", { class: "today-actions" });
  if (flow.completed) {
    actions.appendChild(el("span", { class: "micro-cue" }, "Completed today"));
    actions.appendChild(el("button", { class: "btn-ghost", onClick: () => setActiveTab("spiritual") }, "Review →"));
  } else {
    actions.appendChild(el("button", { class: "btn btn-primary btn-sm", onClick: () => setActiveTab("spiritual") }, "Open guided flow →"));
  }
  card.appendChild(actions);
  
  root.appendChild(card);
}

function openFocusEditModal(date) {
  state.todayDirection[date] = state.todayDirection[date] || { focus: [], focusDone: [] };
  const direction = state.todayDirection[date];
  const wrap = el("div");
  wrap.appendChild(modalHeader("Focus today"));
  wrap.appendChild(el("p", { class: "subtle", style: "margin-bottom: 14px;" }, "Up to 2 things. One sentence each. Make them concrete."));
  
  wrap.appendChild(el("label", { class: "field-label" }, "Focus 1"));
  const f1 = el("input", { type: "text", placeholder: "e.g. Pray before phone use" });
  if (direction.focus[0]) f1.value = direction.focus[0];
  wrap.appendChild(f1);
  
  wrap.appendChild(el("label", { class: "field-label", style: "margin-top: 12px;" }, "Focus 2 (optional)"));
  const f2 = el("input", { type: "text", placeholder: "e.g. Walk Hugo before lunch" });
  if (direction.focus[1]) f2.value = direction.focus[1];
  wrap.appendChild(f2);
  
  const row = el("div", { style: "display: flex; gap: 8px; margin-top: 1rem; justify-content: flex-end;" });
  row.appendChild(el("button", { class: "btn", onClick: () => closeModal() }, "Cancel"));
  row.appendChild(el("button", { class: "btn btn-primary", onClick: () => {
    const items = [], dones = [];
    if (f1.value.trim()) { items.push(f1.value.trim()); dones.push(direction.focusDone[0] || false); }
    if (f2.value.trim()) { items.push(f2.value.trim()); dones.push(direction.focusDone[1] || false); }
    state.todayDirection[date] = { focus: items, focusDone: dones };
    saveData();
    closeModal();
    renderRadar();
  }}, "Save"));
  wrap.appendChild(row);
  openModal(wrap);
  setTimeout(() => f1.focus(), 100);
}

// ============================================
// QUICK LOG (v1.4)
// ============================================

function renderQuickLog(root) {
  const today = todayStr();
  const card = el("div", { class: "quick-log" });
  card.appendChild(el("p", { class: "eyebrow", style: "margin-bottom: 4px;" }, "Quick log"));
  card.appendChild(el("p", { class: "subtle", style: "margin: 0;" }, "One tap. Less than 10 seconds."));
  
  const grid = el("div", { class: "quick-log-grid" });
  
  // Worship (weekly)
  const worshipSub = CATEGORIES.spiritual.subs.find(s => s.id === "worship");
  const worshipKey = `worship_${isoWeek(today)}`;
  const worshipOcc = state.weeklyOccurrences[worshipKey] || [];
  const worshipDoneToday = worshipOcc.some(o => o.date === today);
  const worshipTile = el("button", {
    class: "quick-tile" + (worshipDoneToday ? " done" : ""),
    onClick: () => {
      if (worshipDoneToday) {
        const filtered = worshipOcc.filter(o => o.date !== today);
        if (filtered.length === 0) delete state.weeklyOccurrences[worshipKey];
        else state.weeklyOccurrences[worshipKey] = filtered;
        saveData();
      } else {
        addOccurrence("worship", worshipSub, today);
      }
      renderRadar();
    }
  });
  worshipTile.appendChild(el("span", { class: "quick-tile-label" }, "Worship today"));
  worshipTile.appendChild(el("span", { class: "quick-tile-status" }));
  grid.appendChild(worshipTile);
  
  // Mood
  const moodSet = state.moods[today] != null;
  const moodTile = el("button", {
    class: "quick-tile" + (moodSet ? " done" : ""),
    onClick: () => openMoodModal(today)
  });
  moodTile.appendChild(el("span", { class: "quick-tile-label" }, moodSet ? `Mood: ${state.moods[today]}/10` : "Log mood"));
  moodTile.appendChild(el("span", { class: "quick-tile-status" }));
  grid.appendChild(moodTile);
  
  // Morning devotion
  const mdLog = getLog("morning_devotion", today);
  const mdDone = mdLog && mdLog.status === "complete";
  const mdTile = el("button", {
    class: "quick-tile" + (mdDone ? " done" : ""),
    onClick: () => {
      if (mdDone) clearLog("morning_devotion", today);
      else setLog("morning_devotion", today, "complete");
      renderRadar();
    }
  });
  mdTile.appendChild(el("span", { class: "quick-tile-label" }, "Morning devotion"));
  mdTile.appendChild(el("span", { class: "quick-tile-status" }));
  grid.appendChild(mdTile);
  
  // Evening devotion
  const edLog = getLog("evening_devotion", today);
  const edDone = edLog && edLog.status === "complete";
  const edTile = el("button", {
    class: "quick-tile" + (edDone ? " done" : ""),
    onClick: () => {
      if (edDone) clearLog("evening_devotion", today);
      else setLog("evening_devotion", today, "complete");
      renderRadar();
    }
  });
  edTile.appendChild(el("span", { class: "quick-tile-label" }, "Evening devotion"));
  edTile.appendChild(el("span", { class: "quick-tile-status" }));
  grid.appendChild(edTile);
  
  // Hugo walk (yours)
  const hyLog = getLog("hugo_yours", today);
  const hyDone = hyLog && hyLog.status === "complete";
  const hyTile = el("button", {
    class: "quick-tile" + (hyDone ? " done" : ""),
    onClick: () => {
      if (hyDone) clearLog("hugo_yours", today);
      else setLog("hugo_yours", today, "complete");
      renderRadar();
    }
  });
  hyTile.appendChild(el("span", { class: "quick-tile-label" }, "Walked Hugo"));
  hyTile.appendChild(el("span", { class: "quick-tile-status" }));
  grid.appendChild(hyTile);
  
  // Medication
  const medLog = getLog("medication", today);
  const medDone = medLog && medLog.status === "complete";
  const medTile = el("button", {
    class: "quick-tile" + (medDone ? " done" : ""),
    onClick: () => {
      if (medDone) clearLog("medication", today);
      else setLog("medication", today, "complete");
      renderRadar();
    }
  });
  medTile.appendChild(el("span", { class: "quick-tile-label" }, "Medication"));
  medTile.appendChild(el("span", { class: "quick-tile-status" }));
  grid.appendChild(medTile);
  
  card.appendChild(grid);
  card.appendChild(el("p", { class: "tiny", style: "margin: 12px 0 0; text-align: center;" }, "Open the Log tab for full daily detail."));
  root.appendChild(card);
}

function openMoodModal(date) {
  const wrap = el("div");
  wrap.appendChild(modalHeader("How are you today?"));
  wrap.appendChild(el("p", { class: "subtle", style: "margin-bottom: 14px;" }, "Tap a number from 1 (low) to 10 (great)."));
  
  const moodRow = el("div", { class: "mood-row" });
  for (let i = 1; i <= 10; i++) {
    const isActive = state.moods[date] === i;
    moodRow.appendChild(el("button", {
      class: "mood-btn" + (isActive ? " active" : ""),
      onClick: () => {
        state.moods[date] = i;
        saveData();
        closeModal();
        showToast("Mood logged");
        if (currentView === "radar") renderRadar();
        if (currentView === "log") renderLog();
      }
    }, i.toString()));
  }
  wrap.appendChild(moodRow);
  
  const row = el("div", { style: "display: flex; gap: 8px; margin-top: 1rem; justify-content: flex-end;" });
  row.appendChild(el("button", { class: "btn", onClick: () => closeModal() }, "Cancel"));
  wrap.appendChild(row);
  openModal(wrap);
}

// ============================================
// LOW-DAY MODE (v1.4)
// ============================================

function renderLowDayMode(root) {
  const today = todayStr();
  const prompt = getTodayPrompt();
  
  const banner = el("div", { class: "low-day-banner" });
  banner.appendChild(el("span", null, "Softer day mode"));
  banner.appendChild(el("button", { onClick: () => { state.lowDayMode = false; saveData(); renderRadar(); showToast("Welcome back to full mode."); } }, "Turn off"));
  root.appendChild(banner);
  
  const card = el("div", { class: "low-day-card" });
  card.appendChild(el("p", { class: "low-day-message" }, "It's a softer day. The Lord is gentle with the weary. You don't have to do everything. Pick one of these."));
  
  const actions = el("div", { class: "low-day-actions" });
  
  // PRAY
  actions.appendChild(el("button", {
    class: "low-day-action primary",
    onClick: () => {
      const w = el("div");
      w.appendChild(modalHeader("Pray"));
      w.appendChild(el("p", { class: "scripture-passage", style: "margin-bottom: 8px;" }, prompt.passage));
      w.appendChild(el("p", { class: "reflection-q", style: "margin-bottom: 14px;" }, prompt.reflection));
      w.appendChild(el("p", { class: "prayer-prompt", style: "margin-bottom: 14px;" }, prompt.prayer));
      const r = el("div", { style: "display: flex; gap: 8px; margin-top: 1rem; justify-content: flex-end;" });
      r.appendChild(el("button", { class: "btn", onClick: () => closeModal() }, "Close"));
      r.appendChild(el("button", { class: "btn btn-primary", onClick: () => {
        state.guidedFlow[today] = state.guidedFlow[today] || {};
        state.guidedFlow[today].prayed = true;
        saveData();
        closeModal();
        showToast("The Lord hears.");
        renderRadar();
      }}, "I prayed"));
      w.appendChild(r);
      openModal(w);
    }
  }, "Pray"));
  
  // ONE TASK
  state.todayDirection[today] = state.todayDirection[today] || { focus: [], focusDone: [] };
  const direction = state.todayDirection[today];
  const oneTask = direction.focus[0] || null;
  if (oneTask) {
    actions.appendChild(el("button", {
      class: "low-day-action",
      onClick: () => {
        direction.focusDone[0] = true;
        state.todayDirection[today] = direction;
        saveData();
        showToast("Done is enough.");
        renderRadar();
      }
    }, direction.focusDone[0] ? "✓ " + oneTask : oneTask));
  } else {
    actions.appendChild(el("button", {
      class: "low-day-action",
      onClick: () => openFocusEditModal(today)
    }, "+ Pick one task"));
  }
  
  // MOOD
  const moodSet = state.moods[today] != null;
  actions.appendChild(el("button", {
    class: "low-day-action",
    onClick: () => openMoodModal(today)
  }, moodSet ? `Mood logged: ${state.moods[today]}/10` : "Log mood"));
  
  card.appendChild(actions);
  root.appendChild(card);
  
  root.appendChild(el("p", { 
    class: "subtle", 
    style: "text-align: center; margin: 16px 12px; font-size: 12px; font-style: italic; line-height: 1.6;" 
  }, '"Come to me, all who labour and are heavy laden, and I will give you rest." — Matthew 11:28'));
}

function emptyState(iconName, message) {
  const wrap = el("div", { class: "empty-state" });
  const iconWrap = el("div", { class: "empty-state-icon" });
  iconWrap.innerHTML = svgIcon(iconName);
  iconWrap.querySelector("svg").style.width = "100%";
  iconWrap.querySelector("svg").style.height = "100%";
  wrap.appendChild(iconWrap);
  wrap.appendChild(el("p", { style: "margin: 0;" }, message));
  return wrap;
}

// ---------- LOG VIEW ----------

function renderLog() {
  const root = document.getElementById("view-log");
  root.innerHTML = "";

  // Date selector
  const dateCard = el("div", { class: "surface" });
  dateCard.appendChild(el("p", { class: "eyebrow" }, "Logging for"));
  const bar = el("div", { style: "display: flex; gap: 8px; align-items: center;" });
  const dateInput = el("input", { type: "date", value: logDate, onChange: (e) => { logDate = e.target.value; renderLog(); } });
  dateInput.style.flex = "1";
  bar.appendChild(dateInput);
  bar.appendChild(el("button", { class: "btn btn-sm", onClick: () => { logDate = todayStr(); renderLog(); } }, "Today"));
  dateCard.appendChild(bar);
  dateCard.appendChild(el("p", { class: "subtle", style: "margin: 8px 0 0;" }, fmtDateLong(logDate)));
  root.appendChild(dateCard);

  // Quick capture
  const quick = el("div", { class: "surface" });
  quick.appendChild(el("p", { class: "eyebrow" }, "Quick capture"));
  const qb = el("div", { style: "display: flex; gap: 6px; flex-wrap: wrap;" });
  qb.appendChild(el("button", { class: "btn btn-sm", onClick: openIdeaCaptureModal }, "+ Idea"));
  qb.appendChild(el("button", { class: "btn btn-sm", onClick: openImpulseModal }, "+ Impulse"));
  qb.appendChild(el("button", { class: "btn btn-sm", onClick: openSensoryModal }, "+ Sensory"));
  qb.appendChild(el("button", { class: "btn btn-sm", onClick: () => setActiveTab("gym") }, "Gym →"));
  qb.appendChild(el("button", { class: "btn btn-sm", onClick: openBibleLogModal }, "+ Scripture"));
  qb.appendChild(el("button", { class: "btn btn-sm", onClick: openGratitudeModal }, "+ Gratitude"));
  quick.appendChild(qb);
  root.appendChild(quick);

  // Categories with premium styling
  Object.keys(CATEGORIES).forEach(k => {
    const cat = CATEGORIES[k];
    const card = el("div", { class: "surface" });
    
    // Category header with small dot
    const catHead = el("div", { style: "display: flex; align-items: center; gap: 10px; margin-bottom: 16px;" });
    catHead.appendChild(el("span", { class: "cat-dot", style: `background: ${cat.color};` }));
    catHead.appendChild(el("h3", { class: "h-2" }, cat.name));
    card.appendChild(catHead);
    
    cat.subs.forEach(sub => {
      const isWeekly = sub.freq === "weekly" || sub.freq === "monthly" || sub.freq === "quarterly";
      const row = el("div", { class: "subcat-row" });
      
      const headRow = el("div", { class: "subcat-head" });
      const nameWrap = el("div", { class: "subcat-name-wrap" });
      nameWrap.appendChild(el("p", { class: "subcat-name" }, sub.name));
      nameWrap.appendChild(el("p", { class: "subcat-target" }, sub.target));
      headRow.appendChild(nameWrap);
      row.appendChild(headRow);

      if (isWeekly && !sub.externalLog) {
        const periodKey = getPeriodKey(sub.freq, logDate);
        const occ = state.weeklyOccurrences[`${sub.id}_${periodKey}`] || [];
        const target = sub.weeklyTarget || sub.monthlyTarget || sub.quarterlyTarget || 1;
        const periodLabel = sub.freq === "weekly" ? "this week" : sub.freq === "monthly" ? "this month" : "this quarter";
        
        const progressRow = el("div", { class: "weekly-target" });
        const pipsWrap = el("div", { class: "weekly-progress" });
        for (let i = 0; i < target; i++) {
          pipsWrap.appendChild(el("div", { class: "weekly-pip" + (i < occ.length ? " filled" : "") }));
        }
        progressRow.appendChild(pipsWrap);
        progressRow.appendChild(el("span", { class: "weekly-count" }, `${occ.length} of ${target} ${periodLabel}`));
        row.appendChild(progressRow);
        
        const btnRow = el("div", { style: "display: flex; gap: 6px;" });
        const isMet = occ.length >= target;
        btnRow.appendChild(el("button", {
          class: "btn-occurrence" + (isMet ? " complete" : ""),
          onClick: () => {
            addOccurrence(sub.id, sub, logDate);
            renderLog();
            showToast("Logged");
          }
        }, "+ Did it today"));
        if (occ.length > 0) {
          btnRow.appendChild(el("button", {
            class: "btn btn-sm",
            onClick: () => {
              if (confirm("Remove the most recent occurrence?")) {
                removeLastOccurrence(sub.id, sub, logDate);
                renderLog();
              }
            }
          }, "−"));
        }
        row.appendChild(btnRow);
        
        if (occ.length > 0) {
          row.appendChild(el("p", { class: "tiny", style: "margin: 0;" }, "Recent: " + occ.slice(-3).map(o => fmtDateShort(o.date)).join(", ")));
        }
      } else if (sub.externalLog === "gym") {
        const sessions = countGymThisWeek(logDate);
        const target = sub.weeklyTarget || 4;
        
        const progressRow = el("div", { class: "weekly-target" });
        const pipsWrap = el("div", { class: "weekly-progress" });
        for (let i = 0; i < target; i++) {
          pipsWrap.appendChild(el("div", { class: "weekly-pip" + (i < sessions ? " filled" : "") }));
        }
        progressRow.appendChild(pipsWrap);
        progressRow.appendChild(el("span", { class: "weekly-count" }, `${sessions} of ${target} this week`));
        row.appendChild(progressRow);
        
        row.appendChild(el("button", {
          class: "btn btn-sm",
          style: "align-self: flex-start;",
          onClick: () => setActiveTab("gym")
        }, "Open Gym tab →"));
      } else {
        const log = getLog(sub.id, logDate);
        const btnRow = el("div", { class: "status-btns" });
        STATUSES.forEach(stat => {
          const isActive = log && log.status === stat.id;
          const btn = el("button", {
            class: "status-btn" + (isActive ? " " + stat.className : ""),
            onClick: () => handleStatusClick(sub.id, logDate, stat)
          }, stat.label);
          btnRow.appendChild(btn);
        });
        row.appendChild(btnRow);
        if (log && log.reason) {
          row.appendChild(el("p", { class: "tiny", style: "margin: 0; padding-left: 10px; border-left: 2px solid var(--border); line-height: 1.5;" }, "Reason: " + log.reason));
        }
      }
      
      card.appendChild(row);
    });
    root.appendChild(card);
  });

  // ADHD signs
  const adhdCard = el("div", { class: "surface" });
  adhdCard.appendChild(el("p", { class: "eyebrow" }, "ADHD behavioural signs"));
  adhdCard.appendChild(el("p", { class: "subtle", style: "margin-bottom: 10px;" }, "Tap any that surfaced today."));
  ADHD_DIMENSIONS.forEach(dim => {
    const signKey = `${dim.id}_${logDate}`;
    const existing = state.adhdSigns[signKey];
    const row = el("div", { class: "adhd-row" });
    const head = el("div", { class: "adhd-head" });
    const info = el("div", { class: "adhd-info" });
    info.appendChild(el("p", { class: "adhd-info-name" }, dim.name));
    info.appendChild(el("p", { class: "adhd-info-desc" }, dim.desc));
    head.appendChild(info);
    const tagBtn = el("button", {
      class: "btn btn-sm",
      style: existing ? "background: var(--bg-info); color: var(--text-info); border-color: transparent;" : "",
      onClick: () => {
        if (existing) { delete state.adhdSigns[signKey]; saveData(); renderLog(); }
        else openAdhdNoteModal(dim, logDate);
      }
    }, existing ? "✓ Surfaced" : "Surfaced?");
    head.appendChild(tagBtn);
    row.appendChild(head);
    if (existing && existing.note) {
      row.appendChild(el("p", { class: "tiny", style: "margin: 6px 0 0; line-height: 1.5;" }, existing.note));
    }
    adhdCard.appendChild(row);
  });
  root.appendChild(adhdCard);

  // Pointer to Journal tab (v1.4 - reflection moved out of Log)
  const jPointer = el("div", { class: "surface", style: "text-align: center;" });
  jPointer.appendChild(el("p", { class: "subtle", style: "margin-bottom: 8px;" }, "Reflection and journaling moved to its own tab."));
  jPointer.appendChild(el("button", { class: "btn btn-sm", onClick: () => setActiveTab("journal") }, "Open Journal →"));
  root.appendChild(jPointer);

  // Body, sleep, diet (kept in Log — these are fast quantitative inputs)
  const bmCard = el("div", { class: "surface" });
  bmCard.appendChild(el("p", { class: "eyebrow" }, "Body, sleep, diet"));
  const bg = el("div", { class: "grid-4" });
  bg.appendChild(numField("Weight (kg)", "weight", "bodyMetrics", 0.1, "102.9"));
  bg.appendChild(numField("Sleep (hrs)", "hours", "sleepMetrics", 0.1, "7.5"));
  bg.appendChild(numField("Calories", "calories", "dietLogs", 1, "2200"));
  bg.appendChild(numField("Protein (g)", "protein", "dietLogs", 1, "150"));
  bmCard.appendChild(bg);
  root.appendChild(bmCard);
}

function numField(label, key, store, step, placeholder) {
  const wrap = el("div");
  wrap.appendChild(el("label", { class: "field-label" }, label));
  const input = el("input", {
    type: "number", step: step.toString(), placeholder, inputmode: step < 1 ? "decimal" : "numeric",
    onInput: (e) => {
      state[store][logDate] = state[store][logDate] || {};
      state[store][logDate][key] = parseFloat(e.target.value) || null;
      saveData();
    }
  });
  if (state[store][logDate] && state[store][logDate][key] != null) input.value = state[store][logDate][key];
  wrap.appendChild(input);
  return wrap;
}

function countGymThisWeek(date) {
  const wk = isoWeek(date);
  let count = 0;
  Object.keys(state.gymSessions).forEach(d => {
    if (isoWeek(d) === wk && state.gymSessions[d].length > 0) count++;
  });
  return count;
}

// ---------- STATUS HANDLING ----------

function handleStatusClick(subId, date, stat) {
  if (stat.requireReason) {
    openReasonModal(stat.label, (reason) => {
      if (reason && reason.trim()) {
        setLog(subId, date, stat.id, reason.trim());
        renderLog();
        showToast("Logged");
      }
    });
  } else {
    const existing = getLog(subId, date);
    if (existing && existing.status === stat.id) clearLog(subId, date);
    else setLog(subId, date, stat.id);
    renderLog();
  }
}

// ---------- MODALS ----------

function openReasonModal(label, callback) {
  const wrap = el("div");
  wrap.appendChild(modalHeader(label));
  wrap.appendChild(el("p", { class: "subtle", style: "margin-bottom: 12px;" }, "Reason required."));
  const ta = el("textarea", { placeholder: "Why?" });
  wrap.appendChild(ta);
  const row = el("div", { style: "display: flex; gap: 8px; margin-top: 1rem; justify-content: flex-end;" });
  row.appendChild(el("button", { class: "btn", onClick: () => closeModal() }, "Cancel"));
  row.appendChild(el("button", { class: "btn btn-primary", onClick: () => {
    const v = ta.value.trim();
    if (!v) { showToast("Reason required"); return; }
    closeModal();
    callback(v);
  }}, "Save"));
  wrap.appendChild(row);
  openModal(wrap);
  setTimeout(() => ta.focus(), 100);
}

function openIdeaCaptureModal() {
  const wrap = el("div");
  wrap.appendChild(modalHeader("Capture podcast idea"));
  const ta = el("textarea", { placeholder: "What's the idea?" });
  wrap.appendChild(ta);
  const row = el("div", { style: "display: flex; gap: 8px; margin-top: 1rem; justify-content: flex-end;" });
  row.appendChild(el("button", { class: "btn", onClick: () => closeModal() }, "Cancel"));
  row.appendChild(el("button", { class: "btn btn-primary", onClick: () => {
    const v = ta.value.trim();
    if (!v) { showToast("Type something"); return; }
    state.podcastIdeas.push({ idea: v, ts: Date.now() });
    // Add weekly occurrence for idea_capture
    const ideaSub = CATEGORIES.podcast.subs.find(s => s.id === "idea_capture");
    addOccurrence("idea_capture", ideaSub, todayStr());
    saveData();
    closeModal();
    showToast("Idea captured");
    if (currentView === "log") renderLog();
  }}, "Save"));
  wrap.appendChild(row);
  openModal(wrap);
  setTimeout(() => ta.focus(), 100);
}

function openImpulseModal() {
  const wrap = el("div");
  wrap.appendChild(modalHeader("Impulse pause"));
  wrap.appendChild(el("p", { class: "subtle", style: "margin-bottom: 12px;" }, "What was the impulse? Did you pause?"));
  const ta = el("textarea", { placeholder: "Notes (optional)" });
  wrap.appendChild(ta);
  const row = el("div", { style: "display: flex; gap: 8px; margin-top: 1rem; justify-content: flex-end;" });
  row.appendChild(el("button", { class: "btn", onClick: () => closeModal() }, "Cancel"));
  row.appendChild(el("button", { class: "btn btn-primary", onClick: () => {
    setLog("impulse_pause", logDate, "complete", ta.value.trim());
    closeModal();
    showToast("Impulse pause logged");
    if (currentView === "log") renderLog();
  }}, "Save"));
  wrap.appendChild(row);
  openModal(wrap);
}

function openSensoryModal() {
  const wrap = el("div");
  wrap.appendChild(modalHeader("Sensory event"));
  const ta = el("textarea", { placeholder: "Source, intensity, recovery taken or not" });
  wrap.appendChild(ta);
  const row = el("div", { style: "display: flex; gap: 8px; margin-top: 1rem; justify-content: flex-end;" });
  row.appendChild(el("button", { class: "btn", onClick: () => closeModal() }, "Cancel"));
  row.appendChild(el("button", { class: "btn btn-primary", onClick: () => {
    setLog("sensory_recovery", logDate, "complete", ta.value.trim());
    closeModal();
    showToast("Sensory event logged");
    if (currentView === "log") renderLog();
  }}, "Save"));
  wrap.appendChild(row);
  openModal(wrap);
}

function openAdhdNoteModal(dim, date) {
  const wrap = el("div");
  wrap.appendChild(modalHeader(dim.name));
  wrap.appendChild(el("p", { class: "subtle", style: "margin-bottom: 12px;" }, dim.desc));
  const ta = el("textarea", { placeholder: "Optional notes" });
  wrap.appendChild(ta);
  const row = el("div", { style: "display: flex; gap: 8px; margin-top: 1rem; justify-content: flex-end;" });
  row.appendChild(el("button", { class: "btn", onClick: () => closeModal() }, "Cancel"));
  row.appendChild(el("button", { class: "btn btn-primary", onClick: () => {
    state.adhdSigns[`${dim.id}_${date}`] = { note: ta.value.trim(), ts: Date.now() };
    saveData();
    closeModal();
    showToast("Logged");
    renderLog();
  }}, "Save"));
  wrap.appendChild(row);
  openModal(wrap);
}

function openBibleLogModal() {
  const wrap = el("div");
  wrap.appendChild(modalHeader("Log Scripture reading"));
  wrap.appendChild(el("p", { class: "subtle", style: "margin-bottom: 12px;" }, "Examples: 'Romans 1-3', 'Hebrews 11', 'Romans 8:18-39'"));
  const input = el("input", { type: "text", placeholder: "What did you read?" });
  wrap.appendChild(input);
  wrap.appendChild(el("label", { class: "field-label", style: "margin-top: 12px;" }, "Optional commentary or notes"));
  const noteTa = el("textarea", { placeholder: "Reflections, key verse, application..." });
  wrap.appendChild(noteTa);
  const row = el("div", { style: "display: flex; gap: 8px; margin-top: 1rem; justify-content: flex-end;" });
  row.appendChild(el("button", { class: "btn", onClick: () => closeModal() }, "Cancel"));
  row.appendChild(el("button", { class: "btn btn-primary", onClick: () => {
    const v = input.value.trim();
    if (!v) { showToast("Type a passage"); return; }
    closeModal();
    parseBibleAndLog(v, logDate, noteTa.value.trim());
  }}, "Log"));
  wrap.appendChild(row);
  openModal(wrap);
  setTimeout(() => input.focus(), 100);
}

// ---------- GRATITUDE (NEW) ----------

function openGratitudeModal() {
  const existing = state.gratitude[logDate] || [];
  const wrap = el("div");
  wrap.appendChild(modalHeader("Daily gratitude"));
  wrap.appendChild(el("p", { class: "subtle", style: "margin-bottom: 12px;" }, "1 Thessalonians 5:18 — Give thanks in all circumstances. List anything you're thankful for today."));
  
  const list = el("div", { id: "grat-list", style: "margin-bottom: 12px;" });
  function refreshList() {
    list.innerHTML = "";
    if (existing.length === 0) {
      list.appendChild(el("p", { class: "empty-state", style: "padding: 1rem;" }, "Nothing yet for today."));
    }
    existing.forEach((item, idx) => {
      const r = el("div", { style: "display: flex; gap: 8px; align-items: center; padding: 8px 12px; background: var(--bg-soft); border-radius: var(--radius-md); margin-bottom: 6px;" });
      r.appendChild(el("p", { style: "flex: 1; margin: 0; font-size: 14px;" }, item));
      r.appendChild(el("button", { class: "btn btn-sm", onClick: () => { existing.splice(idx, 1); state.gratitude[logDate] = existing; saveData(); refreshList(); } }, "✕"));
      list.appendChild(r);
    });
  }
  refreshList();
  wrap.appendChild(list);
  
  const input = el("input", { type: "text", placeholder: "I'm thankful for..." });
  wrap.appendChild(input);
  
  const row = el("div", { style: "display: flex; gap: 8px; margin-top: 1rem; justify-content: flex-end;" });
  row.appendChild(el("button", { class: "btn", onClick: () => closeModal() }, "Done"));
  row.appendChild(el("button", { class: "btn btn-primary", onClick: () => {
    const v = input.value.trim();
    if (!v) return;
    existing.push(v);
    state.gratitude[logDate] = existing;
    saveData();
    input.value = "";
    refreshList();
    input.focus();
  }}, "+ Add"));
  wrap.appendChild(row);
  openModal(wrap);
  setTimeout(() => input.focus(), 100);
}

// ---------- BIBLE PARSER ----------

function parseBibleAndLog(input, date, notes) {
  const parts = input.split(/\s*(?:plus|and|\+|;|,)\s*/i);
  const parsed = [];
  parts.forEach(part => {
    const r = parseBiblePart(part.trim());
    if (r) parsed.push(...r);
  });
  if (parsed.length === 0) {
    showToast("Couldn't parse. Try 'Romans 1-3'");
    return;
  }
  parsed.forEach(p => {
    const bk = p.book.name;
    state.bible.firstPass[bk] = state.bible.firstPass[bk] || {};
    state.bible.totalReads[bk] = state.bible.totalReads[bk] || {};
    for (let ch = p.startCh; ch <= p.endCh; ch++) {
      state.bible.firstPass[bk][ch] = state.bible.firstPass[bk][ch] || { firstRead: date };
      state.bible.totalReads[bk][ch] = (state.bible.totalReads[bk][ch] || 0) + 1;
      // Save notes per chapter
      if (notes) {
        const noteKey = `${bk}_${ch}`;
        state.bibleNotes[noteKey] = state.bibleNotes[noteKey] || [];
        state.bibleNotes[noteKey].push({ note: notes, date, ts: Date.now() });
      }
    }
  });
  saveData();
  showToast(`Logged: ${parsed.map(p => `${p.book.abbrev} ${p.startCh}${p.endCh !== p.startCh ? "-" + p.endCh : ""}`).join(", ")}`);
  if (currentView === "spiritual") renderSpiritual();
  if (currentView === "log") renderLog();
}

function parseBiblePart(input) {
  if (!input) return null;
  const m = input.match(/^((?:[123]\s+)?(?:Song\s+of\s+Solomon|[A-Z][a-zA-Z]+))\s+(.+)$/);
  if (!m) return null;
  const book = findBook(m[1].trim());
  if (!book) return null;
  const ref = m[2].trim();
  let startCh, endCh;
  const sm = ref.match(/^(\d+)(?:-(\d+))?$/);
  if (sm) { startCh = parseInt(sm[1]); endCh = sm[2] ? parseInt(sm[2]) : startCh; }
  else {
    const vm = ref.match(/^(\d+):/);
    if (vm) { startCh = parseInt(vm[1]); endCh = startCh; } else return null;
  }
  if (startCh < 1 || endCh > book.chapters || startCh > endCh) return null;
  return [{ book, startCh, endCh }];
}

function findBook(name) {
  const n = name.toLowerCase().replace(/\s+/g, " ").trim();
  return BIBLE_BOOKS.find(b =>
    b.name.toLowerCase() === n || b.abbrev.toLowerCase() === n ||
    b.name.toLowerCase().startsWith(n) || n.startsWith(b.abbrev.toLowerCase())
  );
}

function computeBookCompletion(name) {
  const book = BIBLE_BOOKS.find(b => b.name === name);
  if (!book) return 0;
  const chs = state.bible.firstPass[name] || {};
  return Math.round(Object.keys(chs).length / book.chapters * 100);
}
function computeBibleCompletion() {
  let t = 0, d = 0;
  BIBLE_BOOKS.forEach(b => { t += b.chapters; d += Object.keys(state.bible.firstPass[b.name] || {}).length; });
  return Math.round(d / t * 100);
}
function computeTestamentCompletion(test) {
  let t = 0, d = 0;
  BIBLE_BOOKS.filter(b => b.testament === test).forEach(b => { t += b.chapters; d += Object.keys(state.bible.firstPass[b.name] || {}).length; });
  return Math.round(d / t * 100);
}

// ---------- SPIRITUAL VIEW (NEW: EXPANDED) ----------

let spiritualSubTab = "guided";

function renderSpiritual() {
  const root = document.getElementById("view-spiritual");
  root.innerHTML = "";
  
  // GUIDED FLOW IS DEFAULT (v1.4)
  if (spiritualSubTab === "bible" || spiritualSubTab === "gratitude" || spiritualSubTab === "theology" || spiritualSubTab === "prayer") {
    // User selected the library — render header + library section
    renderSpiritualLibraryHeader(root);
    if (spiritualSubTab === "bible") renderBibleSection(root);
    else if (spiritualSubTab === "gratitude") renderGratitudeSection(root);
    else if (spiritualSubTab === "theology") renderTheologySection(root);
    else if (spiritualSubTab === "prayer") renderPrayerSection(root);
    return;
  }
  
  // Default: guided flow
  renderGuidedFlow(root);
}

function renderSpiritualLibraryHeader(root) {
  const header = el("div", { class: "surface" });
  const headRow = el("div", { style: "display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;" });
  headRow.appendChild(el("p", { class: "eyebrow", style: "margin: 0;" }, "Spiritual Library"));
  headRow.appendChild(el("button", { class: "btn-ghost", style: "padding: 4px 10px; font-size: 12px; text-transform: none; letter-spacing: 0;", onClick: () => { spiritualSubTab = "guided"; renderSpiritual(); } }, "← Back to today"));
  header.appendChild(headRow);
  
  const tabBar = el("div", { class: "tab-toggle" });
  const tabs = [
    { id: "bible", label: "Bible" },
    { id: "gratitude", label: "Gratitude" },
    { id: "theology", label: "Theology" },
    { id: "prayer", label: "Prayer" }
  ];
  tabs.forEach(t => {
    tabBar.appendChild(el("button", {
      class: "tab-toggle-btn" + (spiritualSubTab === t.id ? " active" : ""),
      onClick: () => { spiritualSubTab = t.id; renderSpiritual(); }
    }, t.label));
  });
  header.appendChild(tabBar);
  root.appendChild(header);
}

function renderGuidedFlow(root) {
  const today = todayStr();
  const prompt = getTodayPrompt();
  state.guidedFlow[today] = state.guidedFlow[today] || { reflectionAnswer: "", prayed: false, completed: false };
  const flow = state.guidedFlow[today];
  
  // Top card: introduction
  const intro = el("div", { class: "surface" });
  const introHead = el("div", { style: "display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 10px;" });
  introHead.appendChild(el("p", { class: "eyebrow", style: "margin: 0;" }, "Today's guided flow"));
  introHead.appendChild(el("span", { class: "tiny", style: "font-weight: 600;" }, "Day " + (getPlanDayIndex() + 1) + " of " + READING_PLAN.length));
  intro.appendChild(introHead);
  intro.appendChild(el("p", { class: "h-2", style: "margin: 0 0 6px;" }, "Three steps. Take your time."));
  intro.appendChild(el("p", { class: "subtle", style: "margin: 0;" }, "Read · Reflect · Pray. Walk through Scripture together."));
  
  if (flow.completed) {
    intro.appendChild(el("div", { class: "flow-complete", style: "margin-top: 14px;" }, "✓ You completed today's flow. The Lord is faithful."));
  }
  root.appendChild(intro);
  
  // Step 1: Scripture
  const flowCard = el("div", { class: "guided-flow" });
  
  const step1 = el("div", { class: "flow-step" });
  const step1Label = el("p", { class: "flow-step-label" });
  step1Label.appendChild(el("span", { class: "flow-step-num" }, "1"));
  step1Label.appendChild(document.createTextNode("Read"));
  step1.appendChild(step1Label);
  step1.appendChild(el("p", { class: "scripture-passage", style: "margin: 0 0 10px;" }, prompt.passage));
  step1.appendChild(el("p", { class: "flow-step-content italic" }, "Open your Bible (ESV) and read the passage above. Don't rush."));
  
  // Mark as read button
  const readBtn = el("button", {
    class: flow.scriptureRead ? "btn btn-sm" : "btn btn-primary btn-sm",
    onClick: () => {
      flow.scriptureRead = !flow.scriptureRead;
      // Also log Bible reading via parser if not already this chapter
      if (flow.scriptureRead) {
        try { parseBibleAndLog(prompt.passage, today, ""); } catch (e) {}
      }
      saveData();
      renderSpiritual();
    }
  }, flow.scriptureRead ? "✓ Read" : "Mark as read");
  step1.appendChild(readBtn);
  flowCard.appendChild(step1);
  
  // Step 2: Reflect
  const step2 = el("div", { class: "flow-step" });
  const step2Label = el("p", { class: "flow-step-label" });
  step2Label.appendChild(el("span", { class: "flow-step-num" }, "2"));
  step2Label.appendChild(document.createTextNode("Reflect"));
  step2.appendChild(step2Label);
  step2.appendChild(el("p", { class: "reflection-q", style: "margin-bottom: 14px;" }, prompt.reflection));
  
  const reflectionInput = el("textarea", {
    class: "flow-input",
    placeholder: "Your reflection (optional but encouraged)...",
    onInput: (e) => { flow.reflectionAnswer = e.target.value; saveData(); }
  });
  reflectionInput.value = flow.reflectionAnswer || "";
  step2.appendChild(reflectionInput);
  flowCard.appendChild(step2);
  
  // Step 3: Pray
  const step3 = el("div", { class: "flow-step" });
  const step3Label = el("p", { class: "flow-step-label" });
  step3Label.appendChild(el("span", { class: "flow-step-num" }, "3"));
  step3Label.appendChild(document.createTextNode("Pray"));
  step3.appendChild(step3Label);
  step3.appendChild(el("p", { class: "prayer-prompt", style: "margin: 0 0 14px;" }, prompt.prayer));
  
  const prayBtn = el("button", {
    class: flow.prayed ? "btn btn-sm" : "btn btn-primary btn-sm",
    onClick: () => {
      flow.prayed = !flow.prayed;
      saveData();
      renderSpiritual();
    }
  }, flow.prayed ? "✓ Prayed" : "I prayed");
  step3.appendChild(prayBtn);
  flowCard.appendChild(step3);
  
  root.appendChild(flowCard);
  
  // Completion + next steps
  if (flow.scriptureRead && flow.prayed && !flow.completed) {
    const completeCard = el("div", { class: "surface", style: "text-align: center;" });
    completeCard.appendChild(el("p", { class: "subtle", style: "margin-bottom: 12px;" }, "You've read and prayed. Mark the day complete?"));
    completeCard.appendChild(el("button", {
      class: "btn btn-primary",
      onClick: () => {
        flow.completed = true;
        // Mark morning_devotion complete for the day
        const md = getLog("morning_devotion", today);
        if (!md || md.status !== "complete") setLog("morning_devotion", today, "complete");
        saveData();
        renderSpiritual();
        showToast("Faithful in small things. Well done.");
      }
    }, "Complete today's flow"));
    root.appendChild(completeCard);
  }
  
  // Library access (secondary)
  const libCard = el("div", { class: "surface", style: "text-align: center;" });
  libCard.appendChild(el("p", { class: "tiny", style: "margin: 0 0 8px;" }, "Need something deeper today?"));
  const libRow = el("div", { style: "display: flex; gap: 6px; flex-wrap: wrap; justify-content: center;" });
  ["bible", "gratitude", "theology", "prayer"].forEach(t => {
    libRow.appendChild(el("button", { class: "btn btn-sm", onClick: () => { spiritualSubTab = t; renderSpiritual(); } }, t.charAt(0).toUpperCase() + t.slice(1)));
  });
  libCard.appendChild(libRow);
  root.appendChild(libCard);
}

function renderBibleSection(root) {
  const headerCard = el("div", { class: "surface" });
  headerCard.appendChild(el("p", { class: "eyebrow" }, "Bible coverage (ESV)"));
  const grid = el("div", { class: "grid-3" });
  grid.appendChild(metricCard("Whole", computeBibleCompletion() + "%"));
  grid.appendChild(metricCard("Old Test.", computeTestamentCompletion("OT") + "%"));
  grid.appendChild(metricCard("New Test.", computeTestamentCompletion("NT") + "%"));
  headerCard.appendChild(grid);
  headerCard.appendChild(el("button", { class: "btn btn-primary btn-block", style: "margin-top: 12px;", onClick: openBibleLogModal }, "+ Log Bible reading"));
  root.appendChild(headerCard);

  const otCard = el("div", { class: "surface" });
  otCard.appendChild(el("h3", { class: "h-2" }, "Old Testament"));
  otCard.appendChild(renderBookGrid("OT"));
  root.appendChild(otCard);

  const ntCard = el("div", { class: "surface" });
  ntCard.appendChild(el("h3", { class: "h-2" }, "New Testament"));
  ntCard.appendChild(renderBookGrid("NT"));
  root.appendChild(ntCard);

  // Re-reads
  const rereads = [];
  Object.keys(state.bible.totalReads).forEach(book => {
    Object.keys(state.bible.totalReads[book]).forEach(ch => {
      const c = state.bible.totalReads[book][ch];
      if (c > 1) rereads.push({ book, ch: parseInt(ch), count: c });
    });
  });
  rereads.sort((a, b) => b.count - a.count);
  if (rereads.length > 0) {
    const rrCard = el("div", { class: "surface" });
    rrCard.appendChild(el("h3", { class: "h-2" }, "Most re-read"));
    rereads.slice(0, 10).forEach(rr => {
      const row = el("div", { style: "display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 0.5px solid var(--border); font-size: 14px;" });
      row.appendChild(el("span", { style: "font-weight: 600;" }, `${rr.book} ${rr.ch}`));
      row.appendChild(el("span", { class: "ribbon" }, `${rr.count}× read`));
      rrCard.appendChild(row);
    });
    root.appendChild(rrCard);
  }
}

function renderBookGrid(testament) {
  const wrap = el("div", { class: "book-grid" });
  BIBLE_BOOKS.filter(b => b.testament === testament).forEach(book => {
    const pct = computeBookCompletion(book.name);
    const tile = el("div", {
      class: "book-tile",
      style: `background: ${getBookColor(pct)}; color: ${pct > 50 ? "white" : "var(--text)"};`,
      onClick: () => showBookDetails(book)
    });
    tile.appendChild(el("div", { style: "font-weight: 700;" }, book.abbrev));
    tile.appendChild(el("div", { style: "font-size: 10px; opacity: 0.85; margin-top: 2px;" }, pct + "%"));
    wrap.appendChild(tile);
  });
  return wrap;
}

function getBookColor(pct) {
  if (pct === 0) return "var(--bg-soft)";
  if (pct < 25) return "#C0DD97";
  if (pct < 50) return "#97C459";
  if (pct < 75) return "#639922";
  if (pct < 100) return "#3B6D11";
  return "#173404";
}

function showBookDetails(book) {
  const chs = state.bible.firstPass[book.name] || {};
  const reads = state.bible.totalReads[book.name] || {};
  const wrap = el("div");
  wrap.appendChild(modalHeader(book.name));
  wrap.appendChild(el("p", { class: "subtle", style: "margin-bottom: 12px;" }, `${Object.keys(chs).length} of ${book.chapters} chapters · ${computeBookCompletion(book.name)}%`));
  
  const chGrid = el("div", { style: "display: grid; grid-template-columns: repeat(auto-fit, minmax(40px, 1fr)); gap: 4px;" });
  for (let i = 1; i <= book.chapters; i++) {
    const done = chs[i];
    const readCount = reads[i] || 0;
    const noteKey = `${book.name}_${i}`;
    const hasNotes = (state.bibleNotes[noteKey] || []).length > 0;
    const tile = el("div", {
      style: `padding: 9px 4px; text-align: center; border-radius: 4px; font-size: 12px; font-weight: 600; cursor: pointer; ${done ? `background: ${getBookColor(100)}; color: white;` : `background: var(--bg-soft); color: var(--text-mute);`}`,
      onClick: () => showChapterDetails(book, i)
    }, i.toString() + (hasNotes ? "•" : ""));
    chGrid.appendChild(tile);
  }
  wrap.appendChild(chGrid);
  wrap.appendChild(el("p", { class: "subtle", style: "margin-top: 10px; font-size: 12px;" }, "• indicates chapter has notes. Tap any chapter to view/add notes."));
  
  const row = el("div", { style: "margin-top: 1rem; text-align: right;" });
  row.appendChild(el("button", { class: "btn", onClick: () => closeModal() }, "Close"));
  wrap.appendChild(row);
  openModal(wrap);
}

function showChapterDetails(book, chapter) {
  const noteKey = `${book.name}_${chapter}`;
  const notes = state.bibleNotes[noteKey] || [];
  const reads = (state.bible.totalReads[book.name] || {})[chapter] || 0;
  const wrap = el("div");
  wrap.appendChild(modalHeader(`${book.name} ${chapter}`));
  wrap.appendChild(el("p", { class: "subtle", style: "margin-bottom: 12px;" }, `Read ${reads} time${reads !== 1 ? "s" : ""}`));
  
  if (notes.length > 0) {
    wrap.appendChild(el("p", { class: "eyebrow" }, "Notes"));
    notes.forEach((n, idx) => {
      const noteCard = el("div", { class: "surface-soft", style: "margin-bottom: 8px;" });
      noteCard.appendChild(el("p", { style: "margin: 0 0 4px; font-size: 14px; line-height: 1.5;" }, n.note));
      const meta = el("div", { style: "display: flex; justify-content: space-between; align-items: center;" });
      meta.appendChild(el("span", { class: "subtle", style: "font-size: 11px;" }, fmtDate(n.date)));
      meta.appendChild(el("button", { class: "btn btn-sm", onClick: () => {
        if (confirm("Delete this note?")) { notes.splice(idx, 1); state.bibleNotes[noteKey] = notes; saveData(); closeModal(); showChapterDetails(book, chapter); }
      }}, "Delete"));
      noteCard.appendChild(meta);
      wrap.appendChild(noteCard);
    });
  }
  
  wrap.appendChild(el("label", { class: "field-label", style: "margin-top: 12px;" }, "Add a note"));
  const ta = el("textarea", { placeholder: "Reflection, key verse, application..." });
  wrap.appendChild(ta);
  
  const row = el("div", { style: "display: flex; gap: 8px; margin-top: 1rem; justify-content: flex-end;" });
  row.appendChild(el("button", { class: "btn", onClick: () => closeModal() }, "Close"));
  row.appendChild(el("button", { class: "btn btn-primary", onClick: () => {
    const v = ta.value.trim();
    if (!v) { showToast("Type something"); return; }
    notes.push({ note: v, date: todayStr(), ts: Date.now() });
    state.bibleNotes[noteKey] = notes;
    saveData();
    closeModal();
    showChapterDetails(book, chapter);
    showToast("Note saved");
  }}, "Save note"));
  wrap.appendChild(row);
  openModal(wrap);
}

function renderGratitudeSection(root) {
  const headerCard = el("div", { class: "surface" });
  headerCard.appendChild(el("p", { class: "eyebrow" }, "Daily gratitude"));
  headerCard.appendChild(el("p", { class: "subtle", style: "margin-bottom: 12px;" }, "1 Thessalonians 5:18. A daily record of God's goodness."));
  
  const totalDays = Object.keys(state.gratitude).filter(d => state.gratitude[d].length > 0).length;
  const totalItems = Object.values(state.gratitude).reduce((sum, arr) => sum + arr.length, 0);
  
  const grid = el("div", { class: "grid-2" });
  grid.appendChild(metricCard("Days logged", totalDays.toString()));
  grid.appendChild(metricCard("Total items", totalItems.toString()));
  headerCard.appendChild(grid);
  headerCard.appendChild(el("button", { class: "btn btn-primary btn-block", style: "margin-top: 12px;", onClick: openGratitudeModal }, "+ Add gratitude for today"));
  root.appendChild(headerCard);
  
  // Recent days
  const recentCard = el("div", { class: "surface" });
  recentCard.appendChild(el("h3", { class: "h-2" }, "Recent days"));
  const datesSorted = Object.keys(state.gratitude).filter(d => state.gratitude[d].length > 0).sort((a, b) => b.localeCompare(a)).slice(0, 14);
  if (datesSorted.length === 0) {
    recentCard.appendChild(emptyState("heart", "No gratitude logged yet."));
  } else {
    datesSorted.forEach(date => {
      const items = state.gratitude[date];
      const dayWrap = el("div", { style: "padding: 12px 0; border-bottom: 0.5px solid var(--border);" });
      dayWrap.appendChild(el("p", { style: "margin: 0 0 6px; font-weight: 600; font-size: 13px;" }, fmtDateLong(date)));
      items.forEach(it => {
        dayWrap.appendChild(el("p", { style: "margin: 0 0 4px; font-size: 14px; line-height: 1.5; padding-left: 12px; border-left: 2px solid var(--c-spiritual);" }, it));
      });
      recentCard.appendChild(dayWrap);
    });
  }
  root.appendChild(recentCard);
}

function renderTheologySection(root) {
  const headerCard = el("div", { class: "surface" });
  headerCard.appendChild(el("p", { class: "eyebrow" }, "Theology reading"));
  headerCard.appendChild(el("p", { class: "subtle", style: "margin-bottom: 12px;" }, "Books beyond Scripture: Grudem, Spurgeon, Prince, others."));
  
  const grid = el("div", { class: "grid-2" });
  grid.appendChild(metricCard("Sessions logged", state.theology.length.toString()));
  const uniqueBooks = new Set(state.theology.map(t => t.book)).size;
  grid.appendChild(metricCard("Books read", uniqueBooks.toString()));
  headerCard.appendChild(grid);
  headerCard.appendChild(el("button", { class: "btn btn-primary btn-block", style: "margin-top: 12px;", onClick: openTheologyModal }, "+ Log reading session"));
  root.appendChild(headerCard);
  
  // Group by book
  const byBook = {};
  state.theology.forEach(t => { byBook[t.book] = byBook[t.book] || []; byBook[t.book].push(t); });
  
  Object.keys(byBook).forEach(bookName => {
    const sessions = byBook[bookName].sort((a, b) => b.ts - a.ts);
    const bookCard = el("div", { class: "surface" });
    bookCard.appendChild(el("h3", { class: "h-2" }, bookName));
    bookCard.appendChild(el("p", { class: "subtle", style: "margin-bottom: 12px;" }, `${sessions.length} session${sessions.length !== 1 ? "s" : ""}`));
    sessions.slice(0, 5).forEach((s, idx) => {
      const realIdx = state.theology.findIndex(t => t.ts === s.ts);
      const r = el("div", { style: "padding: 10px 0; border-bottom: 0.5px solid var(--border);" });
      const head = el("div", { style: "display: flex; justify-content: space-between; align-items: baseline;" });
      head.appendChild(el("p", { style: "margin: 0; font-size: 14px; font-weight: 600;" }, s.chapter ? "Ch. " + s.chapter : "Reading session"));
      head.appendChild(el("span", { class: "subtle", style: "font-size: 11px;" }, fmtDate(s.date)));
      r.appendChild(head);
      if (s.notes) r.appendChild(el("p", { style: "margin: 4px 0 0; font-size: 13px; color: var(--text-mute); line-height: 1.5;" }, s.notes));
      const delBtn = el("button", { class: "btn btn-sm", style: "margin-top: 6px;", onClick: () => {
        if (confirm("Delete this entry?")) { state.theology.splice(realIdx, 1); saveData(); renderSpiritual(); }
      }}, "Delete");
      r.appendChild(delBtn);
      bookCard.appendChild(r);
    });
    root.appendChild(bookCard);
  });
}

function openTheologyModal() {
  const wrap = el("div");
  wrap.appendChild(modalHeader("Log theology reading"));
  
  wrap.appendChild(el("label", { class: "field-label" }, "Book / source"));
  const bookIn = el("input", { type: "text", placeholder: "e.g. Systematic Theology by Grudem" });
  wrap.appendChild(bookIn);
  
  wrap.appendChild(el("label", { class: "field-label", style: "margin-top: 12px;" }, "Chapter / page (optional)"));
  const chIn = el("input", { type: "text", placeholder: "Chapter 4" });
  wrap.appendChild(chIn);
  
  wrap.appendChild(el("label", { class: "field-label", style: "margin-top: 12px;" }, "Notes / takeaways"));
  const noteTa = el("textarea", { placeholder: "What stood out?" });
  wrap.appendChild(noteTa);
  
  const row = el("div", { style: "display: flex; gap: 8px; margin-top: 1rem; justify-content: flex-end;" });
  row.appendChild(el("button", { class: "btn", onClick: () => closeModal() }, "Cancel"));
  row.appendChild(el("button", { class: "btn btn-primary", onClick: () => {
    if (!bookIn.value.trim()) { showToast("Book name required"); return; }
    state.theology.push({
      book: bookIn.value.trim(),
      chapter: chIn.value.trim(),
      notes: noteTa.value.trim(),
      date: todayStr(),
      ts: Date.now()
    });
    saveData();
    closeModal();
    showToast("Logged");
    renderSpiritual();
  }}, "Save"));
  wrap.appendChild(row);
  openModal(wrap);
  setTimeout(() => bookIn.focus(), 100);
}

function renderPrayerSection(root) {
  const headerCard = el("div", { class: "surface" });
  headerCard.appendChild(el("p", { class: "eyebrow" }, "Prayer focuses"));
  headerCard.appendChild(el("p", { class: "subtle", style: "margin-bottom: 12px;" }, "People, situations, ongoing requests, and answered prayers."));
  
  const ongoing = state.prayer.filter(p => p.type === "ongoing");
  const answered = state.prayer.filter(p => p.type === "answered");
  
  const grid = el("div", { class: "grid-2" });
  grid.appendChild(metricCard("Ongoing", ongoing.length.toString()));
  grid.appendChild(metricCard("Answered", answered.length.toString()));
  headerCard.appendChild(grid);
  headerCard.appendChild(el("button", { class: "btn btn-primary btn-block", style: "margin-top: 12px;", onClick: openPrayerModal }, "+ Add prayer focus"));
  root.appendChild(headerCard);
  
  if (ongoing.length > 0) {
    const oCard = el("div", { class: "surface" });
    oCard.appendChild(el("h3", { class: "h-2" }, "Ongoing"));
    ongoing.sort((a, b) => b.ts - a.ts).forEach(p => {
      const realIdx = state.prayer.findIndex(x => x.ts === p.ts);
      const r = el("div", { style: "padding: 10px 0; border-bottom: 0.5px solid var(--border);" });
      r.appendChild(el("p", { style: "margin: 0 0 4px; font-weight: 600; font-size: 14px;" }, p.focus));
      if (p.notes) r.appendChild(el("p", { style: "margin: 0 0 6px; font-size: 13px; color: var(--text-mute); line-height: 1.5;" }, p.notes));
      const meta = el("div", { style: "display: flex; gap: 6px; align-items: center;" });
      meta.appendChild(el("span", { class: "subtle", style: "font-size: 11px;" }, "Since " + fmtDate(p.date)));
      meta.appendChild(el("button", { class: "btn btn-sm", onClick: () => { state.prayer[realIdx].type = "answered"; state.prayer[realIdx].answeredDate = todayStr(); saveData(); renderSpiritual(); showToast("Marked answered. Praise God."); } }, "Mark answered"));
      meta.appendChild(el("button", { class: "btn btn-sm", onClick: () => { if (confirm("Delete?")) { state.prayer.splice(realIdx, 1); saveData(); renderSpiritual(); } } }, "Delete"));
      r.appendChild(meta);
      oCard.appendChild(r);
    });
    root.appendChild(oCard);
  }
  
  if (answered.length > 0) {
    const aCard = el("div", { class: "surface" });
    aCard.appendChild(el("h3", { class: "h-2" }, "Answered prayers"));
    answered.sort((a, b) => (b.answeredDate || "").localeCompare(a.answeredDate || "")).forEach(p => {
      const realIdx = state.prayer.findIndex(x => x.ts === p.ts);
      const r = el("div", { style: "padding: 10px 0; border-bottom: 0.5px solid var(--border);" });
      r.appendChild(el("p", { style: "margin: 0 0 4px; font-weight: 600; font-size: 14px;" }, p.focus));
      if (p.notes) r.appendChild(el("p", { style: "margin: 0 0 6px; font-size: 13px; color: var(--text-mute);" }, p.notes));
      const meta = el("p", { class: "subtle", style: "margin: 0; font-size: 11px;" }, `Answered ${fmtDate(p.answeredDate || p.date)}`);
      r.appendChild(meta);
      aCard.appendChild(r);
    });
    root.appendChild(aCard);
  }
}

function openPrayerModal() {
  const wrap = el("div");
  wrap.appendChild(modalHeader("Add prayer focus"));
  
  wrap.appendChild(el("label", { class: "field-label" }, "Who or what?"));
  const focusIn = el("input", { type: "text", placeholder: "Mel's anxiety, brother's faith, work guidance..." });
  wrap.appendChild(focusIn);
  
  wrap.appendChild(el("label", { class: "field-label", style: "margin-top: 12px;" }, "Notes (optional)"));
  const noteTa = el("textarea", { placeholder: "Specific requests or context..." });
  wrap.appendChild(noteTa);
  
  const row = el("div", { style: "display: flex; gap: 8px; margin-top: 1rem; justify-content: flex-end;" });
  row.appendChild(el("button", { class: "btn", onClick: () => closeModal() }, "Cancel"));
  row.appendChild(el("button", { class: "btn btn-primary", onClick: () => {
    if (!focusIn.value.trim()) { showToast("Focus required"); return; }
    state.prayer.push({
      focus: focusIn.value.trim(),
      notes: noteTa.value.trim(),
      type: "ongoing",
      date: todayStr(),
      ts: Date.now()
    });
    saveData();
    closeModal();
    showToast("Added");
    renderSpiritual();
  }}, "Save"));
  wrap.appendChild(row);
  openModal(wrap);
  setTimeout(() => focusIn.focus(), 100);
}

// ---------- GYM TAB (NEW IN v1.1) ----------

function renderGym() {
  const root = document.getElementById("view-gym");
  root.innerHTML = "";
  
  // Header with this week's stats
  const sessionsThisWeek = countGymThisWeek(todayStr());
  const sessionsThisMonth = countGymThisMonth(todayStr());
  
  const hero = el("div", { class: "surface" });
  hero.appendChild(el("p", { class: "eyebrow" }, "Gym tracker"));
  const grid = el("div", { class: "grid-2" });
  grid.appendChild(metricCard("This week", sessionsThisWeek + " / 4"));
  grid.appendChild(metricCard("This month", sessionsThisMonth.toString()));
  hero.appendChild(grid);
  hero.appendChild(el("button", { class: "btn btn-primary btn-block", style: "margin-top: 12px;", onClick: openGymSessionStart }, "+ Start session"));
  root.appendChild(hero);
  
  // Recent sessions
  const recent = el("div", { class: "surface" });
  recent.appendChild(el("h3", { class: "h-2" }, "Recent sessions"));
  
  const allSessions = [];
  Object.keys(state.gymSessions).forEach(date => {
    state.gymSessions[date].forEach((s, i) => allSessions.push({ ...s, date, idx: i }));
  });
  allSessions.sort((a, b) => b.ts - a.ts);
  
  if (allSessions.length === 0) {
    recent.appendChild(emptyState("dumbbell", "No sessions yet. Tap + Start session to begin."));
  } else {
    allSessions.slice(0, 10).forEach(s => {
      const r = el("div", { style: "padding: 12px 0; border-bottom: 0.5px solid var(--border);" });
      const head = el("div", { style: "display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 6px;" });
      const left = el("div");
      left.appendChild(el("span", { class: "ribbon", style: s.dayType === "Top" ? "background: var(--c-spiritual-soft); color: var(--c-spiritual);" : "background: var(--c-physical-soft); color: var(--c-physical);" }, s.dayType + " day"));
      if (s.withMel) {
        const melTag = el("span", { class: "ribbon success", style: "margin-left: 6px;" }, "With Mel");
        left.appendChild(melTag);
      }
      if (s.injuryFlag) {
        left.appendChild(el("span", { class: "ribbon warning", style: "margin-left: 6px;" }, "Flag: " + s.injuryFlag));
      }
      head.appendChild(left);
      head.appendChild(el("span", { class: "subtle", style: "font-size: 11px;" }, fmtDate(s.date)));
      r.appendChild(head);
      
      // Group exercises by muscle group
      const byMuscle = {};
      s.exercises.forEach(ex => { byMuscle[ex.group] = byMuscle[ex.group] || []; byMuscle[ex.group].push(ex); });
      
      Object.keys(byMuscle).forEach(g => {
        const gWrap = el("div", { style: "margin-top: 6px;" });
        gWrap.appendChild(el("p", { class: "muscle-name" }, g));
        byMuscle[g].forEach(ex => {
          gWrap.appendChild(el("p", { style: "margin: 0 0 2px; font-size: 13px;" }, `${ex.exercise}: ${ex.detail || "—"}`));
        });
        r.appendChild(gWrap);
      });
      
      const delBtn = el("button", { class: "btn btn-sm", style: "margin-top: 8px;", onClick: () => {
        if (confirm("Delete this session?")) {
          state.gymSessions[s.date].splice(s.idx, 1);
          if (state.gymSessions[s.date].length === 0) delete state.gymSessions[s.date];
          saveData();
          renderGym();
        }
      }}, "Delete");
      r.appendChild(delBtn);
      
      recent.appendChild(r);
    });
  }
  root.appendChild(recent);
  
  // Personal records (top weight per exercise)
  const prs = computePRs();
  if (Object.keys(prs).length > 0) {
    const prCard = el("div", { class: "surface" });
    prCard.appendChild(el("h3", { class: "h-2" }, "Personal records"));
    Object.keys(prs).slice(0, 10).forEach(exName => {
      const r = el("div", { style: "display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 0.5px solid var(--border); font-size: 14px;" });
      r.appendChild(el("span", { style: "font-weight: 600;" }, exName));
      r.appendChild(el("span", { class: "ribbon success" }, prs[exName].weight + " kg"));
      prCard.appendChild(r);
    });
    root.appendChild(prCard);
  }
}

function countGymThisMonth(date) {
  const mk = monthKey(date);
  let count = 0;
  Object.keys(state.gymSessions).forEach(d => {
    if (monthKey(d) === mk) count += state.gymSessions[d].length;
  });
  return count;
}

function computePRs() {
  const prs = {};
  Object.keys(state.gymSessions).forEach(date => {
    state.gymSessions[date].forEach(session => {
      session.exercises.forEach(ex => {
        const wMatch = (ex.detail || "").match(/(\d+(?:\.\d+)?)\s*kg/i);
        if (wMatch) {
          const w = parseFloat(wMatch[1]);
          if (!prs[ex.exercise] || prs[ex.exercise].weight < w) {
            prs[ex.exercise] = { weight: w, date };
          }
        }
      });
    });
  });
  return prs;
}

function openGymSessionStart() {
  gymSession = { dayType: null, exercises: [], injuryFlag: "", withMel: false };
  showGymBuilder();
}

function showGymBuilder() {
  const wrap = el("div");
  wrap.appendChild(modalHeader("Gym session"));
  
  // Day type toggle
  wrap.appendChild(el("label", { class: "field-label" }, "Day type"));
  const dtRow = el("div", { class: "gym-day-toggle" });
  ["Top", "Bottom"].forEach(dt => {
    const btn = el("button", {
      class: "gym-day-btn" + (gymSession.dayType === dt ? " active" : ""),
      onClick: () => {
        gymSession.dayType = dt;
        closeModal();
        showGymBuilder();
      }
    }, dt);
    dtRow.appendChild(btn);
  });
  wrap.appendChild(dtRow);
  
  if (!gymSession.dayType) {
    wrap.appendChild(el("p", { class: "subtle", style: "margin-top: 16px;" }, "Pick day type to see exercises."));
  } else {
    // Muscle groups + exercises
    const groups = Object.keys(GYM_EXERCISES[gymSession.dayType]);
    
    // Current exercises summary
    if (gymSession.exercises.length > 0) {
      const summary = el("div", { style: "margin: 12px 0;" });
      summary.appendChild(el("p", { class: "eyebrow" }, "This session"));
      gymSession.exercises.forEach((ex, idx) => {
        const card = el("div", { class: "exercise-card" });
        const head = el("div", { class: "exercise-card-head" });
        head.appendChild(el("p", { class: "exercise-card-name" }, ex.exercise));
        head.appendChild(el("button", { class: "btn btn-sm", onClick: () => { gymSession.exercises.splice(idx, 1); closeModal(); showGymBuilder(); } }, "✕"));
        card.appendChild(head);
        card.appendChild(el("p", { class: "exercise-card-meta" }, `${ex.group} · ${ex.detail || "no details"}`));
        summary.appendChild(card);
      });
      wrap.appendChild(summary);
    }
    
    // Add exercises by group
    wrap.appendChild(el("p", { class: "eyebrow", style: "margin-top: 14px;" }, "Add exercises"));
    groups.forEach(g => {
      const gWrap = el("div", { class: "muscle-section" });
      gWrap.appendChild(el("p", { class: "muscle-name" }, g));
      const pillsWrap = el("div", { style: "display: flex; flex-wrap: wrap; gap: 6px;" });
      GYM_EXERCISES[gymSession.dayType][g].forEach(exName => {
        pillsWrap.appendChild(el("button", {
          class: "exercise-pill",
          onClick: () => openExerciseDetail(g, exName)
        }, "+ " + exName));
      });
      gWrap.appendChild(pillsWrap);
      wrap.appendChild(gWrap);
    });
    
    // Options
    const optsCard = el("div", { class: "surface-soft" });
    optsCard.appendChild(el("label", { class: "field-label" }, "Injury flag (optional)"));
    const injSelect = el("select", { onChange: (e) => gymSession.injuryFlag = e.target.value });
    ["", "shoulder", "knee", "wrist", "back", "other"].forEach(o => {
      const opt = el("option", { value: o }, o || "(none)");
      if (gymSession.injuryFlag === o) opt.selected = true;
      injSelect.appendChild(opt);
    });
    optsCard.appendChild(injSelect);
    
    const melLbl = el("label", { style: "display: flex; align-items: center; gap: 8px; margin-top: 10px; cursor: pointer; padding: 8px; border-radius: var(--radius-md); background: var(--bg-card);" });
    const melCb = el("input", { type: "checkbox", style: "width: auto; margin: 0;", onChange: (e) => gymSession.withMel = e.target.checked });
    if (gymSession.withMel) melCb.checked = true;
    melLbl.appendChild(melCb);
    melLbl.appendChild(document.createTextNode("With Mel"));
    optsCard.appendChild(melLbl);
    wrap.appendChild(optsCard);
  }
  
  const row = el("div", { style: "display: flex; gap: 8px; margin-top: 1rem; justify-content: flex-end;" });
  row.appendChild(el("button", { class: "btn", onClick: () => closeModal() }, "Cancel"));
  row.appendChild(el("button", { class: "btn btn-primary", onClick: saveGymSession }, "Save session"));
  wrap.appendChild(row);
  openModal(wrap);
}

function openExerciseDetail(group, exName) {
  const wrap = el("div");
  wrap.appendChild(modalHeader(exName));
  wrap.appendChild(el("p", { class: "subtle", style: "margin-bottom: 12px;" }, "Sets, reps, weight (kg)"));
  
  const grid = el("div", { style: "display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 8px;" });
  
  const sets = el("div");
  sets.appendChild(el("label", { class: "field-label" }, "Sets"));
  const setsIn = el("input", { type: "number", placeholder: "3", inputmode: "numeric" });
  sets.appendChild(setsIn);
  grid.appendChild(sets);
  
  const reps = el("div");
  reps.appendChild(el("label", { class: "field-label" }, "Reps"));
  const repsIn = el("input", { type: "number", placeholder: "10", inputmode: "numeric" });
  reps.appendChild(repsIn);
  grid.appendChild(reps);
  
  const wt = el("div");
  wt.appendChild(el("label", { class: "field-label" }, "Weight kg"));
  const wtIn = el("input", { type: "number", step: "0.5", placeholder: "60", inputmode: "decimal" });
  wt.appendChild(wtIn);
  grid.appendChild(wt);
  
  wrap.appendChild(grid);
  
  const row = el("div", { style: "display: flex; gap: 8px; margin-top: 1rem; justify-content: flex-end;" });
  row.appendChild(el("button", { class: "btn", onClick: () => { closeModal(); showGymBuilder(); } }, "Back"));
  row.appendChild(el("button", { class: "btn btn-primary", onClick: () => {
    const detail = `${setsIn.value || "?"} × ${repsIn.value || "?"} @ ${wtIn.value || "?"} kg`;
    gymSession.exercises.push({ group, exercise: exName, detail });
    closeModal();
    showGymBuilder();
    showToast("Added");
  }}, "Add"));
  wrap.appendChild(row);
  
  closeModal();
  openModal(wrap);
  setTimeout(() => setsIn.focus(), 100);
}

function saveGymSession() {
  if (!gymSession.dayType) { showToast("Pick day type"); return; }
  if (gymSession.exercises.length === 0) { showToast("Add at least one exercise"); return; }
  const date = todayStr();
  state.gymSessions[date] = state.gymSessions[date] || [];
  state.gymSessions[date].push({
    dayType: gymSession.dayType,
    exercises: gymSession.exercises,
    injuryFlag: gymSession.injuryFlag,
    withMel: gymSession.withMel,
    ts: Date.now()
  });
  // Add weekly occurrence for gym sub-cat
  const gymSub = CATEGORIES.physical.subs.find(s => s.id === "gym");
  addOccurrence("gym", gymSub, date);
  saveData();
  closeModal();
  showToast("Session saved");
  renderGym();
}

// ---------- APPOINTMENTS ----------

// ============================================
// JOURNAL TAB (v1.4)
// ============================================

function renderJournal() {
  const root = document.getElementById("view-journal");
  root.innerHTML = "";
  
  const today = todayStr();
  
  // Today's entry editor
  const todayCard = el("div", { class: "surface" });
  todayCard.appendChild(el("p", { class: "eyebrow" }, "Today · " + fmtDateLong(today)));
  todayCard.appendChild(el("p", { class: "subtle", style: "margin-bottom: 12px;" }, "Long-form reflection. Apple Journal, your heart, anything God's pressing on you. This is your place to think."));
  
  const ta = el("textarea", { 
    placeholder: "Today...",
    style: "min-height: 180px;",
    onInput: (e) => { state.journals[today] = e.target.value; saveData(); }
  });
  ta.value = state.journals[today] || "";
  todayCard.appendChild(ta);
  
  // Mood quick-set
  todayCard.appendChild(el("p", { class: "eyebrow", style: "margin: 16px 0 8px;" }, "Mood today"));
  const moodRow = el("div", { class: "mood-row" });
  for (let i = 1; i <= 10; i++) {
    const isActive = state.moods[today] === i;
    moodRow.appendChild(el("button", {
      class: "mood-btn" + (isActive ? " active" : ""),
      onClick: () => { state.moods[today] = i; saveData(); renderJournal(); }
    }, i.toString()));
  }
  todayCard.appendChild(moodRow);
  root.appendChild(todayCard);
  
  // Past entries
  const pastEntries = Object.keys(state.journals)
    .filter(d => d !== today && state.journals[d] && state.journals[d].trim())
    .sort((a, b) => b.localeCompare(a))
    .slice(0, 30);
  
  if (pastEntries.length === 0) {
    const empty = el("div", { class: "surface" });
    const wrap = el("div", { class: "empty-state-v2" });
    wrap.appendChild(el("p", { class: "empty-instruction" }, "Start with one entry"));
    wrap.appendChild(el("p", { class: "empty-purpose" }, "Past entries appear here as you go. The journal becomes a record of how the Lord has met you."));
    empty.appendChild(wrap);
    root.appendChild(empty);
    return;
  }
  
  const pastCard = el("div", { class: "surface" });
  pastCard.appendChild(el("p", { class: "eyebrow" }, "Past entries"));
  pastEntries.forEach(date => {
    const entry = state.journals[date];
    const mood = state.moods[date];
    const day = el("div", { class: "journal-day" });
    const meta = el("div", { class: "journal-day-meta" });
    meta.appendChild(el("span", { class: "journal-day-date" }, fmtDate(date)));
    if (mood != null) meta.appendChild(el("span", { class: "journal-day-mood" }, "Mood " + mood + "/10"));
    day.appendChild(meta);
    day.appendChild(el("p", { class: "journal-day-text" }, entry));
    pastCard.appendChild(day);
  });
  root.appendChild(pastCard);
}

function renderAppointments() {
  const root = document.getElementById("view-appointments");
  root.innerHTML = "";
  
  const head = el("div", { class: "surface" });
  head.appendChild(el("p", { class: "eyebrow" }, "Appointments"));
  head.appendChild(el("p", { class: "subtle", style: "margin-bottom: 12px;" }, "Display only. Auto-tagged to category."));
  head.appendChild(el("button", { class: "btn btn-primary btn-block", onClick: openNewAppointmentModal }, "+ Add appointment"));
  root.appendChild(head);

  const today_d = todayStr();
  const upcoming = state.appointments.filter(a => a.date >= today_d).sort((a, b) => a.date.localeCompare(b.date));
  const past = state.appointments.filter(a => a.date < today_d).sort((a, b) => b.date.localeCompare(a.date));

  if (upcoming.length > 0) {
    const c = el("div", { class: "surface" });
    c.appendChild(el("h3", { class: "h-2" }, "Upcoming"));
    upcoming.forEach(a => c.appendChild(renderAppointmentRow(a)));
    root.appendChild(c);
  } else {
    const c = el("div", { class: "surface" });
    c.appendChild(emptyState("calendar", "No upcoming appointments."));
    root.appendChild(c);
  }

  if (past.length > 0) {
    const c = el("div", { class: "surface" });
    c.appendChild(el("h3", { class: "h-2" }, "Past"));
    past.slice(0, 10).forEach(a => c.appendChild(renderAppointmentRow(a)));
    root.appendChild(c);
  }
}

function renderAppointmentRow(a) {
  const idx = state.appointments.indexOf(a);
  const cat = CATEGORIES[a.category];
  const row = el("div", { class: "appointment-row" });
  const top = el("div", { style: "display: flex; justify-content: space-between; align-items: flex-start; gap: 8px;" });
  const left = el("div", { style: "flex: 1; min-width: 0;" });
  left.appendChild(el("p", { style: "margin: 0 0 4px; font-weight: 600; font-size: 15px;" }, a.title));
  const metaRow = el("div", { style: "display: flex; gap: 6px; flex-wrap: wrap; align-items: center;" });
  metaRow.appendChild(el("span", { class: "subtle", style: "font-size: 12px;" }, fmtDate(a.date) + (a.time ? " · " + a.time : "")));
  if (cat) metaRow.appendChild(el("span", { class: "cat-pill", style: `background: var(${cat.softVar}); color: ${cat.color}; font-size: 10px;` }, cat.name));
  left.appendChild(metaRow);
  top.appendChild(left);
  top.appendChild(el("button", { class: "btn btn-sm", onClick: () => {
    if (confirm("Delete?")) { state.appointments.splice(idx, 1); saveData(); renderAppointments(); }
  }}, "✕"));
  row.appendChild(top);
  if (a.note) row.appendChild(el("p", { class: "subtle", style: "margin: 6px 0 0; font-size: 13px;" }, a.note));
  return row;
}

function openNewAppointmentModal() {
  const wrap = el("div");
  wrap.appendChild(modalHeader("New appointment"));
  wrap.appendChild(el("label", { class: "field-label" }, "Title"));
  const tIn = el("input", { type: "text", placeholder: "Psychiatrist review" });
  wrap.appendChild(tIn);
  wrap.appendChild(el("label", { class: "field-label", style: "margin-top: 12px;" }, "Date"));
  const dIn = el("input", { type: "date", value: todayStr() });
  wrap.appendChild(dIn);
  wrap.appendChild(el("label", { class: "field-label", style: "margin-top: 12px;" }, "Time (optional)"));
  const tmIn = el("input", { type: "time" });
  wrap.appendChild(tmIn);
  wrap.appendChild(el("label", { class: "field-label", style: "margin-top: 12px;" }, "Category"));
  const catIn = el("select");
  Object.keys(CATEGORIES).forEach(k => catIn.appendChild(el("option", { value: k }, CATEGORIES[k].name)));
  wrap.appendChild(catIn);
  wrap.appendChild(el("label", { class: "field-label", style: "margin-top: 12px;" }, "Notes"));
  const nIn = el("textarea", { placeholder: "Optional" });
  wrap.appendChild(nIn);
  const row = el("div", { style: "display: flex; gap: 8px; margin-top: 1rem; justify-content: flex-end;" });
  row.appendChild(el("button", { class: "btn", onClick: () => closeModal() }, "Cancel"));
  row.appendChild(el("button", { class: "btn btn-primary", onClick: () => {
    if (!tIn.value.trim() || !dIn.value) { showToast("Title and date required"); return; }
    state.appointments.push({
      title: tIn.value.trim(), date: dIn.value, time: tmIn.value || "",
      category: catIn.value, note: nIn.value.trim(), ts: Date.now()
    });
    saveData();
    closeModal();
    showToast("Added");
    renderAppointments();
  }}, "Save"));
  wrap.appendChild(row);
  openModal(wrap);
  setTimeout(() => tIn.focus(), 100);
}

// ---------- DATA VIEW ----------

function renderData() {
  const root = document.getElementById("view-data");
  root.innerHTML = "";
  
  const card = el("div", { class: "surface" });
  card.appendChild(el("p", { class: "eyebrow" }, "Data summary"));
  const grid = el("div", { class: "grid-3" });
  grid.appendChild(metricCard("Sub-cat logs", Object.keys(state.logs).length.toString()));
  grid.appendChild(metricCard("Gym sessions", Object.values(state.gymSessions).reduce((s, a) => s + a.length, 0).toString()));
  grid.appendChild(metricCard("Journals", Object.keys(state.journals).length.toString()));
  grid.appendChild(metricCard("Moods", Object.keys(state.moods).length.toString()));
  grid.appendChild(metricCard("ADHD signs", Object.keys(state.adhdSigns).length.toString()));
  grid.appendChild(metricCard("Ideas", state.podcastIdeas.length.toString()));
  card.appendChild(grid);
  root.appendChild(card);

  if (state.podcastIdeas.length > 0) {
    const ic = el("div", { class: "surface" });
    ic.appendChild(el("h3", { class: "h-2" }, "Podcast ideas"));
    state.podcastIdeas.slice().reverse().forEach((idea, idx) => {
      const real = state.podcastIdeas.length - 1 - idx;
      const r = el("div", { style: "display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 0.5px solid var(--border); gap: 8px;" });
      const l = el("div", { style: "flex: 1; min-width: 0;" });
      l.appendChild(el("p", { style: "margin: 0; font-size: 14px;" }, idea.idea));
      l.appendChild(el("p", { class: "subtle", style: "margin: 0; font-size: 11px;" }, new Date(idea.ts).toLocaleDateString("en-GB")));
      r.appendChild(l);
      r.appendChild(el("button", { class: "btn btn-sm", onClick: () => {
        if (confirm("Mark as used?")) { state.podcastIdeas.splice(real, 1); saveData(); renderData(); }
      }}, "Used"));
      ic.appendChild(r);
    });
    root.appendChild(ic);
  }

  const ec = el("div", { class: "surface" });
  ec.appendChild(el("h3", { class: "h-2" }, "Export & reset"));
  ec.appendChild(el("p", { class: "subtle", style: "margin-bottom: 12px;" }, "Export your data for backup or share with Claude."));
  const er = el("div", { style: "display: flex; gap: 8px; flex-wrap: wrap;" });
  er.appendChild(el("button", { class: "btn btn-primary", onClick: () => {
    const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = el("a", { href: url, download: `lifedash_export_${todayStr()}.json` });
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }}, "Export JSON"));
  er.appendChild(el("button", { class: "btn", onClick: importData }, "Import JSON"));
  er.appendChild(el("button", { class: "btn", onClick: () => {
    if (confirm("Reset all data? This cannot be undone.")) {
      localStorage.removeItem(STORAGE_KEY);
      location.reload();
    }
  }}, "Reset all"));
  ec.appendChild(er);
  root.appendChild(ec);

  const pc = el("div", { class: "surface" });
  pc.appendChild(el("h3", { class: "h-2" }, "Pilot status"));
  pc.appendChild(el("p", { style: "margin: 0;" }, "Pilot mode: 5 May to 31 May 2026."));
  pc.appendChild(el("p", { class: "subtle", style: "margin: 4px 0 0;" }, "Locked launch: 1 June. v1.1 with all upgrades applied."));
  root.appendChild(pc);
  
  if (!(window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone)) {
    const ic2 = el("div", { class: "install-prompt" });
    ic2.appendChild(el("p", { style: "margin: 0 0 4px; font-weight: 600;" }, "Install as an app"));
    ic2.appendChild(el("p", { style: "margin: 0; font-size: 12px;" }, "iPhone: tap Share, then 'Add to Home Screen'. Android: tap menu, then 'Install app'."));
    root.appendChild(ic2);
  }
}

function importData() {
  const input = el("input", { type: "file", accept: "application/json" });
  input.addEventListener("change", () => {
    const file = input.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const data = JSON.parse(reader.result);
        if (confirm("This will replace all current data. Continue?")) {
          state = data;
          saveData();
          showToast("Imported");
          renderData();
        }
      } catch (e) { showToast("Invalid JSON"); }
    };
    reader.readAsText(file);
  });
  input.click();
}

// ---------- INIT ----------

function init() {
  document.getElementById("today-date").textContent = fmtDate(todayStr());
  document.querySelectorAll(".nav-btn").forEach(t => {
    t.addEventListener("click", () => setActiveTab(t.dataset.view));
  });
  
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  const isStandalone = window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone;
  if (isIOS && !isStandalone && !localStorage.getItem("install_dismissed")) {
    const banner = document.getElementById("install-banner");
    banner.style.display = "block";
    banner.innerHTML = `<div class="install-prompt" style="display: flex; justify-content: space-between; align-items: center; gap: 8px;">
      <div><p style="margin: 0; font-weight: 600;">Install on iPhone</p><p style="margin: 0; font-size: 12px;">Tap Share, then 'Add to Home Screen'.</p></div>
      <button class="btn btn-sm" id="dismiss-install">✕</button>
    </div>`;
    document.getElementById("dismiss-install").addEventListener("click", () => {
      localStorage.setItem("install_dismissed", "1");
      banner.style.display = "none";
    });
  }
  
  renderRadar();
}

document.addEventListener("DOMContentLoaded", init);
if (document.readyState === "interactive" || document.readyState === "complete") init();
