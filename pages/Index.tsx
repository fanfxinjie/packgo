import PackGoNav from "@/components/packgo/PackGoNav";
import Hero from "@/components/packgo/Hero";
import Problem from "@/components/packgo/Problem";
import Modules from "@/components/packgo/Modules";
import Features from "@/components/packgo/Features";
import Scenes from "@/components/packgo/Scenes";
import HowItWorks from "@/components/packgo/HowItWorks";
import About from "@/components/packgo/About";
import PreorderForm from "@/components/packgo/PreorderForm";
import SiteFooter from "@/components/packgo/SiteFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <PackGoNav />
      <main>
        <Hero />
        <Problem />
        <Modules />
        <Features />
        <Scenes />
        <HowItWorks />
        <About />
        <PreorderForm />
      </main>
      <SiteFooter />
    </div>
  );
};

export default Index;
