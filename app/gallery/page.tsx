import GalleryGrid from "@/components/GalleryGrid";
import { Camera, Video, Image } from "lucide-react";

export default function GalleryPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=2070"
            alt="Gallery Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/80" />
        </div>

        <div className="relative z-10 section-padding">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-center mb-6">
            Our Gallery
          </h1>
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto">
            Take a look inside our state-of-the-art facility and see our work in
            action.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="section-spacing">
        <div className="section-padding">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="glass-effect rounded-xl p-6 text-center">
              <Camera className="h-8 w-8 text-accent mx-auto mb-3" />
              <div className="text-2xl font-bold mb-1">500+</div>
              <div className="text-gray-400">Projects Completed</div>
            </div>

            <div className="glass-effect rounded-xl p-6 text-center">
              <Video className="h-8 w-8 text-accent mx-auto mb-3" />
              <div className="text-2xl font-bold mb-1">50+</div>
              <div className="text-gray-400">Video Tours</div>
            </div>

            <div className="glass-effect rounded-xl p-6 text-center">
              <Image className="h-8 w-8 text-accent mx-auto mb-3" />
              <div className="text-2xl font-bold mb-1">1000+</div>
              <div className="text-gray-400">Photos</div>
            </div>

            <div className="glass-effect rounded-xl p-6 text-center">
              <div className="h-8 w-8 mx-auto mb-3 flex items-center justify-center">
                <span className="text-2xl">🏆</span>
              </div>
              <div className="text-2xl font-bold mb-1">25+</div>
              <div className="text-gray-400">Awards Won</div>
            </div>
          </div>

          <GalleryGrid />
        </div>
      </section>

      {/* Video Section */}
      <section className="bg-secondary section-spacing">
        <div className="section-padding">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-8">
            Watch Our Workshop in Action
          </h2>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-heading font-semibold">
                Behind the Scenes
              </h3>
              <p className="text-gray-400">
                See our certified technicians at work using the latest
                diagnostic equipment and repair techniques. From engine
                overhauls to precision detailing, every service is performed
                with meticulous attention to detail. (Here this is a temp video
                embed from yt)
              </p>
              <ul className="space-y-3">
                {[
                  "State-of-the-art diagnostic equipment",
                  "Certified master technicians",
                  "Clean, organized workspace",
                  "Quality parts and materials",
                  "Detailed inspection process",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center space-x-3 text-gray-300"
                  >
                    <div className="h-2 w-2 bg-accent rounded-full" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative aspect-video rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-transparent" />
              <iframe
                src="https://www.youtube.com/embed/Qh9D-FegJw8?si=V0dDdpGlvABt6Ifc"
                title="AutoElite Workshop Tour"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
                style={{ border: 0 }}
              />
              {/* <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-accent hover:bg-accent/90 text-white p-4 rounded-full cursor-pointer transition-colors">
                  <svg
                    className="h-12 w-12"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
