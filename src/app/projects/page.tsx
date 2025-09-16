const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio site built with Next.js and Tailwind CSS.",
    github: "https://github.com/pantelisxiourouppas09/my-portfolio",
    demo: "https://my-portfolio.vercel.app",
  },
  {
    title: "Sustainability Dashboard",
    description: "A mock web app to visualize building sustainability scores.",
    github: "#",
    demo: "#",
  },
  {
    title: "WCAG-Accessible Form",
    description: "A fully accessible contact form built with React.",
    github: "#",
    demo: "#",
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen p-8 bg-white">
      <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">My Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="border rounded-lg shadow-sm p-6 bg-gray-50 hover:shadow-md transition">
            <h2 className="text-xl font-semibold text-gray-800">{project.title}</h2>
            <p className="mt-2 text-gray-600">{project.description}</p>
            <div className="mt-4 flex gap-4">
              <a
                href={project.github}
                target="_blank"
                className="text-sm text-blue-600 hover:underline"
              >
                GitHub
              </a>
              {project.demo && project.demo !== "#" && (
                <a
                  href={project.demo}
                  target="_blank"
                  className="text-sm text-green-600 hover:underline"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
