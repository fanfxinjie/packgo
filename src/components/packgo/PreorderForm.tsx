import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Check } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(1, "請輸入姓名").max(50, "姓名過長"),
  email: z.string().trim().email("Email 格式不正確").max(255),
  bike: z.string().trim().min(1, "請輸入機車車型").max(80),
  modules: z.array(z.string()).min(1, "請至少選擇一項模組"),
  intent: z.string().min(1, "請選擇預購意願"),
});

const moduleOptions = [
  "連接帶 S (12cm)",
  "連接帶 M (22cm)",
  "連接帶 L (32cm)",
  "手機錢包鑰匙袋",
  "雨衣放置袋",
  "飲料袋",
  "其他雜物袋",
];

const intentOptions = ["立即預購", "1 個月內", "3 個月內", "再觀望看看"];

const PreorderForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    bike: "",
    modules: [] as string[],
    intent: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const toggleModule = (m: string) => {
    setForm((f) => ({
      ...f,
      modules: f.modules.includes(m)
        ? f.modules.filter((x) => x !== m)
        : [...f.modules, m],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      toast.error(result.error.issues[0].message);
      return;
    }
    setSubmitted(true);
    toast.success("已收到您的預購意願，我們將盡快與您聯繫！");
  };

  if (submitted) {
    return (
      <section id="preorder" className="py-20 md:py-28 px-6">
        <div className="max-w-xl mx-auto text-center space-y-6 p-10 rounded-2xl bg-surface border border-border">
          <div className="w-14 h-14 mx-auto rounded-full bg-primary grid place-items-center">
            <Check className="text-primary-foreground" size={26} />
          </div>
          <h2 className="font-display text-2xl font-bold">預購意願已送出</h2>
          <p className="text-muted-foreground">
            感謝你支持 PackGo！我們會在產品開放預購時，
            第一時間透過 Email 與你聯繫。
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="preorder" className="py-20 md:py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5 space-y-5">
            <div className="text-xs font-medium text-primary uppercase tracking-widest">
              加入預購
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight">
              成為 PackGo<br />
              <span className="text-gradient-orange">首批使用者</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              留下你的資訊，告訴我們你感興趣的模組組合。
              產品開放預購時，將優先通知並提供首發優惠。
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="lg:col-span-7 p-6 md:p-8 rounded-2xl bg-surface border border-border space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <Field
                label="姓名"
                value={form.name}
                onChange={(v) => setForm({ ...form, name: v })}
                placeholder="王小明"
              />
              <Field
                label="Email"
                type="email"
                value={form.email}
                onChange={(v) => setForm({ ...form, email: v })}
                placeholder="you@example.com"
              />
            </div>
            <Field
              label="機車車型"
              value={form.bike}
              onChange={(v) => setForm({ ...form, bike: v })}
              placeholder="如：SYM Jet SR、Yamaha Cuxi、Gogoro 2"
            />

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                感興趣的模組（可複選）
              </label>
              <div className="flex flex-wrap gap-2">
                {moduleOptions.map((m) => {
                  const active = form.modules.includes(m);
                  return (
                    <button
                      type="button"
                      key={m}
                      onClick={() => toggleModule(m)}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${
                        active
                          ? "bg-primary text-primary-foreground border-primary"
                          : "bg-background text-muted-foreground border-border hover:border-primary/50 hover:text-foreground"
                      }`}
                    >
                      {m}
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                預購意願
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {intentOptions.map((i) => {
                  const active = form.intent === i;
                  return (
                    <button
                      type="button"
                      key={i}
                      onClick={() => setForm({ ...form, intent: i })}
                      className={`px-3 py-2 rounded-md text-xs font-medium border transition-all ${
                        active
                          ? "bg-primary text-primary-foreground border-primary"
                          : "bg-background text-muted-foreground border-border hover:border-primary/50 hover:text-foreground"
                      }`}
                    >
                      {i}
                    </button>
                  );
                })}
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-md bg-primary text-primary-foreground font-medium hover:bg-primary-hover transition-colors shadow-glow"
            >
              送出預購意願
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const Field = ({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  placeholder?: string;
}) => (
  <div>
    <label className="block text-sm font-medium text-foreground mb-2">
      {label}
    </label>
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full px-4 py-2.5 rounded-md bg-background border border-input text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
    />
  </div>
);

export default PreorderForm;
