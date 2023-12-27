import Image from "next/image";
import React from "react";
import logo from "/public/assets/images/admin/admin_logo.svg";

const AdminHeader = () => {
  return (
    <div className="w-full bg-white ml-[166px] mt-[28px] mb-[26px]">
      <Image src={logo} alt="admin_logo" height={26} />
    </div>
  );
};

export default AdminHeader;
