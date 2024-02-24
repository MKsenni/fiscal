import Footer from './components/footer';
import Main from './components/main';
import Packages from './components/packages/packages';
import Promo from './components/promo';
import Choose from './components/why-choose-us/choose';

export default function Home() {
  return (
    <main>
      <Main />
      <Packages />
      <Choose />
      <Promo />
      <Footer />
    </main>
  );
}
