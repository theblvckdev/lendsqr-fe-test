import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import AchivementCard from "@/components/ui/achivement_cards";
import UserDataTable from "@/components/ui/user_data_table";
import { achivementData } from "@/data/achivement_data";
import React from "react";

const Home = () => {
  return (
    <>
      <main className="bg-gray-50 h-full min-h-screen">
        <Navbar />
        <Sidebar />

        <section className="xl:ml-[20%] lg:ml-[25%] xl:w-[80%] lg:w-[75%] xl:py-24 md:py-[100px] py-24 xl:p-10 md:p-5 p-3">
          <h3 className="text-secondary text-2xl font-semibold font-secondary">
            Users
          </h3>

          <div className="mt-5">
            <div className="grid md:grid-cols-4 grid-cols-2 xl:gap-7 md:gap-5 gap-3">
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

          <div className="mt-5">
            <UserDataTable />
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
