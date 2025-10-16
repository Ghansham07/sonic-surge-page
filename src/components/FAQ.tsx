import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How long does the battery really last?",
      answer: "SoundWave Pro offers up to 24 hours of total battery life with the charging case. The earbuds alone provide 6 hours of continuous playback on a single charge."
    },
    {
      question: "Are these truly waterproof?",
      answer: "Yes! With IPX7 rating, they can withstand immersion in water up to 1 meter for 30 minutes. Perfect for workouts, rain, or accidental splashes."
    },
    {
      question: "How long does shipping take?",
      answer: "We offer free standard shipping (5-7 business days) and express shipping (2-3 business days) options. All orders are processed within 24 hours."
    },
    {
      question: "What's your return policy?",
      answer: "We offer a 30-day money-back guarantee. If you're not completely satisfied, return them for a full refund - no questions asked."
    },
    {
      question: "Are they compatible with my device?",
      answer: "SoundWave Pro uses Bluetooth 5.3 and is compatible with all Bluetooth-enabled devices including iPhone, Android, tablets, and laptops."
    },
    {
      question: "What comes in the box?",
      answer: "You'll receive the earbuds, charging case, USB-C cable, 3 sizes of ear tips (S/M/L), and a quick start guide."
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl md:text-5xl font-exo font-black">
              Got Questions?
              <span className="block gradient-text">We've Got Answers</span>
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-2xl px-6 hover:border-primary/50 transition-colors"
              >
                <AccordionTrigger className="text-left text-lg font-bold hover:text-primary py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
