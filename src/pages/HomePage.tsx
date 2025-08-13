import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { GithubIcon, LinkedinIcon, MailIcon, CodeIcon, ZapIcon, CpuIcon } from "lucide-react"
import GradientText from "@/components/GradientText"
import ProjectCard from "@/components/ProjectCard"
import { TechBadge } from "@/components/TechBadge"

const projects = [

  {
    id: "tms-interaction",
    title: "TMS : Interaction Opérateur-Machine",
    description: "Analyse ergonomique de mouvements opérateur à partir de vidéos, avec suivi des angles et export PDF des résultats",
    image: "/TMSProjet.png",  
    tags: ["TypeScript", "React", "Vite", "TailwindCSS", "Chart.js", "HTML5 Video", "React-PDF"],
    gradient: "from-yellow-400 to-orange-500",
  },

  {
    id: "site-authentification",
    title: "Site d’authentification sécurisé",
    description: "Inscription, connexion (mot de passe ou lien magique), gestion des tokens JWT, blocage temporaire, et espace utilisateur.",
    image: "/AuthProjet.jpg",
    tags: ["React", "Vite", "TypeScript", "TailwindCSS", "NestJS", "PostgreSQL", "JWT", "EmailJS"],
    gradient: "from-blue-500 to-indigo-600",
  }
  
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Arrière-plan animé */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />

      {/* Header */}
      <nav className="relative z-50 p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">
            <GradientText>Portfolio</GradientText>
          </div>
          <div className="flex gap-4">
  {[
    { Icon: GithubIcon, url: "https://github.com/lil-57" },
    { Icon: LinkedinIcon, url: "https://www.linkedin.com/in/lilian-morinon-379600341/" },
    { Icon: MailIcon, url: "mailto:lilianmorinon10@gmail.com" },
  ].map(({ Icon, url }, idx) => (
    <a
      key={idx}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Button variant="ghost" size="icon" className="text-white hover:text-purple-400">
        <Icon className="h-5 w-5" />
      </Button>
    </a>
  ))}
</div>

        </div>
      </nav>

      {/* Hero section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-purple-400">
                <CpuIcon className="h-5 w-5" />
                <span className="text-sm font-medium">Développeur Full-Stack</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <GradientText>Lilian</GradientText><br />
                <GradientText>MORINON</GradientText>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed max-w-lg">Je suis étudiant en informatique, passionné par le développement web. Ce site présente mes différents projets réalisés pendant mes études ou sur mon temps libre. J’aime apprendre de nouvelles technologies et créer des applications utiles, modernes et bien structurées.</p>
            </div>

            <div className="flex flex-wrap gap-3">
              {["Full-Stack", "React", "NestJS", "TypeScript", "Docker", "PostgreSQL"].map((tech) => (
                <TechBadge key={tech} label={tech} />
              ))}
            </div>

            <div className="flex gap-4">
            <Button
  className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white border-0"
  onClick={() => {
    const section = document.getElementById("projets");
    section?.scrollIntoView({ behavior: "smooth" });
  }}
>
  <CodeIcon className="h-4 w-4 mr-2" />
  Voir mes projets
</Button>

              <Button className="bg-white text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 border border-white hover:bg-white/10 hover:text-white transition">
                <a href="/CVajour.pdf" download="CV_MORINON_LILIAN.pdf" >
  Télécharger mon CV
</a>
              </Button>
            </div>
          </div>

          <div className="relative w-80 h-80 mx-auto">
  {/* Cercles animés */}
  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 animate-pulse" />
  <div className="absolute inset-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 animate-pulse delay-1000" />
  <div className="absolute inset-8 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 animate-pulse delay-2000" />

  {/* Photo */}
  <div className="absolute inset-12 rounded-full overflow-hidden border-2 border-white/20">
    <img
      src="/Lilian.png"
      alt="Profile"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Icônes flottantes */}
  <div className="absolute -top-4 -right-4 p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-bounce">
    <ZapIcon className="h-6 w-6 text-white" />
  </div>
  <div className="absolute -bottom-4 -left-4 p-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full animate-bounce delay-500">
    <CodeIcon className="h-6 w-6 text-white" />
  </div>
</div>

        </div>
      </section>

      {/* Section projets */}
      <section id="projets" className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <GradientText>Mes Projets</GradientText>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Découvrez mes dernières créations
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <footer className="relative z-10 px-6 py-12 border-t border-white/10 text-center">
        <p className="text-gray-400">© 2024 Portfolio. Créé avec passion.</p>
      </footer>
    </div>
  )
}
