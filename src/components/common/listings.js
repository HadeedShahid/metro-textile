// Listings.jsx
import React from "react";
import ListingCard from "./listingCard";

const Listings = ({ items }) => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {items.map((item, index) => (
        <ListingCard key={index} {...item} />
      ))}
    </section>
  );
};

export default Listings;
