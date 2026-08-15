// Words of War — Source Data
// Edit this file to update the timeline and statistics.
// Each timeline entry supports:
//   date    (required) — ISO date string "YYYY-MM-DD"
//   quote   (required) — the primary statement
//   context (optional) — a plain-text explanatory line
//   extra   (optional) — a secondary italicized quote fragment
//   source  (required) — label for the source (e.g. "Reuters", "Truth Social")
//   link    (required) — URL to the original source

const data = [
  { date: "2026-03-11", quote: "You never like to say too early you won. We won. In the first hour it was over.", source: "Reuters", link: "https://www.reuters.com/world/iran-war-live-tehran-continues-fire-israel-targets-across-middle-east-2026-03-11/" },
  { date: "2026-03-17", quote: "very foolish mistake", context: "Trump said NATO\u2019s refusal to help was a \u2018very foolish mistake.\u2019", source: "Reuters", link: "https://www.reuters.com/world/middle-east/nato-countries-dont-want-get-involved-iran-operation-trump-says-2026-03-17/" },
  { date: "2026-03-20", quote: "Without the U.S.A., NATO IS A PAPER TIGER!", extra: "Militarily WON", source: "Truth Social", link: "https://truthsocial.com/@realDonaldtrump/posts/116261796648776538" },
  { date: "2026-03-24", quote: "making progress", context: "Trump said the U.S. was making progress toward ending the war and was talking to \u2018the right people\u2019 in Iran.", source: "Reuters", link: "https://www.reuters.com/world/asia-pacific/iran-sends-waves-missiles-into-israel-dismisses-trumps-talk-negotiations-fake-2026-03-24/" },
  { date: "2026-03-24", quote: "They gave us a present and the ⁠present arrived today, and it was a very big present, ​worth a tremendous amount of money.", source: "Reuters", link: "https://www.reuters.com/world/asia-pacific/trump-us-is-talking-right-people-iran-says-tehran-badly-wants-deal-2026-03-24/" },
  { date: "2026-03-31", quote: "We\u2019ll be leaving very soon", extra: "within two weeks, maybe two weeks, maybe three", source: "Reuters", link: "https://www.reuters.com/world/middle-east/trump-says-us-could-end-war-in-iran-two-three-weeks-2026-03-31/" },
  { date: "2026-03-31", quote: "some delayed courage, go to the strait and just TAKE IT", context: "Trump said countries hurt by the Strait of Hormuz closure should go take it.", source: "Reuters", link: "https://www.reuters.com/business/energy/giant-oil-tanker-off-dubai-hit-by-iranian-strike-trump-threatens-obliterate-iran-2026-03-31/" },
  { date: "2026-04-02", quote: "We are going to hit them extremely hard over the next two to three weeks. We are going to bring them back to the Stone Ages, where they belong.", source: "Reuters", link: "https://www.reuters.com/world/middle-east/trump-threatens-strike-irans-bridges-electric-power-plants-2026-04-03/" },
  { date: "2026-04-02", quote: "[The U.S. military] hasn\u2019t even started destroying what\u2019s left in Iran. Bridges next, then Electric Power Plants.", source: "Reuters", link: "https://www.reuters.com/world/middle-east/trump-threatens-strike-irans-bridges-electric-power-plants-2026-04-03/" },
  { date: "2026-04-05", quote: "Tuesday will be Power Plant Day, and Bridge Day, all wrapped up in one, in Iran. There will be nothing like it!!!", source: "Reuters", link: "https://www.reuters.com/world/middle-east/trump-says-us-will-target-irans-infrastructure-tuesday-2026-04-05/" },
  { date: "2026-04-05", quote: "Open the Fuckin\u2019 Strait, you crazy bastards, or you\u2019ll be living in Hell \u2014 JUST WATCH!", extra: "Praise be to Allah.", source: "Reuters", link: "https://www.reuters.com/world/middle-east/trump-says-us-will-target-irans-infrastructure-tuesday-2026-04-05/" },
  { date: "2026-04-05", quote: "The rescue was an Easter Miracle.", source: "Reuters", link: "https://www.reuters.com/world/middle-east/trump-says-us-will-target-irans-infrastructure-tuesday-2026-04-05/" },
  { date: "2026-04-05", quote: "we\u2019re blowing up the whole country", context: "On ABC, Trump said that if the conflict did not end quickly, \u2018we\u2019re blowing up the whole country,\u2019 and that there was \u2018very little\u2019 off the table.", source: "Reuters", link: "https://www.reuters.com/world/middle-east/trump-says-us-will-target-irans-infrastructure-tuesday-2026-04-05/" },
  { date: "2026-04-06", quote: "They made a proposal, and it\u2019s a significant proposal. It\u2019s a significant step. It\u2019s not good enough.", source: "Reuters", link: "https://www.reuters.com/world/middle-east/trump-says-tuesday-deadline-make-deal-with-iran-is-final-2026-04-06/" },
  { date: "2026-04-06", quote: "I\u2019m not worried about it. You know what\u2019s a war crime? Having a nuclear weapon.", source: "Reuters", link: "https://www.reuters.com/world/middle-east/trump-says-tuesday-deadline-make-deal-with-iran-is-final-2026-04-06/" },
  { date: "2026-04-06", quote: "At the end of 10, all hell\u2019s going to break out if you don\u2019t get there.", source: "Reuters", link: "https://www.reuters.com/world/middle-east/trump-says-tuesday-deadline-make-deal-with-iran-is-final-2026-04-06/" },
  { date: "2026-04-06", quote: "Well they should do it but, again, the consequences are great. I mean, they were told, \u2018If you protest, you will be shot immediately.\u2019", source: "Reuters", link: "https://www.reuters.com/world/middle-east/trump-says-iranians-should-rise-up-against-government-if-ceasefire-declared-2026-04-06/" },
  { date: "2026-04-06", quote: "taken out", context: "Reuters reported Trump said Iran could be \u2018taken out\u2019 if no deal was reached by Tuesday night.", source: "Reuters", link: "https://www.reuters.com/world/us/trump-says-iran-could-be-taken-out-tuesday-night-2026-04-06/" },
  { date: "2026-04-07", quote: "A whole civilization will die tonight, never to be brought back again. I don\u2019t want that to happen, but it probably will.", source: "Reuters", link: "https://www.reuters.com/world/middle-east/trump-says-a-whole-civilization-will-die-tonight-if-iran-does-not-make-deal-2026-04-07/" }
];

// Featured pull-quote rendered in the large centered block.
const featuredRaw = "We are going to bring them back to the Stone Ages, where they belong.";

// "By the numbers" statistics grid.
const statsData = [
  { num: '19', label: 'Verified Statements' },
  { num: '29', label: 'Days Documented' },
  { num: '18', label: 'Reuters Sources' },
  { num: '1', label: 'Truth Social Post' },
];
