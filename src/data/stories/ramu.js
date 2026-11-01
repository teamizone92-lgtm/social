export const ramuEvents = [
  {
    year: "1929",
    kicker: "October, the jute bazaar",
    headline: "The world stops buying",
    context:
      "Word comes up the river from Calcutta: the New York stock market has crashed and the mills of Dundee and Dundee's customers are buying less. The trader at the bazaar will pay seven rupees a maund for jute that fetched fourteen last season.",
    choices: [
      {
        id: "sell-all",
        label: "Sell the whole harvest today, before it falls further.",
        effects: { money: 55, wellbeing: -5, hope: -8 },
        outcome:
          "The cash is counted out on a sack in the trader's hut. It is barely half of last year's money, but it is real, and it is in your hand tonight.",
        note: "As world demand collapsed, Indian jute and cotton prices slid month after month. Farmers who sold early often escaped the very bottom of the market.",
      },
      {
        id: "store",
        label: "Store the jute and wait for a better price.",
        effects: { money: -12, wellbeing: -8, hope: 6 },
        outcome:
          "The bundles are stacked in the corner of the hut, where the damp gets into them. You wait. The trader's price does not rise — it falls again in November.",
        note: "Prices did not recover. They kept slipping into 1934, so holding stock was a gamble most peasants lost — while the fibre spoiled.",
      },
      {
        id: "part-loan",
        label: "Sell half now and borrow against the rest.",
        effects: { money: 35, wellbeing: -2, hope: -2 },
        outcome:
          "You sell half and take a loan on the strength of the rest, at two per cent a month. It feels prudent. The ledger in the moneylender's shop now has your name in it.",
        note: "Rural credit in India was expensive and short-term. Once prices fell, the same loan was worth far more grain — the classic trap of the Depression in the countryside.",
      },
    ],
  },
  {
    year: "1930",
    kicker: "The zamindar's man arrives",
    headline: "The rent does not fall",
    context:
      "Prices are down by a third, but the rent is written in cash and the colonial government has refused to reduce land revenue. The zamindar's agent sits on your veranda with the ledger and waits.",
    choices: [
      {
        id: "pay-full",
        label: "Pay the rent in full, even if it means selling the grain you need.",
        effects: { money: -45, wellbeing: -2, hope: -5 },
        outcome:
          "You pay. The granary is nearly empty before the winter is out, and the children eat one meal instead of two. But the land is still yours, for now.",
        note: "Because revenue and rent were fixed, peasants had to sell more produce to raise the same cash — the burden grew exactly as their incomes shrank.",
      },
      {
        id: "delay",
        label: "Ask for a delay and offer grain instead of cash.",
        effects: { money: -20, wellbeing: -10, hope: -3 },
        outcome:
          "The agent takes the grain at his own valuation — well below the bazaar rate — and writes nothing in the ledger to show it. You have paid and you are still in arrears.",
        note: "Payment in kind was common in rural India, and usually on the creditor's terms. Farmers were left with less food and the same debt.",
      },
      {
        id: "no-rent",
        label: "Join the Congress volunteers' no-rent campaign.",
        effects: { money: 0, wellbeing: -12, hope: 22 },
        outcome:
          "Thirty men and women from the village walk to the tehsil with you. The rent is withheld. The police come in the evening, take two of the leaders, and the whole village is marked.",
        note: "In the United Provinces and elsewhere, no-rent campaigns drew peasants into the national movement in the early 1930s. Repression was real, but so was the political awakening it left behind.",
      },
    ],
  },
  {
    year: "1931",
    kicker: "The moneylender's ledger",
    headline: "Interest, doubled",
    context:
      "The loan from last year has doubled with interest. The moneylender's clerk sits in your courtyard and says, politely, that the village has other families who pay on time.",
    choices: [
      {
        id: "sell-gold",
        label: "Sell your wife's gold bangles.",
        effects: { money: 60, wellbeing: -3, hope: -10 },
        outcome:
          "The bangles go to the goldsmith and come back as a handful of coins. They were her mother's. She does not speak to you for three days, and then she does.",
        note: "Between 1928 and 1934 Indian gold exports rose steeply as rural families sold jewellery to survive. India, a traditional importer of gold, became an exporter in these years.",
      },
      {
        id: "mortgage",
        label: "Mortgage two bighas of land.",
        effects: { money: 75, wellbeing: -12, hope: -12 },
        outcome:
          "The clerk writes the mortgage in a hand you cannot read. Fifteen months from now, if the money is not found, those two bighas belong to someone else.",
        note: "Mortgaged land was usually lost. Rural indebtedness deepened through the Depression and much of the peasantry passed from owner to tenant.",
      },
      {
        id: "borrow-again",
        label: "Borrow again, at twenty-four per cent, and hope for a good year.",
        effects: { money: 40, wellbeing: -6, hope: -4 },
        outcome:
          "You sign again. The interest is added to the principal. You have bought perhaps a season of peace.",
        note: "Interest rates of two per cent a month were ordinary in rural India. Falling prices made every rupee of debt heavier in real terms.",
      },
    ],
  },
  {
    year: "1932",
    kicker: "Planning the sowing",
    headline: "Rice, or jute?",
    context:
      "The trader will still buy jute, but the price is the lowest you have ever seen. Your neighbour, who sowed half his field with rice, has a full pot in his kitchen.",
    choices: [
      {
        id: "rice",
        label: "Sow rice for the household, and take the loss on cash.",
        effects: { money: -25, wellbeing: 18, hope: 8 },
        outcome:
          "There is no money in the box, but nobody goes hungry. Your wife stops asking what the trader said. In March the children are still strong enough to run.",
        note: "Families that could shift part of their land to food crops shielded themselves from the worst of the price collapse, which hit cash crops hardest.",
      },
      {
        id: "jute",
        label: "Keep every field under jute — cash is what pays the rent.",
        effects: { money: 45, wellbeing: -12, hope: -4 },
        outcome:
          "You have cash in April and empty pots in June. The rent is paid and the children are thin, and the trader's price falls again next season.",
        note: "Jute was one of India's great exports, and jute prices collapsed with world trade. Cash-crop dependence made Bengal's peasantry exceptionally vulnerable.",
      },
      {
        id: "city",
        label: "Leave the field to your brother and go to Calcutta for work.",
        effects: { money: 15, wellbeing: -14, hope: -2 },
        outcome:
          "You stand at the mill gate at five in the morning with four hundred other men. Two are taken on. You sleep for a month under a tarpaulin before you admit that the city has no work either.",
        note: "Rural distress pushed people towards the towns, but the mills were cutting shifts, not hiring. The Depression narrowed both doors at once.",
      },
    ],
  },
  {
    year: "1933",
    kicker: "A meeting under the banyan",
    headline: "The volunteers come",
    context:
      "Congress volunteers arrive with a hand-spun cloth flag and a printed appeal: refuse the revenue, boycott foreign cloth, buy only what is made in India. The zamindar's agent is watching from the road.",
    choices: [
      {
        id: "join",
        label: "Join them — wear khadi and take the pledge.",
        effects: { money: -10, wellbeing: -5, hope: 20 },
        outcome:
          "You spin for an hour each morning and wear cloth that is coarser than what you sold. Nothing in your pocket changes. Something in the way you stand does.",
        note: "The boycott of foreign cloth and the turn to khadi linked the peasant's distress to the national movement — economic grievance became political energy.",
      },
      {
        id: "neutral",
        label: "Stay out of politics and mind the field.",
        effects: { money: 10, wellbeing: 4, hope: -8 },
        outcome:
          "You keep your head down and your harvest in. The volunteers go on to the next village. When they are arrested, you are not among them.",
        note: "Most villagers weighed survival against politics, and many chose survival. The movement's reach grew unevenly.",
      },
      {
        id: "inform",
        label: "Tell the agent who is organising — he has promised a favour.",
        effects: { money: 25, wellbeing: 2, hope: -22 },
        outcome:
          "The favour arrives: a smaller rent demand this year. In the village, doors that used to open stay shut when you pass. Your children learn a new word for your name.",
        note: "Loyalists were rewarded and isolated. In a village, reputation was a form of insurance, and this was expensive insurance.",
      },
    ],
  },
  {
    year: "1934",
    kicker: "The long trough",
    headline: "A thin recovery",
    context:
      "Prices have stopped falling. Two of your neighbour's fields now belong to the moneylender, and the talk in the bazaar is that the mills are buying again — a little, slowly.",
    choices: [
      {
        id: "rebuild",
        label: "Rebuild slowly — half food, half cash crop, no new debt.",
        effects: { money: 30, wellbeing: 12, hope: 10 },
        outcome:
          "You end the year with a full granary, no new borrowing, and one bigha bought back from the mortgage. It is not prosperity. It is a floor under your feet.",
        note: "Recovery came slowly to the countryside, and households that avoided fresh debt and grew some of their own food weathered it best.",
      },
      {
        id: "buyback",
        label: "Borrow to buy back the mortgaged land while it is cheap.",
        effects: { money: -40, wellbeing: 6, hope: 15 },
        outcome:
          "The land comes back into the family's name. So does the debt. You are a landed man with a ledger to answer for, which is better than the other way round.",
        note: "Land prices had fallen with everything else, so some families could reclaim land cheaply — if they could find credit at all.",
      },
      {
        id: "leave",
        label: "Sell the rest and take the family to Calcutta.",
        effects: { money: 50, wellbeing: -8, hope: -6 },
        outcome:
          "The village sells your plough and your cot for less than they cost. In Calcutta you join the queue at the mill gate, with the family's bundle on your head.",
        note: "The 1930s saw steady migration from Bengal's districts to the cities, where work was scarce and wages falling.",
      },
    ],
  },
];