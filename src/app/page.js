import CoreProducts from "@/components/CoreProducts";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";
import TrustedProducts from "@/components/TrustedProducts";

export default function Home() {
  return (
    <>
      <CoreProducts />
      <TrustedProducts />
      <Cta />
      <Footer />
    </>
  );
}
