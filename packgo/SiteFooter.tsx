import { Instagram, Mail } from "lucide-react";
import logoIcon from "@/assets/packgo-icon.png";

const SiteFooter = () => {
  return (
    <footer className="border-t border-border bg-surface/40">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <img src={logoIcon} alt="PackGo logo" className="h-9 w-auto" />
            <span className="font-display font-bold text-lg">PackGo</span>
          </div>
          <p className="text-sm text-muted-foreground italic">
            Pack Better, Go Further.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-foreground mb-3">導覽</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#modules" className="hover:text-foreground">產品模組</a></li>
            <li><a href="#features" className="hover:text-foreground">產品特色</a></li>
            <li><a href="#scenes" className="hover:text-foreground">使用情境</a></li>
            <li><a href="#preorder" className="hover:text-foreground">立即預購</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-foreground mb-3">聯絡我們</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <Mail size={14} /> hello@packgo.com
            </li>
            <li className="flex items-center gap-2">
              <Instagram size={14} /> @packgo.official
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-5 text-xs text-muted-foreground flex flex-col sm:flex-row justify-between gap-2">
          <span>© {new Date().getFullYear()} PackGo. All rights reserved.</span>
          <span>Designed for riders who care.</span>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
