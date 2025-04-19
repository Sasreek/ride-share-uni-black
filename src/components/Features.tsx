
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    title: "Save Money",
    description: "Split travel costs with other students heading the same way."
  },
  {
    title: "Safe Travel",
    description: "Verified student drivers and passengers from your university."
  },
  {
    title: "Flexible Schedule",
    description: "Find rides that match your class schedule."
  },
  {
    title: "Make Friends",
    description: "Connect with students sharing your journey."
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose UniRide?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <Card key={feature.title} className="border-2 hover:border-black transition-colors">
              <CardHeader>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
