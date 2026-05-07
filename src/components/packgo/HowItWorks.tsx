const steps = [
  { n: "01", title: "選擇連接帶", desc: "依車廂大小選擇 S / M / L 連接帶尺寸。" },
  { n: "02", title: "固定於車廂", desc: "透過掛鉤固定連接帶於車廂內壁，穩固不滑動。" },
  { n: "03", title: "搭配收納袋", desc: "依需求魔鬼氈黏上手機袋、雨衣袋、飲料袋等模組。" },
  { n: "04", title: "隨需重組", desc: "需要外出時直接拆下對應模組，輕鬆帶走。" },
];

const HowItWorks = () => {
  return (
    <section id="how" className="py-20 md:py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-14">
          <div className="text-xs font-medium text-primary uppercase tracking-widest mb-3">
            安裝與使用
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight">
            四步驟，<span className="text-gradient-orange">即裝即用</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-xl overflow-hidden border border-border">
          {steps.map((s) => (
            <div
              key={s.n}
              className="bg-background p-8 hover:bg-surface transition-colors"
            >
              <div className="font-display font-bold text-4xl text-primary mb-4">
                {s.n}
              </div>
              <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                {s.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
