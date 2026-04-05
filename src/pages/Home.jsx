import React from "react";
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

const Home = () => {
  return (
    <>
      {/* Hero section */}
      <Hero></Hero>
      {/* Featured section */}
      <FeaturedProperties></FeaturedProperties>
      {/* Why Choose Us secion */}
      <WhyChooseUs></WhyChooseUs>
      {/* Categories section */}
      <Categories></Categories>
      {/* Highlights section */}
      <Highlights></Highlights>
      {/* Statistics section */}
      <Statistics></Statistics>
      {/* Testimonials */}
      <Testimonials></Testimonials>
      {/* Blogs */}
      <Blogs></Blogs>
      {/* Newsletter */}
      <Newsletter></Newsletter>
      {/* FAQ section */}
      <FAQ></FAQ>
      {/* CTA section */}
      <CTA></CTA>
    </>
  );
};

export default Home;
