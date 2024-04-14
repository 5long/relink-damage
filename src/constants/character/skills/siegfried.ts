import { SkillJsonRaw } from "@/types/skill.types";
import { convertSkills } from "./skillConverter";

const skillsJson: SkillJsonRaw[] = [
  {
    Skill: "Auto Attack",
    Modifier: "1st",
    "Skill Ratio": 1.2,
    "DMG Cap": 19999,
    CD: "",
    Classification: "No",
  },
  {
    Skill: "",
    Modifier: "2nd",
    "Skill Ratio": 1.9,
    "DMG Cap": 19999,
    CD: "",
    Classification: "No",
  },
  {
    Skill: "",
    Modifier: "2nd (timed)",
    "Skill Ratio": 2.9,
    "DMG Cap": 29999,
    CD: "",
    Classification: "No",
  },
  {
    Skill: "",
    Modifier: "3rd",
    "Skill Ratio": 3.1,
    "DMG Cap": 19999,
    CD: "",
    Classification: "No",
  },
  {
    Skill: "",
    Modifier: "3rd (timed)",
    "Skill Ratio": 5.3,
    "DMG Cap": 29999,
    CD: "",
    Classification: "No",
  },
  {
    Skill: "",
    Modifier: "4th",
    "Skill Ratio": 5.6,
    "DMG Cap": 19999,
    CD: "",
    Classification: "No",
  },
  {
    Skill: "",
    Modifier: "4th (timed)",
    "Skill Ratio": 8.8,
    "DMG Cap": 29999,
    CD: "",
    Classification: "No",
  },
  {
    Skill: "",
    Modifier: "5th",
    "Skill Ratio": 8.2,
    "DMG Cap": 19999,
    CD: "",
    Classification: "No",
  },
  {
    Skill: "",
    Modifier: "5th (1 of 2)",
    "Skill Ratio": 3.79,
    "DMG Cap": 19999,
    CD: "",
    Classification: "No",
  },
  {
    Skill: "",
    Modifier: "5th (2 of 2)",
    "Skill Ratio": 5.78,
    "DMG Cap": 19999,
    CD: "",
    Classification: "No",
  },
  {
    Skill: "",
    Modifier: "5th (1 of 3)",
    "Skill Ratio": 1.6,
    "DMG Cap": 29999,
    CD: "",
    Classification: "NoFi",
  },
  {
    Skill: "",
    Modifier: "5th (2 of 3)",
    "Skill Ratio": 3.4,
    "DMG Cap": 29999,
    CD: "",
    Classification: "NoFi",
  },
  {
    Skill: "",
    Modifier: "5th (3 of 3)",
    "Skill Ratio": 6,
    "DMG Cap": 29999,
    CD: "",
    Classification: "NoFi",
  },
  {
    Skill: "",
    Modifier: "5th (1 of 4)",
    "Skill Ratio": 3.21,
    "DMG Cap": 29999,
    CD: "",
    Classification: "NoFi",
  },
  {
    Skill: "",
    Modifier: "5th (2 of 4)",
    "Skill Ratio": 4.42,
    "DMG Cap": 29999,
    CD: "",
    Classification: "NoFi",
  },
  {
    Skill: "",
    Modifier: "5th (3 of 4)",
    "Skill Ratio": 5.71,
    "DMG Cap": 29999,
    CD: "",
    Classification: "NoFi",
  },
  {
    Skill: "",
    Modifier: "5th (4 of 4)",
    "Skill Ratio": 9.4,
    "DMG Cap": 29999,
    CD: "",
    Classification: "NoFi",
  },
  {
    Skill: "Power Attack",
    Modifier: "Lunge",
    "Skill Ratio": 1.5,
    "DMG Cap": 19999,
    CD: "",
    Classification: "No",
  },
  {
    Skill: "",
    Modifier: "Perfect Execution (1 of 3)",
    "Skill Ratio": 6.51,
    "DMG Cap": 49999,
    CD: "",
    Classification: "NoFi",
  },
  {
    Skill: "",
    Modifier: "Perfect Execution (3 of 3)",
    "Skill Ratio": 9.27,
    "DMG Cap": 49999,
    CD: "",
    Classification: "NoFi",
  },
  {
    Skill: "",
    Modifier: "Perfect Execution (3 of 3)",
    "Skill Ratio": 14.9,
    "DMG Cap": 49999,
    CD: "",
    Classification: "NoFi",
  },
  {
    Skill: "Abilities",
    Modifier: "Uwe (1 of 2)",
    "Skill Ratio": 2.46,
    "DMG Cap": 54999,
    CD: "",
    Classification: "Sk",
  },
  {
    Skill: "",
    Modifier: "Uwe (2 of 2)",
    "Skill Ratio": 3.38,
    "DMG Cap": 54999,
    CD: "",
    Classification: "Sk",
  },
  {
    Skill: "",
    Modifier: "Nelah Nav",
    "Skill Ratio": 5,
    "DMG Cap": 84999,
    CD: "",
    Classification: "Sk",
  },
  {
    Skill: "",
    Modifier: "Verdrangen",
    "Skill Ratio": 9.17,
    "DMG Cap": 69999,
    CD: "",
    Classification: "Sk",
  },
  {
    Skill: "",
    Modifier: "L'Ombre d'Hier (failed)",
    "Skill Ratio": 3.83,
    "DMG Cap": 64999,
    CD: "",
    Classification: "Sk",
  },
  {
    Skill: "",
    Modifier: "L'Ombre d\"hier (1 of 2)",
    "Skill Ratio": 2.86,
    "DMG Cap": 64999,
    CD: "",
    Classification: "Sk",
  },
  {
    Skill: "",
    Modifier: "L'Ombre d'Hier (2 of 2)",
    "Skill Ratio": 6.95,
    "DMG Cap": 64999,
    CD: "",
    Classification: "Sk",
  },
  {
    Skill: "Aerial",
    Modifier: "Launch",
    "Skill Ratio": 1,
    "DMG Cap": 19999,
    CD: "",
    Classification: "No",
  },
  {
    Skill: "",
    Modifier: "1st",
    "Skill Ratio": 1,
    "DMG Cap": 19999,
    CD: "",
    Classification: "No",
  },
  {
    Skill: "",
    Modifier: "2nd",
    "Skill Ratio": 1.36,
    "DMG Cap": 19999,
    CD: "",
    Classification: "No",
  },
  {
    Skill: "",
    Modifier: "2nd (timed)",
    "Skill Ratio": 1.5,
    "DMG Cap": 29999,
    CD: "",
    Classification: "No",
  },
  {
    Skill: "",
    Modifier: "3rd",
    "Skill Ratio": 1.54,
    "DMG Cap": 19999,
    CD: "",
    Classification: "No",
  },
  {
    Skill: "",
    Modifier: "3rd (timed)",
    "Skill Ratio": 1.94,
    "DMG Cap": 29999,
    CD: "",
    Classification: "No",
  },
  {
    Skill: "",
    Modifier: "Aerial Barrage",
    "Skill Ratio": 1.7,
    "DMG Cap": 19999,
    CD: "",
    Classification: "No",
  },
  {
    Skill: "Link",
    Modifier: "Link Attack",
    "Skill Ratio": 6,
    "DMG Cap": 99999,
    CD: "",
    Classification: "NoLi",
  },
  {
    Skill: "SBA",
    Modifier: "Schwarze Faenge (initial)",
    "Skill Ratio": 0.83,
    "DMG Cap": 99999,
    CD: "",
    Classification: "Sb",
  },
  {
    Skill: "",
    Modifier: "Schwarze Faenge (1 of 3)",
    "Skill Ratio": 1.67,
    "DMG Cap": 89999,
    CD: "",
    Classification: "Sb",
  },
  {
    Skill: "",
    Modifier: "Schwarze Faenge (2 of 3)",
    "Skill Ratio": 2.08,
    "DMG Cap": 89999,
    CD: "",
    Classification: "Sb",
  },
  {
    Skill: "",
    Modifier: "Schwarze Faenge (3 of 3)",
    "Skill Ratio": 5,
    "DMG Cap": 89999,
    CD: "",
    Classification: "Sb",
  },
];

export const siegfriedSkills = convertSkills(skillsJson);