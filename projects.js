const projects = [
  // ─── Power BI Projects ───────────────────────────────────────────────────
  {
    id: 1,
    title: "Uber Trip Analysis",
    category: "Power BI",
    tools: ["Power BI", "Excel"],
    icon: "🚖",
    accent: "#276EF1",
    problem:
      "Brooklyn's transportation planners had no unified view of Uber trip patterns. Questions like 'which hours are busiest?', 'which vehicle types dominate?', and 'how far do riders travel on average?' remained unanswered, making fleet optimisation and route planning guesswork.",
    solution:
      "Connected raw Uber CSV exports to Power BI and cleaned the data in Power Query (parsed timestamps, normalised borough names, removed nulls). Built DAX measures for trip counts, average distance, and rolling hourly volumes. Designed an interactive dashboard with slicers for borough and vehicle type so stakeholders can drill into any segment instantly.",
    dashboard: [
      { label: "Total Trips Analysed", value: "50 K+" },
      { label: "Vehicle Types", value: "8" },
      { label: "Avg Trip Distance", value: "3.2 mi" },
      { label: "Peak Window", value: "6 – 9 PM" },
    ],
    image:
      "https://raw.githubusercontent.com/lalithasaipasala/city-accident-analysis-excel/main/Uber.jpg",
  },
  {
    id: 2,
    title: "Amazon Sales Analysis",
    category: "Power BI",
    tools: ["Power BI", "Excel"],
    icon: "🛒",
    accent: "#FF9900",
    problem:
      "The sales team lacked a single source of truth for year-to-date (YTD) and quarter-to-date (QTD) performance across product categories. High-return products and low-rated items were silently eroding revenue without visibility.",
    solution:
      "Ingested multi-sheet Excel sales data into Power BI. Created a date table and time-intelligence DAX measures (YTD Sales, QTD Sales, MoM Growth %). Built a dashboard with a KPI card layer on top, a category heatmap in the middle, and a product-level table with conditional formatting to surface top and bottom performers.",
    dashboard: [
      { label: "YTD Revenue", value: "$2.3 M" },
      { label: "QTD Growth", value: "+18 %" },
      { label: "Top Category", value: "Electronics" },
      { label: "Avg Rating", value: "4.1 / 5" },
    ],
    image:
      "https://raw.githubusercontent.com/lalithasaipasala/city-accident-analysis-excel/main/Activation%20Dashboard.jpg",
  },
  {
    id: 3,
    title: "Financial Complaints Overview",
    category: "Power BI",
    tools: ["Power BI"],
    icon: "💵",
    accent: "#00B050",
    problem:
      "A financial institution received 75 000+ customer complaints but had no way to spot which products generated the most issues, how quickly they were resolved, or whether complaints were trending up or down month-over-month.",
    solution:
      "Loaded the Consumer Financial Protection Bureau complaint dataset into Power BI. Modelled relationships between products, issues, and submission channels. Built DAX measures for resolution rate, average days-to-close, and complaint volume trends. The final dashboard lets management filter by state, product, and issue type to find root causes.",
    dashboard: [
      { label: "Total Complaints", value: "75 K+" },
      { label: "Resolution Rate", value: "78 %" },
      { label: "Avg Days to Close", value: "14 days" },
      { label: "Top Issue", value: "Incorrect Info" },
    ],
    image:
      "https://raw.githubusercontent.com/lalithasaipasala/city-accident-analysis-excel/main/Financial%20Complaints%20overview.jpg",
  },
  {
    id: 4,
    title: "Healthcare Screening Analysis",
    category: "Power BI",
    tools: ["Power BI"],
    icon: "🏥",
    accent: "#E91E63",
    problem:
      "A regional health authority needed to track preventive-screening compliance across different demographic groups (ethnicity, language, region) to identify gaps and allocate outreach resources effectively.",
    solution:
      "Imported member-level screening records, joined them with demographic lookup tables, and built a Power BI model. Calculated screening-rate measures per subgroup using DAX CALCULATE filters. Visualised regional coverage on a map visual, and created small-multiple bar charts breaking down rates by ethnicity, language, and age band.",
    dashboard: [
      { label: "Members Screened", value: "120 K" },
      { label: "Overall Compliance", value: "64 %" },
      { label: "Regions Covered", value: "12" },
      { label: "Languages Tracked", value: "7" },
    ],
    image:
      "https://raw.githubusercontent.com/lalithasaipasala/city-accident-analysis-excel/main/Health%20Care%20.jpg",
  },
  {
    id: 5,
    title: "Regional Sales Dashboard",
    category: "Power BI",
    tools: ["Power BI", "Excel"],
    icon: "🌍",
    accent: "#7B1FA2",
    problem:
      "Regional managers could not easily compare current-year (CY) vs. prior-year (PY) sales, profit margins, and quantity sold across territories, making it hard to reward high performers or support struggling regions.",
    solution:
      "Structured a star-schema model with a sales fact table and region/product dimension tables. Wrote parallel-period DAX measures (SAMEPERIODLASTYEAR) to compute CY vs. PY deltas. Designed a dashboard with a region-level matrix table, a combo column/line chart for trend comparison, and card visuals for top KPIs.",
    dashboard: [
      { label: "Regions Compared", value: "6" },
      { label: "CY vs PY Growth", value: "+22 %" },
      { label: "Best Region", value: "West" },
      { label: "Gross Profit Margin", value: "38 %" },
    ],
    image:
      "https://raw.githubusercontent.com/lalithasaipasala/city-accident-analysis-excel/main/Uber.jpg",
  },
  {
    id: 6,
    title: "Spotify Listening Insights",
    category: "Power BI",
    tools: ["Power BI", "Spotify Data"],
    icon: "🎧",
    accent: "#1DB954",
    problem:
      "Personal streaming history sat as raw JSON exports with no way to answer questions like 'which artists do I replay most?', 'how has my listening changed over seasons?', or 'what fraction of streams are full plays vs. skips?'",
    solution:
      "Parsed Spotify's extended streaming history JSON in Power Query, flattened nested arrays, and merged with the Spotify API metadata table to enrich tracks with genre and duration. Built a personal analytics dashboard with listening-time heatmaps, top-10 artist/album/track leaderboards, and a seasonality trend line.",
    dashboard: [
      { label: "Total Streams", value: "8 200+" },
      { label: "Unique Artists", value: "340" },
      { label: "Top Genre", value: "Pop" },
      { label: "Skip Rate", value: "21 %" },
    ],
    image:
      "https://raw.githubusercontent.com/lalithasaipasala/city-accident-analysis-excel/main/Activation%20Dashboard.jpg",
  },

  // ─── SQL Projects ──────────────────────────────────────────────────────────
  {
    id: 7,
    title: "Bank Churn Analysis",
    category: "SQL",
    tools: ["MS SQL Server"],
    icon: "🏦",
    accent: "#F57C00",
    problem:
      "A retail bank was losing customers without understanding which segments were most at risk. The churn label existed in the database but no analysis had been performed to correlate it with financial behaviour, credit risk, or product holdings.",
    solution:
      "Wrote complex T-SQL queries using CTEs and window functions to segment customers by credit score, balance band, and product count. Calculated churn rates per segment and built comparison views for active vs. exited customers. Exported aggregated results to Power BI for visualisation.",
    dashboard: [
      { label: "Customers Analysed", value: "10 000" },
      { label: "Overall Churn Rate", value: "20.4 %" },
      { label: "Highest-Risk Segment", value: "Germany, 1 Product" },
      { label: "Avg Balance (Churned)", value: "$91 K" },
    ],
    image:
      "https://raw.githubusercontent.com/lalithasaipasala/city-accident-analysis-excel/main/Financial%20Complaints%20overview.jpg",
  },
  {
    id: 8,
    title: "Bank Loan Project",
    category: "SQL",
    tools: ["MS SQL Server"],
    icon: "💳",
    accent: "#0288D1",
    problem:
      "Loan officers needed a data-driven approach to assess credit risk. The existing process was manual; there was no systematic way to identify which customer profiles (income level, employment length, loan purpose) correlated with defaults.",
    solution:
      "Queried the loan database using window functions (RANK, NTILE) to categorise borrowers by risk tier. Calculated default rates per loan-purpose category and employment-length band. Wrote stored procedures to generate a monthly credit-risk report and flagged high-risk accounts using a multi-condition CASE expression.",
    dashboard: [
      { label: "Loans Analysed", value: "38 500" },
      { label: "Default Rate", value: "13.8 %" },
      { label: "Safest Purpose", value: "Home Improvement" },
      { label: "Riskiest Band", value: "< 1 yr Employment" },
    ],
    image:
      "https://raw.githubusercontent.com/lalithasaipasala/city-accident-analysis-excel/main/Financial%20Complaints%20overview.jpg",
  },

  // ─── Excel Projects ────────────────────────────────────────────────────────
  {
    id: 9,
    title: "Chicago Crime Analysis",
    category: "Excel",
    tools: ["Excel"],
    icon: "🏙️",
    accent: "#455A64",
    problem:
      "City planners had 585 000+ crime records but no aggregated view to guide patrol scheduling, identify high-crime locations, or track whether specific crime types were increasing over time.",
    solution:
      "Imported the Chicago Data Portal CSV into Excel, removed duplicates and blank rows with Power Query, and created a normalised date column. Built PivotTables to summarise crimes by type, district, and month. Used conditional formatting heat-maps and clustered bar charts to visualise crime hotspots and seasonal patterns.",
    dashboard: [
      { label: "Records Processed", value: "585 418" },
      { label: "Crime Types", value: "35" },
      { label: "Top Crime", value: "Theft" },
      { label: "Highest-Crime District", value: "District 8" },
    ],
    image:
      "https://raw.githubusercontent.com/lalithasaipasala/city-accident-analysis-excel/main/Health%20Care%20.jpg",
  },

  // ─── Python / ML Projects ──────────────────────────────────────────────────
  {
    id: 10,
    title: "Customer Churn Prediction",
    category: "Python / ML",
    tools: ["Python", "Scikit-learn", "PySpark"],
    icon: "⚡",
    accent: "#6200EA",
    problem:
      "A telecom provider wanted to proactively identify customers likely to churn so that retention offers could be made before cancellation. The dataset contained 100 000 records and 100 features — too large for simple spreadsheet analysis and needing a scalable ML pipeline.",
    solution:
      "Built two parallel pipelines: (1) a Scikit-learn pipeline with OneHotEncoder + RandomForestClassifier for baseline performance, and (2) a PySpark MLlib pipeline using StringIndexer → OneHotEncoder → VectorAssembler → RandomForestClassifier for distributed scalability. Ran speed-up, size-up, and scale-up experiments to benchmark the two approaches.",
    dashboard: [
      { label: "Records", value: "100 000" },
      { label: "Features", value: "100" },
      { label: "Sklearn Accuracy", value: "61.96 %" },
      { label: "PySpark Accuracy", value: "59.27 %" },
    ],
    image:
      "https://raw.githubusercontent.com/lalithasaipasala/city-accident-analysis-excel/main/Activation%20Dashboard.jpg",
  },
];
