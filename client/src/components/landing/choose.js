import React from "react";
import { FiHome, FiShield, FiDollarSign, FiClock, FiAward, FiPackage, FiLayers, FiUsers } from "react-icons/fi";

const Choose = () => {
  return (
    <div className="p-4">
      <div className="small-space" />
      <h2 className="md:text-6xl sm:text-4xl text-3xl mb-4">
      Why choose 17 Columns <span style={{ color: "#3f97d2" }}>to build / Construct your Home?</span>
      </h2>
      <div className="small-sub-space" />
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <Card
          title="Uncompromising Architectural Designs"
          subtitle="Innovative and reliable"
          href="#"
          Icon={FiHome}
        />
        <Card
          title="No Price Escalation Guarantee"
          subtitle="Fixed pricing"
          href="#"
          Icon={FiShield}
        />
        <Card
          title="Money Safety Guarantee"
          subtitle="Secure payments"
          href="#"
          Icon={FiDollarSign}
        />
        <Card
          title="No Outsourcing"
          subtitle="Complete in-house implementation"
          href="#"
          Icon={FiUsers}
        />
        <Card
          title="On Time Delivery"
          subtitle="If not, we will pay Penalty"
          href="#"
          Icon={FiClock}
        />
        <Card
          title="Industry Top Brands"
          subtitle="Best quality products"
          href="#"
          Icon={FiAward}
        />
        <Card
          title="All Inclusive Pricing"
          subtitle="No hidden charges"
          href="#"
          Icon={FiPackage}
        />
        <Card
          title="All Services Under Same Roof"
          subtitle="Complete solutions"
          href="#"
          Icon={FiLayers}
        />
      </div>
    </div>
  );
};

const Card = ({ title, subtitle, Icon, href }) => {
  return (
    <a
      href={href}
      className="w-full p-4 rounded border-[1px] border-slate-300 relative overflow-hidden group bg-white"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />

      <Icon className="absolute z-10 -top-12 -right-12 text-9xl text-slate-100 group-hover:text-violet-400 group-hover:rotate-12 transition-transform duration-300" />
      <Icon className="mb-2 text-2xl text-violet-600 group-hover:text-white transition-colors relative z-10 duration-300" />
      <h3 className="font-medium text-lg text-slate-950 group-hover:text-white relative z-10 duration-300">
        {title}
      </h3>
      <p className="text-slate-400 group-hover:text-violet-200 relative z-10 duration-300">
        {subtitle}
      </p>
    </a>
  );
};

export default Choose;
