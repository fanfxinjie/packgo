import modulesImage from "@/assets/packgo-modules.jpg";
import { Smartphone, CloudRain, CupSoda, Package } from "lucide-react";

const straps = [
  { size: "S", length: "12 cm", desc: "適合小型車廂或局部分區，固定手機錢包等小物。" },
  { size: "M", length: "22 cm", desc: "通勤族最常用尺寸，適合多數車型主要區域。" },
  { size: "L", length: "32 cm", desc: "大型車廂或長距離載物使用，可掛多個模組。" },
];

const pouches = [
  {
    icon: Smartphone,
    name: "手機錢包鑰匙袋",
    desc: "清楚分層設計，可放手機、卡片、零錢、鑰匙。拆下後可上下折疊扣合，下車短暫購物可直接帶走。",
  },
  {
    icon: CloudRain,
    name: "雨衣放置袋",
    desc: "防水與防潑水材質，避免濕雨衣沾濕其他物品並減少異味。可加裝扣環與提把，方便取出掛在前掛鉤。",
  },
  {
    icon: CupSoda,
    name: "飲料袋",
    desc: "防水材質，避免冰飲杯外水珠浸濕車廂物品。具備提把設計，從車廂取下後也可作為一般飲料提袋。",
  },
  {
    icon: Package,
    name: "其他雜物袋",
    desc: "多層收納空間，可放手套、購物袋、口罩、抹布等日常小物，集中整理、方便快速拿取。",
  },
];

const Modules = () => {
  return (
    <section id="modules" className="py-20 md:py-28 px-6 bg-surface/40">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-14">
          <div className="text-xs font-medium text-primary uppercase tracking-widest mb-3">
            模組化系統
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight mb-4">
            一條連接帶，<br className="md:hidden" />
            <span className="text-gradient-orange">無限組合可能</span>
          </h2>
          <p className="text-muted-foreground">
            PackGo 由「主要連接帶」與「可拆式收納袋」兩大元件組成，
            依照你的車型與需求自由搭配。
          </p>
        </div>

        {/* Strap sizes */}
        <div className="mb-16">
          <h3 className="font-display text-xl font-semibold mb-6 flex items-center gap-3">
            <span className="w-8 h-px bg-primary" />
            主要連接帶 S / M / L
          </h3>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="rounded-xl overflow-hidden border border-border shadow-card">
              <img
                src={modulesImage}
                alt="PackGo 連接帶與收納模組組合"
                className="w-full h-auto object-cover"
                loading="lazy"
                width={1024}
                height={1024}
              />
            </div>

            <div className="space-y-4">
              {straps.map((s) => (
                <div
                  key={s.size}
                  className="p-5 rounded-xl bg-surface border border-border hover:border-primary/40 transition-colors flex gap-5"
                >
                  <div className="shrink-0 w-16 h-16 rounded-lg bg-gradient-orange grid place-items-center">
                    <span className="font-display font-bold text-2xl text-primary-foreground">
                      {s.size}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-3 mb-1">
                      <span className="font-display font-semibold text-foreground">
                        {s.size} 尺寸
                      </span>
                      <span className="text-primary text-sm font-medium">
                        {s.length}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </div>
              ))}
              <p className="text-xs text-muted-foreground pt-2">
                * 採用 PP 板支撐材料，耐熱且具剛性，可搭配掛鉤固定於車廂內壁，
                透過魔鬼氈連接不同收納袋。
              </p>
            </div>
          </div>
        </div>

        {/* Pouches */}
        <div>
          <h3 className="font-display text-xl font-semibold mb-6 flex items-center gap-3">
            <span className="w-8 h-px bg-primary" />
            可拆式收納模組
          </h3>

          <div className="grid sm:grid-cols-2 gap-4">
            {pouches.map((p) => (
              <div
                key={p.name}
                className="group p-6 rounded-xl bg-surface border border-border hover:border-primary/40 hover:bg-surface-elevated transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-lg bg-primary/10 text-primary grid place-items-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <p.icon size={22} />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-lg text-foreground mb-2">
                      {p.name}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Modules;
