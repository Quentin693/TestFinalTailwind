import Image from "next/image";

interface Service {
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  imageAlt: string;
}

const services: Service[] = [
  {
    title: "Mobile App",
    subtitle: "Design",
    description: "We help your business create mobile apps that are not only attractive, but also functional.",
    image: "/TikiTest.png",
    imageAlt: "Mobile App Design"
  },
  {
    title: "Website",
    subtitle: "Design",
    description: "We create websites that are responsive, modern and easy to navigate, helping your business look professional and reach your audience effectively.",
    image: "/1.PNG",
    imageAlt: "Website Design"
  },
  {
    title: "Development",
    subtitle: "",
    description: "We use the latest technology to ensure the products we make are not only efficient, but can also grow with your business needs.",
    image: "/TikiTest.png",
    imageAlt: "Development"
  }
];

export default function ServicesSection() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-24 px-8">
      <div className="max-w-7xl mx-auto space-y-32">
        {services.map((service, index) => (
          <div
            key={index}
            className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center"
          >
            {/* Title - Left */}
            <div className="lg:col-span-1">
              <h2 className="text-5xl md:text-6xl font-bold text-black leading-tight">
                {service.title}
                {service.subtitle && (
                  <>
                    <br />
                    {service.subtitle}
                  </>
                )}
              </h2>
            </div>

            {/* Image - Center */}
            <div className="lg:col-span-1 flex justify-center">
              <div className="relative w-64 h-64 bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                <Image 
                  src={service.image} 
                  alt={service.imageAlt} 
                  fill 
                  className="object-cover"
                />
              </div>
            </div>

            {/* Description - Right */}
            <div className="lg:col-span-1">
              <p className="text-gray-400 text-lg leading-relaxed">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

