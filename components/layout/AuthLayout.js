import React from "react";
import Link from "next/link";

const AuthLayout = ({ children }) => {
  return (
    <div className="px-8 md:px-24 py-7 min-h-screen">
      <section className="header">
        <Link href="/">
          <img
            src="/assets/logo.svg"
            className="w-28 object-cover cursor-pointer"
          />
        </Link>
      </section>
      {children}
    </div>
  );
};

export default AuthLayout;
