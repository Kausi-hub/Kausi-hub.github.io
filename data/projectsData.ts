interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'LLM based Requirement Reviewer',
    description: `In product development, most disciplines are evaluated using clear metrics—for example, software developers by bug counts, validation teams by missed issues, and integration teams by achieved performance maturity. However, foundational areas like requirements and architecture development often lack objective measures despite their critical impact. To address this gap, I developed a tool that analyzes text-based requirements and generates a satisfaction score. The score evaluates key aspects such as completeness, correctness, and clarity, helping teams objectively assess quality and improve the foundation of their products.`,
    imgSrc: '/static/images/req_analyzer.png',
    href: 'https://requirementsanalyzerml-ks.streamlit.app/',
  },
    {
    title: 'A predictive model for degradation of semiconductor devices in an inverter',
    description: `A model to predict degradation of semiconductor devices in an inverter due to repeated thermal cycling`,
    imgSrc: '/static/images/predictwear.png',
    href: 'https://eeweardetectml-ks.streamlit.app/',
  },
  {
    title: 'A test data anomaly detector',
    description: `The EOL Matching Dashboard is a Python-based tool that compares and aligns CSV and TXT or ASCII test data. It matches runs using time differences and signal similarity, producing a confidence score with a red-yellow-green indicator. The app includes an interactive timeline, results table, and downloadable Excel reports. Users can filter and visualize signal comparisons through dynamic plots. It also tracks previous analyses. Overall, it simplifies debugging, validation, and data comparison, making engineering workflows more efficient and insightful.`,
    imgSrc: '/static/images/EOLdashboard.png',
    href: 'https://anomalydetector-mga5bbfxtuyjc5m7kzhcw2.streamlit.app/',
  },
  {
    title: 'A Family Calendar',
    description: `What if you could sync up the calendars of your family and generate
    conflicts and reminders every week?`,
    imgSrc: '/static/images/calendarapp.png',
    href: '',
  },
]

export default projectsData
