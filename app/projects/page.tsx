import Link from 'next/link'
import projectsData from '@/data/projectsData'

const categories = [
  'AI & Systems Engineering',
  'Controls & Automation',
  'Predictive Analytics',
  'Data Engineering',
  'Productivity Tools',
]

export default function ProjectsPage() {
  const featuredProjects = projectsData.filter((project) => project.featured)

  return (
    <div className="mx-auto flex max-w-7xl gap-10 px-4 py-8">
      <aside className="sticky top-24 hidden h-fit w-64 lg:block">
        <h2 className="mb-4 text-xl font-bold">Projects</h2>

        <nav>
          <ul className="space-y-2">
            <li>
              <a
                href="#featured"
                className="block rounded px-2 py-1 text-gray-600 hover:bg-gray-100 hover:text-blue-600 dark:hover:bg-gray-800"
              >
                Featured Projects
              </a>
            </li>

            {categories.map((category) => {
              const sectionId = category.toLowerCase().replace(/\s+/g, '-')

              return (
                <li key={category}>
                  <a
                    href={`#${sectionId}`}
                    className="block rounded px-2 py-1 text-gray-600 hover:bg-gray-100 hover:text-blue-600 dark:hover:bg-gray-800"
                  >
                    {category}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>
      </aside>

      <main className="flex-1">
        <h1 className="mb-10 text-5xl font-bold">Projects</h1>
      </main>
    </div>
  )
}
