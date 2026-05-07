import { AlertCircle, Droplets, Search, CupSoda } from "lucide-react";

const problems = [
  { icon: AlertCircle, title: "車廂物品雜亂", desc: "手機、鑰匙、零錢混在一起，每次找東西都要翻半天。" },
  { icon: Droplets, title: "雨衣潮濕異味", desc: "雨後濕雨衣悶在車廂，產生難聞氣味、影響其他物品。" },
  { icon: CupSoda, title: "飲料水珠浸濕", desc: "外帶冰飲杯外凝水，不知不覺弄濕車廂內所有東西。" },
  { icon: Search, title: "小物難以取用", desc: "手套、口罩、抹布等隨意亂塞，需要時找不到。" },
];

const Problem = () => {
  return (
    <section id="problem" className="py-20 md:py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-14">
          <div className="text-xs font-medium text-primary uppercase tracking-widest mb-3">
            機車族的日常困擾
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight">
            你也遇過這些<span className="text-gradient-orange">車廂困擾</span>嗎？
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {problems.map((p) => (
            <div
              key={p.title}
              className="group p-6 rounded-xl bg-surface border border-border hover:border-primary/50 transition-colors"
            >
              <div className="w-11 h-11 rounded-lg bg-primary/10 text-primary grid place-items-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <p.icon size={20} />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2 text-foreground">
                {p.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;
