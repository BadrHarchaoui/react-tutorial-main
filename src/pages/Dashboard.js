import { FiLogIn } from "react-icons/fi";

import Header from "../components/Header";
import ReviewCard from "../components/ReviewCard";

const Dashboard = () => {
  return (
    <>
      <Header title="Feedback UI" icon={<FiLogIn />} />
      <main className="w-full flex flex-col justify-center items-center relative">
      <ReviewCard title="Come descriverebbe la sua esperienza?"/>
      </main>
    </>
  );
};

export default Dashboard;
