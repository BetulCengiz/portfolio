import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Merhaba, ben</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Betül
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Cengiz
            </span>
          </h1>

          <div className="grid grid-cols-1 gap-6">
            <div className="bg-card/60 dark:bg-card/40 p-8 rounded-lg shadow-xs backdrop-blur-sm card-hover">
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                Modern teknolojilerle mükemmel web deneyimleri yaratırken, aynı zamanda Yapay Zeka ve Makine Öğrenmesi alanlarındaki uzmanlığımı da projelerime entegre ediyorum.
                Ön uç geliştirme konusunda uzmanlaşarak, arayüz tasarımını güçlü AI yeteneklerim ve model optimizasyonu deneyimimle birleştiriyor, böylece hem estetik açıdan güzel hem de yüksek düzeyde işlevsel, akıllı kullanıcı arayüzleri oluşturuyorum.
              </p>
            </div>
          </div>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              İncelemek için
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Kaydır </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};