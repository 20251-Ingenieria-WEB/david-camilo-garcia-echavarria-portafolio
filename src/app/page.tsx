import Hero from '../components/organisms/Hero';
import MainSidebar from '@/components/organisms/sidebars/MainSidebar';
import SocialSidebar from '@/components/organisms/sidebars/SocialSidebar';
import KnowledgeSection from '@/components/organisms/KnowledgeSection';
import StudiesSection from '@/components/organisms/StudiesSection';
import PortfolioSection from '@/components/organisms/ProtfolioSection';
import Dialog from '@/components/molecules/Dialog';
import Footer from '@/components/molecules/Footer';

const HomePage = () => {
  return (
    <main className="flex flex-col min-h-full md:flex-row md:gap-10">
      <MainSidebar />
      <section className="flex-1 min-w-0">
        <Hero />
        <KnowledgeSection />
        <StudiesSection />
        <PortfolioSection />
        <Footer />
      </section>
      <SocialSidebar />
    </main>
  );
};

export default HomePage;
