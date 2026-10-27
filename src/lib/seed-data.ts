export const SEED_KEY = "content-v1";

export const settingsSeed = {
  ministerName: "John Wes",
  professionalTitle: "Bible teacher and writer",
  kicker: "Scripture, read slowly",
  homepageIntro:
    "John Wes teaches the Bible for congregations and for people who have grown tired of noise. He writes slowly, stays close to the text, and trusts ordinary churches with serious ideas.",
  pullQuote:
    "The church does not need a louder voice. It needs a truer one, and the patience to stay with the text.",
  biographySummary:
    "John spends his weeks with a local congregation in Nairobi, and a smaller part of the year with pastors and students who ask him to open a book of Scripture and stay there.",
  biography: `John Wes is a fictional teacher created for this demonstration site. In the sample story he is a Bible teacher and writer working from Nairobi, known less for a platform than for a habit: he stays with a passage longer than the room expects.

He is presented as someone who came to faith as a student, learned to preach by sitting under older pastors, and still thinks the local church is the main place Christian speech should be tested. The work gathered here — essays, short books, and recorded messages — circles a few concerns: the trustworthiness of the Gospels, the honesty of prayer, the unspectacular life of a congregation, and the hope that outlasts a hard week.

He accepts a limited number of speaking invitations, usually to teach through a book of the Bible rather than to offer a single motivational address. Between those trips he writes in the mornings and teaches in the evening.`,
  interests: `The Gospels\nThe Psalms\nThe common life of the church\nPrayer and lament\nTeaching the next generation`,
  credentialsNote:
    "This demonstration does not claim degrees, ordination, awards, or endorsements. Add only what is true of a real minister before any public launch.",
  portraitUrl: "/images/portrait.jpg",
  portraitAlt: "Portrait of John Wes, in a charcoal jacket against a pale wall",
  contactEmail: "studio@johnwes.example",
  youtubeUrl: "https://example.com/john-wes/youtube",
  xUrl: "https://example.com/john-wes",
  facebookUrl: "https://example.com/john-wes/facebook",
  instagramUrl: "https://example.com/john-wes/instagram",
  seoTitle: "John Wes — Bible teacher and writer",
  seoDescription:
    "Essays, books, and recorded messages from John Wes, a Bible teacher writing on Scripture, the church, and Christian hope.",
  footerNote: "Nairobi · teaching, writing, and a few invitations each year.",
  newsletterHeading: "Occasional notes",
  newsletterText:
    "A short letter when a new essay or series is published. No mailing service is connected on this demonstration, so an address is only kept on this site.",
  speakingNote:
    "Invitations are read carefully. John is usually free to teach through one book of Scripture over a weekend, or to give a single address if the passage is agreed in advance. This form saves the note for the editor. It does not send email.",
  showSampleNotice: true,
};

type ArticleSeed = {
  title: string;
  slug: string;
  excerpt: string;
  body: string;
  heroImage: string;
  heroAlt: string;
  category: string;
  featured: boolean;
  publishedAt: string | null;
  status: "draft" | "published";
};

export const categorySeed = [
  {
    name: "Scripture",
    slug: "scripture",
    description: "Close reading of the Bible and why the text can still be trusted.",
  },
  {
    name: "The church",
    slug: "the-church",
    description: "The ordinary congregation, its worship, and its common life.",
  },
  {
    name: "Christian life",
    slug: "christian-life",
    description: "Faith worked out in weeks that do not feel historic.",
  },
  {
    name: "Prayer",
    slug: "prayer",
    description: "Speaking to God when the words are thin, angry, or late.",
  },
  {
    name: "Teaching",
    slug: "teaching",
    description: "How the faith is handed on, especially to the young.",
  },
];

