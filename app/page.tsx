'use client';

import { Calendar, Clock, Phone, MapPin, Heart, Mail } from 'lucide-react';
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

const Divider = () => (
  <div className="w-16 h-1 bg-primary mx-auto mb-12" />
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
    name: "Dr. Paul A. Willoughby, DMV",
    role: "Veterinarian and Surgeon",
    description: "With over 15 years of experience, Dr. Willoughby specializes in small animal medicine and surgery.",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Whatser Face",
    role: "Veterinary Technician",
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

      {/* Alert bar */}
      <div className="bg-[#FFB81C] p-4 m-12 rounded-md">
        <p className="text-center text-lg"><b>Temporary Hours:</b> Mon-Thurs: 7 AM - 12 PM, 1 PM - 6 PM; Fri: 7 AM - 12 PM</p>
      </div>
      {/* Main Content */}
      <div>
        {/* Info Section */}
        <section className="bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <InfoCard
                icon={<Clock className="h-6 w-6" />}
                title="Working Hours"
                content={"Mon-Thu: 7 AM - 6 PM\nFri: 7 AM - 12 PM"}
              />
              <InfoCard
                icon={<Phone className="h-6 w-6" />}
                title="Contact Us"
                content={"(803) 548-2590\ninfo@tcah.com"}
              />
              <InfoCard
                icon={<MapPin className="h-6 w-6" />}
                title="Location"
                content="2152 Gold Hill Rd, Fort Mill, SC 29708"
              />
              <InfoCard
                icon={<Calendar className="h-6 w-6" />}
                title="Appointments"
                content="Call to schedule an appointment"
              />
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="pt-12 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4 text-primary">Our Services</h2>
            <Divider />
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
        <section className="pt-12 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-center mb-4 text-primary">Our Team</h2>
            <Divider />
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

      {/* Gallery */}
      <section className="pt-12 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-primary">Gallery</h2>
          <Divider />
        </div>
        <div className="grid grid-cols-3 gap-1 sm:gap-2 max-w-5xl m-2">
          <Image src="https://tcah-v2-images.s3.us-east-1.amazonaws.com/2959262741_abdf03e0e9_o.jpg" alt="Tega Cay Animal Hospital Gallery Image" width={1000} height={1000} />
          <Image src="https://tcah-v2-images.s3.us-east-1.amazonaws.com/2960090960_055c983ee6_o.jpg" alt="Tega Cay Animal Hospital Gallery Image" width={1000} height={1000} />
          <Image src="https://tcah-v2-images.s3.us-east-1.amazonaws.com/2963475108_e9bec1ca61_o.jpg" alt="Tega Cay Animal Hospital Gallery Image" width={1000} height={1000} />
          <Image src="https://tcah-v2-images.s3.us-east-1.amazonaws.com/2973831147_130c2768e3_o.jpg" alt="Tega Cay Animal Hospital Gallery Image" width={1000} height={1000} />
          <Image src="https://tcah-v2-images.s3.us-east-1.amazonaws.com/2990412826_138783d52f_o.jpg" alt="Tega Cay Animal Hospital Gallery Image" width={1000} height={1000} />
          <Image src="https://tcah-v2-images.s3.us-east-1.amazonaws.com/3126708576_1aeb933cab_o.jpg" alt="Tega Cay Animal Hospital Gallery Image" width={1000} height={1000} />
          <Image src="https://tcah-v2-images.s3.us-east-1.amazonaws.com/4154345122_0dd2b8ff0a_o.jpg" alt="Tega Cay Animal Hospital Gallery Image" width={1000} height={1000} />
          <Image src="https://tcah-v2-images.s3.us-east-1.amazonaws.com/4156769446_3f82ce8edd_o.jpg" alt="Tega Cay Animal Hospital Gallery Image" width={1000} height={1000} />
          <Image src="https://tcah-v2-images.s3.us-east-1.amazonaws.com/4160854423_0f6625ca27_o.jpg" alt="Tega Cay Animal Hospital Gallery Image" width={1000} height={1000} />
          <Image src="https://tcah-v2-images.s3.us-east-1.amazonaws.com/2959176293_dac11390e4_o.jpg" alt="Tega Cay Animal Hospital Gallery Image" width={1000} height={1000} />
          <Image src="https://tcah-v2-images.s3.us-east-1.amazonaws.com/4154362210_93f67aab1e_o.jpg" alt="Tega Cay Animal Hospital Gallery Image" width={1000} height={1000} />
          <Image src="https://tcah-v2-images.s3.us-east-1.amazonaws.com/4160922682_874f61dbc3_o.jpg" alt="Tega Cay Animal Hospital Gallery Image" width={1000} height={1000} />
          <Image src="https://tcah-v2-images.s3.us-east-1.amazonaws.com/4164254544_e639b2fcd7_o.jpg" alt="Tega Cay Animal Hospital Gallery Image" width={1000} height={1000} />
          <Image src="https://tcah-v2-images.s3.us-east-1.amazonaws.com/4167334845_4073a0b7f5_o.jpg" alt="Tega Cay Animal Hospital Gallery Image" width={1000} height={1000} />
          <Image src="https://tcah-v2-images.s3.us-east-1.amazonaws.com/4167338743_3306a67a67_o.jpg" alt="Tega Cay Animal Hospital Gallery Image" width={1000} height={1000} />
          <Image src="https://tcah-v2-images.s3.us-east-1.amazonaws.com/4167379259_0fccb5f4ee_o.jpg" alt="Tega Cay Animal Hospital Gallery Image" width={1000} height={1000} />
          <Image src="https://tcah-v2-images.s3.us-east-1.amazonaws.com/4160922894_c220a46c44_o.jpg" alt="Tega Cay Animal Hospital Gallery Image" width={1000} height={1000} />
          <Image src="https://tcah-v2-images.s3.us-east-1.amazonaws.com/5149270517_21bbd8cb71_o.jpg" alt="Tega Cay Animal Hospital Gallery Image" width={1000} height={1000} />
          <Image src="https://tcah-v2-images.s3.us-east-1.amazonaws.com/4168100582_8fb64a7c8b_o.jpg" alt="Tega Cay Animal Hospital Gallery Image" width={1000} height={1000} />
          <Image src="https://tcah-v2-images.s3.us-east-1.amazonaws.com/4168127918_f0b00b7951_o.jpg" alt="Tega Cay Animal Hospital Gallery Image" width={1000} height={1000} />
          <Image src="https://tcah-v2-images.s3.us-east-1.amazonaws.com/4179004555_d75f6672b4_o.jpg" alt="Tega Cay Animal Hospital Gallery Image" width={1000} height={1000} />
          <Image src="https://tcah-v2-images.s3.us-east-1.amazonaws.com/4179019159_68ffc1cb05_o.jpg" alt="Tega Cay Animal Hospital Gallery Image" width={1000} height={1000} />
          <Image src="https://tcah-v2-images.s3.us-east-1.amazonaws.com/4179017449_0812658b86_o.jpg" alt="Tega Cay Animal Hospital Gallery Image" width={1000} height={1000} />
          <Image src="https://tcah-v2-images.s3.us-east-1.amazonaws.com/4179020101_f5070cf846_o.jpg" alt="Tega Cay Animal Hospital Gallery Image" width={1000} height={1000} />
          <Image src="https://tcah-v2-images.s3.us-east-1.amazonaws.com/4179764206_621953d41c_o.jpg" alt="Tega Cay Animal Hospital Gallery Image" width={1000} height={1000} />
          <Image src="https://tcah-v2-images.s3.us-east-1.amazonaws.com/4179766410_5b7fe89b35_o.jpg" alt="Tega Cay Animal Hospital Gallery Image" width={1000} height={1000} />
          <Image src="https://tcah-v2-images.s3.us-east-1.amazonaws.com/4179769294_5598c154cf_o.jpg" alt="Tega Cay Animal Hospital Gallery Image" width={1000} height={1000} />
          <Image src="https://tcah-v2-images.s3.us-east-1.amazonaws.com/4179776462_ee383b2ea7_o.jpg" alt="Tega Cay Animal Hospital Gallery Image" width={1000} height={1000} />
          <Image src="https://tcah-v2-images.s3.us-east-1.amazonaws.com/4179784274_b1305b6516_o.jpg" alt="Tega Cay Animal Hospital Gallery Image" width={1000} height={1000} />
          <Image src="https://tcah-v2-images.s3.us-east-1.amazonaws.com/4179777290_84462eee93_o.jpg" alt="Tega Cay Animal Hospital Gallery Image" width={1000} height={1000} />
          <Image src="https://tcah-v2-images.s3.us-east-1.amazonaws.com/4179781456_9fc221c32f_o.jpg" alt="Tega Cay Animal Hospital Gallery Image" width={1000} height={1000} />
          <Image src="https://tcah-v2-images.s3.us-east-1.amazonaws.com/4200611652_c1c42218a9_o.jpg" alt="Tega Cay Animal Hospital Gallery Image" width={1000} height={1000} />
          <Image src="https://tcah-v2-images.s3.us-east-1.amazonaws.com/4963623781_5dd6ae1f1a_o.jpg" alt="Tega Cay Animal Hospital Gallery Image" width={1000} height={1000} />
          <Image src="https://tcah-v2-images.s3.us-east-1.amazonaws.com/4964224446_4e468503c4_o.jpg" alt="Tega Cay Animal Hospital Gallery Image" width={1000} height={1000} />
          <Image src="https://tcah-v2-images.s3.us-east-1.amazonaws.com/5004809505_ed9e630b55_o.jpg" alt="Tega Cay Animal Hospital Gallery Image" width={1000} height={1000} />
          <Image src="https://tcah-v2-images.s3.us-east-1.amazonaws.com/5005421938_d8cca30865_o.jpg" alt="Tega Cay Animal Hospital Gallery Image" width={1000} height={1000} />
          <Image src="https://tcah-v2-images.s3.us-east-1.amazonaws.com/5172809794_f034df2918_o.jpg" alt="Tega Cay Animal Hospital Gallery Image" width={1000} height={1000} />
          <Image src="https://tcah-v2-images.s3.us-east-1.amazonaws.com/6396960639_8bc3773c19_o.jpg" alt="Tega Cay Animal Hospital Gallery Image" width={1000} height={1000} />
          <Image src="https://tcah-v2-images.s3.us-east-1.amazonaws.com/6405448953_610472021c_o.jpg" alt="Tega Cay Animal Hospital Gallery Image" width={1000} height={1000} />
          <Image src="https://tcah-v2-images.s3.us-east-1.amazonaws.com/6411248101_cfe6569905_o.jpg" alt="Tega Cay Animal Hospital Gallery Image" width={1000} height={1000} />
          <Image src="https://tcah-v2-images.s3.us-east-1.amazonaws.com/6415204765_3c90261f25_o.jpg" alt="Tega Cay Animal Hospital Gallery Image" width={1000} height={1000} />
          <Image src="https://tcah-v2-images.s3.us-east-1.amazonaws.com/4179010913_f11f6df2ae_o.jpg" alt="Tega Cay Animal Hospital Gallery Image" width={1000} height={1000} />
          <Image src="https://tcah-v2-images.s3.us-east-1.amazonaws.com/4179770592_d5d9c04fa3_o.jpg" alt="Tega Cay Animal Hospital Gallery Image" width={1000} height={1000} />
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-primary p-4">
          <div className="grid grid-cols-2 items-center">
            <div>
              <div className="flex gap-4 mb-4">
                <Image src="https://tcah-v2-images.s3.us-east-1.amazonaws.com/tcah-logo-white.svg" alt="Tega Cay Animal Hospital Logo" width={40} height={40} />
                <h1 className="text-3xl font-bold text-white">Tega Cay Animal Hospital</h1>
              </div>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <MapPin className="h-6 w-6 text-white" />
                  <p className="text-white">2152 Gold Hill Rd, Fort Mill, SC 29708</p>
                </div>
                <div className="flex gap-4">
                  <Phone className="h-6 w-6 text-white" />
                  <p className="text-white">(803) 548-2590</p>
                </div>
                <div className="flex gap-4">
                  <Mail className="h-6 w-6 text-white" />
                  <p className="text-white">info@tcah.com</p>
                </div>
                <div className="flex gap-4">
                  <Clock className="h-6 w-6 text-white" />
                  <p className="text-white">Mon-Thu: 7 AM - 6 PM</p>
                  <p className="text-white">Fri: 7 AM - 12 PM</p>
                </div>
              </div>
            </div>
            <div>
            <iframe className="w-full h-[400px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4069.8746303847415!2d-81.0074205!3d35.0540817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88568fe0948ff4e3%3A0xb6ade41dd1c6f0c9!2sTega%20Cay%20Veterinarian!5e1!3m2!1sen!2sus!4v1740249585325!5m2!1sen!2sus" width="600" height="450" loading="lazy"></iframe>
          </div>
        </div>
        <div>
          <p className="text-white text-center mt-4">© {new Date().getFullYear()} Tega Cay Animal Hospital</p>
        </div>
      </footer>
    </main>
  );
}