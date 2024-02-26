import Footer from './components/footer';
import Main from './components/main';
import Packages from './components/packages/packages';
import Promo from './components/promo';
import Services from './components/services';
import Choose from './components/why-choose-us/choose';

export default function Home() {
  return (
    <main>
      <Main />
      <Services />
      <Packages />
      <Choose />
      <Promo />
      <Footer />
    </main>
  );
}