export const articleSeed: ArticleSeed[] = [
  {
    title: "The slow work of Scripture",
    slug: "the-slow-work-of-scripture",
    excerpt:
      "A congregation is not behind because it refuses to hurry. Most of the Bible was written for people who would hear it more than once.",
    heroImage: "/images/desk.jpg",
    heroAlt: "A wooden writing desk with a book, tea, and morning light",
    category: "scripture",
    featured: true,
    publishedAt: "2026-09-12T08:00:00.000Z",
    status: "published",
    body: `A friend told me his church felt slow. They were still in the second chapter of Mark in November. The church down the road had already finished a series, launched a plan, and posted the photographs. He wondered if faithfulness had started to look like delay.

I understand the ache. We live in a city of announcements. But the Bible is not anxious about being overtaken. Most of it was written for people who would hear it more than once: Israel hearing Deuteronomy again before crossing, the churches of Paul reading a letter until it was no longer new, a psalm worn smooth by repetition.

## Pace is not the same thing as neglect

Slowness becomes an excuse when a church will not open the text at all, or when a preacher hides from the passage behind stories that never return to it. That is not patience. That is avoidance. The slowness I trust looks different. It asks what the words are doing. It lets a hard verse stay hard for a week. It gives the room time to disagree without being hurried into a slogan.

> The text is not a mine we strip. It is a country we live in.

Mark's Gospel is a good tutor here. It moves quickly on the surface — "immediately" is one of his favourite words — and yet the church that reads him slowly notices how often the disciples fail to see what Jesus has just done. Speed in the story is not a command to speed in the reading. If anything, Mark keeps stopping the competent people in their tracks.

## What a slow church is free to do

A slow church can tell the truth about last week. It can pray for the member who is not there. It can let a psalm of lament stand without a cheerful chorus stapled to the end. It can teach children the story rather than a mascot. None of that photographs well. All of it builds a people who will still know where to stand when the announcements stop.

If your congregation is still in chapter two, you are not necessarily behind. You may be in the only place where the words can become yours.`,
  },
  {
    title: "Why the resurrection still orders the week",
    slug: "the-resurrection-orders-the-week",
    excerpt:
      "Sunday is not a brand mark on an otherwise ordinary calendar. It is the day the rest of the days have to answer to.",
    heroImage: "/images/chapel.jpg",
    heroAlt: "Empty wooden pews in a quiet chapel with a shaft of afternoon light",
    category: "christian-life",
    featured: false,
    publishedAt: "2026-08-02T08:00:00.000Z",
    status: "published",
    body: `Christians did not invent the seven-day week, but they did something strange with it. They moved the weight of the week onto the first day, and they did it because of a body that had been dead and was not.

That sounds like a doctrine, and it is. It is also a way of arranging time. Monday's work, Wednesday's argument, Friday's fatigue — none of them get the last word if Sunday is telling the truth. The resurrection does not make those days light. It tells them they are not ultimate.

## Not a mood

I am not describing a feeling that arrives every Sunday if we sing the right song. Some Sundays the room is thin and the preacher is tired and a child is crying in the key of protest. The ordering of the week does not depend on the atmosphere. It depends on whether the news is true: that God raised Jesus from the dead, and that this is the beginning of the new creation rather than a private religious experience.

Paul is almost blunt about the alternative. If Christ has not been raised, faith is futile and the dead are simply gone. He does not offer a softer version of Christianity for people who find bodily hope embarrassing. He ties forgiveness, courage, and the future of the body to the same event.

## How a week can show it

A church that believes this will keep gathering, even when the gathering is plain. It will pray for the sick as people who are not abandoned, and bury the dead as people who are not finished. It will resist both panic and cynicism, which are two ways of saying that nothing new can happen.

The resurrection is not a decoration we add to a life already organised by productivity. It is the reason a Christian week has a centre. We begin there, and then we go back to ordinary work as people who have heard better news than the week can invent.`,
  },
  {
    title: "A quiet case for the Gospels",
    slug: "a-quiet-case-for-the-gospels",
    excerpt:
      "The four Gospels do not read like propaganda written by people who had time to sand every edge. That roughness is part of the reason to trust them.",
    heroImage: "/images/bible.jpg",
    heroAlt: "An open Bible on a dark wooden table, pages soft in the light",
    category: "scripture",
    featured: true,
    publishedAt: "2026-06-18T08:00:00.000Z",
    status: "published",
    body: `People sometimes ask for a case that Jesus rose, as if the honest answer were a single clever paragraph. I do not have one of those. I do have a set of documents that keep surviving questions I was told would finish them.

The four Gospels are early, they are multiple, and they are awkward in the way early memories are awkward. They agree on the spine of the story and differ in the details a court would expect from witnesses who were not coached into one script. They record the failure of the people closest to Jesus. They let women carry the first news of the empty tomb in a culture that would not have invented that detail to make the story easier.

## What the alternatives have to explain

A purely legendary account has to grow very quickly, in public, among people who could still be contradicted, and it has to do so while producing texts that are theologically daring and historically textured at the same time. A conspiracy has to explain why the conspirators gained so little of what conspirators usually want — safety, status, a cleaned-up portrait of themselves — and why they kept a cross at the centre.

None of this is a mathematical proof. History rarely offers those. It is a reason to stop talking as if serious people only began to trust the Gospels after they stopped thinking. Many of us trusted them more after we read them slowly, with the hard questions left in the room.

## Read them as they are

If you are unsure, do not begin with a summary of what Christians wish the Gospels said. Begin with Mark. Read it in a week. Notice the fear, the secrecy, the authority, and the ending that refuses to tidy itself for you. Then read John, who is doing something different and is not embarrassed about it.

Faith is more than a historical judgement. But it is not less. The quiet case is that these books still sound like news, not like a brand trying to survive another season.`,
  },
  {
    title: "Prayer when the words run out",
    slug: "prayer-when-the-words-run-out",
    excerpt:
      "The Psalms already contain the prayers we are ashamed to attempt. Borrowing them is not a failure of sincerity.",
    heroImage: "/images/hands.jpg",
    heroAlt: "Hands writing slowly in a notebook at a wooden table",
    category: "prayer",
    featured: false,
    publishedAt: "2026-05-03T08:00:00.000Z",
    status: "published",
    body: `There are seasons when prayer dries up in the mouth. You are not angry enough for a psalm of protest and not peaceful enough for a psalm of trust. You sit there, and the only honest sentence is that you have no sentence.

The Christian tradition is kinder about this than many of our meetings are. Paul says the Spirit helps us in our weakness, and that we do not know what to pray as we ought. He does not say the Spirit helps people who have already found the right words. The weakness is the setting, not the disqualification.

## Borrowed prayers are still prayers

This is why the church was given a prayer book inside the Bible. You do not have to invent a mood. You can say, with Psalm 13, "How long?" You can say, with Psalm 131, that your heart is not proud and your eyes are not raised too high — or you can admit that they are, and still stay in the room. You can pray the Lord's Prayer very slowly and let one clause be enough for a morning.

Borrowed language is not insincere. We borrow the words of marriage vows because the night we most need them is the night we could not have written them. Prayer is like that more often than we confess.

## A small rule

When the words run out, I keep a small rule. I do not leave the chair at once. I read a short psalm aloud. I name the people I said I would remember, even if I name them without decoration. I sit through one minute of quiet that I do not try to improve.

Some days that is the whole prayer, and it is not nothing. God is not waiting for a performance. He is the Father of Jesus Christ, and Christ's own prayer in the garden was short, repeated, and costly. We are allowed to be that simple.`,
  },
  {
    title: "The church is not a brand",
    slug: "the-church-is-not-a-brand",
    excerpt:
      "A congregation that thinks of itself as a brand will eventually sand away whatever cannot be marketed. The gospel is full of those things.",
    heroImage: "/images/chapel.jpg",
    heroAlt: "A plain chapel interior with wooden pews and warm light",
    category: "the-church",
    featured: false,
    publishedAt: "2026-03-22T08:00:00.000Z",
    status: "published",
    body: `Brands are not evil. A baker needs people to recognise the shop. The trouble starts when a church borrows not just a tool — a clear name, a readable notice — but a whole way of deciding what it is. A brand exists to be chosen. A church exists because God has already chosen to gather a people around his Son.

Those are different centres. A brand asks what the audience wants and trims the product until the audience stays. A church is sent to say some things that will not help it grow: that we are sinners, that the cross is not a metaphor for inconvenience, that the dead are raised, that money is dangerous, that the weak are not a problem to hide in the second room.

## What gets sanded away

I have watched churches, including ones I loved, begin to speak only in sentences that could survive a poster. Lament went. Church discipline went. The parts of the epistles about bodies and money and patience went. What remained was sincere and thin. Visitors were welcomed, which is good, and never told what they were being welcomed into, which is not.

The New Testament's pictures of the church are not brand pictures. A body. A household. A flock. A temple of living stones. None of these are chosen the way one chooses a scarf. They are given, and they include members who do not improve the photograph.

## A better ambition

Let the notice board be clear. Let the singing be learnable. Let the preacher honour the clock. None of that requires a brand. The ambition is older: a people who hear the apostles' teaching, break bread, pray, and share their goods with enough honesty that the neighbourhood can tell something real is happening.

If that is smaller than the brand you were tempted to build, it may also be heavy enough to last.`,
  },
  {
    title: "Hospitality is a theological act",
    slug: "hospitality-is-a-theological-act",
    excerpt:
      "A shared table does not replace the gospel. It is one of the ways the gospel becomes visible to people who are not yet sure they want a sermon.",
    heroImage: "/images/desk.jpg",
    heroAlt: "A quiet table set with a cup and an open book",
    category: "christian-life",
    featured: false,
    publishedAt: "2026-02-08T08:00:00.000Z",
    status: "published",
    body: `In Luke's Gospel, Jesus is often at a table, and the wrong people are often there with him. The religiously careful complain. He does not treat the complaint as a minor matter of manners. He treats the table as a sign of the kingdom: mercy is wider than the guest list we would have written.

Hospitality in the church is not a strategy for making services feel friendly, though friendliness is no sin. It is a confession. We believe God receives enemies and makes them family. A locked dining room, reserved for people who already know the jokes, contradicts the sermon even if the sermon was accurate.

## Ordinary, not theatrical

This does not require a house fit for a magazine. Some of the best Christian tables I have sat at were crowded, slightly late, and short of chairs. What they had was a name spoken correctly, a seat that had been thought about, and no rush to recruit the guest into a task before they had been fed.

Hebrews tells the church not to neglect hospitality to strangers, with the old warning that some have entertained angels unawares. Paul tells the Roman church to pursue hospitality. These are not suggestions for people with a particular personality. They are the common life of a people who have been welcomed by God.

## A limit that keeps it human

Hospitality is not the same as having no boundaries. A household owes safety and rest to the people already in it. A church can be open without being naive. The aim is not to become a public hall with no doctrine. The aim is to let the doctrine reach the table: Christ receives, so we make room.

If you are looking for a place to begin, begin smaller than a programme. One meal. One extra seat. One conversation in which you do not steer every sentence back to yourself. The theology can survive that kind of simplicity. It has been doing so for a long time.`,
  },
  {
    title: "Lament is not unbelief",
    slug: "lament-is-not-unbelief",
    excerpt:
      "A faith that cannot cry has confused cheerfulness with trust. The Psalms refuse that confusion, and so should we.",
    heroImage: "/images/highlands.jpg",
    heroAlt: "Mist over rolling highlands at dawn",
    category: "prayer",
    featured: false,
    publishedAt: "2025-11-16T08:00:00.000Z",
    status: "published",
    body: `Some Christians are afraid of sad prayers. They have been told that sorrow is a slip in faith, that a mature believer moves quickly to victory, that questions are the beginning of departure. The Psalter is an awkward book for that teaching. It is the church's oldest songbook, and a great part of it complains, argues, and weeps in the presence of God rather than behind his back.

Lament is not the opposite of belief. It is belief that refuses to lie. It says, "You are the God who sees, and yet this is still happening." Unbelief shrugs. Lament addresses.

## The difference it makes on a Sunday

A church that has no language for lament will force its hurting people to perform. They will sing lines their week has made impossible, or they will stay home. Neither is a victory. A church that can lament gives them sentences that are already Christian: How long, O Lord? Why do you hide your face? Do not be far from me.

Those sentences do not end the service. The Psalms themselves often turn, sometimes abruptly, toward trust. The turn is earned. It is not a denial of the first half. We do people harm when we quote only the turn and call it the whole faith.

## Grief with a direction

Christian lament has a direction the world's sadness does not always have. It is spoken to someone. It expects to be heard. It stands inside a story that ends in resurrection, which is why it can be completely honest without becoming final despair. Jesus himself cried out with a psalm from the cross. If the Son can pray that way, the household does not need to be braver than its Lord.

If you are in a season that will not resolve this month, you are not failing the faith by saying so in prayer. You may be practising it.`,
  },
  {
    title: "Teach the story, not the slogan",
    slug: "teach-the-story-not-the-slogan",
    excerpt:
      "Children can bear more of the Bible than we think, and less of our anxiety. What they need is the story, told whole.",
    heroImage: "/images/lectern.jpg",
    heroAlt: "A simple wooden lectern with a closed clothbound book",
    category: "teaching",
    featured: false,
    publishedAt: "2025-09-07T08:00:00.000Z",
    status: "published",
    body: `A slogan is easy to paint on a wall and hard to live inside. "Be brave." "God is good." "Choose joy." None of these is false in the way a lie is false. They become false when they are asked to replace the story that once gave them weight. A child who only has the slogan will not know what to do with the chapter where the good God lets the hero wait, or suffer, or die before the third day.

The Bible's way of teaching is stubbornly narrative. Israel is told to remember the exodus, not a motto distilled from it. The apostles preach Christ crucified and risen, not a set of values with a cross in the logo. Children are well able to enter that way of teaching. They already know that stories have danger in the middle.

## What to leave in

Do not skip the flood, the binding of Isaac, the cross, or the empty tomb because you are worried they are too much. Tell them at the right age, in true words, without horror as entertainment and without a joke that steals the weight. A child who never hears the hard parts at home will hear a distorted version somewhere else, and will decide the faith is something adults soften.

Do leave out cynicism. There is a way of teaching the Bible that winks at it, as if we were above the text and only visiting. Children notice the wink. They will not fall in love with a book you handle with gloves and a smirk.

## A household practice

Read aloud. Keep a ordinary time, even a short one. Let them ask the question you cannot answer, and say when you cannot. Return to the same stories often enough that they become furniture in the mind, not a lesson that expires.

The aim is not a child who can repeat our favourite line. The aim is a person who knows whose world this is, and what happened in it, well enough to recognise the Shepherd's voice when the slogans of the age change.`,
  },
  {
    title: "Notes on James 1",
    slug: "notes-on-james-1",
    excerpt: "Unfinished notes. This draft should never appear on the public site.",
    heroImage: "/images/hands.jpg",
    heroAlt: "Hands writing in a notebook",
    category: "scripture",
    featured: false,
    publishedAt: null,
    status: "draft",
    body: `These are private working notes on James 1. Trials, wisdom, and the double-minded person. Not ready. If a visitor can read this page, the publishing desk has failed.

James is sharper than our slogans about patience. The brother of the Lord writes to people under real pressure and tells them to ask for wisdom without wavering. I want the finished essay to deal with the difference between doubt that seeks God and doubt that keeps a foot in two stories.

Leave this unpublished until that is written.`,
  },
];

