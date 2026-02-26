const projects = [

  // ── EXCEL ──────────────────────────────────────────────────────────────────
  {
    id: 1,
    title: "Chicago Crime Analysis",
    category: "Excel",
    icon: "📗",
    accent: "#22c55e",
    tools: ["Excel", "Pivot Tables", "Charts", "Slicers"],

    problem: "Every year, hundreds of thousands of people move through Chicago's criminal court system — but for a long time, no one was looking at the full picture. Which charges were being filed the most? Were certain communities being disproportionately impacted? How had crime trends shifted over nearly a decade? The data existed, but it was buried in raw court records. This project set out to turn that raw data into a clear, visual story of crime in Chicago from 2014 to 2023.",

    dataset: "Cook County Criminal Court records — 585,418 arrest and charge cases filed between 2014 and 2023. Each record contains a unique case bond number (CB_NO), arrest date and time, defendant race, and up to 4 charge statutes with full Illinois Compiled Statutes (ILCS) codes, charge descriptions, type, and felony/misdemeanor class. Cleaned, structured, and analyzed entirely in Excel using Pivot Tables, dynamic charts, and interactive slicers by race and year.",

    dashboard: [
      { value: "585,418", label: "Total Cases Filed" },
      { value: "247,963", label: "Charge 2 Cases" },
      { value: "136,051", label: "Charge 3 Cases" },
      { value: "75,410",  label: "Charge 4 Cases" },
    ],

    image: "", // ← paste your screenshot path here

    conclusion: "The analysis uncovered clear year-over-year trends in case filings from 2014 to 2023, including seasonal spikes in specific months and a breakdown of the most commonly filed ILCS charge statutes. The race slicer revealed significant demographic disparities across charge categories. These insights provide a data-driven foundation for discussions around court resource allocation, equitable policing policy, and community-based intervention programs.",
  },

  // ── SQL ────────────────────────────────────────────────────────────────────
  // Add SQL projects here

  // ── TABLEAU ────────────────────────────────────────────────────────────────
  // Add Tableau projects here

  // ── POWER BI ───────────────────────────────────────────────────────────────
  // Add Power BI projects here

];
