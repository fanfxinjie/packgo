import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import logoIcon from "@/assets/packgo-icon.png";

const links = [
  { href: "#problem", label: "問題" },
  { href: "#modules", label: "模組" },
  { href: "#features", label: "特色" },
  { href: "#scenes", label: "情境" },
  { href: "#how", label: "安裝" },
  { href: "#preorder", label: "預購" },
];

const PackGoNav = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          <img
            src={logoIcon}
            alt="PackGo logo"
            className="h-9 w-auto"
          />
          <span className="font-display font-bold tracking-tight text-lg">
            PackGo
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#preorder"
          className="hidden md:inline-flex items-center px-4 py-2 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:bg-primary-hover transition-colors"
        >
          立即預購
        </a>

        <button
          className="md:hidden p-2 -mr-2 text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="px-6 py-4 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#preorder"
              onClick={() => setOpen(false)}
              className="px-4 py-2.5 rounded-md bg-primary text-primary-foreground text-sm font-medium text-center"
            >
              立即預購
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default PackGoNav;
