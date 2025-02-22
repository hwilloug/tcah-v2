'use client';

import { Calendar, Clock, Phone, MapPin, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Image from 'next/image';

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
  image: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ icon, title, content }) => (
  <Card className="p-6 border-primary/20 hover:border-primary/40 hover:shadow-primary/20 hover:shadow-md transition-all duration-300">
    <div className="flex items-center gap-4 mb-4">
      {icon}
      <h3 className="font-semibold text-primary">{title}</h3>
    </div>
    <p className="text-muted-foreground whitespace-pre-line">{content}</p>
  </Card>
);

const services: Service[] = [
  {
    title: "Wellness Exams",
    image: "https://tcah-v2-images.s3.us-east-1.amazonaws.com/6415204765_3c90261f25_o.jpg",
    description: "Comprehensive health checks and preventive care to keep your pets healthy and happy."
  },
  {
    title: "Vaccinations",
    image: "https://tcah-v2-images.s3.us-east-1.amazonaws.com/4179766410_5b7fe89b35_o.jpg",
    description: "Essential vaccines and boosters to protect your pets from common diseases."
  },
  {
    title: "Surgery",
    image: "https://tcah-v2-images.s3.us-east-1.amazonaws.com/4200611652_c1c42218a9_o.jpg",
    description: "State-of-the-art surgical procedures performed by our experienced veterinary team."
  },
  {
    title: "Dental Care",
    image: "https://tcah-v2-images.s3.us-east-1.amazonaws.com/4163492975_2346a38e24_o.jpg",
    description: "Professional dental cleaning and oral health maintenance for your pets."
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
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Navigation Bar */}
      <nav className="bg-primary text-primary-foreground w-full z-50">
        <div className="mx-6 p-4">
          <div className="flex items-center h-16">
            <div className="flex items-center gap-6">
              <Image src="https://tcah-v2-images.s3.us-east-1.amazonaws.com/tcah-logo-white.svg" alt="Tega Cay Animal Hospital Logo" width={40} height={40} />
              <h1 className="text-3xl font-bold">Tega Cay Animal Hospital</h1>
            </div>
          </div>
        </div>
      </nav>

      <div className="grid grid-cols-3">
        <Image className="w-full" src="https://tcah-v2-images.s3.us-east-1.amazonaws.com/2990412826_138783d52f_o.jpg" alt="Tega Cay Animal Hospital Hero Image" width={1000} height={1000} />
        <Image className="w-full" src="https://tcah-v2-images.s3.us-east-1.amazonaws.com/4179781456_9fc221c32f_o.jpg" alt="Tega Cay Animal Hospital Hero Image" width={1000} height={1000} />
        <Image className="w-full" src="https://tcah-v2-images.s3.us-east-1.amazonaws.com/6411073983_74549d959e_o.jpg" alt="Tega Cay Animal Hospital Hero Image" width={1000} height={1000} />
      </div>

      <div className="w-full h-4 bg-primary" />

      {/* Main Content */}
      <div>
        {/* Info Section */}
        <section className="pt-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
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

        {/* Services Section */}
        <section className="pt-12 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-primary">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {services.map((service, index) => (
                <Card key={index} className="hover:shadow-md hover:shadow-primary/20 transition-shadow rounded-md">
                  <Image src={service.image} alt={service.title} className="w-full object-cover rounded-t-md" width={1000} height={1000} />
                  <div className="w-full h-2 bg-primary" />
                  <h3 className="text-xl font-semibold m-6 mb-3">{service.title}</h3>
                  <p className="text-muted-foreground m-6">{service.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-center mb-12 text-primary">Our Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="aspect-w-3 aspect-h-4">
                    <Image
                      src={member.image}
                      alt={member.name}
                      className="object-cover w-full h-[300px]"
                      width={1000}
                      height={1000}
                    />
                  </div>
                  <div className="w-full h-2 bg-primary" />
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
      <footer className="w-full bg-primary">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center h-16">
            <div className="flex items-center gap-6">
              <Image src="https://tcah-v2-images.s3.us-east-1.amazonaws.com/tcah-logo-white.svg" alt="Tega Cay Animal Hospital Logo" width={40} height={40} />
              <h1 className="text-3xl font-bold text-white">Tega Cay Animal Hospital</h1>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}