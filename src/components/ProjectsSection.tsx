"use client";

export function ProjectsSection() {
  const projects = [
    {
      title: "Homelab",
      description:
        "My mini server stack consisting of 2 Proxmox servers, a small Unifi stack, and a custom built NAS. Current services: Plex, NextCloud, game servers, and more.",
      image: "/api/placeholder/400/250",
      github: "https://github.com/ryanburkii/homelab",
    },
    {
      title: "Workout App",
      description:
        "A rough mockup of a competitive workout tracker. I plan to implement a social aspect, such as a leaderboard for sharing statistics with friends.",
      image: "/api/placeholder/400/250",
      github: "https://github.com/ryanburkii/workouttrackerapp",
    },
    {
      title: "Portfolio Website",
      description:
        "This website! I plan to expand this website with more information about my projects and to showcase any future rabbit holes I fall down.",
      image: "/api/placeholder/400/250",
      github: "https://github.com/ryanburkii/myportfolio",
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 dark:text-white mb-4">
            Current Projects
          </h2>
          <div className="w-24 h-1 bg-violet-600 mx-auto mb-4"></div>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Here are some of the projects I&apos;m currently working on.
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 bg-gradient-to-br from-violet-400 to-purple-500 relative">
                <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold">
                  {project.title}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-violet-600 text-white text-center py-2 rounded-lg hover:bg-violet-700 transition-colors"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/ryanburkii"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-slate-800 dark:bg-slate-700 text-white px-8 py-3 rounded-lg hover:bg-slate-700 dark:hover:bg-slate-600 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
}
