import Layout from "../components/layout/Layout";
import SubHeader from "../components/SubHeader/SubHeader";
import BookingSlot from "../components/DateSlot/BookingSlot";
import PopularService from "../components/PopularService/PopularService";

function HomePage(props) {
  return (
    <>
      <Layout>
        <SubHeader />
        <BookingSlot />
        <PopularService />
      </Layout>
    </>
  );
}

export default HomePage;
