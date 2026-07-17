interface Project {
  title: string
  highlight: string
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

  highlight:
    'Requirements quality assessment Framework.',

  description: `
Overview:
Engineering requirements are frequently reviewed through manual inspection and subjective interpretation. This often leads to inconsistencies in requirement quality and late discovery of specification issues.

Problem:
Organizations struggle to objectively assess requirement maturity, identify ambiguous language, detect conflicts between requirements, and evaluate completeness before implementation begins.

Solution:
Developed an intelligent requirements analysis platform using rule-based reasoning and automated evaluation techniques. The system examines:
• Requirement completeness
• Ambiguous terminology
• Consistency and conflicts
• Timing constraints
• Performance requirements
• Verification readiness

The platform generates a quantitative Requirements Satisfaction Score and detailed feedback reports for engineering teams.

Impact:
• Standardized requirements reviews
• Reduced manual review effort
• Earlier detection of specification issues
• Improved systems engineering quality
• Better traceability and requirements governance
  `,

  tags: [
    'Systems Engineering',
    'Requirements Engineering',
    'Python',
    'Streamlit',
    'Automation',
    'AI'
  ],

  imgSrc: '/static/images/req_analyzer.png',
  href: 'https://requirementsanalyzerml-ks.streamlit.app/',
  repo: 'https://github.com/Kausi-hub/requirements-analyzer'
},

{
  title: 'Autonomous Systems Release Readiness',
  category: 'Validation & Autonomous systems',
  featured: true,
  status: 'Research',

  highlight:
    'Platform for validating release readiness.',

  description: `
Overview:
An autonomy validation framework that ingests ROS2 bag data, stores experiment results, computes KPIs, performs statistical significance testing.

Impact:
• ingests ROS2 bag data, stores experiment results
• applies release-gate safety logic
• visualizes results through an executive validation dashboard
  `,

  tags: [
    'AV',
    'Validation Framework',
    'Simulation',
    'Release Management',
    'Python, SQL, ROS, Streamlit'
  ],

  imgSrc: '',
  href: 'https://autonomousdrivingmetrics-ks.streamlit.app/',
  repo: 'https://github.com/Kausi-hub/Autonomous_Driving_Metrics.git'
},
{
  title: 'EV Thermal Management Workbench',
  category: 'Controls & Automation',
  featured: true,
  status: 'Research',

  highlight:
    'Platform for developing and validating battery thermal strategies.',

  description: `
Overview:
Battery temperature management directly impacts EV performance, safety, charging speed, and battery life.

Problem:
Developing thermal management software often requires expensive validation resources and long development cycles.

Solution:
Created a simulation environment containing:
• Battery thermal models
• Coolant flow dynamics
• Pump control strategies
• Thermal fault detection
• Controller evaluation capabilities

The platform enables rapid experimentation and algorithm development before hardware integration.

Impact:
• Accelerates controls development
• Reduces prototyping costs
• Enables earlier validation
• Supports model-based design workflows
  `,

  tags: [
    'EV',
    'Thermal Management',
    'Simulation',
    'Control Systems',
    'C++'
  ],

  imgSrc: '/static/images/motorcontrols.png',
  href: 'https://evbatterythermalmanagementcontroller-dash.streamlit.app/',
  repo: 'https://github.com/Kausi-hub/EV_Battery_Thermal_Management_Controller.git'
},
{
  title: 'Semiconductor Wear Prediction in Inverters',
  category: 'Predictive Analytics',
  featured: false,
  status: 'Research',

  highlight:
    'Machine learning model that predicts power semiconductor degradation.',

  description: `
Overview:
Power semiconductor devices experience degradation due to thermal cycling and operational stress.

Problem:
Traditional maintenance strategies often discover degradation only after substantial performance deterioration has already occurred.

Solution:
Developed a predictive analytics platform that:
• Processes thermal cycling profiles
• Evaluates operating conditions
• Estimates wear accumulation
• Predicts remaining useful life
• Supports maintenance planning

Impact:
• Increased reliability visibility
• Earlier fault prediction
• Reduced unexpected failures
• Improved maintenance planning
  `,

  tags: [
    'Machine Learning',
    'Predictive Maintenance',
    'Reliability Engineering',
    'Power Electronics',
    'Python'
  ],

  imgSrc: '/static/images/predictwear.png',
  href: 'https://eeweardetectml-ks.streamlit.app/',
  repo: 'https://github.com/Kausi-hub/semiconductor-wear-prediction'
},

