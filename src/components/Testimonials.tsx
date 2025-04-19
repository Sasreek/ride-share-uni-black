
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Computer Science Major",
    quote: "UniRide made it so easy to find rides to campus. I've saved money and made great friends!"
  },
  {
    name: "Mike Chen",
    role: "Business Student",
    quote: "As a driver, I love being able to help fellow students while offsetting my travel costs."
  },
  {
    name: "Emily Rodriguez",
    role: "Engineering Major",
    quote: "The app is super intuitive and the black and white design makes everything easy to find."
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">What Students Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="bg-gray-50">
              <CardHeader>
                <Quote className="w-8 h-8 text-gray-400" />
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{testimonial.quote}</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
