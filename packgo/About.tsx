const About = () => {
  return (
    <section id="about" className="py-20 md:py-28 px-6 bg-gradient-hero">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <div className="text-xs font-medium text-primary uppercase tracking-widest">
          關於 PackGo
        </div>
        <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight">
          讓每段機車旅程，<br />
          都<span className="text-gradient-orange">井然有序</span>
        </h2>
        <p className="text-muted-foreground leading-relaxed text-base md:text-lg max-w-2xl mx-auto">
          PackGo 觀察到機車族在日常通勤、購物與載物時，
          常面臨車廂雜亂、物品難分類、雨衣異味、飲料水珠等問題。
          因此我們設計出可自由組合與調整的車廂收納模組，
          讓使用者依自身需求配置收納空間，
          提升機車使用的便利性與整潔度。
        </p>
      </div>
    </section>
  );
};

export default About;
