import { SkillJsonRaw } from "@/types/skill.types";
import { convertSkills } from "./skillConverter";

const skillsJson: SkillJsonRaw[] = [
  {
    Skill: "1st attack",
    Modifier: "Regular",
    "Skill Ratio": 1,
    "DMG Cap": 14999,
    CD: "",
    Classification: "No",
  },
  {
    Skill: "",
    Modifier: "Held",
    "Skill Ratio": 1,
    "DMG Cap": 4999,
    CD: "",
    Classification: "NoCh",
  },
  {
    Skill: "",
    Modifier: "Release (1st hit)",
    "Skill Ratio": 0.7,
    "DMG Cap": 14999,
    CD: "",
    Classification: "NoCh",
  },
  {
    Skill: "",
    Modifier: "Release (2nd hit)",
    "Skill Ratio": 1.2,
    "DMG Cap": 14999,
    CD: "",
    Classification: "NoCh",
  },
  {
    Skill: "",
    Modifier: "Full Charge (1st hit)",
    "Skill Ratio": 0.8,
    "DMG Cap": 14999,
    CD: "",
    Classification: "NoCh",
  },
  {
    Skill: "",
    Modifier: "Full Charge (2nd hit)",
    "Skill Ratio": 2.6,
    "DMG Cap": 14999,
    CD: "",
    Classification: "NoCh",
  },
  {
    Skill: "2nd attack",
    Modifier: "Regular",
    "Skill Ratio": 1.2,
    "DMG Cap": 14999,
    CD: "",
    Classification: "No",
  },
  {
    Skill: "",
    Modifier: "Held",
    "Skill Ratio": 1,
    "DMG Cap": 4999,
    CD: "",
    Classification: "NoCh",
  },
  {
    Skill: "",
    Modifier: "Release (1st hit)",
    "Skill Ratio": 0.3,
    "DMG Cap": 14999,
    CD: "",
    Classification: "NoCh",
  },
  {
    Skill: "",
    Modifier: "Release (2nd hit)",
    "Skill Ratio": 0.6,
    "DMG Cap": 14999,
    CD: "",
    Classification: "NoCh",
  },
  {
    Skill: "",
    Modifier: "Release (3rd hit)",
    "Skill Ratio": 1.28,
    "DMG Cap": 14999,
    CD: "",
    Classification: "NoCh",
  },
  {
    Skill: "",
    Modifier: "Full Charge (1st hit)",
    "Skill Ratio": 0.5,
    "DMG Cap": 14999,
    CD: "",
    Classification: "NoCh",
  },
  {
    Skill: "",
    Modifier: "Full Charge (2nd hit)",
    "Skill Ratio": 0.8,
    "DMG Cap": 14999,
    CD: "",
    Classification: "NoCh",
  },
  {
    Skill: "",
    Modifier: "Full Charge (3rd hit)",
    "Skill Ratio": 2.5,
    "DMG Cap": 14999,
    CD: "",
    Classification: "NoCh",
  },
  {
    Skill: "3rd attack",
    Modifier: "Regular (1st hit)",
    "Skill Ratio": 0.6,
    "DMG Cap": 14999,
    CD: "",
    Classification: "No",
  },
  {
    Skill: "",
    Modifier: "Regular (2nd hit)",
    "Skill Ratio": 1.4,
    "DMG Cap": 14999,
    CD: "",
    Classification: "No",
  },
  {
    Skill: "",
    Modifier: "Held",
    "Skill Ratio": 1,
    "DMG Cap": 4999,
    CD: "",
    Classification: "NoCh",
  },
  {
    Skill: "",
    Modifier: "Release (1st hit)",
    "Skill Ratio": 0.4,
    "DMG Cap": 14999,
    CD: "",
    Classification: "NoCh",
  },
  {
    Skill: "",
    Modifier: "Release (2nd hit)",
    "Skill Ratio": 0.85,
    "DMG Cap": 14999,
    CD: "",
    Classification: "NoCh",
  },
  {
    Skill: "",
    Modifier: "Release (3rd hit)",
    "Skill Ratio": 0.85,
    "DMG Cap": 14999,
    CD: "",
    Classification: "NoCh",
  },
  {
    Skill: "",
    Modifier: "Release (4th hit)",
    "Skill Ratio": 2,
    "DMG Cap": 14999,
    CD: "",
    Classification: "NoCh",
  },
  {
    Skill: "",
    Modifier: "Full Charge (1st hit)",
    "Skill Ratio": 0.7,
    "DMG Cap": 14999,
    CD: "",
    Classification: "NoCh",
  },
  {
    Skill: "",
    Modifier: "Full Charge (2nd hit)",
    "Skill Ratio": 1.42,
    "DMG Cap": 14999,
    CD: "",
    Classification: "NoCh",
  },
  {
    Skill: "",
    Modifier: "Full Charge (3rd hit)",
    "Skill Ratio": 1.45,
    "DMG Cap": 14999,
    CD: "",
    Classification: "NoCh",
  },
  {
    Skill: "",
    Modifier: "Full Charge (4th hit)",
    "Skill Ratio": 3.83,
    "DMG Cap": 14999,
    CD: "",
    Classification: "NoCh",
  },
  {
    Skill: "Onslaught",
    Modifier: "Held (no gauge)",
    "Skill Ratio": 0.35,
    "DMG Cap": 4999,
    CD: "",
    Classification: "No",
  },
  {
    Skill: "Onslaught",
    Modifier: "Held (1 gauge)",
    "Skill Ratio": 0.42,
    "DMG Cap": 4999,
    CD: "",
    Classification: "No",
  },
  {
    Skill: "Onslaught",
    Modifier: "Held (2 gauge)",
    "Skill Ratio": 0.46,
    "DMG Cap": 4999,
    CD: "",
    Classification: "No",
  },
  {
    Skill: "Onslaught",
    Modifier: "Held (3 gauge)",
    "Skill Ratio": 0.51,
    "DMG Cap": 4999,
    CD: "",
    Classification: "No",
  },
  {
    Skill: "Onslaught",
    Modifier: "Release (no gauge)",
    "Skill Ratio": 4.75,
    "DMG Cap": 14999,
    CD: "",
    Classification: "No",
  },
  {
    Skill: "Onslaught",
    Modifier: "Release (1 gauge)",
    "Skill Ratio": 5.7,
    "DMG Cap": 14999,
    CD: "",
    Classification: "No",
  },
  {
    Skill: "Onslaught",
    Modifier: "Release (2 gauge)",
    "Skill Ratio": 6.15,
    "DMG Cap": 14999,
    CD: "",
    Classification: "No",
  },
  {
    Skill: "Onslaught",
    Modifier: "Release (3 gauge)",
    "Skill Ratio": 6.65,
    "DMG Cap": 14999,
    CD: "",
    Classification: "No",
  },
  {
    Skill: "Pets",
    Modifier: "Fugee + Nicola",
    "Skill Ratio": 0.25,
    "DMG Cap": 2499,
    CD: "",
    Classification: "PeRa",
  },
  {
    Skill: "",
    Modifier: "Geegee",
    "Skill Ratio": 0.5,
    "DMG Cap": 2499,
    CD: "",
    Classification: "PeRa",
  },
  {
    Skill: "",
    Modifier: "Beppo",
    "Skill Ratio": 0.5,
    "DMG Cap": 2499,
    CD: "",
    Classification: "PeRa",
  },
  {
    Skill: "Launch",
    Modifier: "Each hit",
    "Skill Ratio": 0.5,
    "DMG Cap": 14999,
    CD: "",
    Classification: "No",
  },
  {
    Skill: "Air Combo",
    Modifier: "1st attack",
    "Skill Ratio": 1.1,
    "DMG Cap": 14999,
    CD: "",
    Classification: "No",
  },
  {
    Skill: "",
    Modifier: "2nd attack",
    "Skill Ratio": 1.3,
    "DMG Cap": 14999,
    CD: "",
    Classification: "No",
  },
  {
    Skill: "",
    Modifier: "3rd attack",
    "Skill Ratio": 1.6,
    "DMG Cap": 14999,
    CD: "",
    Classification: "No",
  },
  {
    Skill: "Aerial Barrage",
    Modifier: "Each hit",
    "Skill Ratio": 1,
    "DMG Cap": 14999,
    CD: "",
    Classification: "No",
  },
  {
    Skill: "Link Attack",
    Modifier: "Each hit",
    "Skill Ratio": 1.67,
    "DMG Cap": 24999,
    CD: "",
    Classification: "Li",
  },
  {
    Skill: "SBA",
    Modifier: "Activation Hit",
    "Skill Ratio": 0.83,
    "DMG Cap": 99999,
    CD: "",
    Classification: "Sb",
  },
  {
    Skill: "",
    Modifier: "Weakest Hit",
    "Skill Ratio": 0.92,
    "DMG Cap": 39999,
    CD: "",
    Classification: "Sb",
  },
  {
    Skill: "",
    Modifier: "Total Damage",
    "Skill Ratio": 17.92,
    "DMG Cap": 279993,
    CD: "",
    Classification: "Sb",
  },
  {
    Skill: "Umaluf",
    Modifier: "Each hit",
    "Skill Ratio": 2.08,
    "DMG Cap": 24999,
    CD: "",
    Classification: "Sk",
  },
  {
    Skill: "Pendel (6 Hits)",
    Modifier: "Each hit",
    "Skill Ratio": 0.54,
    "DMG Cap": 2499,
    CD: "",
    Classification: "Sk",
  },
  {
    Skill: "Strafe",
    Modifier: "Weakest Hit",
    "Skill Ratio": 0.75,
    "DMG Cap": 14999,
    CD: "",
    Classification: "RaSk",
  },
  {
    Skill: "",
    Modifier: "Total Damage",
    "Skill Ratio": 36.67,
    "DMG Cap": 239999,
    CD: "",
    Classification: "RaSk",
  },
  {
    Skill: "Blaues Gespent",
    Modifier: "Each hit",
    "Skill Ratio": 2.33,
    "DMG Cap": 29999,
    CD: "",
    Classification: "RaSk",
  },
  {
    Skill: "Purge Spirits",
    Modifier: "",
    "Skill Ratio": 12.08,
    "DMG Cap": 49999,
    CD: "",
    Classification: "Sk",
  },
];

export const ferrySkills = convertSkills(skillsJson);