import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Rabbit AI transformed our technical hiring process completely. We went from 3-week cycles to 5-day turnarounds while maintaining interview quality. The AI interviewer asks better questions than most of our senior engineers.",
      author: "Sarah Chen",
      title: "Head of Talent Acquisition",
      company: "TechFlow Solutions",
      rating: 5
    },
    {
      quote: "The 24/7 availability is a game-changer for our global hiring. Candidates can interview at their convenience, and we get consistent, unbiased assessments. Our hiring manager satisfaction increased by 85%.",
      author: "Michael Rodriguez",
      title: "VP of People Operations", 
      company: "GlobalTech Enterprises",
      rating: 5
    },
    {
      quote: "As a recruitment agency, Rabbit AI gives us a competitive edge. We can handle 5x more clients with the same team size. The detailed analytics help us place candidates more accurately than ever.",
      author: "Emma Thompson",
      title: "Founder & CEO",
      company: "Elite Talent Partners",
      rating: 5
    }
  ];

  return (
    <section className="py-32 section-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-black mb-8 text-foreground">
            What Our <span className="bg-gradient-to-r from-primary to-accent-purple bg-clip-text text-transparent">Customers Say</span>
          </h2>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto font-light">
            Join hundreds of companies transforming their hiring process with Rabbit AI.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="relative z-10">
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent-purple/20 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                    <span className="text-primary font-bold text-xl">
                      {testimonial.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-bold text-foreground text-lg">{testimonial.author}</div>
                    <div className="text-sm text-primary font-medium">{testimonial.title}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                  </div>
                </div>
                
                <blockquote className="text-foreground leading-relaxed mb-6 text-lg font-medium">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < testimonial.rating
                          ? 'text-amber-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                  <span className="text-sm text-muted-foreground ml-3 font-medium">
                    {testimonial.rating}/5
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;