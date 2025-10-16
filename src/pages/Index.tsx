import Hero from "@/components/Hero";
import ProblemStatement from "@/components/ProblemStatement";
import SolutionOverview from "@/components/SolutionOverview";
import Features from "@/components/Features";
import SocialProof from "@/components/SocialProof";
import TrustSignals from "@/components/TrustSignals";
import LeadForm from "@/components/LeadForm";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import StickyBuyButton from "@/components/StickyBuyButton";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <ProblemStatement />
      <SolutionOverview />
      <Features />
      <SocialProof />
      <TrustSignals />
      <LeadForm />
      <FAQ />
      <FinalCTA />
      <StickyBuyButton />
    </main>
  );
};

export default Index;
