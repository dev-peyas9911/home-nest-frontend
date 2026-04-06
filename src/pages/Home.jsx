import React, { useEffect } from "react";
import Hero from "../components/Home/Hero";
import WhyChooseUs from "../components/Home/WhyChooseUs";
import Categories from "../components/Home/Categories";
import Highlights from "../components/Home/Highlights";
import Statistics from "../components/Home/Statistics";
import Testimonials from "../components/Home/Testimonials";
import Blogs from "../components/Home/Blogs";
import Newsletter from "../components/Home/Newsletter";
import FAQ from "../components/Home/FAQ";
import CTA from "../components/Home/CTA";
import FeaturedProperties from "../components/Home/FeaturedProperties";
// for annimation
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-out-quart", // Much smoother than 'linear'
      once: false,
      anchorPlacement: "top-bottom",
    });
  }, []);
  return (
    <main className="overflow-x-hidden bg-white dark:bg-gray-950">
      {/* 1. HERO - Instant Load for LCP */}
      <Hero />

      {/* 2. FEATURED - Reveal with a slight 'back' bounce */}
      <section data-aos="fade-up" data-aos-easing="ease-out-back">
        <FeaturedProperties />
      </section>

      {/* 3. WHY CHOOSE US - Sliding 'Reveal' from the side */}
      <section data-aos="fade-right" data-aos-delay="100">
        <WhyChooseUs />
      </section>

      {/* 4. CATEGORIES - 'Zoom-Out' (Unique & Modern) */}
      {/* This makes categories feel like they are coming from the screen toward the user */}
      <section data-aos="zoom-out-up" data-aos-duration="1500">
        <Categories />
      </section>

      {/* 5. Highlights - Flip X (Flips like a coin) */}
      <section data-aos="zoom-in" data-aos-delay="200">
        <Highlights />
      </section>

      {/* 5. STATISTICS - Flip X (Flips like a coin) */}
      <section data-aos="zoom-in" data-aos-delay="200">
        <Statistics />
      </section>

      {/* 6. TESTIMONIALS - Fade with a long duration for a 'dreamy' look */}
      <section data-aos="fade-up" data-aos-duration="2000">
        <Testimonials />
      </section>

      {/* 7. TESTIMONIALS - Fade with a long duration for a 'dreamy' look */}
      <section data-aos="fade-right" data-aos-duration="2000">
        <Blogs />
      </section>

      {/* 8. NEWSLETTER - Glassmorphism Slide */}
      <div data-aos="zoom-in-right" data-aos-offset="300">
        <Newsletter />
      </div>
      {/* 9. FAQ - Glassmorphism Slide */}
      <div data-aos="zoom-in-left" data-aos-offset="300">
        <FAQ />
      </div>

      {/* 10. CTA - The 'Pop' Finish */}
      <section data-aos="zoom-in" data-aos-duration="800">
        <CTA />
      </section>
    </main>
    // <div>
    //   {/* Hero section */}
    //   {/* <Hero></Hero> */}
    //   {/* Featured section */}
    //   {/* <FeaturedProperties></FeaturedProperties> */}
    //   {/* Why Choose Us secion */}
    //   {/* <WhyChooseUs></WhyChooseUs> */}
    //   {/* Categories section */}
    //   {/* <Categories></Categories> */}
    //   {/* Highlights section */}
    //   {/* <Highlights></Highlights> */}
    //   {/* Statistics section */}
    //   {/* <Statistics></Statistics> */}
    //   {/* Testimonials */}
    //   {/* <Testimonials></Testimonials> */}
    //   {/* Blogs */}
    //   {/* <Blogs></Blogs> */}
    //   {/* Newsletter */}
    //   {/* <Newsletter></Newsletter> */}
    //   {/* FAQ section */}
    //   {/* <FAQ></FAQ> */}
    //   {/* CTA section */}
    //   {/* <CTA></CTA> */}
    // </div>
  );
};

export default Home;
