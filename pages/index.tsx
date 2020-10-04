import {
  Header,
  Landing,
  Services,
  Brands,
  Components,
  WhyUs,
  Map,
  PhotoGallery,
  Owner,
  FooterCards,
  Footer,
} from "components";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Landing />
        <Services />
        <Brands />
        <Components />
        <WhyUs />
        <PhotoGallery />
        <Map />
        <Owner />
        <FooterCards />
      </main>

      <Footer />
    </>
  );
}
