var u = (e, s, a) => {
  if (!s.has(e))
    throw TypeError("Cannot " + a);
};
var o = (e, s, a) => (u(e, s, "read from private field"), a ? a.call(e) : s.get(e)), h = (e, s, a) => {
  if (s.has(e))
    throw TypeError("Cannot add the same private member more than once");
  s instanceof WeakSet ? s.add(e) : s.set(e, a);
}, i = (e, s, a, n) => (u(e, s, "write to private field"), n ? n.call(e, a) : s.set(e, a), a);
var f = (e, s, a) => (u(e, s, "access private method"), a);
var E = /* @__PURE__ */ ((e) => (e.Money = "money", e.Wood = "wood", e.Stone = "stone", e.Minerals = "minerals", e.Food = "food", e.Textile = "textile", e.Spices = "spices", e.Commodities = "commodities", e))(E || {}), Y = /* @__PURE__ */ ((e) => (e.Beggar = "beggar", e.Commoner = "commoner", e.Burgher = "burgher", e.Noble = "noble", e.Royal = "royal", e.Imperial = "imperial", e))(Y || {}), D = /* @__PURE__ */ ((e) => (e.Player = "player", e.NonPlayer = "non-player", e.Background = "background", e))(D || {}), v = /* @__PURE__ */ ((e) => (e.Male = "male", e.Female = "female", e.Hermaphrodite = "hermaphrodite", e))(v || {}), C = /* @__PURE__ */ ((e) => (e.None = "none", e.Scarce = "scarce", e.Mean = "mean", e.Common = "common", e))(C || {}), _ = /* @__PURE__ */ ((e) => (e.Impossible = "impossible", e.Hard = "hard", e.Normal = "normal", e.Easy = "easy", e))(_ || {}), L = /* @__PURE__ */ ((e) => (e.Parent = "parent", e.Influence = "influence", e))(L || {}), b = /* @__PURE__ */ ((e) => (e.Novice = "novice", e.Intermediate = "intermediate", e.Advanced = "advanced", e.Expert = "expert", e.Master = "master", e))(b || {}), B = /* @__PURE__ */ ((e) => (e.Easy = "easy", e.Normal = "normal", e.Hard = "hard", e.Extreme = "extreme", e))(B || {}), r = /* @__PURE__ */ ((e) => (e.DaysBeforeDays = "daysBeforeDays", e.YearsOfTheLamps = "yearsOfTheLamps", e.YearsOfTheTrees = "yearsOfTheTrees", e.FirstAge = "firstAge", e.SecondAge = "secondAge", e.ThirdAge = "thirdAge", e))(r || {}), t = /* @__PURE__ */ ((e) => (e.Coded = "coded", e.CodedAlt = "coded-alternate", e.Dotted = "dotted", e.DottedAlt = "dotted-alternate", e.Short = "short", e.Full = "full", e))(t || {});
const I = /^(?<age1>A\.?(?:[ACL])\.?|[1-9PST]\.?A\.?)[ \t\-_:]?(?<year1>\d+)|(?<year2>\d+)[ \t\-_:](?<age2>A\.?(?:[ACL])\.?|[1-9PST]\.?A\.?)$/i, p = 9.582, g = {
  [r.ThirdAge]: 291484,
  [r.SecondAge]: 288043,
  [r.FirstAge]: 287460,
  [r.YearsOfTheTrees]: 95820,
  [r.YearsOfTheLamps]: 47910,
  [r.DaysBeforeDays]: 0
}, F = {
  [t.Full]: {
    [r.ThirdAge]: "Troisième Âge",
    [r.SecondAge]: "Deuxième Âge",
    [r.FirstAge]: "Premier Âge",
    [r.YearsOfTheTrees]: "Années des Arbres",
    [r.YearsOfTheLamps]: "Années des Lampes",
    [r.DaysBeforeDays]: "Années de la Création"
  },
  [t.Short]: {
    [r.ThirdAge]: "3ème Âge",
    [r.SecondAge]: "2ème Âge",
    [r.FirstAge]: "1er Âge",
    [r.YearsOfTheTrees]: "Âge des Arbres",
    [r.YearsOfTheLamps]: "Âge des Lampes",
    [r.DaysBeforeDays]: "Âge de la Création"
  },
  [t.Dotted]: {
    [r.ThirdAge]: "T.A.",
    [r.SecondAge]: "S.A.",
    [r.FirstAge]: "P.A.",
    [r.YearsOfTheTrees]: "A.A.",
    [r.YearsOfTheLamps]: "A.L.",
    [r.DaysBeforeDays]: "A.C."
  },
  [t.DottedAlt]: {
    [r.ThirdAge]: "3.A.",
    [r.SecondAge]: "2.A.",
    [r.FirstAge]: "1.A.",
    [r.YearsOfTheTrees]: "A.A.",
    [r.YearsOfTheLamps]: "A.L.",
    [r.DaysBeforeDays]: "A.C."
  },
  [t.Coded]: {
    [r.ThirdAge]: "TA",
    [r.SecondAge]: "SA",
    [r.FirstAge]: "PA",
    [r.YearsOfTheTrees]: "AA",
    [r.YearsOfTheLamps]: "AL",
    [r.DaysBeforeDays]: "AC"
  },
  [t.CodedAlt]: {
    [r.ThirdAge]: "3A",
    [r.SecondAge]: "2A",
    [r.FirstAge]: "1A",
    [r.YearsOfTheTrees]: "AA",
    [r.YearsOfTheLamps]: "AL",
    [r.DaysBeforeDays]: "AC"
  }
}, N = {
  TA: r.ThirdAge,
  SA: r.SecondAge,
  PA: r.FirstAge,
  "3A": r.ThirdAge,
  "2A": r.SecondAge,
  "1A": r.FirstAge,
  AA: r.YearsOfTheTrees,
  AL: r.YearsOfTheLamps,
  AC: r.DaysBeforeDays
};
var A, d, T, l, y, c, O;
class x {
  constructor(s) {
    h(this, l);
    h(this, c);
    h(this, A, void 0);
    h(this, d, void 0);
    h(this, T, !1);
    this.setTime(s);
  }
  /** Si l'âge de la date est antérieur au réveil des Hommes i.e. avant le 1A. */
  get isEarlyAge() {
    return o(this, A) < g[r.FirstAge];
  }
  setTime(s) {
    switch (typeof s) {
      case "number":
        i(this, A, Math.max(0, s));
        break;
      case "string":
        i(this, A, s.match(/^\d+$/) ? parseInt(s) : f(this, l, y).call(this, s));
        break;
      default:
        throw new Error("Invalid time resolvable");
    }
    for (const [a, n] of Object.entries(g))
      if (o(this, A) >= n) {
        i(this, d, a);
        break;
      }
  }
  getTime() {
    return o(this, A);
  }
  toYear() {
    return this.isEarlyAge ? Math.round((o(this, A) - g[o(this, d)]) / p) : o(this, A) - g[o(this, d)];
  }
  toAge(s = t.Coded) {
    return F[s][o(this, d)];
  }
  toString(s = t.Coded) {
    let a;
    const n = this.isEarlyAge, m = this.toAge(s);
    return a = `${this.toYear()}`, s === t.Full ? a += ` ${n ? "des" : "du"} ${m}` : s === t.Short ? a += ` ${n ? "de l'" : "du "}${m}` : a += ` ${m}`;
  }
  hasError() {
    return o(this, T);
  }
}
A = new WeakMap(), d = new WeakMap(), T = new WeakMap(), l = new WeakSet(), y = function(s) {
  const a = s.match(I);
  if (a && a.groups) {
    const n = (a.groups.age1 || a.groups.age2).replaceAll(
      ".",
      ""
    ), m = N[n], S = parseInt(a.groups.year1 || a.groups.year2);
    return i(this, T, !1), f(this, c, O).call(this, m, S);
  }
  throw i(this, T, !0), new Error("Invalid date string");
}, c = new WeakSet(), O = function(s, a) {
  switch (s) {
    case r.DaysBeforeDays:
    case r.YearsOfTheLamps:
    case r.YearsOfTheTrees:
      return a * p + g[s];
    case r.FirstAge:
    case r.SecondAge:
    case r.ThirdAge:
      return a + g[s];
    default:
      throw new Error("Invalid age");
  }
};
export {
  g as ARDA_DATE_AGE_BASE_TIME,
  N as ARDA_DATE_AGE_FROM_CODE,
  F as ARDA_DATE_AGE_STRINGS,
  I as ARDA_DATE_STRING_PATTERN,
  x as ArdaDate,
  E as Asset,
  D as CharacterType,
  B as Difficulty,
  v as Gender,
  _ as LearningDifficulty,
  L as LinkType,
  b as Proficiency,
  Y as SocialRank,
  C as UsageRarity,
  p as VALIAN_YEAR_DURATION
};