export const bookSeed = [
  {
    title: "A Table in the Wilderness",
    slug: "a-table-in-the-wilderness",
    subtitle: "Mercy, hunger, and the meals of Jesus",
    coverImage: "/images/covers/table.jpg",
    coverAlt: "Clothbound cover of A Table in the Wilderness",
    description: `Jesus seems always to be on the way to a meal, leaving one, or turning a meal into a revelation. This short book stays with those tables: the wilderness feeding, the house of the Pharisee, the tax collector's friends, the last supper, and the breakfast by the lake after the resurrection.

It is written for readers who love Scripture and are tired of books that use a Bible verse as a preface to something else. The argument is simple. The meals of Jesus are not decorations on his teaching. They are the teaching, eaten in public. Sample publication details only — this demonstration does not sell books or take payment.`,
    publisher: "Quiet Press (sample)",
    publicationYear: 2024,
    isbn: "Sample — replace before launch",
    price: "18.00",
    currency: "USD",
    purchaseUrl: "https://example.com/books/a-table-in-the-wilderness",
    featured: true,
    status: "published" as const,
  },
  {
    title: "The Ordinary Hours",
    slug: "the-ordinary-hours",
    subtitle: "On work, waiting, and the Christian week",
    coverImage: "/images/covers/hours.jpg",
    coverAlt: "Clothbound cover of The Ordinary Hours",
    description: `Most of a Christian life is not a conference. It is a Tuesday, a commute, a child who will not sleep, a task that does not become a testimony. The Ordinary Hours is a book about that majority: how the resurrection orders unspectacular time, and how prayer survives a calendar.

John writes as a pastor-teacher, not as a productivity guide. There is no system to install. There is a way of telling the truth about the week in the presence of God. The publisher, price, and order link on this page are placeholders.`,
    publisher: "Field & Fire (sample)",
    publicationYear: 2022,
    isbn: "Sample — replace before launch",
    price: "16.00",
    currency: "USD",
    purchaseUrl: "https://example.com/books/the-ordinary-hours",
    featured: false,
    status: "published" as const,
  },
  {
    title: "Reading Mark Slowly",
    slug: "reading-mark-slowly",
    subtitle: "A companion for congregations",
    coverImage: "/images/covers/mark.jpg",
    coverAlt: "Oxblood cloth cover of Reading Mark Slowly",
    description: `Mark's Gospel is short enough to read in a sitting and deep enough to occupy a year. This companion walks a congregation through the sixteen chapters without turning them into a leadership manual. Each section offers a reading note, a question that resists a quick answer, and a prayer drawn from the passage.

It is meant to be used with the Bible open, not instead of it. Groups who want a performance will be disappointed. Groups who want to see Jesus more clearly, including the parts Mark leaves rough, will have what they need. Order links here are samples and do not accept payment.`,
    publisher: "Parish Papers (sample)",
    publicationYear: 2025,
    isbn: "Sample — replace before launch",
    price: "14.00",
    currency: "USD",
    purchaseUrl: "https://example.com/books/reading-mark-slowly",
    featured: true,
    status: "published" as const,
  },
  {
    title: "Letters for a Tired Church",
    slug: "letters-for-a-tired-church",
    subtitle: "Twelve notes on staying",
    coverImage: "/images/covers/letters.jpg",
    coverAlt: "Clothbound cover of Letters for a Tired Church",
    description: `These twelve letters are addressed to a congregation that has not collapsed and has not triumphed. The building needs paint. The young people are unsure. The elders are weary of being told to be more visionary. John writes to them about the apostles' teaching, about money, about gossip, about the Lord's Supper, and about the strange hope of staying.

The voice is pastoral and unhurried. Nothing in the book depends on a real correspondence — the letters are a literary form for this sample publication, not recovered historical documents.`,
    publisher: "Quiet Press (sample)",
    publicationYear: 2023,
    isbn: "Sample — replace before launch",
    price: "15.00",
    currency: "USD",
    purchaseUrl: "https://example.com/books/letters-for-a-tired-church",
    featured: false,
    status: "published" as const,
  },
];

