interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'A Family Calendar',
    description: `What if you could sync up calindars of your family and generate
    conflicts and reminders every week?`,
    imgSrc: '/static/images/calendarapp.png',
    href: '',
  },
  {
    title: 'Remote 3-d Printing',
    description: `A project to make 3-d printing affordable for hobbyists. Manage your 3-d printing jobs remotely with as minimum as $250 investment in accessories and a tiny bit of interest in electronics and programming`,
    imgSrc: '/static/images/3dprinting.png',
    href: '',
  },
]

export default projectsData
