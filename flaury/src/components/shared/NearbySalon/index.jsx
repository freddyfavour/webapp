import { Star, MapPin } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import hairstyling from "/hairstyling.png";
import haircut from "/haircut.png";
import massage from "/massage.png";
import perfume from "/perfume.png";
import { Link } from "react-router-dom";

// Simulated backend data
const nearbySalons = [
  {
    id: 1,
    image: hairstyling,
    name: "Timeless Salon",
    services: ["Hair styling", "Spa", "Facebeat"],
    rating: 4.2,
    reviewCount: 128,
    location: "Dora Hill, Camelot",
    distance: "20km",
    isPopular: true,
  },
  {
    id: 2,
    image: haircut,
    name: "Elite Beauty Studio",
    services: ["Hair styling", "Spa", "Facebeat"],
    rating: 4.5,
    reviewCount: 95,
    location: "Dora Hill, Camelot",
    distance: "15km",
  },
  {
    id: 3,
    image: massage,
    name: "Luxury Spa & Salon",
    services: ["Hair styling", "Spa", "Facebeat"],
    rating: 4.8,
    reviewCount: 203,
    location: "Dora Hill, Camelot",
    distance: "25km",
    isPopular: true,
  },
  {
    id: 4,
    image: perfume,
    name: "Royal Beauty Palace",
    services: ["Hair styling", "Spa", "Facebeat"],
    rating: 4.3,
    reviewCount: 67,
    location: "Dora Hill, Camelot",
    distance: "18km",
  },
  {
    id: 5,
    image: perfume,
    name: "Modern Hair Studio",
    services: ["Hair styling", "Coloring", "Treatment"],
    rating: 4.6,
    reviewCount: 156,
    location: "Downtown, Camelot",
    distance: "12km",
  },
]

export default function NearbySalon() {
  return (
    <div className="my-8">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-gray-900">Nearby Salons</h3>
        <button className="text-sm font-medium text-primary hover:text-blue-700 transition-colors">View all</button>
      </div>

      {/* Improved scrollable container */}
      <div className="relative">
        <div
          className="flex gap-4 overflow-x-auto pb-4 scroll-smooth snap-x snap-mandatory"
          style={{
            scrollbarWidth: "thin",
            scrollbarColor: "#CBD5E1 #F1F5F9",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {nearbySalons.map((salon, index) => (
            <div
              key={index + 1}
              className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-gray-200 flex-none w-72 snap-start"
            >
              <div className="relative overflow-hidden">
                <img
                  src={salon.image || "/placeholder.svg"}
                  alt={salon.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {salon.isPopular && (
                  <Badge className="absolute top-3 left-3 bg-primary text-white border-0">
                    Popular
                  </Badge>
                )}
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
                  <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  <span className="text-xs font-medium text-gray-900">{salon.rating}</span>
                </div>
              </div>

              <div className="p-4">
                <h4 className="font-semibold text-lg text-gray-900 mb-2 group-hover:text-primary transition-colors">
                  {salon.name}
                </h4>

                <div className="flex flex-wrap gap-1 mb-3">
                  {salon.services.slice(0, 2).map((service, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="text-xs bg-gray-100 text-gray-700 hover:bg-gray-200"
                    >
                      {service}
                    </Badge>
                  ))}
                  {salon.services.length > 2 && (
                    <Badge variant="secondary" className="text-xs bg-gray-100 text-gray-700">
                      +{salon.services.length - 2}
                    </Badge>
                  )}
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{salon.rating}</span>
                    <span>({salon.reviewCount} reviews)</span>
                    <span className="text-gray-400">•</span>
                    <span>{salon.distance} away</span>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin className="w-4 h-4 text-gray-400" />
                    <span>{salon.location}</span>
                  </div>
                </div>

                <Link to={`/bookings/${salon.id}`} className="block w-full">
                  <Button className="w-full bg-primary hover:secondary text-white font-medium py-2.5 rounded-xl transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]">
                    Book Now
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