export const messageSeed = [
  {
    title: "The God who sees",
    slug: "the-god-who-sees",
    description:
      "Hagar names God in the desert, before any institution is ready to dignify her. A teaching on Genesis 16 and the kind of sight that does not wait for a crowd.",
    videoUrl: "",
    thumbnail: "/images/highlands.jpg",
    thumbnailAlt: "Highlands at dawn, the image for The God Who Sees",
    recordedOn: "2026-07-19",
    duration: "38 min",
    series: "Names",
    scripture: "Genesis 16",
    category: "scripture",
    featured: true,
    status: "published" as const,
  },
  {
    title: "Blessed are the unimpressive",
    slug: "blessed-are-the-unimpressive",
    description:
      "The Beatitudes are not a personality chart for gifted people. They announce a kingdom that begins where our usual rankings end.",
    videoUrl: "",
    thumbnail: "/images/lectern.jpg",
    thumbnailAlt: "A wooden lectern, the image for Blessed Are the Unimpressive",
    recordedOn: "2026-04-26",
    duration: "42 min",
    series: "The Sermon",
    scripture: "Matthew 5:1–12",
    category: "scripture",
    featured: false,
    status: "published" as const,
  },
  {
    title: "A better word",
    slug: "a-better-word",
    description:
      "Hebrews says we have come to Jesus, the mediator, and to a blood that speaks a better word than the blood of Abel. This message stays with that contrast.",
    videoUrl: "",
    thumbnail: "/images/chapel.jpg",
    thumbnailAlt: "Chapel pews in afternoon light",
    recordedOn: "2026-02-15",
    duration: "36 min",
    series: "Hebrews",
    scripture: "Hebrews 12:18–29",
    category: "scripture",
    featured: false,
    status: "published" as const,
  },
  {
    title: "The mercy that irritates us",
    slug: "the-mercy-that-irritates-us",
    description:
      "Jonah is angry that God relents. The book ends on a question, not a bow. A reading of Jonah 4 for people who prefer judgement when it falls on someone else.",
    videoUrl: "",
    thumbnail: "/images/bible.jpg",
    thumbnailAlt: "An open Bible on a wooden table",
    recordedOn: "2025-11-02",
    duration: "33 min",
    series: "The minor prophets",
    scripture: "Jonah 4",
    category: "scripture",
    featured: false,
    status: "published" as const,
  },
  {
    title: "Psalm 23 for tired people",
    slug: "psalm-23-for-tired-people",
    description:
      "A valley psalm that has been used so often it can stop sounding like news. This teaching walks the six verses without turning them into a poster. The player below embeds an external public reading so the page can be tried; it is not John Wes's voice and should be replaced.",
    videoUrl: "https://www.youtube.com/watch?v=ZLynWedr1_g",
    thumbnail: "/images/highlands.jpg",
    thumbnailAlt: "Mist in a valley at dawn",
    recordedOn: "2025-10-05",
    duration: "29 min",
    series: "The Psalter",
    scripture: "Psalm 23",
    category: "prayer",
    featured: true,
    status: "published" as const,
  },
  {
    title: "Cost, and then joy",
    slug: "cost-and-then-joy",
    description:
      "Luke 9 refuses a discipleship of good intentions. Taking up the cross comes before the language of gain. A plain exposition for a Sunday that does not need to be dressed up.",
    videoUrl: "",
    thumbnail: "/images/lectern.jpg",
    thumbnailAlt: "A lectern with a closed book",
    recordedOn: "2025-08-17",
    duration: "40 min",
    series: "Luke",
    scripture: "Luke 9:18–27",
    category: "christian-life",
    featured: false,
    status: "published" as const,
  },
  {
    title: "God with us in the dark",
    slug: "god-with-us-in-the-dark",
    description:
      "John begins with the Word, not with a mood. An Advent message on light that shines in darkness the darkness does not overcome.",
    videoUrl: "",
    thumbnail: "/images/chapel.jpg",
    thumbnailAlt: "A quiet chapel in low light",
    recordedOn: "2025-12-14",
    duration: "27 min",
    series: "Advent",
    scripture: "John 1:1–18",
    category: "scripture",
    featured: false,
    status: "published" as const,
  },
  {
    title: "Answering a disappointed friend",
    slug: "answering-a-disappointed-friend",
    description:
      "A conversation, not a rally. What to say — and what to stop saying — when someone you love has not left God so much as gone quiet.",
    videoUrl: "",
    thumbnail: "/images/hands.jpg",
    thumbnailAlt: "Hands resting on a notebook",
    recordedOn: "2026-01-25",
    duration: "48 min",
    series: "Conversations",
    scripture: "Psalm 42",
    category: "prayer",
    featured: false,
    status: "published" as const,
  },
];

