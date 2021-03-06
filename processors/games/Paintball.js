/* eslint-disable camelcase */
/*
 * Paintball
 */

const { getRatio, getMonthlyStat, getWeeklyStat } = require('../../util/utility');

module.exports = ({
  adrenaline = 1,
  coins = 0,
  deaths = 0,
  endurance = 1,
  forcefieldTime = 0,
  fortune = 1,
  godfather = 1,
  hat,
  kills = 0,
  killstreaks = 0,
  monthly_kills_a = 0,
  monthly_kills_b = 0,
  packages,
  shots_fired = 0,
  superluck = 1,
  transfusion = 1,
  votes_Babyland = 0,
  votes_Boletus = 0,
  votes_Courtyard = 0,
  votes_Gladiator = 0,
  votes_Herobrine = 0,
  votes_Juice = 0,
  votes_LaLaLand = 0,
  votes_Octagon = 0,
  'votes_Oh Canada!': votes_OhCanada = 0,
  votes_Outback = 0,
  votes_Victorian = 0,
  weekly_kills_a = 0,
  weekly_kills_b = 0,
  wins = 0,
}) => ({
  coins,
  kills,
  deaths,
  kd: getRatio(kills, deaths),
  wins,
  weekly_kills: getWeeklyStat(weekly_kills_a, weekly_kills_b),
  monthly_kills: getMonthlyStat(monthly_kills_a, monthly_kills_b),
  killstreaks,
  shots_fired,
  hat,
  force_field_time: forcefieldTime,
  perks: {
    adrenaline: adrenaline && adrenaline + 1,
    endurance: endurance && endurance + 1,
    fortune: fortune && fortune + 1,
    godfather: godfather && godfather + 1,
    superluck: superluck && superluck + 1,
    transfusion: transfusion && transfusion + 1,
  },
  votes: {
    babyland: votes_Babyland,
    boletus: votes_Boletus,
    courtyard: votes_Courtyard,
    gladiator: votes_Gladiator,
    herobrine: votes_Herobrine,
    juice: votes_Juice,
    lalaland: votes_LaLaLand,
    octagon: votes_Octagon,
    oh_canada: votes_OhCanada,
    outback: votes_Outback,
    victorian: votes_Victorian,
  },
  packages,
});
