import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Layout } from "./components/Layout";
import { Angebot } from "./sections/Angebot";
import { Hero } from "./sections/Hero";
import { Kontakt } from "./sections/Kontakt";
import { Praxis } from "./sections/Praxis";
import { Rechtliches } from "./sections/Rechtliches";
import { Team } from "./sections/Team";

export default function App() {
  return (
    <Layout>
      <Header />
      <main id="main-content">
        <Hero />
        <Angebot />
        <Team />
        <Praxis />
        <Kontakt />
        <Rechtliches />
      </main>
      <Footer />
    </Layout>
  );
}
