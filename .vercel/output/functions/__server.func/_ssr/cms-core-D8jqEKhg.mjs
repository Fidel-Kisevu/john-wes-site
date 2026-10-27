import { a as safeHttpUrl, o as slugify } from "./content-types-CXscOd2w.mjs";
import { r as getSql } from "./db-i69dxe5v.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cms-core-D8jqEKhg.js
var SEED_KEY = "content-v1";
var settingsSeed = {
	ministerName: "Minister Benja",
	professionalTitle: "Bible teacher and writer",
	kicker: "Scripture, read slowly",
	homepageIntro: "Minister Benja teaches the Bible for congregations and for people who have grown tired of noise. He writes slowly, stays close to the text, and trusts ordinary churches with serious ideas.",
	pullQuote: "The church does not need a louder voice. It needs a truer one, and the patience to stay with the text.",
	biographySummary: "Benja spends his weeks with a local congregation in Nairobi, and a smaller part of the year with pastors and students who ask him to open a book of Scripture and stay there.",
	biography: `Minister Benja is a fictional teacher created for this demonstration site. In the sample story he is a Bible teacher and writer working from Nairobi, known less for a platform than for a habit: he stays with a passage longer than the room expects.

He is presented as someone who came to faith as a student, learned to preach by sitting under older pastors, and still thinks the local church is the main place Christian speech should be tested. The work gathered here — essays, short books, and recorded messages — circles a few concerns: the trustworthiness of the Gospels, the honesty of prayer, the unspectacular life of a congregation, and the hope that outlasts a hard week.

He accepts a limited number of speaking invitations, usually to teach through a book of the Bible rather than to offer a single motivational address. Between those trips he writes in the mornings and teaches in the evening.`,
	interests: `The Gospels\nThe Psalms\nThe common life of the church\nPrayer and lament\nTeaching the next generation`,
	credentialsNote: "This demonstration does not claim degrees, ordination, awards, or endorsements. Add only what is true of a real minister before any public launch.",
	portraitUrl: "/images/portrait.jpg",
	portraitAlt: "Portrait of Minister Benja, in a charcoal jacket against a pale wall",
	contactEmail: "studio@ministerbenja.example",
	youtubeUrl: "https://example.com/minister-benja/youtube",
	xUrl: "https://example.com/minister-benja",
	facebookUrl: "https://example.com/minister-benja/facebook",
	instagramUrl: "https://example.com/minister-benja/instagram",
	seoTitle: "Minister Benja — Bible teacher and writer",
	seoDescription: "Essays, books, and recorded messages from Minister Benja, a Bible teacher writing on Scripture, the church, and Christian hope.",
	footerNote: "Nairobi · teaching, writing, and a few invitations each year.",
	newsletterHeading: "Occasional notes",
	newsletterText: "A short letter when a new essay or series is published. No mailing service is connected on this demonstration, so an address is only kept on this site.",
	speakingNote: "Invitations are read carefully. Benja is usually free to teach through one book of Scripture over a weekend, or to give a single address if the passage is agreed in advance. This form saves the note for the editor. It does not send email.",
	showSampleNotice: true
};
var categorySeed = [
	{
		name: "Scripture",
		slug: "scripture",
		description: "Close reading of the Bible and why the text can still be trusted."
	},
	{
		name: "The church",
		slug: "the-church",
		description: "The ordinary congregation, its worship, and its common life."
	},
	{
		name: "Christian life",
		slug: "christian-life",
		description: "Faith worked out in weeks that do not feel historic."
	},
	{
		name: "Prayer",
		slug: "prayer",
		description: "Speaking to God when the words are thin, angry, or late."
	},
	{
		name: "Teaching",
		slug: "teaching",
		description: "How the faith is handed on, especially to the young."
	}
];
var articleSeed = [
	{
		title: "The slow work of Scripture",
		slug: "the-slow-work-of-scripture",
		excerpt: "A congregation is not behind because it refuses to hurry. Most of the Bible was written for people who would hear it more than once.",
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

If your congregation is still in chapter two, you are not necessarily behind. You may be in the only place where the words can become yours.`
	},
	{
		title: "Why the resurrection still orders the week",
		slug: "the-resurrection-orders-the-week",
		excerpt: "Sunday is not a brand mark on an otherwise ordinary calendar. It is the day the rest of the days have to answer to.",
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

The resurrection is not a decoration we add to a life already organised by productivity. It is the reason a Christian week has a centre. We begin there, and then we go back to ordinary work as people who have heard better news than the week can invent.`
	},
	{
		title: "A quiet case for the Gospels",
		slug: "a-quiet-case-for-the-gospels",
		excerpt: "The four Gospels do not read like propaganda written by people who had time to sand every edge. That roughness is part of the reason to trust them.",
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

Faith is more than a historical judgement. But it is not less. The quiet case is that these books still sound like news, not like a brand trying to survive another season.`
	},
	{
		title: "Prayer when the words run out",
		slug: "prayer-when-the-words-run-out",
		excerpt: "The Psalms already contain the prayers we are ashamed to attempt. Borrowing them is not a failure of sincerity.",
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

Some days that is the whole prayer, and it is not nothing. God is not waiting for a performance. He is the Father of Jesus Christ, and Christ's own prayer in the garden was short, repeated, and costly. We are allowed to be that simple.`
	},
	{
		title: "The church is not a brand",
		slug: "the-church-is-not-a-brand",
		excerpt: "A congregation that thinks of itself as a brand will eventually sand away whatever cannot be marketed. The gospel is full of those things.",
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

If that is smaller than the brand you were tempted to build, it may also be heavy enough to last.`
	},
	{
		title: "Hospitality is a theological act",
		slug: "hospitality-is-a-theological-act",
		excerpt: "A shared table does not replace the gospel. It is one of the ways the gospel becomes visible to people who are not yet sure they want a sermon.",
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

If you are looking for a place to begin, begin smaller than a programme. One meal. One extra seat. One conversation in which you do not steer every sentence back to yourself. The theology can survive that kind of simplicity. It has been doing so for a long time.`
	},
	{
		title: "Lament is not unbelief",
		slug: "lament-is-not-unbelief",
		excerpt: "A faith that cannot cry has confused cheerfulness with trust. The Psalms refuse that confusion, and so should we.",
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

If you are in a season that will not resolve this month, you are not failing the faith by saying so in prayer. You may be practising it.`
	},
	{
		title: "Teach the story, not the slogan",
		slug: "teach-the-story-not-the-slogan",
		excerpt: "Children can bear more of the Bible than we think, and less of our anxiety. What they need is the story, told whole.",
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

The aim is not a child who can repeat our favourite line. The aim is a person who knows whose world this is, and what happened in it, well enough to recognise the Shepherd's voice when the slogans of the age change.`
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

Leave this unpublished until that is written.`
	}
];
var bookSeed = [
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
		status: "published"
	},
	{
		title: "The Ordinary Hours",
		slug: "the-ordinary-hours",
		subtitle: "On work, waiting, and the Christian week",
		coverImage: "/images/covers/hours.jpg",
		coverAlt: "Clothbound cover of The Ordinary Hours",
		description: `Most of a Christian life is not a conference. It is a Tuesday, a commute, a child who will not sleep, a task that does not become a testimony. The Ordinary Hours is a book about that majority: how the resurrection orders unspectacular time, and how prayer survives a calendar.

Benja writes as a pastor-teacher, not as a productivity guide. There is no system to install. There is a way of telling the truth about the week in the presence of God. The publisher, price, and order link on this page are placeholders.`,
		publisher: "Field & Fire (sample)",
		publicationYear: 2022,
		isbn: "Sample — replace before launch",
		price: "16.00",
		currency: "USD",
		purchaseUrl: "https://example.com/books/the-ordinary-hours",
		featured: false,
		status: "published"
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
		status: "published"
	},
	{
		title: "Letters for a Tired Church",
		slug: "letters-for-a-tired-church",
		subtitle: "Twelve notes on staying",
		coverImage: "/images/covers/letters.jpg",
		coverAlt: "Clothbound cover of Letters for a Tired Church",
		description: `These twelve letters are addressed to a congregation that has not collapsed and has not triumphed. The building needs paint. The young people are unsure. The elders are weary of being told to be more visionary. Benja writes to them about the apostles' teaching, about money, about gossip, about the Lord's Supper, and about the strange hope of staying.

The voice is pastoral and unhurried. Nothing in the book depends on a real correspondence — the letters are a literary form for this sample publication, not recovered historical documents.`,
		publisher: "Quiet Press (sample)",
		publicationYear: 2023,
		isbn: "Sample — replace before launch",
		price: "15.00",
		currency: "USD",
		purchaseUrl: "https://example.com/books/letters-for-a-tired-church",
		featured: false,
		status: "published"
	}
];
var messageSeed = [
	{
		title: "The God who sees",
		slug: "the-god-who-sees",
		description: "Hagar names God in the desert, before any institution is ready to dignify her. A teaching on Genesis 16 and the kind of sight that does not wait for a crowd.",
		videoUrl: "",
		thumbnail: "/images/highlands.jpg",
		thumbnailAlt: "Highlands at dawn, the image for The God Who Sees",
		recordedOn: "2026-07-19",
		duration: "38 min",
		series: "Names",
		scripture: "Genesis 16",
		category: "scripture",
		featured: true,
		status: "published"
	},
	{
		title: "Blessed are the unimpressive",
		slug: "blessed-are-the-unimpressive",
		description: "The Beatitudes are not a personality chart for gifted people. They announce a kingdom that begins where our usual rankings end.",
		videoUrl: "",
		thumbnail: "/images/lectern.jpg",
		thumbnailAlt: "A wooden lectern, the image for Blessed Are the Unimpressive",
		recordedOn: "2026-04-26",
		duration: "42 min",
		series: "The Sermon",
		scripture: "Matthew 5:1–12",
		category: "scripture",
		featured: false,
		status: "published"
	},
	{
		title: "A better word",
		slug: "a-better-word",
		description: "Hebrews says we have come to Jesus, the mediator, and to a blood that speaks a better word than the blood of Abel. This message stays with that contrast.",
		videoUrl: "",
		thumbnail: "/images/chapel.jpg",
		thumbnailAlt: "Chapel pews in afternoon light",
		recordedOn: "2026-02-15",
		duration: "36 min",
		series: "Hebrews",
		scripture: "Hebrews 12:18–29",
		category: "scripture",
		featured: false,
		status: "published"
	},
	{
		title: "The mercy that irritates us",
		slug: "the-mercy-that-irritates-us",
		description: "Jonah is angry that God relents. The book ends on a question, not a bow. A reading of Jonah 4 for people who prefer judgement when it falls on someone else.",
		videoUrl: "",
		thumbnail: "/images/bible.jpg",
		thumbnailAlt: "An open Bible on a wooden table",
		recordedOn: "2025-11-02",
		duration: "33 min",
		series: "The minor prophets",
		scripture: "Jonah 4",
		category: "scripture",
		featured: false,
		status: "published"
	},
	{
		title: "Psalm 23 for tired people",
		slug: "psalm-23-for-tired-people",
		description: "A valley psalm that has been used so often it can stop sounding like news. This teaching walks the six verses without turning them into a poster. The player below embeds an external public reading so the page can be tried; it is not Minister Benja's voice and should be replaced.",
		videoUrl: "https://www.youtube.com/watch?v=ZLynWedr1_g",
		thumbnail: "/images/highlands.jpg",
		thumbnailAlt: "Mist in a valley at dawn",
		recordedOn: "2025-10-05",
		duration: "29 min",
		series: "The Psalter",
		scripture: "Psalm 23",
		category: "prayer",
		featured: true,
		status: "published"
	},
	{
		title: "Cost, and then joy",
		slug: "cost-and-then-joy",
		description: "Luke 9 refuses a discipleship of good intentions. Taking up the cross comes before the language of gain. A plain exposition for a Sunday that does not need to be dressed up.",
		videoUrl: "",
		thumbnail: "/images/lectern.jpg",
		thumbnailAlt: "A lectern with a closed book",
		recordedOn: "2025-08-17",
		duration: "40 min",
		series: "Luke",
		scripture: "Luke 9:18–27",
		category: "christian-life",
		featured: false,
		status: "published"
	},
	{
		title: "God with us in the dark",
		slug: "god-with-us-in-the-dark",
		description: "John begins with the Word, not with a mood. An Advent message on light that shines in darkness the darkness does not overcome.",
		videoUrl: "",
		thumbnail: "/images/chapel.jpg",
		thumbnailAlt: "A quiet chapel in low light",
		recordedOn: "2025-12-14",
		duration: "27 min",
		series: "Advent",
		scripture: "John 1:1–18",
		category: "scripture",
		featured: false,
		status: "published"
	},
	{
		title: "Answering a disappointed friend",
		slug: "answering-a-disappointed-friend",
		description: "A conversation, not a rally. What to say — and what to stop saying — when someone you love has not left God so much as gone quiet.",
		videoUrl: "",
		thumbnail: "/images/hands.jpg",
		thumbnailAlt: "Hands resting on a notebook",
		recordedOn: "2026-01-25",
		duration: "48 min",
		series: "Conversations",
		scripture: "Psalm 42",
		category: "prayer",
		featured: false,
		status: "published"
	}
];
var eventSeed = [
	{
		title: "A weekend on the Gospel of Mark",
		slug: "weekend-on-mark",
		description: "An illustrative weekend for pastors and lay teachers. Four sessions, no plenary spectacle: the opening of Mark, the middle misunderstandings, the cross, and the ending. Sample event — not a real booking.",
		startsOn: "2026-12-04",
		endsOn: "2026-12-06",
		whenLabel: "4–6 December 2026",
		timeZone: "Africa/Kampala",
		venue: "All Saints Hall, Kampala (sample venue)",
		registrationUrl: "https://example.com/events/weekend-on-mark",
		status: "scheduled"
	},
	{
		title: "Midweek Psalms, online",
		slug: "midweek-psalms",
		description: "A single evening on Psalms 42 and 43 for people who pray better with a text in front of them. Illustrative online gathering. The registration link is a placeholder.",
		startsOn: "2026-11-18",
		endsOn: "2026-11-18",
		whenLabel: "18 November 2026, 7:00 p.m. East Africa Time",
		timeZone: "Africa/Nairobi",
		venue: "Online",
		registrationUrl: "https://example.com/events/midweek-psalms",
		status: "scheduled"
	},
	{
		title: "Scripture and the modern mind",
		slug: "scripture-and-the-modern-mind",
		description: "A past public evening on why the Gospels still deserve a hearing from people who were taught to outgrow them. Listed so the calendar can show memory as well as invitation. Sample only.",
		startsOn: "2026-03-12",
		endsOn: "2026-03-12",
		whenLabel: "12 March 2026",
		timeZone: "Africa/Nairobi",
		venue: "Nairobi (sample venue)",
		registrationUrl: "",
		status: "scheduled"
	},
	{
		title: "A day with tired pastors",
		slug: "a-day-with-tired-pastors",
		description: "One day, no new programme. Sessions on staying, lament, and the Lord's Supper, with a long lunch. This sample date has passed.",
		startsOn: "2026-06-20",
		endsOn: "2026-06-20",
		whenLabel: "20 June 2026",
		timeZone: "Africa/Nairobi",
		venue: "A retreat house outside Nairobi (sample)",
		registrationUrl: "",
		status: "scheduled"
	}
];
var hits = /* @__PURE__ */ new Map();
function asString(value) {
	if (value == null) return "";
	if (value instanceof Date) return value.toISOString();
	return String(value);
}
function asDate(value) {
	const raw = asString(value);
	return raw.length >= 10 ? raw.slice(0, 10) : raw;
}
function asBool(value) {
	return value === true || value === "t" || value === "true" || value === 1;
}
function asNum(value) {
	if (value == null || value === "") return null;
	const n = typeof value === "number" ? value : Number(value);
	return Number.isFinite(n) ? n : null;
}
function asStatus(value) {
	return value === "published" ? "published" : "draft";
}
var seedPromise = null;
async function seed(sql) {
	if ((await sql`select value from app_meta where key = ${"content-v1"}`).length > 0) return;
	const s = settingsSeed;
	await sql`
    insert into site_settings (
      id, minister_name, professional_title, kicker, homepage_intro, pull_quote,
      biography_summary, biography, interests, credentials_note, portrait_url, portrait_alt,
      contact_email, youtube_url, x_url, facebook_url, instagram_url, seo_title, seo_description,
      footer_note, newsletter_heading, newsletter_text, speaking_note, show_sample_notice
    ) values (
      1, ${s.ministerName}, ${s.professionalTitle}, ${s.kicker}, ${s.homepageIntro}, ${s.pullQuote},
      ${s.biographySummary}, ${s.biography}, ${s.interests}, ${s.credentialsNote}, ${s.portraitUrl}, ${s.portraitAlt},
      ${s.contactEmail}, ${s.youtubeUrl}, ${s.xUrl}, ${s.facebookUrl}, ${s.instagramUrl}, ${s.seoTitle}, ${s.seoDescription},
      ${s.footerNote}, ${s.newsletterHeading}, ${s.newsletterText}, ${s.speakingNote}, ${s.showSampleNotice}
    )
    on conflict (id) do nothing
  `;
	for (const category of categorySeed) await sql`
      insert into categories (name, slug, description)
      values (${category.name}, ${category.slug}, ${category.description})
      on conflict (slug) do nothing
    `;
	const cats = await sql`select id, slug from categories`;
	const catId = (slug) => {
		const row = cats.find((item) => item.slug === slug);
		return row ? Number(row.id) : null;
	};
	for (const article of articleSeed) await sql`
      insert into articles (
        title, slug, excerpt, body, hero_image, hero_alt, category_id, author_name,
        featured, published_at, status, seo_title, seo_description
      ) values (
        ${article.title}, ${article.slug}, ${article.excerpt}, ${article.body}, ${article.heroImage},
        ${article.heroAlt}, ${catId(article.category)}, ${s.ministerName}, ${article.featured},
        ${article.publishedAt}, ${article.status}, ${article.title}, ${article.excerpt}
      )
      on conflict (slug) do nothing
    `;
	for (const book of bookSeed) await sql`
      insert into books (
        title, slug, subtitle, cover_image, cover_alt, description, author_name, publisher,
        publication_year, isbn, price, currency, purchase_url, featured, status, seo_title, seo_description
      ) values (
        ${book.title}, ${book.slug}, ${book.subtitle}, ${book.coverImage}, ${book.coverAlt}, ${book.description},
        ${s.ministerName}, ${book.publisher}, ${book.publicationYear}, ${book.isbn}, ${book.price}, ${book.currency},
        ${book.purchaseUrl}, ${book.featured}, ${book.status}, ${book.title}, ${book.subtitle}
      )
      on conflict (slug) do nothing
    `;
	for (const message of messageSeed) await sql`
      insert into messages (
        title, slug, description, video_url, thumbnail, thumbnail_alt, speaker, recorded_on,
        duration, series, scripture, category_id, featured, status, seo_title, seo_description
      ) values (
        ${message.title}, ${message.slug}, ${message.description}, ${message.videoUrl}, ${message.thumbnail},
        ${message.thumbnailAlt}, ${s.ministerName}, ${message.recordedOn}, ${message.duration}, ${message.series},
        ${message.scripture}, ${catId(message.category)}, ${message.featured}, ${message.status},
        ${message.title}, ${message.description}
      )
      on conflict (slug) do nothing
    `;
	for (const event of eventSeed) await sql`
      insert into events (
        title, slug, description, starts_on, ends_on, when_label, time_zone, venue, registration_url, status
      ) values (
        ${event.title}, ${event.slug}, ${event.description}, ${event.startsOn}, ${event.endsOn},
        ${event.whenLabel}, ${event.timeZone}, ${event.venue}, ${event.registrationUrl}, ${event.status}
      )
      on conflict (slug) do nothing
    `;
	await sql`
    insert into app_meta (key, value) values (${SEED_KEY}, '1')
    on conflict (key) do nothing
  `;
}
var COVER_FIX = {
	"a-table-in-the-wilderness": {
		image: "/images/covers/table.jpg",
		alt: "Clothbound cover of A Table in the Wilderness"
	},
	"the-ordinary-hours": {
		image: "/images/covers/hours.jpg",
		alt: "Clothbound cover of The Ordinary Hours"
	},
	"reading-mark-slowly": {
		image: "/images/covers/mark.jpg",
		alt: "Oxblood cloth cover of Reading Mark Slowly"
	},
	"letters-for-a-tired-church": {
		image: "/images/covers/letters.jpg",
		alt: "Clothbound cover of Letters for a Tired Church"
	}
};
var coversReady = false;
async function refreshCovers(sql) {
	if (coversReady) return;
	for (const [slug, cover] of Object.entries(COVER_FIX)) await sql`
      update books set cover_image = ${cover.image}, cover_alt = ${cover.alt}
      where slug = ${slug} and cover_image is distinct from ${cover.image}
    `;
	coversReady = true;
}
async function ready() {
	const sql = await getSql();
	seedPromise ??= seed(sql).catch((error) => {
		seedPromise = null;
		throw error;
	});
	await seedPromise;
	await refreshCovers(sql);
	return sql;
}
function mapSettings(row) {
	return {
		ministerName: asString(row.minister_name),
		professionalTitle: asString(row.professional_title),
		kicker: asString(row.kicker),
		homepageIntro: asString(row.homepage_intro),
		pullQuote: asString(row.pull_quote),
		biographySummary: asString(row.biography_summary),
		biography: asString(row.biography),
		interests: asString(row.interests),
		credentialsNote: asString(row.credentials_note),
		portraitUrl: asString(row.portrait_url),
		portraitAlt: asString(row.portrait_alt),
		contactEmail: asString(row.contact_email),
		youtubeUrl: asString(row.youtube_url),
		xUrl: asString(row.x_url),
		facebookUrl: asString(row.facebook_url),
		instagramUrl: asString(row.instagram_url),
		seoTitle: asString(row.seo_title),
		seoDescription: asString(row.seo_description),
		footerNote: asString(row.footer_note),
		newsletterHeading: asString(row.newsletter_heading),
		newsletterText: asString(row.newsletter_text),
		speakingNote: asString(row.speaking_note),
		showSampleNotice: asBool(row.show_sample_notice)
	};
}
function mapArticle(row) {
	return {
		id: Number(row.id),
		title: asString(row.title),
		slug: asString(row.slug),
		excerpt: asString(row.excerpt),
		body: asString(row.body),
		heroImage: asString(row.hero_image),
		heroAlt: asString(row.hero_alt),
		categoryId: asNum(row.category_id),
		categoryName: asString(row.category_name),
		categorySlug: asString(row.category_slug),
		authorName: asString(row.author_name),
		featured: asBool(row.featured),
		publishedAt: asString(row.published_at),
		status: asStatus(row.status),
		seoTitle: asString(row.seo_title),
		seoDescription: asString(row.seo_description),
		updatedAt: asString(row.updated_at)
	};
}
function mapBook(row) {
	const year = asNum(row.publication_year);
	return {
		id: Number(row.id),
		title: asString(row.title),
		slug: asString(row.slug),
		subtitle: asString(row.subtitle),
		coverImage: asString(row.cover_image),
		coverAlt: asString(row.cover_alt),
		description: asString(row.description),
		authorName: asString(row.author_name),
		publisher: asString(row.publisher),
		publicationYear: year == null ? "" : String(year),
		isbn: asString(row.isbn),
		price: asString(row.price),
		currency: asString(row.currency),
		purchaseUrl: asString(row.purchase_url),
		featured: asBool(row.featured),
		status: asStatus(row.status),
		seoTitle: asString(row.seo_title),
		seoDescription: asString(row.seo_description)
	};
}
function mapTeaching(row) {
	return {
		id: Number(row.id),
		title: asString(row.title),
		slug: asString(row.slug),
		description: asString(row.description),
		videoUrl: asString(row.video_url),
		thumbnail: asString(row.thumbnail),
		thumbnailAlt: asString(row.thumbnail_alt),
		speaker: asString(row.speaker),
		recordedOn: asDate(row.recorded_on),
		duration: asString(row.duration),
		series: asString(row.series),
		scripture: asString(row.scripture),
		categoryId: asNum(row.category_id),
		categoryName: asString(row.category_name),
		featured: asBool(row.featured),
		status: asStatus(row.status),
		seoTitle: asString(row.seo_title),
		seoDescription: asString(row.seo_description)
	};
}
function mapEvent(row) {
	const startsOn = asDate(row.starts_on);
	const endsOn = asDate(row.ends_on);
	const today = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
	const end = endsOn || startsOn;
	const upcoming = asString(row.status) !== "cancelled" && end >= today;
	return {
		id: Number(row.id),
		title: asString(row.title),
		slug: asString(row.slug),
		description: asString(row.description),
		startsOn,
		endsOn,
		whenLabel: asString(row.when_label),
		timeZone: asString(row.time_zone),
		venue: asString(row.venue),
		registrationUrl: asString(row.registration_url),
		status: row.status === "cancelled" ? "cancelled" : "scheduled",
		upcoming
	};
}
function mapCategory(row) {
	return {
		id: Number(row.id),
		name: asString(row.name),
		slug: asString(row.slug),
		description: asString(row.description)
	};
}
async function readSettings() {
	const row = (await (await ready())`select * from site_settings where id = 1`)[0];
	if (!row) throw new Error("Site settings are not ready.");
	return mapSettings(row);
}
async function readHome() {
	const sql = await ready();
	const essayRows = await sql`
    select a.id, a.title, a.slug, a.excerpt, a.hero_image, a.hero_alt, a.category_id,
      coalesce(c.name, '') as category_name, coalesce(c.slug, '') as category_slug,
      a.author_name, a.featured, a.published_at, a.status, a.seo_title, a.seo_description, a.updated_at,
      '' as body
    from articles a
    left join categories c on c.id = a.category_id
    where a.status = 'published'
    order by a.featured desc, a.published_at desc nulls last
    limit 5
  `;
	const bookRows = await sql`
    select * from books where status = 'published' order by featured desc, publication_year desc nulls last limit 4
  `;
	const messageRows = await sql`
    select m.*, coalesce(c.name, '') as category_name
    from messages m
    left join categories c on c.id = m.category_id
    where m.status = 'published'
    order by m.featured desc, m.recorded_on desc nulls last
    limit 4
  `;
	const eventRows = await sql`
    select * from events
    where status = 'scheduled' and coalesce(ends_on, starts_on) >= current_date
    order by starts_on asc
    limit 1
  `;
	return {
		essays: essayRows.map(mapArticle),
		books: bookRows.map(mapBook),
		messages: messageRows.map(mapTeaching),
		nextEvent: eventRows[0] ? mapEvent(eventRows[0]) : null
	};
}
async function readArticles(category) {
	const sql = await ready();
	const slug = slugify(category);
	const rows = await sql`
    select a.id, a.title, a.slug, a.excerpt, a.hero_image, a.hero_alt, a.category_id,
      coalesce(c.name, '') as category_name, coalesce(c.slug, '') as category_slug,
      a.author_name, a.featured, a.published_at, a.status, a.seo_title, a.seo_description, a.updated_at,
      '' as body
    from articles a
    left join categories c on c.id = a.category_id
    where a.status = 'published' and (${slug} = '' or c.slug = ${slug})
    order by a.published_at desc nulls last
  `;
	const categories = await sql`select * from categories order by name`;
	return {
		articles: rows.map(mapArticle),
		categories: categories.map(mapCategory)
	};
}
async function readArticle(slug) {
	const sql = await ready();
	const row = (await sql`
    select a.*, coalesce(c.name, '') as category_name, coalesce(c.slug, '') as category_slug
    from articles a
    left join categories c on c.id = a.category_id
    where a.slug = ${slug} and a.status = 'published'
  `)[0];
	if (!row) return null;
	const article = mapArticle(row);
	return {
		article,
		related: (await sql`
    select a.id, a.title, a.slug, a.excerpt, a.hero_image, a.hero_alt, a.category_id,
      coalesce(c.name, '') as category_name, coalesce(c.slug, '') as category_slug,
      a.author_name, a.featured, a.published_at, a.status, a.seo_title, a.seo_description, a.updated_at,
      '' as body
    from articles a
    left join categories c on c.id = a.category_id
    where a.status = 'published' and a.id <> ${article.id}
    order by case when a.category_id is not distinct from ${article.categoryId} then 0 else 1 end,
      a.published_at desc nulls last
    limit 3
  `).map(mapArticle)
	};
}
async function readBooks() {
	return (await (await ready())`
    select * from books where status = 'published' order by featured desc, publication_year desc nulls last, title
  `).map(mapBook);
}
async function readBook(slug) {
	const sql = await ready();
	const row = (await sql`select * from books where slug = ${slug} and status = 'published'`)[0];
	if (!row) return null;
	const book = mapBook(row);
	return {
		book,
		related: (await sql`
    select * from books where status = 'published' and id <> ${book.id} order by publication_year desc nulls last limit 3
  `).map(mapBook)
	};
}
async function readMessages(series) {
	const sql = await ready();
	const filter = series.trim().slice(0, 80);
	const rows = await sql`
    select m.*, coalesce(c.name, '') as category_name
    from messages m
    left join categories c on c.id = m.category_id
    where m.status = 'published' and (${filter} = '' or m.series = ${filter})
    order by m.recorded_on desc nulls last
  `;
	const seriesRows = await sql`
    select distinct series from messages where status = 'published' and series <> '' order by series
  `;
	return {
		messages: rows.map(mapTeaching),
		series: seriesRows.map((item) => item.series)
	};
}
async function readMessage(slug) {
	const sql = await ready();
	const row = (await sql`
    select m.*, coalesce(c.name, '') as category_name
    from messages m left join categories c on c.id = m.category_id
    where m.slug = ${slug} and m.status = 'published'
  `)[0];
	if (!row) return null;
	const message = mapTeaching(row);
	return {
		message,
		related: (await sql`
    select m.*, coalesce(c.name, '') as category_name
    from messages m left join categories c on c.id = m.category_id
    where m.status = 'published' and m.id <> ${message.id}
    order by case when m.series = ${message.series} and ${message.series} <> '' then 0 else 1 end,
      m.recorded_on desc nulls last
    limit 3
  `).map(mapTeaching)
	};
}
async function readEvents() {
	const events = (await (await ready())`select * from events order by starts_on desc`).map(mapEvent);
	return {
		upcoming: events.filter((event) => event.upcoming).sort((a, b) => a.startsOn.localeCompare(b.startsOn)),
		past: events.filter((event) => !event.upcoming)
	};
}
async function readSearch(query) {
	const q = query.trim().slice(0, 120);
	if (q.length < 2) return [];
	const pattern = `%${q.replace(/[\\%_]/g, (char) => `\\${char}`)}%`;
	const sql = await ready();
	const articles = await sql`
    select title, slug, excerpt from articles
    where status = 'published' and (title ilike ${pattern} escape '\\' or excerpt ilike ${pattern} escape '\\' or body ilike ${pattern} escape '\\')
    order by published_at desc nulls last limit 8
  `;
	const books = await sql`
    select title, slug, subtitle from books
    where status = 'published' and (title ilike ${pattern} escape '\\' or subtitle ilike ${pattern} escape '\\' or description ilike ${pattern} escape '\\')
    order by title limit 6
  `;
	const messages = await sql`
    select title, slug, description from messages
    where status = 'published' and (title ilike ${pattern} escape '\\' or description ilike ${pattern} escape '\\' or scripture ilike ${pattern} escape '\\' or series ilike ${pattern} escape '\\')
    order by recorded_on desc nulls last limit 6
  `;
	return [
		...articles.map((item) => ({
			kind: "article",
			title: item.title,
			slug: item.slug,
			summary: item.excerpt
		})),
		...books.map((item) => ({
			kind: "book",
			title: item.title,
			slug: item.slug,
			summary: item.subtitle
		})),
		...messages.map((item) => ({
			kind: "message",
			title: item.title,
			slug: item.slug,
			summary: item.description
		}))
	];
}
async function readSitemap() {
	const sql = await ready();
	const articles = await sql`select slug from articles where status = 'published'`;
	const books = await sql`select slug from books where status = 'published'`;
	const messages = await sql`select slug from messages where status = 'published'`;
	return {
		articles: articles.map((item) => item.slug),
		books: books.map((item) => item.slug),
		messages: messages.map((item) => item.slug)
	};
}
function cleanText(value, max) {
	return typeof value === "string" ? value.trim().slice(0, max) : "";
}
function validSlug(value) {
	return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(value) && value.length <= 80;
}
function assetPath(value) {
	const trimmed = value.trim();
	if (!trimmed) return "";
	if (trimmed.startsWith("/images/") || trimmed.startsWith("/media/")) {
		if (trimmed.includes("..") || trimmed.includes("\\") || /\s/.test(trimmed)) throw new Error("That image path is not allowed.");
		return trimmed.slice(0, 240);
	}
	const url = safeHttpUrl(trimmed);
	if (!url) throw new Error("Image addresses must be a site path or an http(s) URL.");
	return url;
}
async function requireEditor(sql, userId) {
	if ((await sql`
    insert into site_admins (user_id)
    select ${userId}
    where not exists (select 1 from site_admins)
    returning user_id
  `).length > 0) return;
	if ((await sql`select user_id from site_admins where user_id = ${userId}`).length === 0) throw new Error("You do not have access to this desk.");
}
async function slugTaken(sql, table, slug, id) {
	return (table === "articles" ? await sql`select id from articles where slug = ${slug} and id is distinct from ${id}` : table === "books" ? await sql`select id from books where slug = ${slug} and id is distinct from ${id}` : table === "messages" ? await sql`select id from messages where slug = ${slug} and id is distinct from ${id}` : await sql`select id from events where slug = ${slug} and id is distinct from ${id}`).length > 0;
}
async function editorOverview(userId) {
	const sql = await ready();
	await requireEditor(sql, userId);
	const counts = await sql`
    select
      (select count(*)::int from articles) as articles,
      (select count(*)::int from articles where status = 'draft') as drafts,
      (select count(*)::int from books) as books,
      (select count(*)::int from messages) as messages,
      (select count(*)::int from events) as events,
      (select count(*)::int from contact_messages) as enquiries
  `;
	const recent = await sql`
    select id, title, slug, status, updated_at from articles order by updated_at desc limit 6
  `;
	const row = counts[0];
	return {
		counts: {
			articles: Number(row?.articles ?? 0),
			drafts: Number(row?.drafts ?? 0),
			books: Number(row?.books ?? 0),
			messages: Number(row?.messages ?? 0),
			events: Number(row?.events ?? 0),
			enquiries: Number(row?.enquiries ?? 0)
		},
		recent: recent.map((row) => ({
			id: Number(row.id),
			title: asString(row.title),
			slug: asString(row.slug),
			status: asStatus(row.status),
			updatedAt: asString(row.updated_at)
		}))
	};
}
async function editorArticles(userId) {
	const sql = await ready();
	await requireEditor(sql, userId);
	return (await sql`
    select a.id, a.title, a.slug, a.excerpt, a.hero_image, a.hero_alt, a.category_id,
      coalesce(c.name, '') as category_name, coalesce(c.slug, '') as category_slug,
      a.author_name, a.featured, a.published_at, a.status, a.seo_title, a.seo_description, a.updated_at,
      '' as body
    from articles a left join categories c on c.id = a.category_id
    order by a.updated_at desc
  `).map(mapArticle);
}
async function editorArticle(userId, id) {
	const sql = await ready();
	await requireEditor(sql, userId);
	const categories = (await sql`select * from categories order by name`).map(mapCategory);
	const media = await listMedia(sql);
	if (id == null) return {
		article: null,
		categories,
		media
	};
	const rows = await sql`
    select a.*, coalesce(c.name, '') as category_name, coalesce(c.slug, '') as category_slug
    from articles a left join categories c on c.id = a.category_id
    where a.id = ${id}
  `;
	return {
		article: rows[0] ? mapArticle(rows[0]) : null,
		categories,
		media
	};
}
function articleInput(raw) {
	const input = raw ?? {};
	const title = cleanText(input.title, 180);
	const slug = slugify(cleanText(input.slug, 90) || title);
	const excerpt = cleanText(input.excerpt, 500);
	const body = cleanText(input.body, 5e4);
	const authorName = cleanText(input.authorName, 120);
	if (title.length < 3) throw new Error("Give the essay a title.");
	if (!validSlug(slug)) throw new Error("Use a simple address made of lowercase words.");
	if (excerpt.length < 10) throw new Error("Add a short summary of at least a sentence.");
	if (body.length < 20) throw new Error("The essay needs a body.");
	if (authorName.length < 2) throw new Error("Name the author.");
	const status = input.status === "published" ? "published" : "draft";
	const publishedOn = cleanText(input.publishedOn, 10);
	if (publishedOn && !/^\d{4}-\d{2}-\d{2}$/.test(publishedOn)) throw new Error("The date should be YYYY-MM-DD.");
	const categoryId = asNum(input.categoryId);
	return {
		id: asNum(input.id),
		title,
		slug,
		excerpt,
		body,
		heroImage: assetPath(cleanText(input.heroImage, 400)),
		heroAlt: cleanText(input.heroAlt, 300),
		categoryId,
		authorName,
		featured: input.featured === true,
		status,
		seoTitle: cleanText(input.seoTitle, 180),
		seoDescription: cleanText(input.seoDescription, 300),
		publishedOn
	};
}
async function saveArticleRecord(userId, raw) {
	const sql = await ready();
	await requireEditor(sql, userId);
	const input = articleInput(raw);
	if (await slugTaken(sql, "articles", input.slug, input.id)) return {
		ok: false,
		message: "That address is already used. Choose another."
	};
	const publishedAt = input.status === "published" ? `${input.publishedOn || (/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}T08:00:00.000Z` : input.publishedOn ? `${input.publishedOn}T08:00:00.000Z` : null;
	if (input.id == null) {
		const rows = await sql`
      insert into articles (
        title, slug, excerpt, body, hero_image, hero_alt, category_id, author_name, featured,
        published_at, status, seo_title, seo_description
      ) values (
        ${input.title}, ${input.slug}, ${input.excerpt}, ${input.body}, ${input.heroImage || null}, ${input.heroAlt},
        ${input.categoryId}, ${input.authorName}, ${input.featured}, ${publishedAt}, ${input.status},
        ${input.seoTitle}, ${input.seoDescription}
      ) returning id
    `;
		return {
			ok: true,
			id: Number(rows[0]?.id),
			slug: input.slug
		};
	}
	if (!(await sql`
    update articles set
      title = ${input.title}, slug = ${input.slug}, excerpt = ${input.excerpt}, body = ${input.body},
      hero_image = ${input.heroImage || null}, hero_alt = ${input.heroAlt}, category_id = ${input.categoryId},
      author_name = ${input.authorName}, featured = ${input.featured}, published_at = ${publishedAt},
      status = ${input.status}, seo_title = ${input.seoTitle}, seo_description = ${input.seoDescription},
      updated_at = now()
    where id = ${input.id}
    returning id
  `)[0]) return {
		ok: false,
		message: "That essay could not be found."
	};
	return {
		ok: true,
		id: input.id,
		slug: input.slug
	};
}
async function deleteArticleRecord(userId, id) {
	const sql = await ready();
	await requireEditor(sql, userId);
	await sql`delete from articles where id = ${id}`;
	return { ok: true };
}
async function editorBooks(userId) {
	const sql = await ready();
	await requireEditor(sql, userId);
	return (await sql`select * from books order by updated_at desc`).map(mapBook);
}
async function editorBook(userId, id) {
	const sql = await ready();
	await requireEditor(sql, userId);
	const media = await listMedia(sql);
	if (id == null) return {
		book: null,
		media
	};
	const rows = await sql`select * from books where id = ${id}`;
	return {
		book: rows[0] ? mapBook(rows[0]) : null,
		media
	};
}
async function saveBookRecord(userId, raw) {
	const sql = await ready();
	await requireEditor(sql, userId);
	const input = raw ?? {};
	const title = cleanText(input.title, 180);
	const slug = slugify(cleanText(input.slug, 90) || title);
	const description = cleanText(input.description, 2e4);
	if (title.length < 2) throw new Error("Give the book a title.");
	if (!validSlug(slug)) throw new Error("Use a simple address made of lowercase words.");
	if (description.length < 20) throw new Error("Add a description.");
	const id = asNum(input.id);
	if (await slugTaken(sql, "books", slug, id)) return {
		ok: false,
		message: "That address is already used. Choose another."
	};
	const yearText = cleanText(input.publicationYear, 4);
	const year = yearText ? Number(yearText) : null;
	if (year != null && (!Number.isInteger(year) || year < 1400 || year > 2200)) throw new Error("Check the publication year.");
	const purchase = cleanText(input.purchaseUrl, 400);
	const purchaseUrl = purchase ? safeHttpUrl(purchase) : "";
	if (purchase && !purchaseUrl) throw new Error("The purchase link must be an http(s) URL.");
	const price = cleanText(input.price, 20);
	if (price && !/^\d+(\.\d{1,2})?$/.test(price)) throw new Error("Price should be a number like 18.00, or left blank.");
	const fields = {
		subtitle: cleanText(input.subtitle, 200),
		coverImage: assetPath(cleanText(input.coverImage, 400)),
		coverAlt: cleanText(input.coverAlt, 300),
		authorName: cleanText(input.authorName, 120) || "Minister Benja",
		publisher: cleanText(input.publisher, 160),
		isbn: cleanText(input.isbn, 40),
		currency: cleanText(input.currency, 8).toUpperCase(),
		featured: input.featured === true,
		status: input.status === "published" ? "published" : "draft",
		seoTitle: cleanText(input.seoTitle, 180),
		seoDescription: cleanText(input.seoDescription, 300)
	};
	if (id == null) {
		const rows = await sql`
      insert into books (
        title, slug, subtitle, cover_image, cover_alt, description, author_name, publisher, publication_year,
        isbn, price, currency, purchase_url, featured, status, seo_title, seo_description
      ) values (
        ${title}, ${slug}, ${fields.subtitle}, ${fields.coverImage || null}, ${fields.coverAlt}, ${description},
        ${fields.authorName}, ${fields.publisher}, ${year}, ${fields.isbn}, ${price}, ${fields.currency},
        ${purchaseUrl}, ${fields.featured}, ${fields.status}, ${fields.seoTitle}, ${fields.seoDescription}
      ) returning id
    `;
		return {
			ok: true,
			id: Number(rows[0]?.id),
			slug
		};
	}
	if (!(await sql`
    update books set
      title = ${title}, slug = ${slug}, subtitle = ${fields.subtitle}, cover_image = ${fields.coverImage || null},
      cover_alt = ${fields.coverAlt}, description = ${description}, author_name = ${fields.authorName},
      publisher = ${fields.publisher}, publication_year = ${year}, isbn = ${fields.isbn}, price = ${price},
      currency = ${fields.currency}, purchase_url = ${purchaseUrl}, featured = ${fields.featured},
      status = ${fields.status}, seo_title = ${fields.seoTitle}, seo_description = ${fields.seoDescription},
      updated_at = now()
    where id = ${id} returning id
  `)[0]) return {
		ok: false,
		message: "That book could not be found."
	};
	return {
		ok: true,
		id,
		slug
	};
}
async function deleteBookRecord(userId, id) {
	const sql = await ready();
	await requireEditor(sql, userId);
	await sql`delete from books where id = ${id}`;
	return { ok: true };
}
async function editorMessages(userId) {
	const sql = await ready();
	await requireEditor(sql, userId);
	return (await sql`
    select m.*, coalesce(c.name, '') as category_name from messages m
    left join categories c on c.id = m.category_id
    order by m.updated_at desc
  `).map(mapTeaching);
}
async function editorMessage(userId, id) {
	const sql = await ready();
	await requireEditor(sql, userId);
	const categories = (await sql`select * from categories order by name`).map(mapCategory);
	const media = await listMedia(sql);
	if (id == null) return {
		message: null,
		categories,
		media
	};
	const rows = await sql`
    select m.*, coalesce(c.name, '') as category_name from messages m
    left join categories c on c.id = m.category_id where m.id = ${id}
  `;
	return {
		message: rows[0] ? mapTeaching(rows[0]) : null,
		categories,
		media
	};
}
async function saveMessageRecord(userId, raw) {
	const sql = await ready();
	await requireEditor(sql, userId);
	const input = raw ?? {};
	const title = cleanText(input.title, 180);
	const slug = slugify(cleanText(input.slug, 90) || title);
	const description = cleanText(input.description, 5e3);
	if (title.length < 3) throw new Error("Give the message a title.");
	if (!validSlug(slug)) throw new Error("Use a simple address made of lowercase words.");
	if (description.length < 10) throw new Error("Add a short description.");
	const id = asNum(input.id);
	if (await slugTaken(sql, "messages", slug, id)) return {
		ok: false,
		message: "That address is already used. Choose another."
	};
	const video = cleanText(input.videoUrl, 400);
	const videoUrl = video ? safeHttpUrl(video) : "";
	if (video && !videoUrl) throw new Error("The video link must be an http(s) URL.");
	const recordedOn = cleanText(input.recordedOn, 10);
	if (recordedOn && !/^\d{4}-\d{2}-\d{2}$/.test(recordedOn)) throw new Error("The date should be YYYY-MM-DD.");
	const status = input.status === "published" ? "published" : "draft";
	const speaker = cleanText(input.speaker, 120) || "Minister Benja";
	const thumbnail = assetPath(cleanText(input.thumbnail, 400));
	if (id == null) {
		const rows = await sql`
      insert into messages (
        title, slug, description, video_url, thumbnail, thumbnail_alt, speaker, recorded_on, duration,
        series, scripture, category_id, featured, status, seo_title, seo_description
      ) values (
        ${title}, ${slug}, ${description}, ${videoUrl ?? ""}, ${thumbnail || null}, ${cleanText(input.thumbnailAlt, 300)},
        ${speaker}, ${recordedOn || null}, ${cleanText(input.duration, 40)}, ${cleanText(input.series, 80)},
        ${cleanText(input.scripture, 120)}, ${asNum(input.categoryId)}, ${input.featured === true}, ${status},
        ${cleanText(input.seoTitle, 180)}, ${cleanText(input.seoDescription, 300)}
      ) returning id
    `;
		return {
			ok: true,
			id: Number(rows[0]?.id),
			slug
		};
	}
	if (!(await sql`
    update messages set
      title = ${title}, slug = ${slug}, description = ${description}, video_url = ${videoUrl ?? ""},
      thumbnail = ${thumbnail || null}, thumbnail_alt = ${cleanText(input.thumbnailAlt, 300)}, speaker = ${speaker},
      recorded_on = ${recordedOn || null}, duration = ${cleanText(input.duration, 40)}, series = ${cleanText(input.series, 80)},
      scripture = ${cleanText(input.scripture, 120)}, category_id = ${asNum(input.categoryId)},
      featured = ${input.featured === true}, status = ${status}, seo_title = ${cleanText(input.seoTitle, 180)},
      seo_description = ${cleanText(input.seoDescription, 300)}, updated_at = now()
    where id = ${id} returning id
  `)[0]) return {
		ok: false,
		message: "That message could not be found."
	};
	return {
		ok: true,
		id,
		slug
	};
}
async function deleteMessageRecord(userId, id) {
	const sql = await ready();
	await requireEditor(sql, userId);
	await sql`delete from messages where id = ${id}`;
	return { ok: true };
}
async function editorEvents(userId) {
	const sql = await ready();
	await requireEditor(sql, userId);
	return (await sql`select * from events order by starts_on desc`).map(mapEvent);
}
async function editorEvent(userId, id) {
	const sql = await ready();
	await requireEditor(sql, userId);
	if (id == null) return { event: null };
	const rows = await sql`select * from events where id = ${id}`;
	return { event: rows[0] ? mapEvent(rows[0]) : null };
}
async function saveEventRecord(userId, raw) {
	const sql = await ready();
	await requireEditor(sql, userId);
	const input = raw ?? {};
	const title = cleanText(input.title, 180);
	const slug = slugify(cleanText(input.slug, 90) || title);
	const description = cleanText(input.description, 8e3);
	const startsOn = cleanText(input.startsOn, 10);
	const endsOn = cleanText(input.endsOn, 10);
	const whenLabel = cleanText(input.whenLabel, 160);
	if (title.length < 3) throw new Error("Give the event a title.");
	if (!validSlug(slug)) throw new Error("Use a simple address made of lowercase words.");
	if (!/^\d{4}-\d{2}-\d{2}$/.test(startsOn)) throw new Error("Add a start date.");
	if (endsOn && !/^\d{4}-\d{2}-\d{2}$/.test(endsOn)) throw new Error("Check the end date.");
	if (whenLabel.length < 3) throw new Error("Add the wording visitors should see for the date.");
	const id = asNum(input.id);
	if (await slugTaken(sql, "events", slug, id)) return {
		ok: false,
		message: "That address is already used. Choose another."
	};
	const registration = cleanText(input.registrationUrl, 400);
	const registrationUrl = registration ? safeHttpUrl(registration) : "";
	if (registration && !registrationUrl) throw new Error("The registration link must be an http(s) URL.");
	const status = input.status === "cancelled" ? "cancelled" : "scheduled";
	if (id == null) {
		const rows = await sql`
      insert into events (title, slug, description, starts_on, ends_on, when_label, time_zone, venue, registration_url, status)
      values (
        ${title}, ${slug}, ${description}, ${startsOn}, ${endsOn || null}, ${whenLabel},
        ${cleanText(input.timeZone, 80)}, ${cleanText(input.venue, 200)}, ${registrationUrl}, ${status}
      ) returning id
    `;
		return {
			ok: true,
			id: Number(rows[0]?.id),
			slug
		};
	}
	if (!(await sql`
    update events set
      title = ${title}, slug = ${slug}, description = ${description}, starts_on = ${startsOn}, ends_on = ${endsOn || null},
      when_label = ${whenLabel}, time_zone = ${cleanText(input.timeZone, 80)}, venue = ${cleanText(input.venue, 200)},
      registration_url = ${registrationUrl}, status = ${status}, updated_at = now()
    where id = ${id} returning id
  `)[0]) return {
		ok: false,
		message: "That event could not be found."
	};
	return {
		ok: true,
		id,
		slug
	};
}
async function deleteEventRecord(userId, id) {
	const sql = await ready();
	await requireEditor(sql, userId);
	await sql`delete from events where id = ${id}`;
	return { ok: true };
}
async function editorCategories(userId) {
	const sql = await ready();
	await requireEditor(sql, userId);
	return (await sql`select * from categories order by name`).map(mapCategory);
}
async function saveCategoryRecord(userId, raw) {
	const sql = await ready();
	await requireEditor(sql, userId);
	const input = raw ?? {};
	const name = cleanText(input.name, 80);
	const slug = slugify(cleanText(input.slug, 90) || name);
	const description = cleanText(input.description, 400);
	if (name.length < 2) throw new Error("Name the category.");
	if (!validSlug(slug)) throw new Error("Use a simple address made of lowercase words.");
	if ((await sql`select id from categories where slug = ${slug}`)[0]) return {
		ok: false,
		message: "That category already exists."
	};
	const rows = await sql`
    insert into categories (name, slug, description) values (${name}, ${slug}, ${description}) returning id
  `;
	return {
		ok: true,
		id: Number(rows[0]?.id),
		slug
	};
}
async function deleteCategoryRecord(userId, id) {
	const sql = await ready();
	await requireEditor(sql, userId);
	await sql`delete from categories where id = ${id}`;
	return { ok: true };
}
async function listMedia(sql) {
	return (await sql`
    select id, filename, alt, caption, mime from media order by created_at desc limit 40
  `).map((row) => ({
		id: Number(row.id),
		filename: asString(row.filename),
		alt: asString(row.alt),
		caption: asString(row.caption),
		mime: asString(row.mime),
		url: `/media/${Number(row.id)}`
	}));
}
async function editorMedia(userId) {
	const sql = await ready();
	await requireEditor(sql, userId);
	return listMedia(sql);
}
async function saveMediaRecord(userId, raw) {
	const sql = await ready();
	await requireEditor(sql, userId);
	const input = raw ?? {};
	const mime = cleanText(input.mime, 40);
	if (![
		"image/jpeg",
		"image/png",
		"image/webp",
		"image/gif"
	].includes(mime)) throw new Error("Use a JPEG, PNG, WebP, or GIF.");
	const base64 = typeof input.base64 === "string" ? input.base64 : "";
	if (!/^[A-Za-z0-9+/=\s]+$/.test(base64) || base64.length < 32 || base64.length > 17e5) throw new Error("That file is empty or larger than 1.2 MB.");
	const filename = cleanText(input.filename, 120).replace(/[^\w.\- ]+/g, "") || "image";
	const alt = cleanText(input.alt, 300);
	if (alt.length < 3) throw new Error("Describe the image for people who cannot see it.");
	const rows = await sql`
    insert into media (filename, alt, caption, mime, bytes_base64)
    values (${filename}, ${alt}, ${cleanText(input.caption, 300)}, ${mime}, ${base64.replace(/\s/g, "")})
    returning id
  `;
	return {
		ok: true,
		id: Number(rows[0]?.id),
		url: `/media/${Number(rows[0]?.id)}`
	};
}
async function deleteMediaRecord(userId, id) {
	const sql = await ready();
	await requireEditor(sql, userId);
	await sql`delete from media where id = ${id}`;
	return { ok: true };
}
async function readMediaFile(id) {
	return (await (await ready())`
    select mime, bytes_base64 from media where id = ${id}
  `)[0] ?? null;
}
async function saveSettingsRecord(userId, raw) {
	const sql = await ready();
	await requireEditor(sql, userId);
	const input = raw ?? {};
	const ministerName = cleanText(input.ministerName, 120);
	const contactEmail = cleanText(input.contactEmail, 160);
	if (ministerName.length < 2) throw new Error("The site needs the minister's name.");
	if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactEmail)) throw new Error("Enter a usable contact email.");
	const urlField = (key) => {
		const value = cleanText(input[key], 400);
		if (!value) return "";
		const url = safeHttpUrl(value);
		if (!url) throw new Error("Social links must be http(s) URLs or left blank.");
		return url;
	};
	await sql`
    update site_settings set
      minister_name = ${ministerName},
      professional_title = ${cleanText(input.professionalTitle, 160)},
      kicker = ${cleanText(input.kicker, 120)},
      homepage_intro = ${cleanText(input.homepageIntro, 800)},
      pull_quote = ${cleanText(input.pullQuote, 400)},
      biography_summary = ${cleanText(input.biographySummary, 800)},
      biography = ${cleanText(input.biography, 12e3)},
      interests = ${cleanText(input.interests, 800)},
      credentials_note = ${cleanText(input.credentialsNote, 600)},
      portrait_url = ${assetPath(cleanText(input.portraitUrl, 400)) || null},
      portrait_alt = ${cleanText(input.portraitAlt, 300)},
      contact_email = ${contactEmail},
      youtube_url = ${urlField("youtubeUrl")},
      x_url = ${urlField("xUrl")},
      facebook_url = ${urlField("facebookUrl")},
      instagram_url = ${urlField("instagramUrl")},
      seo_title = ${cleanText(input.seoTitle, 180)},
      seo_description = ${cleanText(input.seoDescription, 300)},
      footer_note = ${cleanText(input.footerNote, 300)},
      newsletter_heading = ${cleanText(input.newsletterHeading, 120)},
      newsletter_text = ${cleanText(input.newsletterText, 600)},
      speaking_note = ${cleanText(input.speakingNote, 1200)},
      show_sample_notice = ${input.showSampleNotice !== false},
      updated_at = now()
    where id = 1
  `;
	return {
		ok: true,
		id: 1,
		slug: "settings"
	};
}
async function editorEnquiries(userId) {
	const sql = await ready();
	await requireEditor(sql, userId);
	return (await sql`select * from contact_messages order by created_at desc limit 100`).map((row) => ({
		id: Number(row.id),
		name: asString(row.name),
		email: asString(row.email),
		enquiryType: asString(row.enquiry_type),
		message: asString(row.message),
		createdAt: asString(row.created_at)
	}));
}
async function editorNewsletter(userId) {
	const sql = await ready();
	await requireEditor(sql, userId);
	return (await sql`
    select email, created_at from newsletter_signups order by created_at desc limit 200
  `).map((row) => ({
		email: row.email,
		createdAt: asString(row.created_at)
	}));
}
function allowRate(key) {
	const now = Date.now();
	const recent = (hits.get(key) ?? []).filter((stamp) => now - stamp < 6e5);
	if (recent.length >= 5) {
		hits.set(key, recent);
		return false;
	}
	recent.push(now);
	hits.set(key, recent);
	return true;
}
async function submitContact(raw) {
	const input = raw ?? {};
	if (cleanText(input.company, 200)) return {
		ok: true,
		saved: false
	};
	const name = cleanText(input.name, 120);
	const email = cleanText(input.email, 160);
	const enquiryType = cleanText(input.enquiryType, 40);
	const message = cleanText(input.message, 4e3);
	const fields = {};
	if (name.length < 2) fields.name = "Please add your name.";
	if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) fields.email = "Enter an email address we can reply to.";
	if (![
		"Speaking",
		"Writing",
		"Media",
		"General"
	].includes(enquiryType)) fields.enquiryType = "Choose a kind of enquiry.";
	if (message.length < 20) fields.message = "Write at least a sentence or two.";
	if (message.split("http").length > 4) fields.message = "Too many links for a first note.";
	if (Object.keys(fields).length > 0) return {
		ok: false,
		message: "Please correct the highlighted fields.",
		fields
	};
	if (!allowRate(email.toLowerCase())) return {
		ok: false,
		message: "Please wait a few minutes before sending another note."
	};
	await (await ready())`
    insert into contact_messages (name, email, enquiry_type, message)
    values (${name}, ${email}, ${enquiryType}, ${message})
  `;
	return {
		ok: true,
		saved: true
	};
}
async function subscribeNewsletter(raw) {
	const input = raw ?? {};
	if (cleanText(input.company, 200)) return {
		ok: true,
		saved: false
	};
	const email = cleanText(input.email, 160).toLowerCase();
	if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return {
		ok: false,
		message: "Enter an email address.",
		fields: { email: "Enter an email address." }
	};
	if (!allowRate(`news:${email}`)) return {
		ok: false,
		message: "Please wait a few minutes and try again."
	};
	await (await ready())`
    insert into newsletter_signups (email) values (${email})
    on conflict (email) do nothing
  `;
	return {
		ok: true,
		saved: true
	};
}
async function previewRecord(userId, kind, id) {
	const sql = await ready();
	await requireEditor(sql, userId);
	if (kind === "article") {
		const rows = await sql`
      select a.*, coalesce(c.name, '') as category_name, coalesce(c.slug, '') as category_slug
      from articles a left join categories c on c.id = a.category_id where a.id = ${id}
    `;
		return rows[0] ? {
			kind,
			article: mapArticle(rows[0])
		} : null;
	}
	if (kind === "book") {
		const rows = await sql`select * from books where id = ${id}`;
		return rows[0] ? {
			kind,
			book: mapBook(rows[0])
		} : null;
	}
	if (kind === "message") {
		const rows = await sql`
      select m.*, coalesce(c.name, '') as category_name from messages m
      left join categories c on c.id = m.category_id where m.id = ${id}
    `;
		return rows[0] ? {
			kind,
			message: mapTeaching(rows[0])
		} : null;
	}
	return null;
}
//#endregion
export { deleteArticleRecord, deleteBookRecord, deleteCategoryRecord, deleteEventRecord, deleteMediaRecord, deleteMessageRecord, editorArticle, editorArticles, editorBook, editorBooks, editorCategories, editorEnquiries, editorEvent, editorEvents, editorMedia, editorMessage, editorMessages, editorNewsletter, editorOverview, previewRecord, readArticle, readArticles, readBook, readBooks, readEvents, readHome, readMediaFile, readMessage, readMessages, readSearch, readSettings, readSitemap, ready, saveArticleRecord, saveBookRecord, saveCategoryRecord, saveEventRecord, saveMediaRecord, saveMessageRecord, saveSettingsRecord, submitContact, subscribeNewsletter };
