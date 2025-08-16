import Image from 'next/image';

export function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-violet-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-slate-800 dark:text-white">
              Who I Am
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              My name is Ryan, I have held a strong passion for technology for as long as I can remember.
              While my education background is in psychology and neuroscience, I ultimately decided I wanted to take a step back, and pursue
              what I always loved. I have been working in IT for ~2 years, and I am currently working on developing my skills in cloud infrastructure and cloud security.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              When I'm not working, I enjoy working on my homelab until something breaks, fishing, playing video games, and attending music festivals. Occasionally,
              I get the urge to spring into a new hobby, and spend way more money than I should on it.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-slate-800 dark:text-white">
              My Journey
            </h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-violet-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold">2025</span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 dark:text-white">
                    Technical Support Engineer
                  </h4>
                  <p className="text-slate-600 dark:text-slate-300">
                    My transition into cloud technologies
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-violet-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold">2024</span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 dark:text-white">
                    IT Help Desk Techinician
                  </h4>
                  <p className="text-slate-600 dark:text-slate-300">
                    My first step in the IT field
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-violet-400 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold">2019</span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800 dark:text-white">
                    Pursuing a Bachelor's in Psychology
                  </h4>
                  <p className="text-slate-600 dark:text-slate-300">
                    Started university at Florida State University
                  </p>
                </div>
              </div>
              {/* About Section Image */}
              <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/about.jpg"
                  alt="me"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 