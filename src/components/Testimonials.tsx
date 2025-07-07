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
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            What Our <span className="text-foreground">Clients Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real feedback from hiring teams who have revolutionized their recruitment 
            process with Rabbit AI.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="testimonial-card group relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-foreground rounded-full flex items-center justify-center shadow-md">
                <Quote className="w-6 h-6 text-background" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4 pt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-foreground text-foreground" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-foreground leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="border-t border-border pt-4">
                <div className="font-semibold text-foreground">{testimonial.author}</div>
                <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                <div className="text-sm font-medium text-foreground">{testimonial.company}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-muted/30 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4 text-foreground">
              Join the Future of Hiring Today
            </h3>
            <p className="text-muted-foreground mb-6">
              See why leading companies trust Rabbit AI for their most critical hiring decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-hero-primary">
                Schedule Demo
              </button>
              <button className="btn-outline-hero">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;