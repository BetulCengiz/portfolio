import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // =============================
  // FRONTEND
  // =============================
  { name: "HTML/CSS", level: 90, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "React", level: 80, category: "frontend" },
  { name: "Tailwind CSS", level: 75, category: "frontend" },
  { name: "TypeScript", level: 70, category: "frontend" },

  // =============================
  // BACKEND
  // =============================
  { name: "Python", level: 95, category: "backend" },
  { name: "FastAPI", level: 85, category: "backend" },
  { name: "Node.js", level: 60, category: "backend" },
  { name: "Java", level: 65, category: "backend" },
  { name: "C / C#", level: 65, category: "backend" },
  { name: "PostgreSQL / MSSQL", level: 75, category: "backend" },
  { name: "PHP / PDO", level: 50, category: "backend" },

  // =============================
  // ARTIFICIAL INTELLIGENCE (AI)
  // =============================
  { name: "TensorFlow", level: 85, category: "ai" },
  { name: "PyTorch", level: 75, category: "ai" },
  { name: "Scikit-learn", level: 85, category: "ai" },
  { name: "Keras", level: 70, category: "ai" },

  { name: "Derin Öğrenme", level: 80, category: "ai" },
  { name: "Transfer Learning", level: 85, category: "ai" },
  { name: "Ses Analizi (Librosa)", level: 85, category: "ai" },

  // NLP
  { name: "Doğal Dil İşleme (NLP)", level: 80, category: "ai" },
  { name: "HuggingFace Transformers", level: 80, category: "ai" },
  { name: "LLM Fine-Tuning / Evaluation", level: 75, category: "ai" },

  // Generative AI & Agents
  { name: "Prompt Engineering", level: 90, category: "ai" },
  { name: "AI Agent Development", level: 80, category: "ai" },
  { name: "RAG (Retrieval-Augmented Generation)", level: 85, category: "ai" },
  { name: "LangChain", level: 80, category: "ai" },


  // =============================
  // TOOLS
  // =============================
  { name: "Git / GitHub", level: 85, category: "tools" },
  { name: "Docker", level: 75, category: "tools" },
  { name: "Jupyter Notebook", level: 100, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
  { name: "Streamlit", level: 85, category: "tools" },
];

const categories = ["all", "frontend", "backend", "ai", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Yeteneklerim <span className="text-primary"></span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="
              bg-card 
              p-6 
              rounded-lg 
              shadow-md 
              transition 
              duration-300 
              border 
              border-transparent
              hover:shadow-xl
              hover:scale-[1.03]
              hover:border-primary/50
              hover:bg-primary/5
              hover:-translate-y-1
            "
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
