import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/packgo-hero.jpg";

const Hero = () => {
  return (
    <section id="top" className="relative overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-24 md:pt-24 md:pb-32">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-medium">
              <Sparkles size={12} />
              <span>專為機車族打造的模組化收納</span>
            </div>

            <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight">
              Pack Better,
              <br />
              <span className="text-gradient-orange">Go Further.</span>
            </h1>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
              PackGo 是專為機車族打造的模組化車廂收納系統，
              透過連接帶與可拆式收納袋，幫助你把
              <span className="text-foreground"> 雨衣、飲料、手機、錢包、鑰匙 </span>
              分門別類，告別雜亂車廂。
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#preorder"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-primary text-primary-foreground font-medium hover:bg-primary-hover transition-all shadow-glow"
              >
                立即預購 <ArrowRight size={16} />
              </a>
              <a
                href="#modules"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md border border-border bg-surface/50 text-foreground font-medium hover:bg-surface transition-all"
              >
                查看模組
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border max-w-md">
              <div>
                <div className="text-2xl font-display font-bold text-primary">3</div>
                <div className="text-xs text-muted-foreground mt-1">尺寸連接帶</div>
              </div>
              <div>
                <div className="text-2xl font-display font-bold text-primary">4+</div>
                <div className="text-xs text-muted-foreground mt-1">可選收納模組</div>
              </div>
              <div>
                <div className="text-2xl font-display font-bold text-primary">100%</div>
                <div className="text-xs text-muted-foreground mt-1">防水材質</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-card border border-border">
              <img
                src={heroImage}
                alt="PackGo 機車車廂收納系統實裝示意"
                className="w-full h-auto object-cover"
                width={1920}
                height={1080}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-4 -right-4 hidden md:block px-4 py-3 rounded-lg bg-surface-elevated border border-border shadow-card">
              <div className="text-xs text-muted-foreground">即時體驗</div>
              <div className="text-sm font-medium text-foreground">車廂整潔升級</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
