'use client';

import { Calendar, Clock, Phone, MapPin, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  content: string;
}

interface TeamMember {
  name: string;
  role: string;
  description: string;
  image: string;
}

interface Service {
  title: string;
  description: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ icon, title, content }) => (
  <Card className="p-6">
    <div className="flex items-center gap-4 mb-4">
      {icon}
      <h3 className="font-semibold">{title}</h3>
    </div>
    <p className="text-muted-foreground whitespace-pre-line">{content}</p>
  </Card>
);

const services: Service[] = [
  {
    title: "Wellness Exams",
    description: "Comprehensive health checks and preventive care to keep your pets healthy and happy."
  },
  {
    title: "Vaccinations",
    description: "Essential vaccines and boosters to protect your pets from common diseases."
  },
  {
    title: "Surgery",
    description: "State-of-the-art surgical procedures performed by our experienced veterinary team."
  },
  {
    title: "Dental Care",
    description: "Professional dental cleaning and oral health maintenance for your pets."
  },
  {
    title: "Emergency Care",
    description: "24/7 emergency services for urgent medical attention when your pets need it most."
  },
  {
    title: "Laboratory Services",
    description: "Advanced diagnostic testing and lab work for accurate health assessments."
  }
];

const team: TeamMember[] = [
  {
    name: "Dr. Sarah Johnson",
    role: "Lead Veterinarian",
    description: "With over 15 years of experience, Dr. Johnson specializes in small animal medicine and surgery.",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Dr. Michael Chen",
    role: "Veterinary Surgeon",
    description: "Dr. Chen is our surgical specialist with expertise in orthopedic and soft tissue procedures.",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Emma Rodriguez",
    role: "Lead Veterinary Technician",
    description: "Emma ensures the highest quality of care and comfort for all our patients.",
    image: "https://images.unsplash.com/photo-1623854767648-e7bb8009f0db?q=80&w=2070&auto=format&fit=crop"
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Navigation Bar */}
      <nav className="bg-primary text-primary-foreground fixed w-full z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center h-16">
            <div className="flex items-center gap-2">
              <Heart className="h-8 w-8" />
              <span className="text-xl font-bold">Caring Hearts Veterinary Clinic</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content with padding for fixed nav */}
      <div className="pt-16">
        {/* Services Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <InfoCard
                icon={<Clock className="h-6 w-6" />}
                title="Working Hours"
                content="Mon-Fri: 8am-8pm\nSat-Sun: 9am-6pm"
              />
              <InfoCard
                icon={<Phone className="h-6 w-6" />}
                title="Contact Us"
                content="(555) 123-4567\ninfo@caringhearts.vet"
              />
              <InfoCard
                icon={<MapPin className="h-6 w-6" />}
                title="Location"
                content="123 Pet Care Lane\nVettown, VT 12345"
              />
              <InfoCard
                icon={<Calendar className="h-6 w-6" />}
                title="Appointments"
                content="Book online or call us\nEmergency services available"
              />
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="aspect-w-3 aspect-h-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="object-cover w-full h-[300px]"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                    <p className="text-muted-foreground mb-2">{member.role}</p>
                    <p className="text-sm">{member.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}