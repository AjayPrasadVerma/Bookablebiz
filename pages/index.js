import Layout from "../components/layout/Layout";
import SubHeader from "../components/SubHeader/SubHeader";
import BookingSlot from "../components/DateSlot/BookingSlot";

function HomePage(props) {
  return (
    <>
      <Layout>
        <SubHeader />
        <BookingSlot />
      </Layout>
    </>
  );
}

export default HomePage;
