import { Link, useParams, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeftIcon,
  GithubIcon,
  ExternalLinkIcon,
  CalendarIcon,
  UsersIcon,
  StarIcon,
} from "lucide-react";

interface Project {
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  gradient: string;
  githubUrl: string;
  liveUrl: string;
  date: string;
  team: string;
  status: string;
  features: string[];
}

const projectsData: Record<string, Project> = {
  "tms-interaction": {
    title: "TMS : Interaction Opérateur-Machine",
    description:
      "Analyse des mouvements opérateur-machine à partir de vidéos et extraction de données critiques.",
    longDescription:
      "Dans le cadre d'une analyse TMS (Troubles Musculo-Squelettiques), ce projet vise à fournir un outil interactif pour identifier les postures critiques d’un opérateur en action. Grâce à un traitement image par image, les angles de différentes articulations sont extraits automatiquement. Les données sont ensuite synchronisées avec la vidéo : l’utilisateur peut visualiser l’évolution des angles dans un graphique dynamique, consulter les valeurs maximales dans un tableau, et exporter ces informations pour analyse ou archivage. L’interface est ergonomique, responsive, et conçue pour une utilisation fluide dans un contexte industriel ou académique.",
    image: "../../public/TMSProjet.png",
    tags: ["TypeScript", "React", "Vite", "TailwindCSS", "Chart.js", "HTML5 Video", "React-PDF"],
    gradient: "from-yellow-400 to-orange-500",
    githubUrl: "https://github.com/lil-57/tms-interaction",
    liveUrl: "https://tms-interaction.vercel.app/",  
    date: "2025",
    team: "Solo",
    status: "Prototype",
    features: [
      "Synchronisation vidéo et graphique",
      "Détection d’angles articulaires",
      "Affichage dynamique des données",
      "Tableau des postures critiques",
      "Exportation des résultats en PDF",
    ],
  },


  "site-authentification": {
    title: "Authentification : Site d’inscription et de connexion sécurisé",
    description:
      "Système complet d’authentification avec JWT, cookies httpOnly, validation UX et espace utilisateur.",
    longDescription:
      "Ce projet propose un site web complet d’authentification, conçu pour garantir la sécurité des utilisateurs et offrir une expérience fluide. Il inclut une inscription et une connexion par mot de passe ou lien magique, un système de tokens JWT (access + refresh) stockés dans des cookies httpOnly, ainsi qu’un mécanisme de renouvellement automatique du token. Une interface utilisateur ergonomique permet également la modification du profil, la réinitialisation du mot de passe via un lien sécurisé, et un blocage temporaire après plusieurs tentatives échouées. L’ensemble a été développé avec une attention particulière à la sécurité, à la clarté du code, et à la réutilisabilité des composants.",
    image: "../../public/AuthProjet.jpg",
    tags: ["React", "Vite", "TypeScript", "TailwindCSS", "NestJS", "PostgreSQL", "JWT", "EmailJS"],
    gradient: "from-blue-500 to-indigo-600",
    githubUrl: "https://github.com/lil-57/webAuth",
    liveUrl: "https://webauth-vh2i.onrender.com",
    date: "2025",
    team: "Solo",
    status: "Fonctionnel",
    features: [
      "Inscription et connexion (mot de passe ou Magic Link)",
      "Gestion sécurisée des JWT (access/refresh) via cookies httpOnly",
      "Blocage temporaire après plusieurs échecs de connexion",
      "Formulaires réactifs avec validation dynamique (Zod, debounce)",
      "Réinitialisation et création de mot de passe par lien sécurisé",
      "Modification du profil et du mot de passe",
      "Envoi d’emails automatisés (EmailJS ou Nodemailer)",
    ],
  },
  

  // Ajoute les autres projets ici...
};

export default function ProjectPage() {
  const { slug } = useParams<{ slug: string }>();

  if (!slug || !projectsData[slug]) {
    return <Navigate to="/" replace />;
  }

  const project = projectsData[slug];

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />

      <nav className="relative z-50 p-6">
        <div className="max-w-7xl mx-auto">
          <Link to="/">
            <Button
              variant="ghost"
              className="text-white hover:text-purple-400"
            >
              <ArrowLeftIcon className="h-4 w-4 mr-2" />
              Retour au portfolio
            </Button>
          </Link>
        </div>
      </nav>

      <section className="relative z-10 px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold">
                  <span
                    className={`bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}
                  >
                    {project.title}
                  </span>
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed">
                  {project.longDescription}
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {project.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="bg-white/10 text-white border-white/20"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="space-y-1">
                  <CalendarIcon className="h-5 w-5 mx-auto text-purple-400" />
                  <p className="text-sm text-gray-400">Date</p>
                  <p className="text-white font-medium">{project.date}</p>
                </div>
                <div className="space-y-1">
                  <UsersIcon className="h-5 w-5 mx-auto text-purple-400" />
                  <p className="text-sm text-gray-400">Équipe</p>
                  <p className="text-white font-medium">{project.team}</p>
                </div>
                <div className="space-y-1">
                  <StarIcon className="h-5 w-5 mx-auto text-purple-400" />
                  <p className="text-sm text-gray-400">Status</p>
                  <p className="text-white font-medium">{project.status}</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div
                className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-20 rounded-2xl blur-xl`}
              />
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="relative z-10 w-full h-auto rounded-2xl border border-white/10"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="group bg-white/5 border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <GithubIcon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-white">Code Source</CardTitle>
                <CardDescription className="text-gray-300">
                  Explorez le code sur GitHub
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0">
                    Voir sur GitHub
                    <ExternalLinkIcon className="h-4 w-4 ml-2" />
                  </Button>
                </a>
              </CardContent>
            </Card>

            <Card className="group bg-white/5 border-white/10 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <ExternalLinkIcon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-white">Démo Live</CardTitle>
                <CardDescription className="text-gray-300">
                  Testez l'application en ligne
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white border-0">
                    Voir la démo
                    <ExternalLinkIcon className="h-4 w-4 ml-2" />
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Fonctionnalités Clés
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {project.features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-white/5 rounded-lg border border-white/10"
              >
                <div
                  className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.gradient}`}
                />
                <span className="text-gray-300">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="relative z-10 px-6 py-12 border-t border-white/10">
        <nav className="relative z-50 p-6">
          <div className="max-w-7xl mx-auto text-center">
            <Link to="/">
              <Button
                variant="ghost"
                className="text-white hover:text-purple-400"
              >
                <ArrowLeftIcon className="h-4 w-4 mr-2" />
                Retour au portfolio
              </Button>
            </Link>
          </div>
        </nav>
      </footer>
    </div>
  );
}
