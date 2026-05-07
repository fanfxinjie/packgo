import sceneImage from "@/assets/packgo-scene.jpg";

const scenes = [
  { tag: "通勤", title: "每日上下班", desc: "手機、卡夾、鑰匙固定位置，紅綠燈停下也能秒拿。" },
  { tag: "雨天", title: "雨衣不再悶味", desc: "防水袋專收濕雨衣，不再弄濕其他物品。" },
  { tag: "購物", title: "短暫採買不慌", desc: "拆下手機錢包袋直接帶走，不必把所有東西搬下車。" },
  { tag: "外帶", title: "飲料安心放", desc: "防水飲料袋承接水珠，到家還能當提袋直接拎進門。" },
];

const Scenes = () => {
  return (
    <section id="scenes" className="py-20 md:py-28 px-6 bg-surface/40">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <div className="text-xs font-medium text-primary uppercase tracking-widest">
              使用情境
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight">
              不只是收納，<br />
              是<span className="text-gradient-orange">通勤生活</span>的延伸
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              從早晨出門、雨中歸途，到夜晚外帶宵夜，
              PackGo 都讓你少花幾秒、多一份從容。
            </p>
            <div className="rounded-xl overflow-hidden border border-border shadow-card">
              <img
                src={sceneImage}
                alt="機車通勤族使用 PackGo 情境"
                className="w-full h-auto object-cover"
                loading="lazy"
                width={1400}
                height={900}
              />
            </div>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {scenes.map((s, i) => (
              <div
                key={s.title}
                className="p-6 rounded-xl bg-surface border border-border hover:border-primary/40 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-mono text-muted-foreground">
                    0{i + 1}
                  </span>
                  <span className="px-2 py-0.5 rounded text-xs font-medium bg-primary/10 text-primary">
                    {s.tag}
                  </span>
                </div>
                <h3 className="font-display font-semibold text-xl text-foreground mb-2">
                  {s.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Scenes;
