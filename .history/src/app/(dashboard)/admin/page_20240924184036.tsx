import UserCard from "@/components/UserCard";
import React from "react";

const AdminPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* LEFT */}
      <div className="w-full lg:w-2/3">
        {/* USER CARD */}
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="Builders" />
          <UserCard type="Founders" />
          <UserCard type="Co-Founders" />
          <UserCard type="Staff" />
        </div>
        {/* MIDDLE CHART */}
        <div className="flex gap-4 flex-col lg:flex-row">
          {/* COUNT CHART*/}
          <div className="w-full lg:w-1/3 h-[450px]"></div>
          {/* ATTENDANCE CHART */}
          <div className="w-full lg:w-">w</div>
        </div>
        {/* BOTTOM CHART */}
        <div className="">w</div>
      </div>
      {/* RIGHT */}
      <div className="w-full lg:w-1/3">r</div>
    </div>
  );
};

export default AdminPage;
