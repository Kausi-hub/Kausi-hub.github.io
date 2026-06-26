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
    description: `If you are a manufacturing engineer or a test engineer who is reviewing logs generated historically and spending numerous hours sifting through data to map rig data to gateway data, this is for you. The app enables uploading CAN logs from the gateway in text format and csv files from the rig for EOL runs and generates a mapping matrix from csv to CAN logs based on time stamps of runs`,
    imgSrc: '/static/images/3dprinting.png',
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
