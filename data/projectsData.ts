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
    href: 'https://github.com/Kausi-hub/Requirement_analyzer_llm',
  },
  {
    title: 'A Family Calendar',
    description: `What if you could sync up the calendars of your family and generate
    conflicts and reminders every week?`,
    imgSrc: '/static/images/calendarapp.png',
    href: '',
  },
  {
    title: 'Remote 3-D Printing',
    description: `A project to make 3D printing affordable for hobbyists. Manage your 3D printing jobs remotely with as little as a $250 investment in accessories and a tiny bit of interest in electronics and programming`,
    imgSrc: '/static/images/3dprinting.png',
    href: '',
  },
]

export default projectsData
