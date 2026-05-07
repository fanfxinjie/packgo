import { Layers, ShieldCheck, Thermometer, Unplug, Anchor, Sparkle } from "lucide-react";

const features = [
  { icon: Layers, title: "模組化設計", desc: "連接帶 + 收納袋自由搭配，依需求隨時調整。" },
  { icon: ShieldCheck, title: "防水防潮", desc: "防水與防潑水材質，雨天通勤也安心。" },
  { icon: Thermometer, title: "耐高溫", desc: "PP 板支撐結構耐熱不變形，夏日車廂無懼。" },
  { icon: Unplug, title: "可拆卸攜帶", desc: "魔鬼氈快拆，下車短暫購物直接帶走。" },
  { icon: Anchor, title: "掛鉤固定", desc: "穩固不滑動，行駛顛簸物品不亂位。" },
  { icon: Sparkle, title: "多層收納", desc: "細緻分層，小物分類清楚、快速取用。" },
];

const Features = () => {
  return (
    <section id="features" className="py-20 md:py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-14">
          <div className="text-xs font-medium text-primary uppercase tracking-widest mb-3">
            產品特色
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight">
            為日常通勤而生的<span className="text-gradient-orange">機能設計</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="p-6 rounded-xl bg-surface border border-border hover:border-primary/50 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary grid place-items-center mb-4">
                <f.icon size={22} />
              </div>
              <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                {f.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