export const eventSeed = [
  {
    title: "A weekend on the Gospel of Mark",
    slug: "weekend-on-mark",
    description:
      "An illustrative weekend for pastors and lay teachers. Four sessions, no plenary spectacle: the opening of Mark, the middle misunderstandings, the cross, and the ending. Sample event — not a real booking.",
    startsOn: "2026-12-04",
    endsOn: "2026-12-06",
    whenLabel: "4–6 December 2026",
    timeZone: "Africa/Kampala",
    venue: "All Saints Hall, Kampala (sample venue)",
    registrationUrl: "https://example.com/events/weekend-on-mark",
    status: "scheduled" as const,
  },
  {
    title: "Midweek Psalms, online",
    slug: "midweek-psalms",
    description:
      "A single evening on Psalms 42 and 43 for people who pray better with a text in front of them. Illustrative online gathering. The registration link is a placeholder.",
    startsOn: "2026-11-18",
    endsOn: "2026-11-18",
    whenLabel: "18 November 2026, 7:00 p.m. East Africa Time",
    timeZone: "Africa/Nairobi",
    venue: "Online",
    registrationUrl: "https://example.com/events/midweek-psalms",
    status: "scheduled" as const,
  },
  {
    title: "Scripture and the modern mind",
    slug: "scripture-and-the-modern-mind",
    description:
      "A past public evening on why the Gospels still deserve a hearing from people who were taught to outgrow them. Listed so the calendar can show memory as well as invitation. Sample only.",
    startsOn: "2026-03-12",
    endsOn: "2026-03-12",
    whenLabel: "12 March 2026",
    timeZone: "Africa/Nairobi",
    venue: "Nairobi (sample venue)",
    registrationUrl: "",
    status: "scheduled" as const,
  },
  {
    title: "A day with tired pastors",
    slug: "a-day-with-tired-pastors",
    description:
      "One day, no new programme. Sessions on staying, lament, and the Lord's Supper, with a long lunch. This sample date has passed.",
    startsOn: "2026-06-20",
    endsOn: "2026-06-20",
    whenLabel: "20 June 2026",
    timeZone: "Africa/Nairobi",
    venue: "A retreat house outside Nairobi (sample)",
    registrationUrl: "",
    status: "scheduled" as const,
  },
];
