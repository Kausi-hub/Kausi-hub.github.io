import Link from 'next/link'
import projectsData from '@/data/projectsData'

interface Project {
  title: string
  description: string
  href?: string
  repo?: string
  imgSrc?: string
  category: string
  tags: string[]
  featured?: boolean
  status?: 'Active' | 'Research' | 'In Development'
}

const categories = [
  'AI & Systems Engineering',
  'Controls & Automation',
  'Predictive Analytics',
  'Data Engineering',
  'Productivity Tools',
]

export default function ProjectsPage() {
  const featuredProjects = (projectsData as Project[]).filter(
    (project) => project.featured
  )

  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <div className="flex gap-10">
        <aside className="sticky top-24 hidden h-fit w-72 shrink-0 lg:block">
          <div className="rounded-xl border border-gray-200 p-5 dark:border-gray-700">
            <h2 className="mb-4 text-xl font-bold">Projects</h2>
            <nav>
              <ul className="space-y-2">
                <li>
                  <a href="#featured" className="block rounded px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800">
                    ⭐ Featured Projects
                  </a>
                </li>
                {categories.map((category) => {
                  const sectionId = category.toLowerCase().replace(/\s+/g, '-')
                  return (
                    <li key={category}>
                      <a
                        href={`#${sectionId}`}
                        className="block rounded px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800"
                      >
                        {category}
                      </a>
                    </li>
                  )
                })}
              </ul>
            </nav>
          </div>
        </aside>

        <main className="min-w-0 flex-1">
          <header className="mb-14">
            <h1 className="mb-4 text-5xl font-bold tracking-tight">
              Engineering Projects
            </h1>
            <p className="max-w-4xl text-lg text-gray-600 dark:text-gray-300">
              A collection of systems engineering, controls, machine learning,
              reliability, data analytics and automation projects.
            </p>
          </header>

          <section id="featured" className="mb-20">
            <h2 className="mb-8 text-3xl font-bold">Featured Projects</h2>
            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </section>

          {categories.map((category) => {
            const sectionId = category.toLowerCase().replace(/\s+/g, '-')
            const projects = (projectsData as Project[]).filter(
              (project) => project.category === category
            )

            if (projects.length === 0) return null

            return (
              <section key={category} id={sectionId} className="mb-20">
                <h2 className="mb-8 text-3xl font-bold">{category}</h2>
                <div className="space-y-8">
                  {projects.map((project) => (
                    <ProjectCard key={project.title} project={project} />
                  ))}
                </div>
              </section>
            )
          })}
        </main>
      </div>
    </div>
  )
}

type CardProps = {
  project: Project
}

function ProjectCard({ project }: CardProps) {
  const statusStyles: Record<string, string> = {
    Active: 'bg-green-100 text-green-700',
    Research: 'bg-purple-100 text-purple-700',
    'In Development': 'bg-yellow-100 text-yellow-700',
  }

  return (
    <article className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-lg dark:border-gray-700 dark:bg-gray-900">
      {project.imgSrc && (
        <img
          src={project.imgSrc}
          alt={project.title}
          className="h-64 w-full object-cover"
        />
      )}

      <div className="p-6">
        <div className="mb-4 flex flex-wrap items-center gap-3">
          <h3 className="text-2xl font-bold">{project.title}</h3>

          {project.status && (
            <span
              className={`rounded-full px-3 py-1 text-xs font-semibold ${statusStyles[project.status]}`}
            >
              {project.status}
            </span>
          )}
        </div>

        <div className="mb-4">
          <span className="rounded bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
            {project.category}
          </span>
        </div>

        <p className="mb-6 whitespace-pre-line leading-7 text-gray-600 dark:text-gray-300">
          {project.description}
        </p>

        {project.tags?.length > 0 && (
          <div className="mb-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="flex flex-wrap gap-3">
          {project.href && (
            <Link
              href={project.href}
              target="_blank"
              className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
            >
              Live Demo
            </Link>
          )}

          {project.repo && (
            <Link
              href={project.repo}
              target="_blank"
              className="rounded-md border border-gray-300 px-4 py-2 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-800"
            >
              GitHub
            </Link>
          )}
        </div>
      </div>
    </article>
  )
}