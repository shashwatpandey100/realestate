import Link from "next/link";
import React from "react";

const Team = () => {
  return (
    <section className="min-h-[calc(100vh-90px)] mb-[50px] w-full bg-white grid grid-cols-3 box-border relative">
      <section className="h-full w-full bg-[rgba(0,0,0,0.55)] absolute top-0 left-0 flex flex-col items-center justify-center gap-[22px]">
        <h3 className="text-[2.5em] font-[700] leading-[1]">Meet Our Team</h3>
        <p className="text-center">
          We are passionate about our work and its impact, and excited <br />{" "}
          about the humans who want to build the future of authentication with
          us. Our team is <br /> shaped by a set of hiring values.
        </p>
        <Link href='/team' className="px-[15px] py-[7px] rounded-[25px] border border-white flex gap-[15px] items-center justify-center cursor-pointer group hover:bg-white transition-all duration-300">
          <span className="bg-white group-hover:bg-black h-[10px] w-[10px] rounded-full transition-all duration-300"></span>
          <span className="group-hover:text-black transition-all duration-300">Our Team</span>
        </Link>
      </section>
      <div
        className="bg-cover"
        style={{
          backgroundImage:
            "url(https://assets-global.website-files.com/646652fdea80d7aa0127ae04/646c5cf96121b3c41c182dd3_Team%20Member%204.jpg)",
        }}
      ></div>
      <div
        className="bg-cover"
        style={{
          backgroundImage:
            "url(https://assets-global.website-files.com/646652fdea80d7aa0127ae04/646c5cf88db886ed541ffcb1_Team%20Member%203.jpg)",
        }}
      ></div>
      <div
        className="bg-cover"
        style={{
          backgroundImage:
            "url(https://assets-global.website-files.com/646652fdea80d7aa0127ae04/646c5cf8dd0ef57c213341eb_Team%20Member%205.jpg)",
        }}
      ></div>
      <div
        className="bg-cover"
        style={{
          backgroundImage:
            "url(https://assets-global.website-files.com/646652fdea80d7aa0127ae04/646c5cf95f4d5fd36eaf7e8f_Team%20Member%206.jpg)",
        }}
      ></div>
      <div
        className="bg-cover"
        style={{
          backgroundImage:
            "url(https://assets-global.website-files.com/646652fdea80d7aa0127ae04/646c5cf88db886ed541ffc86_Team%20Member%202.jpg)",
        }}
      ></div>
      <div
        className="bg-cover"
        style={{
          backgroundImage:
            "url(https://assets-global.website-files.com/646652fdea80d7aa0127ae04/646c5cf96121b3c41c182dd3_Team%20Member%204.jpg)",
        }}
      ></div>
    </section>
  );
};

export default Team;
