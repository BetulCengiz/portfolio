import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Emotion Analysis and Classification from Albanian Speech Data",
    description: "Bu proje Arnavutça konuşma verilerinden mel spektrogramları elde ederek duyguları sınıflandırmayı amaçlamaktadır.",
    image: "/projects/project1.png",
    tags: ["Python", "Librosa", "ResNET50","Xception"],
    githubUrl: "https://github.com/BetulCengiz/Emotion-Analysis-from-Albanian-Speech-Data",
  },
  {
    id: 2,
    title: "Multi-Document Agent System with LLaMA and Mistral",
    description:
      "Bu proje, gelişmiş dil modelleri, vektör depolamaları ve belge özetleme tekniklerini kullanarak çoklu belge aracı sistemini uygular.",
    image: "/projects/project2.png",
    tags: ["Langchain", "LLama", "ChromaDB", "Mistral","Python"],
    demoUrl: "#",
    githubUrl: "https://github.com/BetulCengiz/multidocumentagenticrag",
  },
  {
    id: 3,
    title: "Tarot AI",
    description:
      "Yapay zeka destekli tarot falı uygulaması. Kullanıcıların sorularına yanıtlar sunar ve tarot kartlarıyla rehberlik sağlar. ",
    image: "/projects/project3.png",
    tags: ["React", "Next.js", "Tailwind CSS","OpenAI","TypeScript"],
    demoUrl: "https://readingtarotai.netlify.app/",
    githubUrl: "https://github.com/BetulCengiz/tarotAI",
  },
  {
    id: 4,
    title: "Sanat Galerisi Web Sitesi",
    description:
      "Bu proje, yapay zeka araçları kullanılarak üretilen görsel ve metin içeriklerini sergilemek için oluşturulmuş bir web sitesidir. Kullanıcılar, sanat eserlerini görüntüleyebilir.",
    image: "/projects/project4.png",
    tags: ["HTML", "CSS", "AI Tools" ],
    demoUrl: "#",
    githubUrl: "https://github.com/BetulCengiz/GaleriWebSitesi",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Öne Çıkan <span className="text-primary"> Projeler </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          İşte bazı projelerim. Daha fazlası için GitHub sayfama göz atabilirsiniz.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto max-h-40 md:max-h-44 lg:max-h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/BetulCengiz"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};