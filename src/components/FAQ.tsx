import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "How does the AI interviewer work?",
      answer: "Our AI interviewer uses advanced NLP and machine learning trained on millions of interview interactions. It conducts real-time video conversations, asks relevant follow-up questions, and adapts to candidate responses just like a human interviewer would."
    },
    {
      question: "Is the platform secure for enterprise use?",
      answer: "Yes, Rabbit AI is built with enterprise-grade security. We're GDPR compliant, use encrypted S3 storage, implement face tracking and browser lockdown for proctoring, and automatically delete recordings after 3 months. We also provide comprehensive audit logs and role-based access controls."
    },
    {
      question: "Can I customize the interview process?",
      answer: "Absolutely. You can fully customize interview flows, add your company branding, configure mandatory questions, set skill assessments, and even define custom evaluation criteria. The platform adapts to your specific hiring needs and company culture."
    },
    {
      question: "How does ATS integration work?",
      answer: "Rabbit AI seamlessly integrates with major ATS platforms through APIs. You can sync candidate data, automatically schedule interviews, and push results back to your existing workflow. Our API documentation makes custom integrations straightforward for your development team."
    },
    {
      question: "What types of interviews can the AI conduct?",
      answer: "Our AI can handle all interview types including technical coding assessments, behavioral interviews, case studies, HR screenings, role-specific evaluations, and even complex multi-stage interview processes. It adapts its approach based on the role and requirements you define."
    },
    {
      question: "What languages are supported?",
      answer: "Rabbit AI supports 120+ global and vernacular languages, enabling you to hire talent worldwide. The AI can conduct interviews in the candidate's preferred language while providing translated insights and assessments to your hiring team."
    },
    {
      question: "How accurate are the AI assessments?",
      answer: "Our AI assessment accuracy is continuously validated against human interviewer evaluations. With training on millions of interviews and regular model updates, we maintain high correlation with expert human assessments while eliminating unconscious bias and ensuring consistency."
    },
    {
      question: "What support do you provide?",
      answer: "We offer comprehensive onboarding, 24/7 technical support, dedicated customer success managers for enterprise clients, training sessions for your team, and ongoing optimization consultation to maximize your hiring ROI."
    }
  ];

  return (
    <section className="py-20 section-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Frequently Asked <span className="text-gradient-accent">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get answers to common questions about AI interviews, security, 
            customization, and implementation.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="mb-4 bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-muted/50 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-foreground pr-4">{faq.question}</h3>
                <div className="flex-shrink-0">
                  {openItems.includes(index) ? (
                    <ChevronUp className="w-5 h-5 text-primary" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-muted-foreground" />
                  )}
                </div>
              </button>
              
              {openItems.includes(index) && (
                <div className="px-8 pb-6">
                  <div className="border-t border-border pt-4">
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Support */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4 text-foreground">
              Still Have Questions?
            </h3>
            <p className="text-muted-foreground mb-6">
              Our team is here to help you understand how Rabbit AI can transform your hiring process.
            </p>
            <button className="btn-hero-primary">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;