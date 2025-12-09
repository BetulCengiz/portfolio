import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span>Hakkımda</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-12 items-center">
          <div>
            <div className="bg-card/60 dark:bg-card/40 p-6 rounded-lg shadow-xs backdrop-blur-sm">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold">
                  AI & Web Development
                </h3>

                <p className="text-muted-foreground">
                  Makine Öğrenmesi, Derin Öğrenme ve Web Geliştirme alanlarında uzmanlaşan bir Bilgisayar Mühendisiyim.
                  Yapay zeka teknolojilerinin gerçek dünyadaki problemleri nasıl çözdüğüne ve insan–makine etkileşimini nasıl dönüştürdüğüne tutkuyla bağlıyım.
                </p>

                <p className="text-muted-foreground">
                  Hem teknik hem de yaratıcı yönümü geliştirirken; yazılım mühendisliği, veri işleme, model geliştirme, değerlendirme, etkileşimli web arayüzleri ve AI ajan sistemleri gibi geniş bir yelpazede çalışmaya devam ediyorum.
                  Hedefim, üretken yapay zeka teknolojilerinin geleceğine yön verecek projelerde aktif rol almak ve bu alanda hem sektöre hem akademiye değer katan işler üretmek.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                  <a href="#contact" className="cosmic-button">
                    İletişime Geç
                  </a>

                  <button
                    type="button"
                    onClick={(e) => {
                      const url = "Betul_Cengiz_CV.pdf";
                      window.open(url, "_blank", "noopener,noreferrer");
                      const a = document.createElement("a");
                      a.href = url;
                      a.download = "Betul_Cengiz_CV.pdf";
                      document.body.appendChild(a);
                      a.click();
                      a.remove();
                    }}
                    className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                    aria-label="Betül Cengiz CV indir"
                  >
                    CV İndir
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Web Development</h4>
                  <p className="text-muted-foreground">
                    Modern teknolojilerle hızlı, güvenilir ve tüm cihazlara uyumlu web arayüzleri geliştiriyorum. React, Tailwind ve API odaklı mimarilerle performanslı yapılar kuruyorum.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Makine Öğrenimi & Derin Öğrenme
                  </h4>
                  <p className="text-muted-foreground">
                    Gerçek dünya verileriyle çalışan CNN, RNN ve Transformer tabanlı modeller geliştiriyorum. %85 doğruluk oranına ulaşan duygu analizi modelim akademik olarak sunulmuş ve makale olarak yayımlanmıştır.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Prompt Engineering</h4>
                  <p className="text-muted-foreground">
                    LLM yanıt doğruluğunu artırmak için kurallı promptlar, çok adımlı görev zincirleri ve ajan tabanlı akışlar tasarlıyorum. Kod değerlendirme ve RLHF süreçlerinde optimizasyon deneyimine sahibim.</p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> RAG (Retrieval-Augmented Generation) Sistemleri</h4>
                  <p className="text-muted-foreground">
                    LangChain, vektör arama ve çoklu belge işleme teknikleriyle ölçeklenebilir RAG sistemleri tasarlıyorum. Hukuki metinler için geliştirdiğim RAG pipeline’ı yüksek doğrulukla sorgu–cevap üretmektedir.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI/UX Design</h4>
                  <p className="text-muted-foreground">
                    Kullanıcı ihtiyaçlarına odaklanarak sezgisel, akıcı ve minimal arayüz tasarımları yapıyorum. Web uygulamalarımda hem kullanışlılığı hem hızı önceliklendiriyorum.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Veri Bilimi</h4>
                  <p className="text-muted-foreground">
                    Veri temizleme, etiketleme ve işleme süreçlerinde uzmanım. AI eğitim verisi hazırlama, Pandas–NumPy ile veri pipeline’ları kurma ve model performansını artıracak veri iyileştirmeleri yapıyorum.
                  </p>
                </div>
              </div>
            </div>
            {/* AI Agents */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">AI Agents</h4>
                  <p className="text-muted-foreground">
                    Gerçek dünya kod inceleme ve hata giderme görevleri için tasarlanmış yapay zeka
                    ajanları geliştiriyor ve optimize ediyorum. Çok adımlı düşünme, araç kullanımı ve
                    görev planlama akışlarında deneyimliyim.
                  </p>
                </div>
              </div>
            </div>

            {/* Code Evaluation & RLHF */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Code Evaluation & RLHF</h4>
                  <p className="text-muted-foreground">
                    Python, JavaScript, SQL ve Java gibi dillerde LLM çıktılarının doğruluk analizini
                    yapıyor, hata tespiti ve düzeltme örnekleriyle model kalitesini artırıyorum.
                    RLHF süreçlerinde aktif olarak rol alıyorum.
                  </p>
                </div>
              </div>
            </div>

            {/* Audio Processing */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Audio Processing & Emotion Recognition</h4>
                  <p className="text-muted-foreground">
                    Mel spektrogram, MFCC ve ses temizleme teknikleriyle duygu tanıma modelleri
                    geliştiriyorum. %85 doğruluk oranına ulaşan akademik çalışmam bu alandaki
                    uzmanlığımı güçlendiriyor.
                  </p>
                </div>
              </div>
            </div>

            {/* Technical Writing */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Technical Writing</h4>
                  <p className="text-muted-foreground">
                    Yapay zeka projeleri, kod geliştirme süreçleri ve akademik araştırmalar için
                    kapsamlı, anlaşılır ve profesyonel teknik dokümantasyon hazırlıyorum.
                  </p>
                </div>
              </div>
            </div>

            {/* Agile & Scrum */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Agile & Scrum Workflow</h4>
                  <p className="text-muted-foreground">
                    Scrum Framework, sprint planlama, görev yönetimi ve takım içi iletişim süreçlerinde
                    aktif rol alıyorum. Agile metodolojileri verimlilik ve teslim hızını artırmak için kullanıyorum.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};