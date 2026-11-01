export const arunEvents = [
  {
    year: "1929",
    kicker: "The shipping office, Fort",
    headline: "The increments are stopped",
    context:
      "The firm's agent calls the staff together: the year's increment is cancelled 'for the present', and the overtime allowance goes with it. You earn ₹85 a month. The rent alone is ₹22, and there are six of you in two rooms.",
    choices: [
      {
        id: "head-down",
        label: "Keep your head down and put in the extra hours unpaid.",
        effects: { money: 0, wellbeing: -8, hope: -4 },
        outcome:
          "You stay at your desk until the lamps are lit and the durwan starts locking up. Your name is on no list. The unpaid hour becomes a habit the office expects of you.",
        note: "In the slump, firms economised on clerical staff — overtime disappeared, increments were postponed, and those who remained absorbed the work.",
      },
      {
        id: "night-school",
        label: "Pay for night classes in shorthand and typing.",
        effects: { money: -20, wellbeing: -5, hope: 12 },
        outcome:
          "Three evenings a week at a school near the bazaar. Your fingers ache and the children see you only at breakfast, but you can now take dictation at eighty words a minute — and the head clerk has noticed.",
        note: "Clerical workers tried to make themselves indispensable; shorthand and typing were the skills that raised a clerk's value in the 1920s and 1930s.",
      },
      {
        id: "ask-post",
        label: "Ask the head clerk to recommend you for the vacant senior post.",
        effects: { money: 15, wellbeing: -6, hope: -6 },
        outcome:
          "The post goes to the manager's nephew. You are given the 'acting' allowance of ₹15 for covering the work anyway — and the whole office knows you asked.",
        note: "Patronage decided promotion in most Indian offices; asking could bring a small allowance and a lasting reputation for ambition.",
      },
    ],
  },
  {
    year: "1930",
    kicker: "A notice on the staff board",
    headline: "A temporary reduction",
    context:
      "Ten per cent off every salary, 'temporary, in view of the state of trade'. The agent signs the notice in blue pencil. The men who work the godown are told the same thing, and they have no notice at all.",
    choices: [
      {
        id: "accept-cut",
        label: "Accept it quietly and adjust the household.",
        effects: { money: -12, wellbeing: -6, hope: -5 },
        outcome:
          "The cut is temporary, as the notice says. It will last four years. You begin buying rice in smaller quantities, and you walk to the office instead of taking the tram.",
        note: "Salary cuts were widespread in the slump; 'temporary' reductions very often stayed for the rest of the decade.",
      },
      {
        id: "petition",
        label: "Sign the clerks' association petition for a review.",
        effects: { money: -10, wellbeing: -4, hope: 12 },
        outcome:
          "Eleven of you sign it. The agent receives the petition politely, mentions the state of trade, and returns it with thanks. Nothing changes — except that you now know which of your colleagues will stand beside you.",
        note: "Clerical unions and staff associations existed but had little bargaining power; they recorded grievances far more often than they reversed decisions.",
      },
      {
        id: "second-job",
        label: "Take evening book-keeping for a shop near the market.",
        effects: { money: 18, wellbeing: -12, hope: 2 },
        outcome:
          "You keep the shop's accounts after office hours for ₹18 a month, in a back room that smells of kerosene. The money is real. You see your children awake on Sundays only.",
        note: "Moonlighting was common among salaried workers whose pay fell behind; the double burden fell hardest on their health.",
      },
    ],
  },
  {
    year: "1931",
    kicker: "The empty desk",
    headline: "Mohan is let go",
    context:
      "Mohan's desk is cleared by noon. His name was below yours on the list, and nobody pretends it was about his work. The head clerk says his files are now yours, and there is no question of a second salary.",
    choices: [
      {
        id: "absorb",
        label: "Take on both desks and say nothing.",
        effects: { money: 8, wellbeing: -14, hope: -6 },
        outcome:
          "You come at eight and leave at nine. You are now, in the office's arithmetic, two men — and the arithmetic is the only thing that keeps your name off next year's list.",
        note: "Retained clerks absorbed the work of the dismissed. Output per clerk rose while employment fell: the office version of rationalisation.",
      },
      {
        id: "refuse",
        label: "Put it in writing: no second desk without an allowance.",
        effects: { money: -15, wellbeing: -4, hope: 10 },
        outcome:
          "The agent is cold with you for a month, then grants ₹8 and marks your file. You have the allowance, and a reputation for being difficult that will follow you.",
        note: "Written or collective resistance sometimes won small allowances, but marked an employee as troublesome in a market with far too many applicants.",
      },
      {
        id: "help-mohan",
        label: "Speak for Mohan at another firm, and cover his work for a month.",
        effects: { money: -5, wellbeing: -8, hope: 14 },
        outcome:
          "Mohan gets a temporary post with a timber merchant because you spoke for him. He does not forget it — and in 1934 it is Mohan who tells you where a job is going.",
        note: "With no unemployment relief of any kind, networks of recommendation were the only insurance a clerk had.",
      },
    ],
  },
  {
    year: "1932",
    kicker: "The household ledger",
    headline: "Rent, fees, and a wedding",
    context:
      "Your rent has not fallen with prices. Your brother's school fees are due, your mother's medicine costs ₹9 a month, and your wife's cousin is to be married in Poona. Everything in the house is cheaper except what you owe.",
    choices: [
      {
        id: "move-suburb",
        label: "Move the family to a cheaper room in the suburbs and commute.",
        effects: { money: 10, wellbeing: -10, hope: -2 },
        outcome:
          "Two rooms in Dadar instead of Girgaum, and forty minutes each way standing on the tram. The children change school in the middle of the year and lose their friends.",
        note: "Bombay's rents stayed high even as prices fell; families moved to the suburbs and accepted long commutes to hold the household together.",
      },
      {
        id: "pledge-gold",
        label: "Pledge your wife's gold bangles.",
        effects: { money: 55, wellbeing: -4, hope: -12 },
        outcome:
          "The bangles go to the pawnbroker at three-quarters of their value. Leela says nothing for a week. The receipt stays in the tin with the school certificates, where you both can see it.",
        note: "Gold was the middle class's real savings account; the wave of distress selling in these years helped make India an exporter of gold.",
      },
      {
        id: "brother-work",
        label: "Take your younger brother out of school and find him work.",
        effects: { money: 20, wellbeing: -6, hope: -14 },
        outcome:
          "He is fourteen and quicker than you were. He goes to a printing press as an apprentice for ₹12 a month, and something in the family closes quietly and does not open again.",
        note: "Education was among the first things cut. A generation left school early in the 1930s, and the loss never appeared in any ledger.",
      },
    ],
  },
  {
    year: "1933",
    kicker: "The tin of certificates",
    headline: "The policy, or the shares",
    context:
      "The premium on your small life policy is due — ₹6 for the quarter. A friend in a brokerage offers you jute shares at a third of their 1929 price, and swears the recovery has begun.",
    choices: [
      {
        id: "surrender",
        label: "Surrender the policy and take the cash.",
        effects: { money: 40, wellbeing: -2, hope: -10 },
        outcome:
          "₹95 comes back on a policy you have paid into for six years. You have money this month, and nothing at all for the years when you will be old and unable to sit at a desk.",
        note: "Life insurance was one of the few formal savings instruments for the Indian middle class. Surrendering a policy meant cashing in the future to survive the present.",
      },
      {
        id: "keep-policy",
        label: "Find the premium somehow and keep the policy alive.",
        effects: { money: -15, wellbeing: -4, hope: 12 },
        outcome:
          "You pay the premium before the rent this quarter, and explain it to Leela twice. It is the one promise to the future you have kept.",
        note: "Families who held on to policies and gold through the slump recovered fastest; those who sold their reserves had nothing left to fall back on.",
      },
      {
        id: "buy-shares",
        label: "Buy the shares — the recovery must come sometime.",
        effects: { money: -35, wellbeing: -2, hope: 6 },
        outcome:
          "You buy forty shares on your friend's word. They fall again in the autumn. You learn to stop opening the market page of the newspaper.",
        note: "Indian share prices were volatile and information was scarce; small investors who bought in the slump often waited years for a recovery.",
      },
    ],
  },
  {
    year: "1934",
    kicker: "The city stops",
    headline: "The mills have struck",
    context:
      "The cotton mills have struck, the docks are quiet, and the firm's shipping business has halved. The agent calls you in alone: the Bombay office may close. There is a posting to Calcutta, or 'compensation'.",
    choices: [
      {
        id: "transfer",
        label: "Take the posting to Calcutta.",
        effects: { money: 25, wellbeing: -8, hope: 6 },
        outcome:
          "You go ahead alone to a room in Bhowanipore. The salary is the same and the city is cheaper, and the family follows in the summer with everything they own in three trunks.",
        note: "Transfer was the usual way firms cut staff without dismissing them; the uprooting and the cost were pushed onto the employee.",
      },
      {
        id: "union",
        label: "Help organise the clerks, with the mill union's help.",
        effects: { money: -20, wellbeing: -6, hope: 20 },
        outcome:
          "Forty clerks meet in a hall lent by the mill workers. Nothing is won this year. But there is now a body that can speak, and your name is on its first resolution.",
        note: "White-collar unions grew in the 1930s with support from the mill unions. They stayed far weaker, but they outlasted the decade.",
      },
      {
        id: "compensation",
        label: "Take the compensation and set up as an insurance agent.",
        effects: { money: 35, wellbeing: -4, hope: -4 },
        outcome:
          "₹300 and a canvasser's licence. In the first month you earn ₹11, in the sixth ₹40. It is not a salary, and nobody can withdraw it in a morning.",
        note: "Retrenched clerks moved into small trade, agency work and tutoring — the informal economy that absorbed the educated unemployed.",
      },
    ],
  },
];