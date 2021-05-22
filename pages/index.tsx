import {
  Header,
  Landing,
  Services,
  Brands,
  ACBanner,
  Components,
  WhyUs,
  Map,
  PhotoGallery,
  Owner,
  FooterCards,
  Footer,
  Phone,
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
        <ACBanner />
        <WhyUs />
        <PhotoGallery />
        <Map />
        <Owner />
        <FooterCards />
      </main>

      <Footer />
      <Phone />
    </>
  );
}
