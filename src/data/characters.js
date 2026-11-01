import { ramuEvents } from "@/data/stories/ramu";
import { arunEvents } from "@/data/stories/arun";
import { devrajEvents } from "@/data/stories/devraj";

export const characters = [
  {
    id: "ramu",
    plate: "I",
    name: "Ramu Mahato",
    age: 38,
    role: "Poor farmer",
    occupation: "Jute cultivator on rented land",
    place: "Ranibandh, near Barrackpore, Bengal",
    tagline: "He grows what the world wears.",
    portrait:
      "https://media.base44.com/images/public/6ae74eaf349dc1ba245bcc05/e3350e6af_generated_image.png",
    bio: "Nineteen years on the same five bighas of rented land, every one of them under jute. When the world stops buying, the loss comes back up the river to his door.",
    family:
      "His wife Sita, three children aged six to fourteen, and his widowed mother share a two-room mud house with the cattle. His eldest son will inherit the debt before he inherits the land.",
    finances:
      "₹90 saved in a cloth bundle. Five bighas rented at ₹60 a year. A ₹40 loan from the mahajan at two per cent a month. No bank, no insurance, no cushion.",
    challenges: [
      "Prices have halved — the rent has not",
      "One bad season means losing the land",
      "Debt compounds at two per cent a month",
    ],
    stake:
      "Rent fixed in cash · price set in Calcutta · nothing between the family and a bad year",
    statLabels: {
      money: "Savings",
      wellbeing: "Family wellbeing",
      hope: "Hope",
    },
    start: { money: 90, wellbeing: 60, hope: 55 },
    whatReallyHappened:
      "Agricultural prices in India fell by roughly half between 1928 and 1934. Because land revenue and rent were fixed in cash, peasants had to sell far more grain for the same payment. Debt rose, land changed hands, and rural families sold their gold — India became an exporter of gold in these years.",
    endings: {
      strong:
        "Ramu came through with his land, his family and his name intact. He was never comfortable, but he was never broken either — and in 1930s Bengal, that was a kind of triumph.",
      steady:
        "Ramu survived, and the ledger in the moneylender's shop grew. The family is together, the field is smaller, and the next bad season will be harder than this one.",
      failing:
        "The Depression took the land, the gold and a good deal of his health. What is left is the family, and the memory of how quickly a whole world can close its doors.",
    },
    events: ramuEvents,
  },
  {
    id: "arun",
    plate: "II",
    name: "Arun Mehta",
    age: 32,
    role: "Office clerk",
    occupation: "Clerk at a British shipping and insurance firm, Fort, Bombay",
    place: "Girgaum, Bombay",
    tagline: "Respectable, educated, and one month's salary from the street.",
    portrait:
      "https://media.base44.com/images/public/6ae74eaf349dc1ba245bcc05/d29ee66dc_generated_image.png",
    bio: "Eleven years at a desk in the Fort. He writes the letters, keeps the ledgers, and earns ₹85 a month — more than his father ever saw, and never quite enough.",
    family:
      "His wife Leela, two children, his widowed mother, and a younger brother of fourteen whose schooling he pays for. Six people on one salary.",
    finances:
      "₹140 in the savings bank, ₹22 rent, a small life insurance policy. Everything the household eats depends on a pay packet that arrives on the first of the month.",
    challenges: [
      "A salary that can be cut or withdrawn overnight",
      "Rent, school fees and medicine do not fall with prices",
      "Six dependants, and no union to speak for him",
    ],
    stake:
      "Monthly salary · rented rooms · educated, respectable, and entirely replaceable",
    statLabels: {
      money: "Salary saved",
      wellbeing: "Health & standing",
      hope: "Self-respect",
    },
    start: { money: 140, wellbeing: 58, hope: 60 },
    whatReallyHappened:
      "India's salaried middle class was small, and its fortunes split in two. Because prices fell faster than most salaries, a clerk who kept his job could buy more in 1933 than in 1929 — the Depression's quiet beneficiaries. But there was no unemployment insurance and no pension worth the name: a retrenchment notice could end a household's income in a single morning, and educated unemployment grew through the decade.",
    endings: {
      strong:
        "Arun kept his desk, his family and his self-respect — and learned what the office never taught him: that a salary is a promise someone else can withdraw.",
      steady:
        "Arun still has a job, a smaller salary, and a family that has learned to do with less. The middle class survived the Depression by cutting quietly and telling nobody.",
      failing:
        "The firm let Arun go in the end, and the middle class turned out to be thinner than it looked from outside — one month's salary away from the street.",
    },
    events: arunEvents,
  },
  {
    id: "devraj",
    plate: "III",
    name: "Devraj Agarwal",
    age: 48,
    role: "Businessman",
    occupation: "Owner of a trading house and a piece-goods works at Howrah",
    place: "Bhowanipore, Calcutta",
    tagline: "The same storm that drowns a farmer fills a merchant's sail.",
    portrait:
      "https://media.base44.com/images/public/6ae74eaf349dc1ba245bcc05/3d36bf974_generated_image.png",
    bio: "Two generations of trade on the Calcutta riverfront, and a works across the water at Howrah. He knows that a crash is also a market.",
    family:
      "His wife Kamini, two sons — the elder studying in England — and the household of his widowed sister, all supported from the firm's account.",
    finances:
      "₹5,200 in capital and shares, two properties, open credit at three Calcutta houses. Losses are survivable. His good name is not.",
    challenges: [
      "Demand collapsing faster than costs",
      "Labour trouble at the Howrah works",
      "Every profit is now a public judgement",
    ],
    stake:
      "Family capital · two properties · a name that can be spent only once",
    statLabels: {
      money: "Capital",
      wellbeing: "Household",
      hope: "Standing",
    },
    start: { money: 5200, wellbeing: 70, hope: 62 },
    whatReallyHappened:
      "Some Indians did well out of the Depression. With imports collapsing and protective tariffs raised, Indian mills captured the home market and cotton textile output grew. Merchants bought gold and land from distressed sellers, and the colonial state's revenue stayed fixed in cash. The gap between the people who lost and the people who gained was the Depression's other side.",
    endings: {
      strong:
        "Devraj came out of the Depression with capital, standing and something rarer — a reputation that villagers and workers both repeat without bitterness. The crash was an opportunity he used without forgetting what it cost other people.",
      steady:
        "The firm is intact and the family is comfortable. He did what the decade rewarded rather than what it required, and he knows the difference, which is something.",
      failing:
        "He made money and lost his name. The estates are large, the ledgers full, and the road past his gate is very quiet.",
    },
    events: devrajEvents,
  },
];

export const getCharacter = (id) => characters.find((c) => c.id === id) || null;