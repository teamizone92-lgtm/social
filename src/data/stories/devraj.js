export const devrajEvents = [
  {
    year: "1929",
    kicker: "November, the bazaar telegraph",
    headline: "The crash reaches Calcutta",
    context:
      "New York has fallen. Your broker's note says jute and mill shares are down a fifth and will go lower. Your uncle says the family's name is on the firm's paper. Your cousin says the name will not save it.",
    choices: [
      {
        id: "sell-shares",
        label: "Sell the shares now, before the panic spreads.",
        effects: { money: 400, wellbeing: -2, hope: -5 },
        outcome:
          "You sell quietly, through three brokers. Next week the market falls another quarter and you look like a prophet. Your uncle does not speak to you for a month.",
        note: "Indian markets were less financialised than America's, but commodity and share prices fell sharply as credit contracted.",
      },
      {
        id: "buy-shares",
        label: "Buy more at the fallen price — the works still sell cloth.",
        effects: { money: -900, wellbeing: -5, hope: 5 },
        outcome:
          "You buy a block at a discount that would have been unthinkable a month ago. The shares fall further. You hold them, and tell everyone it is a matter of patience.",
        note: "Some Indian industrial houses bought up mills and works cheaply in the slump and expanded later in the decade.",
      },
      {
        id: "hold",
        label: "Hold everything and wait for clarity.",
        effects: { money: -300, wellbeing: 0, hope: -2 },
        outcome:
          "You do nothing, which is also a decision. The portfolio loses value and the firm's credit line is renewed at a higher rate.",
        note: "Credit tightened everywhere as banks grew cautious; even healthy firms paid more for working capital.",
      },
    ],
  },
  {
    year: "1930",
    kicker: "The tariff wall",
    headline: "The government protects Indian cloth",
    context:
      "Duties on foreign piece-goods have been raised and imports are collapsing. Congressmen are asking every trader to burn foreign cloth and buy swadeshi. Cheap British machinery sits unsold in the warehouses of the port.",
    choices: [
      {
        id: "expand",
        label: "Expand the works — buy the machines while they are cheap.",
        effects: { money: -800, wellbeing: 5, hope: 12 },
        outcome:
          "You buy six looms at a third of their price and convert the old shed at Howrah. The works run two shifts. The men work harder for the same wage, and the cloth sells.",
        note: "Protected by tariffs and with imports falling, Indian mills captured the home market. Textile production in India grew through the 1930s.",
      },
      {
        id: "cash",
        label: "Sit on cash and wait for the bottom.",
        effects: { money: 100, wellbeing: 2, hope: -2 },
        outcome:
          "You keep the money liquid and the works unchanged. When the bottom comes you will be ready. You have been saying that for a year.",
        note: "Caution preserved capital, but firms that expanded early in the slump often captured the recovery.",
      },
      {
        id: "lend",
        label: "Shift capital into moneylending in the districts.",
        effects: { money: 350, wellbeing: 0, hope: -10 },
        outcome:
          "The returns are excellent. Twelve, fifteen, sometimes twenty per cent, secured on land that the borrower will not be able to keep. The ledger fills with names from villages you have never seen.",
        note: "Money moved from trade into rural credit during the slump. Falling prices made debts heavier, and land and gold passed to creditors.",
      },
    ],
  },
  {
    year: "1931",
    kicker: "Gold in the villages",
    headline: "The bangles come to market",
    context:
      "Britain has left the gold standard and gold prices have risen. Families in the districts are selling wedding jewellery to pay their debts. Your agent asks what price you will offer.",
    choices: [
      {
        id: "buy-gold",
        label: "Buy everything offered, at your own price.",
        effects: { money: 600, wellbeing: 2, hope: -18 },
        outcome:
          "You buy at a discount from people who have no choice, and sell into a rising market. The profit is real. In one village, a woman weeps on the floor of the shop while you count the coins.",
        note: "India's gold exports rose steeply between 1928 and 1934 as rural savings were sold off — the country's hidden reserve financed survival and repayment.",
      },
      {
        id: "forgive",
        label: "Forgive the debts of the small tenants on your land.",
        effects: { money: -500, wellbeing: 5, hope: 20 },
        outcome:
          "You tear up thirty-one small debts in the district office and the clerk thinks you have lost your mind. Two families keep their land. One of them names a son after you.",
        note: "A minority of creditors did write off rural debt; most did not, and the burden fell on the borrower.",
      },
      {
        id: "foreclose",
        label: "Foreclose and take the land — it is worth more than the loan.",
        effects: { money: 700, wellbeing: 4, hope: -24 },
        outcome:
          "You acquire four hundred acres in a year, at prices that will never be seen again. The family's name becomes a word that villagers say quietly, and not kindly.",
        note: "Land transfers from peasants to moneylenders and merchants were one of the Depression's most durable effects in rural India.",
      },
    ],
  },
  {
    year: "1932",
    kicker: "The works committee",
    headline: "The workers' demand",
    context:
      "The union's deputation waits in your office at Howrah. They want no further cuts and no retrenchment. Your accountant has put a note on the file: profits are up, and the wage bill can be reduced by a fifth.",
    choices: [
      {
        id: "cut-wages",
        label: "Cut wages by twenty per cent and install the new machines.",
        effects: { money: 450, wellbeing: -2, hope: -16 },
        outcome:
          "The shareholders are delighted. The works are more productive than they have ever been. The deputation leaves without a word, and the shop floor has a new kind of silence in it.",
        note: "Profits rose while wages fell — the distribution of the Depression's burden was a choice, not a law of nature.",
      },
      {
        id: "keep-wages",
        label: "Keep the wages and cut your own household expenses instead.",
        effects: { money: -150, wellbeing: 6, hope: 14 },
        outcome:
          "You sell the second car and close the Simla house for a year. The margin is thinner and the workforce is steady. Men work for you for twenty years.",
        note: "A handful of Indian firms kept wages and retained skilled workers, which served them well when demand returned.",
      },
      {
        id: "welfare",
        label: "Fund a school and a clinic in the workers' quarter.",
        effects: { money: -350, wellbeing: 8, hope: 18 },
        outcome:
          "The clinic treats two hundred people a month and the school takes forty children off the workshop floor. It costs more than a wage rise and buys something a wage rise cannot.",
        note: "Some industrialists built schools, clinics and temples near their works — part philanthropy, part a way of securing a loyal workforce.",
      },
    ],
  },
  {
    year: "1933",
    kicker: "A public meeting at the Maidan",
    headline: "The call for swadeshi",
    context:
      "Congress volunteers are collecting funds and asking traders to burn foreign cloth in public. The Collector, who has been civil to you for twenty years, mentions that a title could be arranged.",
    choices: [
      {
        id: "fund-congress",
        label: "Fund the Congress and burn the foreign cloth publicly.",
        effects: { money: -400, wellbeing: 2, hope: 20 },
        outcome:
          "Your bales go on the fire in front of a crowd of thousands, and your name is printed in the papers the next morning. The Collector stops returning your calls.",
        note: "Indian businessmen financed and joined the national movement in these years; economic nationalism and political nationalism reinforced each other.",
      },
      {
        id: "loyal",
        label: "Accept the title and stay loyal to the Raj.",
        effects: { money: 500, wellbeing: 0, hope: -20 },
        outcome:
          "The investiture is photographed. Contracts come more easily. At the works, the union's handbills start printing your name beside the word 'blackleg'.",
        note: "Loyalists gained contracts and honours, and lost legitimacy with an increasingly nationalist public.",
      },
      {
        id: "neutral",
        label: "Stay quietly neutral and keep both doors open.",
        effects: { money: 100, wellbeing: 2, hope: -6 },
        outcome:
          "You subscribe to the Congress's fund and to the Collector's charity, in roughly equal amounts, and are photographed at neither.",
        note: "Many merchants hedged. Neutrality was comfortable, and unheroic.",
      },
    ],
  },
  {
    year: "1934",
    kicker: "The ledger, ten years on",
    headline: "A world rebuilt",
    context:
      "The Bombay strike is over, the jute trade is still flat, and your works are running again. You are richer than in 1929, and the districts around your estates are poorer. Your son, back from England, asks what the firm stands for.",
    choices: [
      {
        id: "invest",
        label: "Invest in new works and Indian industry.",
        effects: { money: 900, wellbeing: 4, hope: 12 },
        outcome:
          "Two new units, a thousand hands, cloth that replaces what used to come from Manchester. When independence comes, the firm will be one of those asked to help build a country.",
        note: "Indian industrial houses that expanded in the Depression became the backbone of industrialisation after 1947.",
      },
      {
        id: "london",
        label: "Move the family's money to London, where it is safe.",
        effects: { money: 600, wellbeing: 2, hope: -12 },
        outcome:
          "Sterling in a London bank, out of reach of any government in Delhi. Your son will inherit it. The mill towns will inherit something else.",
        note: "Capital flight was common among wealthy Indians and contributed to the nationalist argument that colonial rule drained India.",
      },
      {
        id: "endow",
        label: "Endow a hospital and a school in your home town.",
        effects: { money: -600, wellbeing: 8, hope: 22 },
        outcome:
          "The hospital opens with forty beds and the school with a hundred children. It does not repair what the decade did, but it is a different kind of ledger.",
        note: "Industrial philanthropy built schools, colleges and hospitals across India — and never quite settled the question of who paid for them.",
      },
    ],
  },
];