import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-1 px-1 bg-card relative border-t border-border mt-10 pt-2 flex  items-center ">
      {" "}
      <p className="text-sm text-muted-foreground w-full text-center ">
        {" "}
        &copy; {new Date().getFullYear()} Betül Cengiz. Tüm Hakları Saklıdır.
      </p>
      <a
        href="#hero"
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};