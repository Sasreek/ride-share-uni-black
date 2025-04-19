
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const mockRides = [
  {
    id: 1,
    from: "Campus West",
    to: "Downtown",
    driver: "Sarah Johnson",
    seats: 3,
    price: 8
  },
  {
    id: 2, 
    from: "Engineering Building",
    to: "Student Housing",
    driver: "Mike Chen",
    seats: 2,
    price: 6
  }
];

const Rides = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-black mb-4">Available Rides</h1>
          <p className="text-gray-600 max-w-xl mx-auto">
            Find convenient and affordable rides shared by fellow students.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {mockRides.map((ride) => (
            <Card 
              key={ride.id} 
              className="border-2 hover:border-black transition-colors shadow-sm hover:shadow-md"
            >
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-xl font-semibold">
                  {ride.from} → {ride.to}
                </CardTitle>
                <span className="text-gray-500 font-medium">
                  ${ride.price}
                </span>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-gray-700">
                    <strong>Driver:</strong> {ride.driver}
                  </p>
                  <p className="text-gray-700">
                    <strong>Available Seats:</strong> {ride.seats}
                  </p>
                  <Button className="w-full mt-4">Book Ride</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {mockRides.length === 0 && (
          <div className="text-center py-12 bg-white rounded-lg shadow-sm">
            <p className="text-gray-500 text-xl">No rides available at the moment</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Rides;
