import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitch,
  Twitter,
  Youtube,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      toast({
        title: "Mesaj Gönderildi!",
        description: "En kısa sürede sizinle iletişime geçeceğim.",
      });
      e.target.reset();
    } else {
      toast({
        title: "Gönderilemedi",
        description: "Lütfen tekrar deneyin.",
        variant: "destructive",
      });
    }

    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-10 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          İletişime <span className="text-primary"> Geçin</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Aklınızda bir proje mi var veya iş birliği yapmak mı istiyorsunuz? Bana ulaşmaktan çekinmeyin.
          Yeni fırsatları görüşmeye her zaman açığım.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-1">İletişim Bilgileri</h3>

            <div className="pt-8">
              <h4 className="font-medium mb-4">Sosyal Medya Kanalları</h4>
              <div className="flex space-x-4 justify-center">
                <a href="https://www.linkedin.com/in/betulcengiz/" target="_blank">
                  <Linkedin />
                </a>
                <a href="https://www.youtube.com/channel/UCqQ4kIuaShtzA4Kb3fmvggA" target="_blank">
                  <Youtube />
                </a>
                <a href="https://www.instagram.com/codebybety/?hl=tr" target="_blank">
                  <Instagram />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Mesaj Gönder</h3>

            {/* FORM → Web3Forms entegrasyonu */}
            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Web3Forms Access Key */}
              <input type="hidden" name="access_key" value={import.meta.env.VITE_WEB3FORMS_KEY} />

              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  İsminiz
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background"
                  placeholder="Betül Cengiz"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  E-posta Adresiniz
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background"
                  placeholder="john@gmail.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Mesajınız
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background resize-none"
                  placeholder="Merhaba bir konu hakkında konuşmak istiyorum..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn("cosmic-button w-full flex items-center justify-center gap-2")}
              >
                {isSubmitting ? "Gönderiliyor..." : "Mesaj Gönder"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
