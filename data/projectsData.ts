interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'LLM based Requirement Reviewer',
    description: `In my experience in product development, most functions and disciplines are measured against some metrics.
    For example, software developers: number of bugs/issues; validation: number of unidentified issues; integration & calibration: system performance maturity achieved, etc.
    However, some key disciplines like requirements development and architecture development, which are the foundation for the product, typically don't have objective metrics.
    So, I decided to develop a tool that enables teams to feed in text-based requirements and generate a satisfaction score based on the completeness, correctness, and clarity?`,
    imgSrc: '/static/images/req_analyzer.png',
    href: 'https://kausi-hub.github.io/blog/systems engineering/LLM/requirements_analyzer',
  },
  {
    title: 'A test data anomaly detector',
    description: `If you are a manufacturing engineer or a test engineer who spends numerous hours sifting through data to find anomalies, this is for you. The app enables uploading CAN logs in text format for passed and failed runs and generates a divergence matrix identifying the signals that are potential root cause from a failed data set`,
    imgSrc: '/static/images/3dprinting.png',
    href: 'https://testdata-anomalydetector.streamlit.app/',
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