{
  title: 'Motor Control Engineering Workbench',
  category: 'Controls & Automation',
  featured: true,
  status: 'Active',

  highlight:
    'End-to-end motor control engineering environment.',

  description: `
Overview:
Motor control development often requires multiple independent software tools, creating inefficiencies during algorithm development and validation.

Problem:
Engineers spend significant time moving between simulation environments, analysis tools, and reporting systems.

Solution:
Developed an integrated engineering workbench that provides:
• Motor system modeling
• PID tuning
• Stability analysis
• Frequency-domain analysis
• Requirements validation
• Automated documentation

Impact:
• Faster controls development
• Improved design iteration speed
• Reduced analysis effort
• Better engineering productivity
  `,

  tags: [
    'Control Systems',
    'PID',
    'Bode Analysis',
    'Simulation',
    'Python',
    'Streamlit'
  ],

  imgSrc: '/static/images/motorcontrols.png',
  href: 'https://motorctrl-workbench.streamlit.app/',
  repo: 'https://github.com/Kausi-hub/Motor_Ctrl'
},

{
  title: 'Motor Control Workbench',
  category: 'Controls & Automation',
  featured: false,
  status: 'Active',

  highlight:
    'End-to-end motor control engineering environment.',

  description: `
Overview:
Motor control development often requires multiple independent software tools, creating inefficiencies during algorithm development and validation.

Problem:
Engineers spend significant time moving between simulation environments, analysis tools, and reporting systems.

Solution:
Developed an engineering workbench that provides motor system PID tuning

Impact: Faster controls development and Improved design iteration speed
  `,

  tags: [
    'Control Systems',
    'PID',
    'Simulation',
    'Python',
    'Streamlit'
  ],

  imgSrc: '/static/images/motorcontrols.png',
  href: 'https://motorctrl-workbench.streamlit.app/',
  repo: 'https://github.com/Kausi-hub/simple_motor_control'
},

{
  title: 'Test Data Anomaly Detector',
  category: 'Data Engineering',
  featured: false,
  status: 'Active',

  highlight:
    'Automated test-data correlation platform.',

  description: `
Overview:
Manufacturing investigations often require engineers to manually compare results from several disconnected test files.

Problem:
Correlating EOL datasets across formats is labor-intensive and prone to missed anomalies.

Solution:
Built a data engineering platform that:
• Imports CSV, TXT, and ASCII formats
• Aligns signals through timestamp correlation
• Calculates similarity scores
• Detects anomalies automatically
• Visualizes matched data streams

Impact:
• Faster root-cause analysis
• Improved debugging efficiency
• Reduced manual comparison effort
• Accelerated production issue investigation
  `,

  tags: [
    'Data Engineering',
    'Signal Processing',
    'Analytics',
    'Python',
    'Streamlit'
  ],

  imgSrc: '/static/images/EOLdashboard.png',
  href: 'https://anomalydetector-mga5bbfxtuyjc5m7kzhcw2.streamlit.app/',
  repo: 'https://github.com/Kausi-hub/eol-anomaly-detector'
},

{
  title: 'Family Calendar Assistant',
  category: 'Productivity Tools',
  status: 'In Development',

  highlight:
    'Shared family planning assistant that automatically coordinates schedules, identifies conflicts, and manages reminders.',

  description: `
Overview:
Family schedule management is frequently fragmented across multiple personal calendars and communication channels.

Problem:
Conflicting schedules and missed events create planning challenges for households.

Solution:
Developing a scheduling platform capable of:
• Shared calendar synchronization
• Conflict identification
• Automated reminders
• Event planning assistance
• Household coordination workflows

Impact:
• Improved family organization
• Better communication
• Reduced scheduling conflicts
• Centralized planning experience
  `,

  tags: [
    'Productivity',
    'Scheduling',
    'Calendar Integration',
    'Automation'
  ],

  imgSrc: '/static/images/calendarapp.png'
}
]

export default projectsData