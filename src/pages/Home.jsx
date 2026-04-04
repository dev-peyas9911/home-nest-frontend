import React from "react";
import Hero from "../components/Home/Hero";
import PropertyCard from "../components/PropertyCard.jsx/PropertyCard";
import WhyChooseUs from "../components/Home/WhyChooseUs";
import Categories from "../components/Home/Categories";
import Highlights from "../components/Home/Highlights";
import Statistics from "../components/Home/Statistics";
import Testimonials from "../components/Home/Testimonials";
import Blogs from "../components/Home/Blogs";
import Newsletter from "../components/Home/Newsletter";
import FAQ from "../components/Home/FAQ";
import CTA from "../components/Home/CTA";

const Home = () => {
  return (
    <>
      {/* Hero section */}
      <Hero></Hero>
      {/* Featured section */}
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {properties.map((property) => (
          <PropertyCard key={property._id} property={property} />
        ))}
      </div> */}
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
