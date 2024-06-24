import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import AchivementCard from "@/components/ui/achivement_cards";
import { achivementData } from "@/data/achivement_data";
import React from "react";

const Home = () => {
  return (
    <>
      <main className="bg-gray-50 h-full min-h-screen">
        <Navbar />
        <Sidebar />

        <section className="ml-[20%] w-[80] py-24 p-10">
          <h3 className="text-secondary text-2xl font-semibold font-primary">
            Users
          </h3>

          <div className="mt-8">
            <div className="grid grid-cols-4 gap-7">
              {achivementData.map((data, index) => {
                const { amount, icon, title } = data;
                return (
                  <AchivementCard
                    key={index}
                    amount={amount}
                    icon={icon}
                    title={title}
                  />
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
