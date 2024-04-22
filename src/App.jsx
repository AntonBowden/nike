import Nav from "./components/Nav";
import {
  Hero,
  PopularProducts,
  SuperQuality,
  Services,
  SpecialOffer,
  Subscribe,
  CustomerReviews,
  Footer,
} from "./sections";

const App = () => (
  <main className="relative">
    <Nav />
    <section className="xl:padding-l wide:padding-r padding-b">
      <Hero />
    </section>
    <section className="padding">
      <PopularProducts />
    </section>
    <section className="padding">
      <SuperQuality />
    </section>
    <section className="padding-x py-10">
      <Services />
    </section>
    <section className="padding">
      <SpecialOffer />
    </section>
    <section className="bg-blue-200 padding">
      <CustomerReviews />
    </section>
    <section className="padding-x sm:py-32 w-full">
      <Subscribe />
    </section>
    <section className="padding-x padding-t pb-8 bg-black ">
      <Footer />
    </section>
  </main>
);

export default App;
