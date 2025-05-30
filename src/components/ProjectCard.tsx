import { Link } from "react-router-dom"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLinkIcon } from "lucide-react"

export default function ProjectCard({ project }: { project: any }) {
  return (
    <Link to={`/projects/${project.id}`}>
      <Card className="group bg-white/5 border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 cursor-pointer overflow-hidden min-h-[500px] flex flex-col justify-between">
        <div className="relative flex flex-col justify-between h-full">
          {/* Overlay gradient hover */}
          <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />

          {/* Header */}
          <CardHeader className="relative z-10">
            <div className="flex justify-between items-start mb-4">
              <CardTitle className="text-xl text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                {project.title}
              </CardTitle>
              <ExternalLinkIcon className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
            </div>
            <CardDescription className="text-gray-300 group-hover:text-white transition-colors min-h-[60px]">
              {project.description}
            </CardDescription>
          </CardHeader>

          {/* Image + tags */}
          <CardContent className="relative z-10 mt-auto">
            <div className="relative mb-6 rounded-lg overflow-hidden">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
            </div>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag: string) => (
                <Badge key={tag} variant="secondary" className="bg-white/10 text-white border-white/20">
                  {tag}
                </Badge>
              ))}
            </div>
          </CardContent>
        </div>
      </Card>
    </Link>
  )
}
