import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { Link } from "react-router";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const Hero = () => {
  const slides = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=1600",
      title: "Find Your Dream Luxury Villa",
      description:
        "Discover exclusive properties in the most sought-after locations with HomeNest.",
      cta: "Explore Properties",
      link: "/all-properties",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1600",
      title: "Modern Apartments for Rent",
      description:
        "Experience urban living at its finest with our curated list of city center apartments.",
      cta: "View Rentals",
      link: "/all-properties",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1600",
      title: "Invest in Prime Real Estate",
      description:
        "Secure your future with high-yield commercial and residential investments.",
      cta: "Start Investing",
      link: "/all-properties",
    },
  ];

  return (
    <section className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        className="h-full w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full w-full">
              {/* Background Image with Overlay */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-5000 scale-105"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-black/50 dark:bg-black/60" />
              </div>

              {/* Content Container */}
              <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-start text-white">
                <div className="max-w-2xl animate-fadeIn">
                  <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-lg">
                    {slide.description}
                  </p>
                  <Link
                    to={slide.link}
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-all transform hover:scale-105 shadow-xl"
                  >
                    {slide.cta}
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Visual hint to the next section (Scroll Down Arrow) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden md:block">
        <div className="flex flex-col items-center animate-bounce opacity-70">
          <span className="text-xs text-white uppercase tracking-widest mb-2 font-medium">
            Scroll Down
          </span>
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
