const projects = [

  // ── EXCEL ──────────────────────────────────────────────────────────────────
  {
    id: 1,
    title: "Chicago Crime Analysis",
    category: "Excel",
    icon: "📗",
    accent: "#22c55e",
    tools: ["Excel", "Pivot Tables", "Charts", "Slicers"],

    problem: "Chicago has long struggled with crime, but city officials and community organizations lacked a clear, data-driven picture of how criminal activity had evolved over nearly a decade. Without visibility into trends by year, season, race, and crime type, resources were being allocated without evidence — and patterns that could drive smarter prevention were going unnoticed.",

    dataset: "Chicago Police Department open data portal — 585,418 criminal cases filed between 2014 and 2023. The dataset includes up to 4 charge statutes per case, demographics of the accused, filing month, and crime category. Cleaned and transformed in Excel using Pivot Tables, slicers, and dynamic charts.",

    dashboard: [
      { value: "585,418", label: "Total Cases Filed" },
      { value: "247,963", label: "Charge 2 Cases" },
      { value: "136,051", label: "Charge 3 Cases" },
      { value: "75,410",  label: "Charge 4 Cases" },
    ],

    image: "", // ← paste your screenshot path here

    conclusion: "The analysis revealed trends in case filings from 2014 to 2023, with breakdowns by crime type, race, and month. Key patterns in seasonal spikes and charge distributions were identified, providing actionable insights for resource allocation and community-focused policy decisions.",
  },

  // ── SQL ────────────────────────────────────────────────────────────────────
  // Add SQL projects here

  // ── TABLEAU ────────────────────────────────────────────────────────────────
  // Add Tableau projects here

  // ── POWER BI ───────────────────────────────────────────────────────────────
  // Add Power BI projects here

];
