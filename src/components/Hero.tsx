
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-black mb-6">
          Campus Rides Made Simple
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Share rides with fellow students. Save money, make friends, and travel sustainably.
        </p>
        <div className="flex gap-4 justify-center">
          <Link to="/signup">
            <Button className="text-lg px-8 py-6">Get Started</Button>
          </Link>
          <Link to="/rides">
            <Button variant="outline" className="text-lg px-8 py-6">
              Find a Ride
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
