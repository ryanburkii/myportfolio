export function SkillsSection() {
  const skills = {
    "System Administration": [
      { name: "Active Directory", level: 90 },
      { name: "NinjaRMM", level: 90 },
      { name: "Microsoft Intune", level: 85 },
      { name: "Linux Administration", level: 85 },
      { name: "Defender for Endpoint", level: 70 },
    ],
    "Languages & Frameworks": [
      { name: "HTML/CSS", level: 70 },
      { name: "Python", level: 40 },
      { name: "Next.js", level: 40 },
      { name: "LUA", level: 35 },
      { name: "Bash", level: 35 },
    ],
    /*"Tools & Others": [
      { name: "Git", level: 70 },
      { name: "Proxmox", level: 70 },
      { name: "Docker", level: 60 },
      { name: "AWS", level: 40 },
    ]*/
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 dark:text-white mb-4">
            Skills
          </h2>
          <div className="w-24 h-1 bg-violet-600 mx-auto mb-4"></div>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            I&apos;ve worked with a variety of technologies despite my young career.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 m-9">
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category} className="space-y-6">
              <h3 className="text-2xl font-semibold text-slate-800 dark:text-white text-center">
                {category}
              </h3>
              <div className="space-y-3">
                {skillList.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-700 dark:text-slate-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-slate-500 dark:text-slate-400 text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-violet-500 to-violet-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-slate-800 dark:text-white mb-8">
            Currently Learning
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["AWS", "Linux Administration", "Kubernetes", "Git", "Docker"].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-violet-100 dark:bg-violet-900 text-violet-800 dark:text-violet-200 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 