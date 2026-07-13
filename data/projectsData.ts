interface Project {
  title: string
  description: string
  href?: string
  repo?: string
  imgSrc?: string

  category: string
  tags: string[]
  featured?: boolean
  status?: 'Active' | 'In Development' | 'Research'
}

const projectsData: Project[] = [
  {
    title: 'Requirements Analyzer',
    category: 'AI & Systems Engineering',
    featured: true,
    status: 'Active',

    description: `
Problem:
Engineering requirements are often reviewed subjectively, making it difficult to assess quality consistently across teams.

Solution:
Developed a requirements analysis platform that evaluates requirement quality using rule-based reasoning and generates a requirements satisfaction score. The tool analyzes completeness, ambiguity, consistency, conflicts, performance constraints, and timing requirements.

Impact:
Provides objective feedback on requirement quality and helps engineering teams identify issues earlier in the development lifecycle.
    `,

    tags: [
      'Systems Engineering',
      'Requirements',
      'Python',
      'Streamlit',
      'Automation'
    ],

    imgSrc: '/static/images/req_analyzer.png',

    href:
      'https://requirementsanalyzerml-ks.streamlit.app/',

    repo:
      'https://github.com/Kausi-hub/requirements-analyzer'
  },

  {
    title:
      'Semiconductor Wear Prediction in Inverters',

    category: 'Predictive Analytics',

    featured: true,

    status: 'Research',

    description: `
Problem:
Power semiconductor degradation due to thermal cycling is one of the leading causes of inverter reliability issues.

Solution:
Developed a predictive machine-learning model that estimates semiconductor wear based on thermal stress and operating conditions.

Impact:
Enables predictive maintenance decisions and reliability assessment before component failure occurs.
    `,

    tags: [
      'Machine Learning',
      'Reliability',
      'Power Electronics',
      'Predictive Analytics',
      'Python'
    ],

    imgSrc:
      '/static/images/predictwear.png',

    href:
      'https://eeweardetectml-ks.streamlit.app/',

    repo:
      'https://github.com/Kausi-hub/semiconductor-wear-prediction'
  },

  {
    title:
      'Motor Control Engineering Workbench',

    category: 'Controls & Automation',

    featured: true,

    status: 'Active',

    description: `
Problem:
Evaluating motor control algorithms often requires multiple disconnected tools and extensive manual analysis.

Solution:
Built a control engineering workbench supporting PID tuning, system simulation, frequency-domain analysis, requirements validation, and automated report generation.

Impact:
Allows rapid evaluation of control strategies and system stability while reducing engineering development time.
    `,

    tags: [
      'Control Systems',
      'PID',
      'Frequency Domain Analysis',
      'Python',
      'Streamlit'
    ],

    imgSrc:
      '/static/images/motorcontrols.png',

    href:
      'https://motorctrl-workbench.streamlit.app/',

    repo:
      'https://github.com/Kausi-hub/Motor_Ctrl'
  },
  {
    title:
      'Motor Control Workbench',

    category: 'Controls & Automation',

    featured: false,

    status: 'Active',

    description: `
Problem:
Evaluating motor control algorithms often requires multiple disconnected tools and extensive manual analysis.

Solution:
Built a simple workbench supporting PID tuning for speed and position control.

Impact:
Allows rapid evaluation of control tuning and system stability.
    `,

    tags: [
      'Control Systems',
      'PID',
      'Python',
      'Streamlit'
    ],

    imgSrc:
      '/static/images/motorcontrols.png',

    href:
      'https://motorctrl-workbench.streamlit.app/',

    repo:
      'https://github.com/Kausi-hub/simple_motor_control'
  },
  {
    title:
      'Test Data Anomaly Detector',

    category: 'Data Engineering',

    status: 'Active',

    description: `
Problem:
Comparing end-of-line (EOL) test results across multiple data sources is often a manual and time-consuming activity.

Solution:
Created an interactive dashboard that aligns CSV, TXT, and ASCII test results using time correlation and signal similarity scoring.

Impact:
Accelerates debugging, validation, and production issue investigation by automatically identifying anomalies and matching test runs.
    `,

    tags: [
      'Data Analytics',
      'Signal Processing',
      'Visualization',
      'Python',
      'Streamlit'
    ],

    imgSrc:
      '/static/images/EOLdashboard.png',

    href:
      'https://anomalydetector-mga5bbfxtuyjc5m7kzhcw2.streamlit.app/',

    repo:
      'https://github.com/Kausi-hub/eol-anomaly-detector'
  },

  {
    title:
      'Family Calendar Assistant',

    category: 'Productivity Tools',

    status: 'In Development',

    description: `
Problem:
Coordinating schedules across multiple family members can be difficult and often leads to conflicts.

Solution:
A shared scheduling platform that synchronizes family calendars and automatically identifies conflicts, reminders, and upcoming events.

Impact:
Improves household planning and communication by providing a centralized family scheduling assistant.
    `,

    tags: [
      'Productivity',
      'Scheduling',
      'Calendar Integration',
      'Automation'
    ],

    imgSrc:
      '/static/images/calendarapp.png',

    href: '',

    repo:
      ''
  }
]

export default projectsData