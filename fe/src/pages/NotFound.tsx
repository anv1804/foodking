import Header from "@/components/layouts/clients/Header";
import Footer from '@/components/layouts/clients/Footer';
import Breadcrumb from '@/components/layouts/clients/Breadcrumb';
import NotFounds from '@/components/layouts/common/NotFound';
import MainBanner from "@/components/layouts/clients/MainBanner";

const NotFound = () => {
  return (
    <>
      <Header />
      {/* <Breadcrumb /> */}
      <NotFounds />
      <MainBanner />
      <Footer />
    </>

  )
}

export default NotFound